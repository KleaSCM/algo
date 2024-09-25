import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/bfs" className={styles.link}>
            BFS Visualization
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/dfs" className={styles.link}>
            DFS Visualization
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/sorting" className={styles.link}>
            Sorting Algorithm Visualization
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/Bsorting" className={styles.link}>
            Bubble Sort Visualization
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/ExplanationPage" className={styles.link}>
            Algorithm Explanations
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
