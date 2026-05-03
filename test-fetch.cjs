const fs = require('fs');
const path = require('path');
const distPath = path.join(process.cwd(), 'dist', 'assets');
const files = fs.readdirSync(distPath).filter(f => f.endsWith('.js'));
for (const file of files) {
  const content = fs.readFileSync(path.join(distPath, file), 'utf8');
  const matches = content.match(/.{0,30}fetch.{0,30}=/g);
  if (matches) {
    for (const m of matches) {
      if (m.includes('fetch =') || m.includes('fetch=') || m.includes('.fetch') || m.includes('window.fetch') || m.includes('globalThis.fetch') || m.includes('global.fetch') || m.includes('["fetch"]') || m.includes('["fetch"]=')) {
         console.log(m.trim().substring(0, 100));
      }
    }
  }
}
