import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceDot,
  CartesianGrid,
} from "recharts";
import type { WavyChartDataT } from "./type";

type Props = {
  data: WavyChartDataT[];
  refrenceDot: string | number;
};

const WavyChart = ({ data, refrenceDot }: Props) => {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 20,
            bottom: 20,
          }}>
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ff9aa2" stopOpacity={0.6} />
              <stop offset="100%" stopColor="#ff9aa2" stopOpacity={0.1} />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#f0f0f0"
            horizontal={true}
            vertical={true}
          />

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#9ca3af" }}
            dy={10}
          />

          <YAxis hide />

          <Area
            type="monotone"
            dataKey="value"
            stroke="#ff6b7a"
            strokeWidth={3}
            fill="url(#colorGradient)"
            fillOpacity={1}
          />

          <ReferenceDot
            x="Jun"
            y={refrenceDot}
            r={4}
            fill="white"
            stroke="#ff6b7a"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>

      <div className="relative">
        <div
          className="absolute bg-gray-800 text-white text-xs px-2 py-1 rounded"
          style={{
            top: "-180px",
            left: "50%",
            transform: "translateX(-50%)",
          }}>
          {refrenceDot}B
        </div>
      </div>
    </div>
  );
};

export default WavyChart;
