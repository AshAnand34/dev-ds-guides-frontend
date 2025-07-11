import Sidebar from '../../components/Sidebar';
import ThemeToggle from '../../components/ThemeToggle';
import styles from '../layout.module.css';
import { getGuidesTree } from '../../lib/guides';

export default function GuidesLayout({ children }: { children: React.ReactNode }) {
  const guidesTree = getGuidesTree();
  return (
    <div className={styles.container}>
      <Sidebar tree={guidesTree} />
      <div className={styles.mainContent}>
        <header className={styles.header}>
          <ThemeToggle />
        </header>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
} 