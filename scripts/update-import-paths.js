import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Map project IDs to their image file patterns
const projectImageMap = {
  'miami-beach-condo': ['miami-beach-', 'miamiBeach'],
  'high-alpine-ranch': ['alpine-ranch-', 'alpineRanch'],
  'syracuse-house': ['syracuse', 'syracuse'],
  'montana-condo': ['montana-', 'montana'],
  'hospitality-pool': ['pool-design-', 'poolDesign', 'pool-testimonial', 'poolTestimonial'],
  'southcoast-remodel-design-build': ['southcoast-', 'southcoast'],
  'carmel-valley-design-build': ['carmel-valley-new-', 'carmelValleyNew'],
  'north-florida-renovation': ['north-florida-', 'northFlorida', 'nfl-', 'nfl', 'vero-beach-cover', 'veroBeachCover'],
  'bahamas-abaco-development': ['abaco-luxe-boathouse-', 'abacoLuxeBoathouse'],
  'carmel-house-2': ['carmel-2-', 'carmel2'],
  'bigsur-mountain-remodel': ['bigsur-', 'bigsur'],
  'carmel-house-remdl-23': ['carmel-knolls-', 'carmelKnolls'],
  'coastal-hillside-restoration-2': ['coastal-restoration-', 'coastalRestoration'],
  'civil-engineering': ['civil-', 'civil'],
  'bahamas-beachfront-estate': ['beachfront-', 'beachfront'],
  'development': ['development-', 'development', 'links-', 'links', 'links-estate', 'linksEstate', 'site-map', 'siteMap'],
  'pacific-grove-design-build': ['pg-', 'pg'],
  'hillside-cleanup': ['cleanup-', 'cleanup', 'hillside-cleanup-', 'hillsideCleanup'],
  'laguna-grande-design-build': ['laguna-grande-', 'lagunaGrande'],
};

const projectsFile = path.join(__dirname, '../src/data/projects.ts');
let content = fs.readFileSync(projectsFile, 'utf8');

// Update imports for each project
Object.entries(projectImageMap).forEach(([projectId, patterns]) => {
  patterns.forEach(pattern => {
    // Match import statements like: import something from "@/assets/projects/pattern..."
    const importRegex = new RegExp(
      `(import\\s+\\w+\\s+from\\s+["']@/assets/projects/)(${pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^"']+["'])`,
      'g'
    );
    
    content = content.replace(importRegex, (match, prefix, suffix) => {
      // Extract the filename from the path
      const filename = suffix.replace(/["']/g, '');
      const newPath = `@/assets/projects/${projectId}/${filename}`;
      return `${prefix}"${newPath}"`;
    });
  });
});

fs.writeFileSync(projectsFile, content, 'utf8');
console.log('Import paths updated successfully!');

