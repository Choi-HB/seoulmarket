const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    if(dirPath.includes("node_modules")) return;
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(__dirname, function(filePath) {
  if (filePath.endsWith('.html')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // figure out prefix
    let prefix = '';
    const relativePath = path.relative(__dirname, filePath);
    const depth = relativePath.split(path.sep).length - 1;
    if (depth > 0) {
      prefix = '../'.repeat(depth);
    }
    
    const replacement = `<div class="footer-links" ${content.includes('style="margin-top: 20px; display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;"') ? 'style="margin-top: 20px; display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;"' : ''}>
                <a href="${prefix}stories.html" id="footer-stories">이야기</a>
                <a href="${prefix}play.html" id="footer-game">놀이</a>
                <a href="${prefix}memory.html" id="footer-transform">추억</a>
                <a href="${prefix}about.html" id="footer-about">소개</a>
                <a href="${prefix}contact.html" id="footer-contact">문의</a>
                <a href="${prefix}privacy.html" id="footer-privacy">개인정보처리방침</a>
                <a href="${prefix}terms.html" id="footer-terms">이용약관</a>
            </div>`;
            
    // we just replace the whole <div class="footer-links"...> ... </div>
    const regex = /<div class="footer-links"[^>]*>[\s\S]*?<\/div>/;
    if (regex.test(content)) {
      content = content.replace(regex, replacement);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});
