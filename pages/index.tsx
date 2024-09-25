
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Algorithm Visualizer</h1>
      <Navbar /> 
    </div>
  );
}
