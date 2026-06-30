import type { ProgressChartUIProps } from "./types";
import styles from "./ProgressChart.module.css";
import type { FC } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const ProgressChartUI: FC<ProgressChartUIProps> = ({
  data,
  title='Прогресс за месяц',
  className = "",
}) => {
  return (
    <div className={`${styles.progressContainer} ${className}`}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.chartWrapper}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
            <XAxis
              dataKey="date"
              tickFormatter={(date) => {
                const parts = date.split("-");
                return `${parts[2]}.${parts[1]}`;
              }}
              interval={2}
              tick={{ fontSize: 12, fill: "#64748B" }}
            />
            <YAxis
              allowDecimals={false}
              tick={{ fontSize: 12, fill: "#64748B" }}
            />
            <Tooltip
              formatter={(value) => [`${value} привычек`, `Выполнено`]}
              labelFormatter={(date) => {
                const parts = date.split("-");
                return `${parts[2]}.${parts[1]}.${parts[0]}`;
              }}
            />
            <Line
              dataKey="count"
              stroke="#14B8A6"
              strokeWidth={2.5}
              dot={{ fill: "#14B8A6", r: 4 }}
              activeDot={{ r: 6, fill: "#0D9488" }}
              type="monotone"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
