import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Overview = () => {
  const data = [
    {
      name: "Day 1",
      totalDonate: 400,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Day 2",
      totalDonate: 600,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Day 3",
      totalDonate: 500,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Day 4",
      totalDonate: 700,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Day 5",
      totalDonate: 550,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Day 6",
      totalDonate: 900,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Day 7",
      totalDonate: 1000,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div>
      <h1 className="text-xl font-semibold">Overview</h1>
      <div className="mt-5" style={{ width: "100%", height: 340 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area dataKey="totalDonate" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Overview;
