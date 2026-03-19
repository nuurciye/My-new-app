import AdmZip from 'adm-zip';
import fs from 'fs';
import path from 'path';

const zip = new AdmZip();

const filesToInclude = [
  'index.html',
  'package.json',
  'tsconfig.json',
  'vite.config.ts',
  '.env.example',
  '.gitignore',
  'metadata.json'
];

const dirsToInclude = [
  'src',
  'public'
];

// Add individual files
for (const file of filesToInclude) {
  if (fs.existsSync(file)) {
    zip.addLocalFile(file);
  }
}

// Add directories
for (const dir of dirsToInclude) {
  if (fs.existsSync(dir)) {
    zip.addLocalFolder(dir, dir);
  }
}

// Write the zip file to the public directory so it can be downloaded
zip.writeZip('./public/source-code.zip');
console.log('Successfully created source-code.zip in the public folder!');
