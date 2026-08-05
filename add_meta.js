const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    let newContent = content.replace(
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta name="google-site-verification" content="dwqgpqLYOpqd92hDyGq43MGexJ2DRGy8NZBVFKBzSeA" />'
    );
    if(content !== newContent) {
        fs.writeFileSync(f, newContent, 'utf8');
    }
});
console.log("Updated files.");
