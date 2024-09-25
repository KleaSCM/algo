import React from 'react';
import styles from '../styles/Explanation.module.scss';
import Navbar from '../components/Navbar';

const ExplanationPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <p>115:157 Error: no-unescaped-entities</p>
    </div>
  );
};

export default ExplanationPage;
