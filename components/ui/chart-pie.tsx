import {
  PieChart,
  Pie,
  Bar,
  Rectangle,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Male", value: 400 },
  { name: "Female", value: 300 },
];

interface Props {
  cx: string;
  cy: string;
  midAngle: string;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: string;
}
//https://recharts.org/en-US/examples/PieChartWithCustomizedLabel
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = (props: Props) => {
  const radius = props.innerRadius + (props.outerRadius - props.innerRadius) * 0.5;
  const x = props.cx + radius * Math.cos(-props.midAngle * RADIAN);
  const y = props.cy + radius * Math.sin(-props.midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > props.cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(props.percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function ChartPie() {
  return (
    <ResponsiveContainer width="100%" minHeight={250}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          labelLine={false}
          label={renderCustomizedLabel}
          // label={(item) => item.name}
          fill="#8884d8"
          dataKey="value"
          nameKey="name"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}
