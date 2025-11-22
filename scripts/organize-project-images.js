import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Map project IDs to their image file patterns
const projectImageMap = {
  'miami-beach-condo': ['miami-beach-'],
  'high-alpine-ranch': ['alpine-ranch-'],
  'syracuse-house': ['syracuse-'],
  'montana-condo': ['montana-'],
  'hospitality-pool': ['pool-design-', 'pool-testimonial.jpg'],
  'southcoast-remodel-design-build': ['southcoast-'],
  'carmel-valley-design-build': ['carmel-valley-new-'],
  'north-florida-renovation': ['north-florida-', 'nfl-', 'vero-beach-cover.jpeg'],
  'bahamas-abaco-development': ['abaco-luxe-boathouse-'],
  'carmel-house-2': ['carmel-2-'],
  'bigsur-mountain-remodel': ['bigsur-'],
  'carmel-house-remdl-23': ['carmel-knolls-'],
  'coastal-hillside-restoration-2': ['coastal-restoration-'],
  'civil-engineering': ['civil-'],
  'bahamas-beachfront-estate': ['beachfront-'],
  'development': ['development-', 'links-', 'links-estate', 'site-map.jpg'],
  'pacific-grove-design-build': ['pg-'],
  'hillside-cleanup': ['cleanup-', 'hillside-cleanup-'],
  'laguna-grande-design-build': ['laguna-grande-'],
};

const projectsDir = path.join(__dirname, '../src/assets/projects');

// Create folders and move images
Object.entries(projectImageMap).forEach(([projectId, patterns]) => {
  const projectFolder = path.join(projectsDir, projectId);
  
  // Create project folder if it doesn't exist
  if (!fs.existsSync(projectFolder)) {
    fs.mkdirSync(projectFolder, { recursive: true });
    console.log(`Created folder: ${projectId}`);
  }
  
  // Get all files in projects directory
  const files = fs.readdirSync(projectsDir);
  
  // Move matching files
  files.forEach(file => {
    if (fs.statSync(path.join(projectsDir, file)).isFile()) {
      const shouldMove = patterns.some(pattern => file.startsWith(pattern));
      
      if (shouldMove) {
        const sourcePath = path.join(projectsDir, file);
        const destPath = path.join(projectFolder, file);
        
        try {
          fs.renameSync(sourcePath, destPath);
          console.log(`Moved: ${file} -> ${projectId}/`);
        } catch (error) {
          console.error(`Error moving ${file}:`, error.message);
        }
      }
    }
  });
});

console.log('\nImage organization complete!');
console.log('Note: You will need to update import paths in src/data/projects.ts');

