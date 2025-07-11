import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import rehypeHighlight from 'rehype-highlight';
import { notFound } from 'next/navigation';
import styles from './page.module.css';

export default async function GuidePage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  let filePath = path.join(process.cwd(), 'Guides', ...slug) + '.md';

  // If the file does not exist, check if it's a directory and use README.md
  if (!fs.existsSync(filePath)) {
    const dirPath = path.join(process.cwd(), 'Guides', ...slug);
    const readmePath = path.join(dirPath, 'README.md');
    if (fs.existsSync(readmePath)) {
      filePath = readmePath;
    } else {
      notFound();
    }
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContent);
  const processedContent = await remark()
    .use(html)
    .use(rehypeHighlight)
    .process(content);
  const contentHtml = processedContent.toString();

  return (
    <div className={styles.guideContainer}>
      <main className={styles.mainContent}>
        <article className={styles.article}>
          <header className={styles.header}>
            {data.description && (
              <p className={styles.description}>{data.description}</p>
            )}
          </header>
          <div 
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: contentHtml }} 
          />
        </article>
      </main>
    </div>
  );
} 