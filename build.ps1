<#
.SYNOPSIS
    UCPM Automated Asset Synchronization & Minification Engine
.DESCRIPTION
    High-speed, zero-dependency asset compiler for UTeM Confession Pro Max.
    Minifies CSS (style.css -> style.min.css) and JavaScript (*.js -> *.min.js)
    while preserving UTF-8 integrity, string literals, and regex templates.
.PARAMETER Target
    Asset type to process: 'all' (default), 'css', or 'js'.
.PARAMETER File
    Specific file name to process (e.g., 'style.css', 'wifi.js').
.PARAMETER Force
    Rebuild and re-minify all assets regardless of file modification timestamps.
.PARAMETER Check
    Audit and report synchronization status without writing any changes.
.PARAMETER BumpCache
    Increment the Service Worker cache version (CACHE_NAME in sw.js) even if no files changed.
.PARAMETER NoBumpCache
    Prevent automatic cache version incrementing when files are updated.
.EXAMPLE
    .\build.ps1
    .\build.ps1 -Check
    .\build.ps1 -BumpCache
    .\build.ps1 -Target css
    .\build.ps1 -File script.js -Force
#>

[CmdletBinding()]
param(
    [ValidateSet('all', 'css', 'js')]
    [string]$Target = 'all',

    [string]$File = '',

    [switch]$Force,

    [switch]$Check,

    [switch]$BumpCache,

    [switch]$NoBumpCache
)

# Set console output encoding to UTF-8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$OutputEncoding = [System.Text.Encoding]::UTF8

# Embedded high-performance C# compiler engine
$cSharpCode = @'
using System;
using System.Text;
using System.Text.RegularExpressions;

public static class UCPMMinifier {
    public static string MinifyCss(string source) {
        if (string.IsNullOrEmpty(source)) return "";

        // 1. Remove comments
        string noComments = Regex.Replace(source, @"/\*[\s\S]*?\*/", "");

        StringBuilder sb = new StringBuilder(noComments.Length);
        int len = noComments.Length;
        int i = 0;
        bool inSingleQuote = false;
        bool inDoubleQuote = false;

        while (i < len) {
            char c = noComments[i];

            if (!inDoubleQuote && c == '\'' && (i == 0 || noComments[i - 1] != '\\')) {
                inSingleQuote = !inSingleQuote;
                sb.Append(c);
                i++;
                continue;
            }
            if (!inSingleQuote && c == '\"' && (i == 0 || noComments[i - 1] != '\\')) {
                inDoubleQuote = !inDoubleQuote;
                sb.Append(c);
                i++;
                continue;
            }

            if (inSingleQuote || inDoubleQuote) {
                sb.Append(c);
                i++;
                continue;
            }

            if (char.IsWhiteSpace(c)) {
                if (sb.Length > 0) {
                    char prev = sb[sb.Length - 1];
                    if (!char.IsWhiteSpace(prev) && !IsCssDelimiter(prev)) {
                        // Look ahead to next non-whitespace
                        int nextIdx = i + 1;
                        while (nextIdx < len && char.IsWhiteSpace(noComments[nextIdx])) nextIdx++;
                        if (nextIdx < len && !IsCssDelimiter(noComments[nextIdx])) {
                            sb.Append(' ');
                        }
                    }
                }
                i++;
                continue;
            }

            // Collapse redundant semicolons before closing brace
            if (c == ';' && i + 1 < len) {
                int lookAhead = i + 1;
                while (lookAhead < len && char.IsWhiteSpace(noComments[lookAhead])) lookAhead++;
                if (lookAhead < len && noComments[lookAhead] == '}') {
                    i++;
                    continue;
                }
            }

            sb.Append(c);
            i++;
        }

        return sb.ToString().Trim();
    }

    private static bool IsCssDelimiter(char c) {
        return c == '{' || c == '}' || c == ':' || c == ';' || c == ',' || c == '>' || c == '(' || c == ')';
    }

