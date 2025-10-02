import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./RegisterModal.module.css";

interface RegisterModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
    const [show, setShow] = useState(isOpen);

    useEffect(() => {
        if (isOpen) {
            setShow(true);
        } else {
            const timeout = setTimeout(() => setShow(false), 300);
            return () => clearTimeout(timeout);
        }
    }, [isOpen]);

    if (!show) return null;

    return ReactDOM.createPortal(
        <div className={`${styles.overlay} ${isOpen ? styles.fadeIn : styles.fadeOut}`}>
            <div className={`${styles.modal} ${isOpen ? styles.slideIn : styles.slideOut}`}>
                <button className={styles.closeBtn} onClick={onClose}>
                    ✕
                </button>
                <h2 className={styles.title}>Register</h2>

                <form className={styles.form}>
                    <input type="email" placeholder="Email" className={styles.input} required />
                    <input type="password" placeholder="Password" className={styles.input} required />
                    <input type="text" placeholder="Username" className={styles.input} required />
                    <button type="submit" className={styles.submitBtn}>
                        Create an account
                    </button>
                </form>
            </div>
        </div>,
        document.getElementById("modal-root")!
    );
};

export default RegisterModal;
