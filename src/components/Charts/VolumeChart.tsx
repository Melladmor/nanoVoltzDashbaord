import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import type { DataPoint, TimePeriod, VolumeChartProps } from "./type";
import { data1M, data1W, data1Y, monthLabels, periods } from "../../data/data";
import CountUp from "react-countup";

const VolumeChart: React.FC<VolumeChartProps> = ({ amount }) => {
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>("1Y");

  // Pick dataset based on selected period
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
      {/* Header: title + animated amount + period filter buttons */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-icon-bg text-sm mb-1">Volume {selectedPeriod}</h3>
          <p className="text-black text-sm sm:text-2xl font-bold">
            {/* Animated counter showing amount */}
            <CountUp
              end={Number(amount?.replace(/[^0-9.]/g, ""))}
              decimals={amount?.split(".")[1]?.length || 0}
              duration={1}
              prefix="$"
            />
            T
          </p>
        </div>

        {/* Buttons to switch between 1W / 1M / 1Y */}
        <div className="flex gap-1">
          {periods?.map((period: TimePeriod) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-3 py-1 text-[10px] flex items-center justify-center sm:text-sm rounded-lg transition-colors ${
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

      {/* Chart section */}
      <div className="w-full h-44">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={getCurrentData()}
            margin={{ top: 20 }}
            barCategoryGap={0.5}>
            {/* Light grid lines */}
            <CartesianGrid
              strokeDasharray="2 2"
              stroke="#f0f0f0"
              horizontal={true}
              vertical={true}
            />

            {/* Hide axis lines & ticks, only use dataKey for spacing */}
            <XAxis
              dataKey="period"
              axisLine={false}
              tickLine={false}
              tick={false}
              interval={0}
            />
            <YAxis hide />

            {/* Bar styling */}
            <Bar
              dataKey="value"
              fill="#ffb3b8"
              radius={[0, 0, 0, 0]}
              maxBarSize={2}
            />
          </BarChart>
        </ResponsiveContainer>

        {/* Month labels under the chart */}
        <div className="flex justify-between text-[8px] sm:text-xs text-icon-bg px-0">
          {monthLabels?.map((month: string) => (
            <span key={month}>{month}</span>
          ))}
        </div>
      </div>

      {/* Color-coded legend (static placeholders) */}
      <div className="flex flex-wrap gap-4 sm:gap-6 text-[8px] sm:text-sm mt-8">
        {[
          { color: "bg-green-500", label: "Legend" },
          { color: "bg-yellow-500", label: "Legend" },
          { color: "bg-red-500", label: "Legend" },
          { color: "bg-pink-500", label: "Legend" },
          { color: "bg-orange-500", label: "Legend" },
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className={`w-3 h-1 rounded-lg ${item.color}`} />
            <span className="text-black text-[8px] sm:text-xs">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolumeChart;
