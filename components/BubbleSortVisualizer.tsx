import { useState } from 'react';
import styles from '../styles/Bsorting.module.scss';

const BubbleSortVisualizer: React.FC = () => {
  const [array, setArray] = useState<number[]>([5, 2, 9, 1, 5, 6]);
  const [sorting, setSorting] = useState(false);

  const generateArray = () => {
    const newArray = Array.from({ length: 6 }, () => Math.floor(Math.random() * 100));
    setArray(newArray);
  };

  const bubbleSort = async () => {
    const arr = [...array];
    setSorting(true);
    
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
          await new Promise((resolve) => setTimeout(resolve, 500)); // Delay for visualization
        }
      }
    }
    
    setSorting(false);
  };

  return (
    <div className={styles.visualizerContainer}>
      <div className={styles.arrayContainer}>
        {array.map((value, index) => (
          <div key={index} className={styles.bar} style={{ height: `${value * 3}px` }}>
            {value}
          </div>
        ))}
      </div>
      <div className={styles.controls}>
        <button onClick={generateArray}>Generate New Array</button>
        <button onClick={bubbleSort} disabled={sorting}>Start Bubble Sort</button>
      </div>
      <div className={styles.bigo}>
        <p>Big O Notation: O(n<sup>2</sup>)</p>
        <h3>Complexity Details:</h3>
        <p><strong>Best Case:</strong> O(n) — This occurs when the array is already sorted, and a single pass through the array is needed to check that no swaps are necessary.</p>
        <p><strong>Average Case:</strong> O(n<sup>2</sup>) — On average, Bubble Sort will require multiple passes through the array, leading to a quadratic number of comparisons and swaps.</p>
        <p><strong>Worst Case:</strong> O(n<sup>2</sup>) — This occurs when the array is sorted in reverse order, requiring the maximum number of comparisons and swaps.</p>
        <p><strong>Space Complexity:</strong> O(1) — Bubble Sort is an in-place sorting algorithm, meaning it requires only a constant amount of additional memory space.</p>
      </div>
    </div>
  );
};

export default BubbleSortVisualizer;
