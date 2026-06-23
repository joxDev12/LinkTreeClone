const fs = require('fs');
const path = require('path');

const sourceAssetsDir = path.resolve(__dirname, '..', 'src', 'assets');
const outputAssetsDir = path.resolve(__dirname, '..', 'src', 'dist', 'assets');

const bootstrapSource = path.resolve(
  __dirname,
  '..',
  'node_modules',
  'bootstrap',
  'dist',
  'js',
  'bootstrap.bundle.min.js'
);
const bootstrapOutput = path.resolve(
  __dirname,
  '..',
  'src',
  'dist',
  'node_modules',
  'bootstrap',
  'dist',
  'js',
  'bootstrap.min.js'
);

if (fs.existsSync(sourceAssetsDir)) {
  fs.mkdirSync(outputAssetsDir, { recursive: true });
  fs.cpSync(sourceAssetsDir, outputAssetsDir, { recursive: true });
  console.log(`Assets copiati in: ${outputAssetsDir}`);
} else {
  console.warn(`Cartella assets non trovata: ${sourceAssetsDir}`);
}

if (fs.existsSync(bootstrapSource)) {
  fs.mkdirSync(path.dirname(bootstrapOutput), { recursive: true });
  fs.copyFileSync(bootstrapSource, bootstrapOutput);
  console.log(`Bootstrap bundle copiato in: ${bootstrapOutput}`);
} else {
  console.warn(`Bootstrap bundle non trovato: ${bootstrapSource}`);
}