    public static string MinifyJs(string source) {
        if (string.IsNullOrEmpty(source)) return "";

        StringBuilder sb = new StringBuilder(source.Length);
        int len = source.Length;
        int i = 0;
        bool inSingleQuote = false;
        bool inDoubleQuote = false;
        bool inBacktick = false;

        while (i < len) {
            char c = source[i];
            char next = (i + 1 < len) ? source[i + 1] : '\0';

            // Escaped characters in strings
            if ((inSingleQuote || inDoubleQuote || inBacktick) && c == '\\' && i + 1 < len) {
                sb.Append(c);
                sb.Append(source[i + 1]);
                i += 2;
                continue;
            }

            // String boundary checks
            if (!inDoubleQuote && !inBacktick && c == '\'') {
                inSingleQuote = !inSingleQuote;
                sb.Append(c);
                i++;
                continue;
            }
            if (!inSingleQuote && !inBacktick && c == '\"') {
                inDoubleQuote = !inDoubleQuote;
                sb.Append(c);
                i++;
                continue;
            }
            if (!inSingleQuote && !inDoubleQuote && c == '`') {
                inBacktick = !inBacktick;
                sb.Append(c);
                i++;
                continue;
            }

            if (inSingleQuote || inDoubleQuote || inBacktick) {
                sb.Append(c);
                i++;
                continue;
            }

            // Line comment //
            if (c == '/' && next == '/') {
                if (i > 0 && (source[i - 1] == ':' || source[i - 1] == '\\')) {
                    sb.Append(c);
                    i++;
                    continue;
                }
                i += 2;
                while (i < len && source[i] != '\n' && source[i] != '\r') i++;
                continue;
            }

            // Block comment /* ... */
            if (c == '/' && next == '*') {
                i += 2;
                while (i < len - 1 && !(source[i] == '*' && source[i + 1] == '/')) i++;
                i += 2;
                continue;
            }

            // Whitespace handling outside strings
            if (char.IsWhiteSpace(c)) {
                if (c == '\r' || c == '\n') {
                    if (sb.Length > 0) {
                        char prev = sb[sb.Length - 1];
                        if (prev != '\n' && prev != ';' && prev != '{' && prev != '}') {
                            sb.Append('\n');
                        }
                    }
                } else {
                    if (sb.Length > 0) {
                        char prev = sb[sb.Length - 1];
                        if (IsIdentifierChar(prev)) {
                            int nextIdx = i + 1;
                            while (nextIdx < len && (source[nextIdx] == ' ' || source[nextIdx] == '\t')) nextIdx++;
                            if (nextIdx < len && IsIdentifierChar(source[nextIdx])) {
                                sb.Append(' ');
                            }
                        }
                    }
                }
                i++;
                continue;
            }

            sb.Append(c);
            i++;
        }

        return sb.ToString().Trim();
    }

    private static bool IsIdentifierChar(char c) {
        return char.IsLetterOrDigit(c) || c == '_' || c == '$';
    }
}
'@

# Add compiler type if not already loaded
if (-not ([System.Management.Automation.PSTypeName]'UCPMMinifier').Type) {
    Add-Type -TypeDefinition $cSharpCode -Language CSharp
}

$workspaceRoot = $PSScriptRoot
if (-not $workspaceRoot) { $workspaceRoot = Get-Location }

# Identify paired targets
$pairs = @()

# 1. CSS Target
if ($Target -eq 'all' -or $Target -eq 'css') {
    $styleCss = Join-Path $workspaceRoot "style.css"
    $styleMinCss = Join-Path $workspaceRoot "style.min.css"
    if (Test-Path $styleCss) {
        $pairs += [PSCustomObject]@{
            Type = "CSS"
            Source = $styleCss
            Minified = $styleMinCss
            SourceName = "style.css"
            MinName = "style.min.css"
        }
    }
}

# 2. JS Targets
if ($Target -eq 'all' -or $Target -eq 'js') {
    $excludeJs = @("sw.js", "components.js")
    $jsFiles = Get-ChildItem -Path $workspaceRoot -Filter "*.js" | Where-Object { 
        $_.Name -notmatch "\.min\.js$" -and $_.Name -notin $excludeJs 
    }
    foreach ($js in $jsFiles) {
        $minName = $js.Name.Replace(".js", ".min.js")
        $minPath = Join-Path $workspaceRoot $minName
        $pairs += [PSCustomObject]@{
            Type = "JS"
            Source = $js.FullName
            Minified = $minPath
            SourceName = $js.Name
            MinName = $minName
        }
    }
}

