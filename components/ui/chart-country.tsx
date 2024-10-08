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
    name: "Jor",
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: "KSA",
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: "UAE",
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: "NL",
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
];

function ChartCountry() {
  return (
    <ResponsiveContainer width="100%" minHeight={250}>
      <ComposedChart
        layout="vertical"
        width={500}
        height={400}
        data={data}
        margin={{
          top: 0,
          right: 20,
          bottom: 0,
          left: 0,
        }}
      >
        <XAxis type="number" />
        <YAxis dataKey="name" type="category"/>
        <Tooltip />
        <Bar dataKey="pv" barSize={20} fill="#007AFF" />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

export default ChartCountry;
