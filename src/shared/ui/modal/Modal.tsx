import React from "react";
import type { ModalProps } from "./types";
import { Button } from "../button";
import styles from "./Modal.module.css";

export const Modal: React.FC<ModalProps> = ({
  children,
  isOpen = false,
  onClose,
  title,
  className = "",
}) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
        onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div title={title} className={`${styles.modal} ${className}`}>
        <div className={styles.header}>
          {title && <h2 className={styles.title}>{title}</h2>}
          <Button
            variant="icon"
            iconName="close"
            onClick={onClose}
            size="small"
            className={styles.closeButton}
          />
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
