
import Navbar from '../components/Navbar';
import GraphVisualizer from '../components/GraphVisualizer';
import styles from '../styles/DFS.module.scss'; 

export default function DFS() {
  return (
    <div className={styles.container}>
      <h1>DFS Algorithm Visualization</h1>
      <Navbar />
      <GraphVisualizer algorithm="dfs" />
    </div>
  );
}
