import React from "react";
import type { AddHabitWidgetProps } from "./types";
import styles from "./AddHabitWidget.module.css";
import { Button } from "../../shared/ui/button";

export const AddHabitWidget: React.FC<AddHabitWidgetProps> = ({
  onAdd,
  backgroundImage = "",
  className = "",
}) => {
  return (
    <div
      className={`${styles.container} ${className}`}
      style={{
        backgroundImage: 'url(/images/addWidgetBackground.png)'
      }}
    >
      <span className={`${styles.title}`}>Новое дело или привычка</span>
      <div className={styles.textContainer}>
        <span className={`${styles.text}`}>
          Добавьте то, что важно именно для вас
        </span>
      </div>
      <div className={styles.buttonContainer}>
        <Button
          variant="icon"
          iconName="add"
          className={styles.addButton}
          onClick={onAdd}
          size="medium"
        ></Button>
      </div>
    </div>
  );
};
