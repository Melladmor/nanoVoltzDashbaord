import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// Type definitions
interface DataPoint {
  period: string;
  value: number;
}

type TimePeriod = "1W" | "1M" | "1Y";

interface VolumeChartProps {
  className?: string;
}

// Generate dense data for thin bars effect
const generateSinusoidalData = (
  length: number,
  frequency: number,
  amplitude: number,
  offset: number
): DataPoint[] => {
  return Array.from({ length }, (_, i) => ({
    period: `D${i + 1}`,
    value: Math.sin(i * frequency) * amplitude + offset + Math.random() * 0.4,
  }));
};

// Dense data for thin bars - like daily data points
const data1W: DataPoint[] = generateSinusoidalData(30, 0.3, 0.8, 1.2);
const data1M: DataPoint[] = generateSinusoidalData(60, 0.2, 1.0, 1.4);
const data1Y: DataPoint[] = generateSinusoidalData(365, 0.1, 1.2, 1.3);

const VolumeChart: React.FC<VolumeChartProps> = ({ className = "" }) => {
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

  const periods: TimePeriod[] = ["1W", "1M", "1Y"];

  const monthLabels: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className={`w-full bg-white rounded-xl p-6 ${className}`}>
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-gray-600 text-sm mb-1">
            Volume {selectedPeriod}
          </h3>
          <h2 className="text-2xl font-semibold text-gray-900">$1.42T</h2>
        </div>

        {/* Time period buttons */}
        <div className="flex gap-1">
          {periods.map((period: TimePeriod) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-3 py-1 text-sm rounded transition-colors ${
                selectedPeriod === period
                  ? "bg-pink-200 text-pink-800"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              type="button">
              {period}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-48 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={getCurrentData()}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20,
            }}
            barCategoryGap={0.5}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#f0f0f0"
              horizontal={true}
              vertical={false}
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
        <div className="flex justify-between text-xs text-gray-500 mt-2 px-8">
          {monthLabels.map((month: string) => (
            <span key={month}>{month}</span>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex gap-6 text-sm">
        {[
          { color: "bg-green-500", label: "Legend" },
          { color: "bg-yellow-500", label: "Legend" },
          { color: "bg-red-500", label: "Legend" },
          { color: "bg-pink-500", label: "Legend" },
          { color: "bg-orange-500", label: "Legend" },
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className={`w-3 h-0.5 ${item.color}`}></div>
            <span className="text-gray-700">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolumeChart;
