import React from 'react';
import styles from '../styles/Explanation.module.scss';
import Navbar from '../components/Navbar';

const ExplanationPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />
    </div>
  );
};

export default ExplanationPage;
