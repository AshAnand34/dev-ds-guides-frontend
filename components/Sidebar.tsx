"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import styles from './Sidebar.module.css';

// Type for a node in the folder tree
export type GuideNode = {
  name: string;
  path: string;
  children?: GuideNode[];
};

type SidebarProps = {
  tree: GuideNode[];
};

const categoryIcons: Record<string, string> = {
  'command-line': 'mdi:console', // Command line icon
  dev: 'mdi:wrench', // Dev tools
  editor: 'mdi:pencil', // Editors
  git: 'mdi:git', // Git
  json: 'mdi:code-json', // JSON
  latex: 'file-icons:latex', // LaTeX
  macos: 'mdi:apple', // macOS
  markdown: 'mdi:markdown', // Markdown
  nodejs: 'logos:nodejs-icon', // Node.js official
  python: 'logos:python', // Python official
  sql: 'mdi:database', // SQL
  wsl: 'mdi:microsoft-windows', // WSL
  yaml: 'file-icons:yaml', // YAML
};

// Display name mapping for user-friendly category names
const categoryDisplayNames: Record<string, string> = {
  'command-line': 'Command Line',
  dev: 'Development Tools',
  editor: 'Code Editors',
  git: 'Git & Version Control',
  json: 'JSON',
  latex: 'LaTeX',
  macos: 'macOS',
  markdown: 'Markdown',
  nodejs: 'Node.js',
  python: 'Python',
  sql: 'SQL & Databases',
  wsl: 'Windows Subsystem for Linux',
  yaml: 'YAML',
};

function getDisplayName(folderName: string): string {
  const lowerName = folderName.toLowerCase();
  return categoryDisplayNames[lowerName] || toTitleCase(folderName);
}

function toTitleCase(str: string) {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

const Sidebar: React.FC<SidebarProps> = ({ tree }) => {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

  const toggleGroup = (categoryPath: string) => {
    setOpenGroups((prev) => ({ ...prev, [categoryPath]: !prev[categoryPath] }));
  };

  // Recursive render function
  const renderTree = (nodes: GuideNode[], level: number = 0) => (
    <ul className={level === 0 ? styles.categoryList : styles.guideList}>
      {nodes.map((node) => (
        <li key={node.path} className={level === 0 ? styles.categoryItem : styles.guideItem}>
          {level === 0 ? (
            <div className={styles.categoryPill}>
              <button
                className={styles.chevronBtn}
                aria-label={openGroups[node.path] ? `Collapse ${getDisplayName(node.name)}` : `Expand ${getDisplayName(node.name)}`}
                onClick={() => toggleGroup(node.path)}
                tabIndex={0}
                type="button"
              >
                <span
                  className={
                    openGroups[node.path]
                      ? styles.chevron + ' ' + styles.chevronOpen
                      : styles.chevron
                  }
                >
                  ▼
                </span>
              </button>
              <span className={styles.categoryIcon}>
                <Icon 
                  icon={categoryIcons[node.name.toLowerCase()] || 'mdi:folder'} 
                  className={styles.categorySvgIcon}
                />
              </span>
              <Link href={node.path} className={styles.categoryLink}>
                {getDisplayName(node.name)}
              </Link>
            </div>
          ) : (
            <Link href={node.path} className={styles.guideLink}>
              {node.name.replace(/\.md$/, '').replace(/_/g, ' ').replace(/-/g, ' ')}
            </Link>
          )}
          {node.children && node.children.length > 0 && (level === 0 ? openGroups[node.path] : true)
            ? renderTree(node.children, level + 1)
            : null}
        </li>
      ))}
    </ul>
  );

  return (
    <nav className={styles.sidebar} aria-label="Guide navigation">
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Dev-DS Guides
        </Link>
        <div className={styles.navSection}>{renderTree(tree)}</div>
      </div>
    </nav>
  );
};

export default Sidebar; 