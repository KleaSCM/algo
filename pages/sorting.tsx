
import Navbar from '../components/Navbar';
import SortingVisualizer from '../components/SortingVisualizer';
import styles from '../styles/Sorting.module.scss'; 

export default function Sorting() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sorting Algorithm Visualization</h1>
      <Navbar />
      <SortingVisualizer />
    </div>
  );
}
