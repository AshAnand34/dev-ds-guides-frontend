import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const readmePath = path.join(process.cwd(), 'Guides', 'README.md');
const readmeContent = fs.readFileSync(readmePath, 'utf8');

// Extract the Highlights section
const highlightsMatch = readmeContent.match(/## Highlights([\s\S]*?)(## |$)/);
const highlightsMarkdown = highlightsMatch ? highlightsMatch[1].trim() : '';

const highlightsHtml = highlightsMarkdown
  ? remark().use(html).processSync(highlightsMarkdown).toString()
  : '<p>No highlights found.</p>';

export default function GuidesHome() {
  return (
    <div className="max-w-2xl mx-auto mt-16 text-center text-[var(--text-primary)]">
      <h1 className="text-3xl font-bold mb-6">Key Features</h1>
      <div className="prose prose-lg mx-auto" dangerouslySetInnerHTML={{ __html: highlightsHtml }} />
    </div>
  );
} 