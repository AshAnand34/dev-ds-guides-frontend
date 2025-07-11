import path from 'path';
import fs from 'fs';
import type { GuideNode } from '../components/Sidebar';

const GUIDES_DIR = path.join(process.cwd(), 'Guides');

function isMarkdownFile(filename: string) {
  return filename.endsWith('.md');
}

export function getGuidesTree(dir: string = GUIDES_DIR, baseUrl: string = '/guides'): GuideNode[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const nodes: GuideNode[] = [];

  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue; // skip hidden files/folders
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // Recursively get children
      const children = getGuidesTree(fullPath, `${baseUrl}/${entry.name}`);
      // If the directory contains a README.md, use it as the main node
      const readmePath = path.join(fullPath, 'README.md');
      if (fs.existsSync(readmePath)) {
        nodes.push({
          name: entry.name,
          path: `${baseUrl}/${entry.name}`,
          children,
        });
      } else if (children.length > 0) {
        // If no README.md, but has children, still include the folder
        nodes.push({
          name: entry.name,
          path: `${baseUrl}/${entry.name}`,
          children,
        });
      }
    } else if (isMarkdownFile(entry.name) && entry.name !== 'README.md') {
      // Add markdown files except README.md
      const nameWithoutExt = entry.name.replace(/\.md$/, '');
      nodes.push({
        name: entry.name,
        path: `${baseUrl}/${nameWithoutExt}`,
      });
    }
  }
  return nodes;
} 