import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

sidebar_toggle_html = '''
            <!-- Sidebar Language Toggle -->
            <div style="padding: 0 20px 16px 20px; display: flex; justify-content: center; border-bottom: 1px solid rgba(255,255,255,0.05); margin-bottom: 16px;">
                <button class="btn btn-secondary btn-sm lang-toggle-btn" id="desktopLangToggle" style="width: 100%; padding: 8px 14px; font-size: 13px; font-weight: 700; border-color: rgba(212, 175, 55, 0.4); color: var(--accent-gold); background: rgba(212, 175, 55, 0.05); border-radius: 8px; transition: all 0.2s;">
                    Bahasa Melayu
                </button>
            </div>
'''

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Step 1: Remove the old desktop language toggles
    
    # For index.html
    content = re.sub(
        r'\s*<!-- Desktop Top Language Switcher Bar -->.*?</div>\s*</div>',
        '', content, flags=re.DOTALL
    )
    
    # For guide and static pages
    # <button class="btn btn-secondary btn-sm lang-toggle-btn" id="mobileLangToggle" style="padding: 6px 14px; font-size: 12px; font-weight: 700; border-color: var(--border-color); color: var(--accent-gold);">\nBahasa Melayu\n</button>
    content = re.sub(
        r'\s*<button class="btn btn-secondary btn-sm lang-toggle-btn" id="mobileLangToggle" style="padding: 6px 14px; font-size: 12px; font-weight: 700; border-color: var\(--border-color\); color: var\(--accent-gold\);">\s*Bahasa Melayu\s*</button>',
        '', content, flags=re.DOTALL
    )

    # Step 2: Insert into sidebar
    # Find: <span class="brand-subtitle">Pro Max</span>\n            </div>
    # Or <div class="brand-section">...</div>
    if '<!-- Sidebar Language Toggle -->' not in content:
        content = re.sub(
            r'(<span class="brand-subtitle">Pro Max</span>\s*</div>)',
            r'\1\n' + sidebar_toggle_html,
            content
        )

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Processed {file}")
