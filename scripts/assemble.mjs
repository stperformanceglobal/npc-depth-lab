import fs from 'node:fs';
const html=fs.readFileSync('ui.html','utf8');
const data=JSON.parse(fs.readFileSync('seed.json','utf8'));
const backend=fs.readFileSync('server.js','utf8');
fs.mkdirSync('worker',{recursive:true});
fs.writeFileSync('worker/index.js','const HTML='+JSON.stringify(html)+';\nconst SEED='+JSON.stringify(data)+';\n'+backend);
fs.writeFileSync('ui-check.js',html.match(/<script>([\s\S]*?)<\/script>/)[1]);
console.log('Assembled Worker and UI verification input');
