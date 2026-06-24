import { type FC } from 'react';
import  type { StatisticsWidgetUIProps } from './types';
import styles from './StatisticsWidget.module.css';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const COLORS = ['#14B8A6', '#E2E8F0'];

export const StatisticsWidgetUI: FC<StatisticsWidgetUIProps> = ({
    completed,
    uncompleted,
    selectedDate,
}) => {

    const data = [
        { name: 'Выполнено', value: completed },
        { name: 'Не выполнено', value: uncompleted }
    ];

    const total = completed + uncompleted;
    
    const formattedDate = selectedDate.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long'
    });

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Статистика на {formattedDate}</h3>
            { total === 0 ? (
                <p className={styles.empty}>Нет привычек на выбранную дату</p>
            ): (
                <div className={styles.content}>
                    <ResponsiveContainer width={150} height={150}>
                        <PieChart>
                            <Pie
                            data={data}
                            dataKey='value'
                            nameKey='name'
                            cx='50%'
                            cy='50%'
                            innerRadius={40}
                            outerRadius={70}
                            stroke='none'>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.point} style={{ backgroundColor: '#14B8A6' }}/>
                            <span>Выполнено: {completed}</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.point} style={{ backgroundColor: '#E2E8F0' }} />
                            <span>Осталось: {uncompleted}</span>
                        </div>
                    </div>
                    {uncompleted === 0 && <hr className={styles.divider} />}
                    { uncompleted === 0 && (
                            <div className={styles.congrats}>
                            <span >Вы выполнили все на {formattedDate}! </span>
                            </div>
                        )}
                </div>
            )}
        </div>
    )

}