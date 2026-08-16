$htmlFiles = Get-ChildItem -Path . -Filter *.html

foreach ($file in $htmlFiles) {
    $content = Get-Content -Path $file.FullName -Raw

    $modified = $false

    # 1. Add vignette.js to ALL sites if missing
    if ($content -notmatch 'vignette\.js') {
        $content = $content -replace '</head>', "    <script src=`"vignette.js`"></script>`n</head>"
        $modified = $true
        Write-Host "Added vignette.js to $($file.Name)"
    }

    # 2. Add popunder.js to specific sites if missing
    $popunderTargets = @(
        'guides.html', 
        'about.html', 
        'rules.html', 
        'privacy.html', 
        'terms.html',
        'guide-campus-bus-transit.html',
        'guide-freshman-survival.html',
        'guide-gpa-calculator.html',
        'guide-past-year-exams.html'
    )

    if ($popunderTargets -contains $file.Name) {
        if ($content -notmatch 'popunder\.js') {
            $content = $content -replace '</head>', "    <script src=`"popunder.js`"></script>`n</head>"
            $modified = $true
            Write-Host "Added popunder.js to $($file.Name)"
        }
    }

    if ($modified) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
    }
}
Write-Host "Done!"
