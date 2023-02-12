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
import Chip from "../../assets/svg/chip.svg";

const Top = () => {
  const data = [
    {
      name: "Day 1",
      totalDonate: 400,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Day 2",
      totalDonate: 1000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Day 3",
      totalDonate: 800,
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
      totalDonate: 1100,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Day 6",
      totalDonate: 800,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Day 7",
      totalDonate: 1500,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div>
      <div className="flex items-center">
        <div className="w-[380px] my-10  border-r-2 pr-5">
          <div className="grid grid-cols-2 gap-5 pb-5 border-b-2">
            <div className="flex flex-col justify-center ml-5 space-y-3">
              <p className="text-[#9E9E9E]">Total Balance</p>
              <h2 className="text-2xl font-semibold">$1,251,321</h2>
            </div>
            <div className="!h-20 " style={{ width: "100%", height: 340 }}>
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
                  <Tooltip />
                  <Area dataKey="totalDonate" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 mt-5 ml-5">
            <div className="space-y-3">
              <p className="text-[#9E9E9E]">Income</p>
              <h2 className="text-2xl font-semibold">
                $51,321 <span className="text-[#2DBF3C] text-lg">+2.01</span>
              </h2>
            </div>
            <div className="pl-5 space-y-3 border-l-2 ">
              <p className="text-[#9E9E9E]">Expenses</p>
              <h2 className="text-2xl font-semibold">
                $21,321 <span className="text-[#FF7D33] text-lg">-0.05</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="flex w-8/12 mx-10">
          <div
            className={`bg-[url('https://i.ibb.co/9h3Q8Cz/image-93-1.png')] bg- bg-no-repeat bg-opacity-5 w-96`}
          >
            <div className="p-5 space-y-8 bg-blue-500 rounded-lg bg-opacity-90 h-52 w-80">
              <div className="flex items-center justify-between">
                <h1 className="text-xl text-white"> LOGO</h1>
                <img alt="img" src={Chip} />
              </div>
              <h1 className="text-xl text-white"> 3475 7381 3759 ****</h1>
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-400">TOTAL BLANCA</p>
                  <p className="text-xs text-slate-400">EXP. DATE</p>
                </div>
                <div className="flex items-center justify-between text-lg">
                  <p className="text-white">3,215,352 USD</p>
                  <p className="text-white">04 / 24</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div
              className={`bg-[url('https://i.ibb.co/wdpkMTN/image-93-2.png')] bg- bg-no-repeat bg-opacity-5 w-96`}
            >
              <div className="p-5 space-y-8 bg-blue-900 rounded-lg bg-opacity-90 h-52 w-80">
                <div className="flex items-center justify-between">
                  <h1 className="text-xl text-white"> LOGO</h1>
                  <img alt="img" src={Chip} />
                </div>
                <h1 className="text-xl text-white"> 3475 7381 3759 ****</h1>
                <div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-slate-400">TOTAL BLANCA</p>
                    <p className="text-xs text-slate-400">EXP. DATE</p>
                  </div>
                  <div className="flex items-center justify-between text-lg">
                    <p className="text-white">3,215,352 USD</p>
                    <p className="text-white">04 / 24</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="-ml-10 space-y-3 text-blue-500 border border-blue-500 rounded-md h-fit">
              <h1 className="py-[90px] -mx-4 text-lg -rotate-90">+ Add Card</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
