import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectsFile = path.join(__dirname, '../src/data/projects.ts');
let content = fs.readFileSync(projectsFile, 'utf8');

// Fix duplicate folder names: project-id/project-id/file -> project-id/file
const duplicateFolderRegex = /(@\/assets\/projects\/([^/]+))\/\2\//g;
content = content.replace(duplicateFolderRegex, '$1/');

fs.writeFileSync(projectsFile, content, 'utf8');
console.log('Fixed duplicate folder names!');

