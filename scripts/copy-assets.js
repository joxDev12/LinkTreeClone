const fs = require('fs');
const path = require('path');

const sourceDir = path.resolve(__dirname, '..', 'src', 'assets');
const outputDir = path.resolve(__dirname, '..', 'src', 'dist', 'assets');

if (!fs.existsSync(sourceDir)) {
  console.warn(`Cartella assets non trovata: ${sourceDir}`);
  process.exit(0);
}

fs.mkdirSync(outputDir, { recursive: true });
fs.cpSync(sourceDir, outputDir, { recursive: true });

console.log(`Assets copiati in: ${outputDir}`);
