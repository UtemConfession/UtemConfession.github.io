$navItemReplacement = @"
                <a href="updates.html" class="nav-item" data-tab="updates-tab" style="text-decoration: none; color: inherit;">
                    <svg viewBox="0 0 24 24">
                        <path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 2.5-.98 4.77-2.71 6.47-3.5 3.5-9.15 3.5-12.65 0-3.5-3.5-3.5-9.15 0-12.65 3.5-3.5 9.15-3.5 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21-4.28-2.52V8h1.5z"/>
                    </svg>
                    Updates
                </a>
                <a href="guides.html" class="nav-item"
"@

$drawerItemReplacement = @"
                <a href="updates.html" class="drawer-item-btn" data-tab="updates-tab" style="text-decoration: none; color: inherit;">
                    <svg viewBox="0 0 24 24">
                        <path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 2.5-.98 4.77-2.71 6.47-3.5 3.5-9.15 3.5-12.65 0-3.5-3.5-3.5-9.15 0-12.65 3.5-3.5 9.15-3.5 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21-4.28-2.52V8h1.5z"/>
                    </svg>
                    <span>Updates</span>
                </a>
                <a href="guides.html" class="drawer-item-btn"
"@

Get-ChildItem -Filter *.html | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    
    # Skip if already patched
    if ($content -notmatch 'href="updates.html"') {
        $content = $content -replace '(?s)\s+<a href="guides\.html" class="nav-item"', $navItemReplacement
        $content = $content -replace '(?s)\s+<a href="guides\.html" class="drawer-item-btn"', $drawerItemReplacement
        Set-Content -Path $_.FullName -Value $content -NoNewline
        Write-Host "Patched $($_.Name)"
    } else {
        Write-Host "Skipped $($_.Name) (already contains updates.html)"
    }
}