# Filter by specific file if requested
if ($File) {
    $pairs = $pairs | Where-Object { $_.SourceName -eq $File -or $_.MinName -eq $File }
    if ($pairs.Count -eq 0) {
        Write-Error "Specified file '$File' not found among paired assets."
        exit 1
    }
}

Write-Host ""
Write-Host "=========================================================================" -ForegroundColor Cyan
Write-Host "         UCPM AUTOMATED ASSET SYNCHRONIZATION & MINIFICATION             " -ForegroundColor Cyan
Write-Host "=========================================================================" -ForegroundColor Cyan
if ($Check) {
    Write-Host "Mode: AUDIT ONLY (-Check active, no files will be modified)`n" -ForegroundColor Yellow
} else {
    Write-Host "Mode: BUILD & SYNC`n" -ForegroundColor Green
}

$results = @()
$totalOrigBytes = 0
$totalMinBytes = 0
$updatedCount = 0
$upToDateCount = 0

foreach ($pair in $pairs) {
    $srcItem = Get-Item $pair.Source
    $minExists = Test-Path $pair.Minified
    
    $needsBuild = $Force -or (-not $minExists)
    if ($minExists -and -not $needsBuild) {
        $minItem = Get-Item $pair.Minified
        if ($srcItem.LastWriteTime -gt $minItem.LastWriteTime) {
            $needsBuild = $true
        }
    }

    $srcBytes = $srcItem.Length
    $totalOrigBytes += $srcBytes

    if ($needsBuild) {
        if ($Check) {
            $status = "OUT OF SYNC"
            $statusColor = "Yellow"
            $results += [PSCustomObject]@{
                Asset = $pair.SourceName
                Type = $pair.Type
                SourceSize = "{0:N1} KB" -f ($srcBytes / 1KB)
                MinSize = if ($minExists) { "{0:N1} KB" -f ((Get-Item $pair.Minified).Length / 1KB) } else { "Missing" }
                Savings = "-"
                Status = $status
            }
            continue
        }

        # Read source with UTF-8
        $rawContent = [System.IO.File]::ReadAllText($pair.Source, [System.Text.Encoding]::UTF8)

        $minContent = ""
        if ($pair.Type -eq "CSS") {
            $minContent = [UCPMMinifier]::MinifyCss($rawContent)
        } else {
            $minContent = [UCPMMinifier]::MinifyJs($rawContent)
        }

        # Write minified output with UTF-8 (no BOM)
        $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
        [System.IO.File]::WriteAllText($pair.Minified, $minContent, $utf8NoBom)

        $newMinBytes = (Get-Item $pair.Minified).Length
        $totalMinBytes += $newMinBytes
        $savedBytes = [Math]::Max(0, $srcBytes - $newMinBytes)
        $pctSaved = if ($srcBytes -gt 0) { ($savedBytes / $srcBytes) * 100 } else { 0 }

        $results += [PSCustomObject]@{
            Asset = $pair.SourceName
            Type = $pair.Type
            SourceSize = "{0:N1} KB" -f ($srcBytes / 1KB)
            MinSize = "{0:N1} KB" -f ($newMinBytes / 1KB)
            Savings = "{0:N1}%" -f $pctSaved
            Status = "SYNCHRONIZED"
        }
        $updatedCount++
    } else {
        $existingMinBytes = (Get-Item $pair.Minified).Length
        $totalMinBytes += $existingMinBytes
        $savedBytes = [Math]::Max(0, $srcBytes - $existingMinBytes)
        $pctSaved = if ($srcBytes -gt 0) { ($savedBytes / $srcBytes) * 100 } else { 0 }

        $results += [PSCustomObject]@{
            Asset = $pair.SourceName
            Type = $pair.Type
            SourceSize = "{0:N1} KB" -f ($srcBytes / 1KB)
            MinSize = "{0:N1} KB" -f ($existingMinBytes / 1KB)
            Savings = "{0:N1}%" -f $pctSaved
            Status = "UP TO DATE"
        }
        $upToDateCount++
    }
}

