"use client";

import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Amman",
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: "Jeddah",
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: "Abu Dhabi",
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
];

function ChartCity() {
  return (
    <ResponsiveContainer width="100%" minHeight={250}>
      <ComposedChart
        layout="vertical"
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 10,
          bottom: 10,
          left: 10,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" scale="band" />
        <Tooltip />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

export default ChartCity;
