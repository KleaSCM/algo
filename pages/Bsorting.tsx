import Navbar from '../components/Navbar';
import BubbleSortVisualizer from '../components/BubbleSortVisualizer'; 
import styles from '../styles/Bsorting.module.scss'; 

const Bsorting = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bubble Sort Visualization</h1>
      <Navbar />
      <BubbleSortVisualizer />
    </div>
  );
};

export default Bsorting;
