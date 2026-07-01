import React, { type FC } from "react";
import type { StatsCardUIProps } from "./types";
import styles from './StatsCard.module.css';
import { Icon } from "../../../shared/ui/icon";


export const StatsCardUI: FC<StatsCardUIProps> = ({
    value,
    label,
    icon,
    color,
    className='',
}) => {


    return (
        <div className={`${styles.cardContainer} ${className}`} style ={{backgroundColor: color}}>
            <div className={styles.iconWrapper} >
                <Icon name={icon} size={32}/>
            </div>
            <span className={styles.value}>{value}</span>
            <span className={styles.label}>{label}</span>

        </div>
    )

}
