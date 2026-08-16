$files = Get-ChildItem -Filter *.html
foreach ($file in $files) {
    $content = [IO.File]::ReadAllText($file.FullName)
    
    # Remove Adsterra CSS link
    $content = $content -replace '(?s)<!--\s*Adsterra Ad Container Styles\s*-->\s*<link rel="stylesheet" href="ads\.css">\s*', ''
    
    # Remove Adsterra Social Bar comments
    $content = $content -replace '(?s)<!-- Adsterra Social Bar.*?-->\s*', ''
    
    # Remove Adsterra Banner comments
    $content = $content -replace '(?s)<!-- Adsterra[^\-]*-->\s*', ''
    
    # Remove Adsterra slots
    $content = $content -replace '(?s)<div\s+class="adsterra-slot[^>]*>.*?</div>\s*', ''
    
    # Remove Adsterra Banner Ad Loader comment
    $content = $content -replace '(?s)<!-- Adsterra Banner Ad Loader -->\s*', ''
    
    [IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
}
