import React from 'react';
import styles from './StylizedBtn.module.css';

interface StylizedBtnProps {
    title: string,
    onClick?: () => void,
}

const StylizedBtn: React.FC<StylizedBtnProps> = ({title, onClick}) => {
    return (
        <button className={styles.button} onClick={onClick}>{title}</button>
    );
};

export default StylizedBtn;