# Display results table
$results | Format-Table -AutoSize

Write-Host "-------------------------------------------------------------------------" -ForegroundColor Gray
if ($Check) {
    $outOfSync = ($results | Where-Object { $_.Status -eq "OUT OF SYNC" }).Count
    if ($outOfSync -gt 0) {
        Write-Host "STATUS: $outOfSync asset(s) are out of date. Run '.\build.ps1' to synchronize." -ForegroundColor Yellow
    } else {
        Write-Host "STATUS: 100% of minified assets are up-to-date and synchronized!" -ForegroundColor Green
    }
} else {
    $totalSaved = [Math]::Max(0, $totalOrigBytes - $totalMinBytes)
    $totalPct = if ($totalOrigBytes -gt 0) { ($totalSaved / $totalOrigBytes) * 100 } else { 0 }
    Write-Host ("SUMMARY: {0} updated, {1} already up to date." -f $updatedCount, $upToDateCount) -ForegroundColor Green
    Write-Host ("TOTAL SIZE: {0:N1} KB -> {1:N1} KB (Saved {2:N1} KB / {3:N1}%)" -f ($totalOrigBytes / 1KB), ($totalMinBytes / 1KB), ($totalSaved / 1KB), $totalPct) -ForegroundColor Cyan
}

# Service Worker Cache Integrity & Version Management
$swPath = Join-Path $workspaceRoot "sw.js"
if (Test-Path $swPath) {
    $swRaw = [System.IO.File]::ReadAllText($swPath, [System.Text.Encoding]::UTF8)
    
    # Check for untracked minified production assets in sw.js ASSETS_TO_CACHE
    $missingAssets = @()
    foreach ($pair in $pairs) {
        $minFileName = $pair.MinName
        if ($swRaw -notmatch [regex]::Escape($minFileName)) {
            $missingAssets += $minFileName
        }
    }
    if ($missingAssets.Count -gt 0) {
        Write-Host ""
        Write-Host ("[WARNING] Service Worker: {0} production asset(s) not found in sw.js ASSETS_TO_CACHE:" -f $missingAssets.Count) -ForegroundColor Yellow
        foreach ($ma in $missingAssets) {
            Write-Host ("   - {0}" -f $ma) -ForegroundColor Yellow
        }
    } else {
        Write-Host ""
        Write-Host "[OK] Service Worker: 100% of production minified assets are tracked in sw.js ASSETS_TO_CACHE." -ForegroundColor DarkCyan
    }

    # Automatic or Explicit Cache Bumping
    $shouldBump = (-not $Check) -and (-not $NoBumpCache) -and ($updatedCount -gt 0 -or $BumpCache)
    if ($shouldBump) {
        if ($swRaw -match 'const\s+CACHE_NAME\s*=\s*''ucpm-cache-v(\d+)'';') {
            $oldVer = [int]$matches[1]
            $newVer = $oldVer + 1
            $patternToReplace = 'const\s+CACHE_NAME\s*=\s*''ucpm-cache-v\d+'';'
            $replacementString = "const CACHE_NAME = 'ucpm-cache-v$newVer';"
            $newSw = [regex]::Replace($swRaw, $patternToReplace, $replacementString)
            $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
            [System.IO.File]::WriteAllText($swPath, $newSw, $utf8NoBom)
            Write-Host ("[CACHE BUMPED] sw.js CACHE_NAME incremented: 'ucpm-cache-v{0}' -> 'ucpm-cache-v{1}'" -f $oldVer, $newVer) -ForegroundColor Magenta
        } else {
            Write-Host "[WARNING] Could not automatically parse 'ucpm-cache-vXX' in sw.js" -ForegroundColor Yellow
        }
    } elseif ($Check) {
        if ($swRaw -match 'const\s+CACHE_NAME\s*=\s*''([^'']+)''') {
            Write-Host ("[INFO] Active Service Worker Cache: {0}" -f $matches[1]) -ForegroundColor DarkGray
        }
    }
}
Write-Host "=========================================================================`n" -ForegroundColor Cyan
