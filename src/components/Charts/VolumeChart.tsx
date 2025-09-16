import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import type { DataPoint, TimePeriod } from "./type";
import { data1M, data1W, data1Y, monthLabels, periods } from "../../data/data";
import CountUp from "react-countup";

// Type definitions

interface VolumeChartProps {
  amount?: string;
}

const VolumeChart: React.FC<VolumeChartProps> = ({ amount }) => {
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>("1Y");

  const getCurrentData = (): DataPoint[] => {
    switch (selectedPeriod) {
      case "1W":
        return data1W;
      case "1M":
        return data1M;
      case "1Y":
        return data1Y;
      default:
        return data1Y;
    }
  };

  return (
    <div className={`w-full bg-white rounded-xl p-6`}>
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-icon-bg text-sm mb-1">Volume {selectedPeriod}</h3>
          <p className="text-black text-2xl font-bold">
            <CountUp
              end={Number(amount?.replace(/[^0-9.]/g, ""))}
              decimals={amount?.split(".")[1]?.length || 0}
              duration={1}
              prefix="$"
            />
            T
          </p>
        </div>

        {/* Time period buttons */}
        <div className="flex gap-1">
          {periods?.map((period: TimePeriod) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                selectedPeriod === period
                  ? "bg-[#FECACA] text-pink-800"
                  : "bg-hover-pink text-gray-600 hover:bg-gray-200"
              }`}
              type="button">
              {period}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-44">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={getCurrentData()}
            margin={{
              top: 20,
            }}
            barCategoryGap={0.5}>
            <CartesianGrid
              strokeDasharray="2 2"
              stroke="#f0f0f0"
              horizontal={true}
              vertical={true}
            />

            <XAxis
              dataKey="period"
              axisLine={false}
              tickLine={false}
              tick={false}
              interval={0}
            />

            <YAxis hide />

            <Bar
              dataKey="value"
              fill="#ffb3b8"
              radius={[0, 0, 0, 0]}
              maxBarSize={2}
            />
          </BarChart>
        </ResponsiveContainer>
        {/* Custom X-axis labels */}
        <div className="flex justify-between text-xs text-icon-bg px-0">
          {monthLabels?.map((month: string) => (
            <span key={month}>{month}</span>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex gap-6 text-sm mt-8">
        {[
          { color: "bg-green-500", label: "Legend" },
          { color: "bg-yellow-500", label: "Legend" },
          { color: "bg-red-500", label: "Legend" },
          { color: "bg-pink-500", label: "Legend" },
          { color: "bg-orange-500", label: "Legend" },
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className={`w-3 h-1 rounded-lg ${item.color}`}></div>
            <span className="text-black text-xs">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolumeChart;
