
import { useState } from 'react';
import styles from '../styles/SortingVisualizer.module.scss';

const SortingVisualizer: React.FC = () => {
  const [array, setArray] = useState<number[]>([30, 50, 20, 40, 10]);
  const [isSorting, setIsSorting] = useState(false);

  const bubbleSort = async () => {
    setIsSorting(true);
    const arr = [...array];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
          await new Promise((resolve) => setTimeout(resolve, 500)); // Delay for visualization
        }
      }
    }
    setIsSorting(false);
  };

  return (
    <div className={styles.sortingContainer}>
      <div className={styles.controls}>
        <button onClick={bubbleSort} disabled={isSorting}>
          {isSorting ? 'Sorting...' : 'Start Sorting'}
        </button>
        <button onClick={() => setArray([30, 50, 20, 40, 10])} disabled={isSorting}>
          Reset
        </button>
      </div>
      <div className={styles.arrayContainer}>
        {array.map((value, idx) => (
          <div key={idx} className={styles.arrayBar} style={{ height: `${value * 5}px` }}>
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortingVisualizer
