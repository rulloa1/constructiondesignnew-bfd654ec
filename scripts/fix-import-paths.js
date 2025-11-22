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
  'hospitality-pool': ['pool-design-', 'pool-testimonial'],
  'southcoast-remodel-design-build': ['southcoast-'],
  'carmel-valley-design-build': ['carmel-valley-new-'],
  'north-florida-renovation': ['north-florida-', 'nfl-', 'vero-beach-cover'],
  'bahamas-abaco-development': ['abaco-luxe-boathouse-'],
  'carmel-house-2': ['carmel-2-'],
  'bigsur-mountain-remodel': ['bigsur-'],
  'carmel-house-remdl-23': ['carmel-knolls-'],
  'coastal-hillside-restoration-2': ['coastal-restoration-'],
  'civil-engineering': ['civil-'],
  'bahamas-beachfront-estate': ['beachfront-'],
  'development': ['development-', 'links-', 'links-estate', 'site-map'],
  'pacific-grove-design-build': ['pg-'],
  'hillside-cleanup': ['cleanup-', 'hillside-cleanup-'],
  'laguna-grande-design-build': ['laguna-grande-'],
};

const projectsFile = path.join(__dirname, '../src/data/projects.ts');
let content = fs.readFileSync(projectsFile, 'utf8');

// First, fix the malformed imports that have duplicate paths
content = content.replace(/@\/assets\/projects\/"@\/assets\/projects\/([^"]+)"/g, '@/assets/projects/$1"');

// Now update all remaining imports that still point to the root projects folder
Object.entries(projectImageMap).forEach(([projectId, patterns]) => {
  patterns.forEach(pattern => {
    // Match: import something from "@/assets/projects/pattern..."
    const regex = new RegExp(
      `(@/assets/projects/)(${pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^"']+)`,
      'g'
    );
    
    content = content.replace(regex, (match, prefix, filename) => {
      return `@/assets/projects/${projectId}/${filename}`;
    });
  });
});

fs.writeFileSync(projectsFile, content, 'utf8');
console.log('Import paths fixed successfully!');

