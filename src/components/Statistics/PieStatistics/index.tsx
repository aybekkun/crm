import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";
import { ILeadStatistics } from "../../../redux/home/types";
import styles from "./PieStatistics.module.scss";
const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
// @ts-ignore
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

type PieStatisticsProps = {
  lead: ILeadStatistics[];
};

const PieStatistics: React.FC<PieStatisticsProps> = ({ lead }) => {
  return (
    <div className={styles.root}>
      <div className={styles.chart}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={300} height={300}>
            <Pie
              data={lead}
              cx="50%"
              cy="50%"
              nameKey={"lead"}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="count"
            >
              {data.map((entry, index) => (
                <Cell key={`${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>  
      <div className={styles.chartInfo}>
       {
        lead.map((item,i) =>(
          <div key={i} className={styles.chartGroup}>
            <span  className={styles.chartDot} style={{background:COLORS[i%COLORS.length]}}></span>
            <span>{item.lead}</span>
          </div>
        ))
       }
      </div>
    </div>
  );
};

export default PieStatistics;
