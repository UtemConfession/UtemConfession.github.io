$content = Get-Content -Path .\index.html -Raw

$part1Split = "                <!-- Google AdSense Sidebar Multiplex Unit -->"
$part2Split = "                            <p class=""telegram-widget-desc"""

$index1 = $content.IndexOf($part1Split)
if ($index1 -eq -1) { Write-Host "Part 1 not found"; exit }
$part1 = $content.Substring(0, $index1)

$index2 = $content.IndexOf($part2Split)
if ($index2 -eq -1) { Write-Host "Part 2 not found"; exit }
$part2 = $content.Substring($index2)

$missing = @"
                <!-- Google AdSense Sidebar Multiplex Unit -->
                <div class="ad-slot ad-sidebar" id="adSidebar">
                    <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-1444529930367815"
                        data-ad-slot="7411190923" data-ad-format="autorelaxed" data-full-width-responsive="true"></ins>
                </div>

                <!-- Adsterra: Desktop Sidebar 160x600 Skyscraper -->
                <div class="adsterra-slot adsterra-slot--desktop-only adsterra-slot--sidebar" id="adSidebarAdsterra"
                    data-ad-key="5cee424ee6f58a566aa27ce1ba9aed8a" data-ad-width="160" data-ad-height="600"
                    data-ad-size="160x600">
                </div>
            </div>
        </aside>

        <!-- Main Dashboard View Panel -->
        <main class="main-content">


            <!-- TAB 1: CONFESSION BOARD (HOME TAB) -->
            <div class="tab-content active" id="confession-tab">

                <!-- Live Campus Weather Pill (Home Page Only) -->
                <div style="display: flex; justify-content: center; width: 100%; margin-bottom: 16px;">
                    <div id="campusWeatherPill"
                        style="display: inline-flex; align-items: center; gap: 10px; background: rgba(13, 21, 39, 0.85); border: 1px solid var(--border-color); padding: 10px 20px; border-radius: 30px; font-size: 14px; font-weight: 600; color: var(--text-primary); backdrop-filter: blur(10px); width: fit-content; max-width: 100%; box-sizing: border-box; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                        <span style="font-size: 18px;">⛅</span>
                        <span id="weatherText">Durian Tunggal / Ayer Keroh: 31°C Fair</span>
                        <span
                            style="background: rgba(16, 185, 129, 0.15); color: #10b981; padding: 4px 10px; border-radius: 12px; font-size: 12px; font-weight: 800; letter-spacing: 0.5px;">Live Weather</span>
                    </div>
                </div>

                <!-- Minimalist Telegram Channel Widget -->
                <div class="telegram-widget-card"
                    style="display: flex; align-items: center; justify-content: space-between; background: linear-gradient(135deg, rgba(42, 171, 238, 0.15) 0%, rgba(13, 21, 39, 0.95) 100%); border: 1px solid rgba(42, 171, 238, 0.35); border-radius: 16px; padding: 14px 20px; margin-bottom: 0px; gap: 10px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15); width: 100%; box-sizing: border-box;">
                    <div class="telegram-widget-left"
                        style="display: flex; align-items: center; gap: 10px; min-width: 0; flex: 1;">
                        <div class="telegram-icon-circle"
                            style="width: 42px; height: 42px; border-radius: 50%; background: #ffffff; display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 4px 12px rgba(42, 171, 238, 0.35); overflow: hidden; padding: 2px; box-sizing: border-box;">
                            <img src="UCPMLogo.png" alt="UCPM Logo"
                                style="width: 100%; height: 100%; object-fit: contain; border-radius: 50%;">
                        </div>
                        <div class="telegram-widget-info"
                            style="display: flex; flex-direction: column; gap: 2px; min-width: 0;">
                            <div class="telegram-widget-title"
                                style="font-size: 14px; font-weight: 700; color: #ffffff; line-height: 1.25;">
                                <span id="telegramWidgetTitleText">UTeM Confessions Pro Max</span>
                            </div>
"@

$newContent = $part1 + $missing + "`n" + $part2

Set-Content -Path .\index.html -Value $newContent -NoNewline
Write-Host "Success!"
