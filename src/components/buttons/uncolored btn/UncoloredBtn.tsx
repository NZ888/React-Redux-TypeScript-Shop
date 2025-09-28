import React from 'react';
import styles from "./UncoloredBtn.module.css";

interface UncoloredBtnProps {
    title: string;
    onClick?: () => void;
}

const UncoloredBtn: React.FC<UncoloredBtnProps> = ({ title, onClick }) => {
  return (
      <button className={styles.button} onClick={onClick}>{title}</button>
  );
};

export default UncoloredBtn;
