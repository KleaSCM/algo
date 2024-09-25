
import Navbar from '../components/Navbar';
import GraphVisualizer from '../components/GraphVisualizer'; 
import styles from '../styles/BFS.module.scss'; 

export default function BFS() {
  return (
    <div className={styles.container}>
      <h1>BFS Visualization</h1>
      <Navbar />
      <GraphVisualizer algorithm="bfs" />
    </div>
  );
}
