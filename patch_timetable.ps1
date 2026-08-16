$files = @("bus.html", "state-scholarship.html")

$newGridHtml = @"
                    <!-- M10A Departure Timetable Grid (Compact 2-column) -->
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 14px; margin-bottom: 16px;">
                        <!-- Melaka Sentral to UTeM -->
                        <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 12px; padding: 14px;">
                            <h4 style="font-size: 13px; font-weight: 800; color: var(--accent-gold); margin-bottom: 10px; display: flex; align-items: center; gap: 6px;">
                                🚌 From Melaka Sentral ➔ UTeM
                            </h4>
                            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; text-align: center;">
                                <div style="background: rgba(255,255,255,0.04); border: 1px solid var(--border-color); padding: 6px; border-radius: 6px; font-weight: 700; font-size: 12.5px; color: var(--accent-gold);">06:30</div>
                                <div style="background: rgba(255,255,255,0.04); border: 1px solid var(--border-color); padding: 6px; border-radius: 6px; font-weight: 700; font-size: 12.5px; color: var(--accent-gold);">08:30</div>
                                <div style="background: rgba(255,255,255,0.04); border: 1px solid var(--border-color); padding: 6px; border-radius: 6px; font-weight: 700; font-size: 12.5px; color: var(--accent-gold);">10:30</div>
                                <div style="background: rgba(255,255,255,0.04); border: 1px solid var(--border-color); padding: 6px; border-radius: 6px; font-weight: 700; font-size: 12.5px; color: var(--accent-gold);">12:30</div>
                                <div style="background: rgba(255,255,255,0.04); border: 1px solid var(--border-color); padding: 6px; border-radius: 6px; font-weight: 700; font-size: 12.5px; color: var(--accent-gold);">14:30</div>
                                <div style="background: rgba(255,255,255,0.04); border: 1px solid var(--border-color); padding: 6px; border-radius: 6px; font-weight: 700; font-size: 12.5px; color: var(--accent-gold);">16:30</div>
                                <div style="background: rgba(255,255,255,0.04); border: 1px solid var(--border-color); padding: 6px; border-radius: 6px; font-weight: 700; font-size: 12.5px; color: var(--accent-gold);">18:30</div>
                                <div style="background: rgba(255,255,255,0.04); border: 1px solid var(--border-color); padding: 6px; border-radius: 6px; font-weight: 700; font-size: 12.5px; color: var(--accent-gold);">20:30</div>
                            </div>
                        </div>

                        <!-- UTeM to Melaka Sentral -->
                        <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 12px; padding: 14px;">
                            <h4 style="font-size: 13px; font-weight: 800; color: #e74e9f; margin-bottom: 10px; display: flex; align-items: center; gap: 6px;">
                                🚌 From UTeM / Zoo Melaka ➔ Melaka Sentral
                            </h4>
                            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; text-align: center;">
                                <div style="background: rgba(255,255,255,0.04); border: 1px solid var(--border-color); padding: 6px; border-radius: 6px; font-weight: 700; font-size: 12.5px; color: #e74e9f;">07:30</div>
                                <div style="background: rgba(255,255,255,0.04); border: 1px solid var(--border-color); padding: 6px; border-radius: 6px; font-weight: 700; font-size: 12.5px; color: #e74e9f;">09:30</div>
                                <div style="background: rgba(255,255,255,0.04); border: 1px solid var(--border-color); padding: 6px; border-radius: 6px; font-weight: 700; font-size: 12.5px; color: #e74e9f;">11:30</div>
                                <div style="background: rgba(255,255,255,0.04); border: 1px solid var(--border-color); padding: 6px; border-radius: 6px; font-weight: 700; font-size: 12.5px; color: #e74e9f;">13:30</div>
                                <div style="background: rgba(255,255,255,0.04); border: 1px solid var(--border-color); padding: 6px; border-radius: 6px; font-weight: 700; font-size: 12.5px; color: #e74e9f;">15:30</div>
                                <div style="background: rgba(255,255,255,0.04); border: 1px solid var(--border-color); padding: 6px; border-radius: 6px; font-weight: 700; font-size: 12.5px; color: #e74e9f;">17:30</div>
                                <div style="background: rgba(255,255,255,0.04); border: 1px solid var(--border-color); padding: 6px; border-radius: 6px; font-weight: 700; font-size: 12.5px; color: #e74e9f;">19:30</div>
                            </div>
                        </div>
                    </div>
"@

foreach ($file in $files) {
    $content = Get-Content $file -Raw
    $regex = '(?s)<!-- M10A Departure Timetable Grid \(Compact 2-column\) -->.*?</div>\s*</div>\s*</div>'
    $content = [System.Text.RegularExpressions.Regex]::Replace($content, $regex, $newGridHtml)
    Set-Content -Path $file -Value $content -NoNewline
    Write-Host "Updated grid in $file"
}
