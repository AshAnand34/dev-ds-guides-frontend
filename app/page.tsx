"use client";
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    localStorage.setItem('showApp', 'true');
    router.push('/guides');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      {/* Animated, darker background */}
      <div className={styles.landingBg} aria-hidden="true">
        <div className={styles.blob + ' ' + styles.blob1}></div>
        <div className={styles.blob + ' ' + styles.blob2}></div>
        <div className={styles.blob + ' ' + styles.blob3}></div>
      </div>
      <div className={styles.landingContent + " w-full flex flex-col items-center justify-center"}>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center">Dev-DS Guides</h1>
        <p className="text-xl text-white/90 text-center mb-10 max-w-2xl">
          A comprehensive collection of development and data science guides, beautifully organized and easily accessible.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 w-full max-w-3xl">
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
            <span className="text-2xl">📚</span>
            <h3 className="font-bold text-white text-lg mt-2 mb-1">Comprehensive Guides</h3>
            <p className="text-white/80 text-sm">From command-line tools to advanced development techniques, find everything you need to know.</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
            <span className="text-2xl">🔍</span>
            <h3 className="font-bold text-white text-lg mt-2 mb-1">Easy Navigation</h3>
            <p className="text-white/80 text-sm">Browse guides by category with our intuitive sidebar navigation.</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
            <span className="text-2xl">💻</span>
            <h3 className="font-bold text-white text-lg mt-2 mb-1">Code Examples</h3>
            <p className="text-white/80 text-sm">Syntax-highlighted code blocks and practical examples in every guide.</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20">
            <span className="text-2xl">📱</span>
            <h3 className="font-bold text-white text-lg mt-2 mb-1">Responsive Design</h3>
            <p className="text-white/80 text-sm">Read guides comfortably on any device with our responsive layout.</p>
          </div>
        </div>
        <button
          className="bg-white/20 text-white font-semibold px-8 py-3 rounded-lg border-2 border-white/30 hover:bg-white/30 transition text-lg shadow"
          onClick={handleClick}
        >
          Start Exploring Guides
        </button>
      </div>
    </div>
  );
}
