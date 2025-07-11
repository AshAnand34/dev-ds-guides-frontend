"use client";

import React, { useState } from 'react';
import Link from 'next/link';
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
  'command line': '⌨️',
  dev: '🛠️',
  editor: '📝',
  git: '🌳',
  json: '🔢',
  latex: '📄',
  macos: '🍏',
  markdown: '🗒️',
  nodejs: '🟩',
  python: '🐍',
  sql: '🗄️',
  wsl: '🐧',
  yaml: '📑',
};

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
                aria-label={openGroups[node.path] ? `Collapse ${node.name}` : `Expand ${node.name}`}
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
              <span className={styles.categoryIcon}>{categoryIcons[node.name.toLowerCase()] || '📁'}</span>
              <Link href={node.path} className={styles.categoryLink}>
                {node.name.replace(/\./g, ' ').replace(/_/g, ' ')}
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