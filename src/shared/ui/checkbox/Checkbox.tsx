import React from "react";
import type { CheckboxProps } from "./types";
import styles from "./Checkbox.module.css";

export const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  return (
    <label className={styles.checkboxLabel}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        aria-label="Отметить привычку"
        className={styles.checkboxInput} />
      <span className={styles.customCheckbox} />
      </label>
  );
};
