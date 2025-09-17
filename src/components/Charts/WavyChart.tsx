import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceDot,
  CartesianGrid,
  Label,
} from "recharts";
import type { WavyChartDataT } from "./type";
import { monthLabels } from "../../data/data";

type Props = {
  data: WavyChartDataT[]; // chart dataset (month, value)
  refrenceDot: string | number; // y-value for the highlighted reference point
};

const WavyChart = ({ data, refrenceDot }: Props) => {
  return (
    <div className="w-full h-42 sm:h-55">
      {/* Chart container responsive to parent size */}
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 20,
            bottom: 20,
          }}>
          {/* Gradient definition for area fill */}
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ff9aa2" stopOpacity={0.6} />
              <stop offset="100%" stopColor="#ff9aa2" stopOpacity={0.1} />
            </linearGradient>
          </defs>

          {/* Background grid */}
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#f0f0f0"
            horizontal={true}
            vertical={true}
          />

          {/* Hide X axis (still used for spacing) */}
          <XAxis
            hide
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#9ca3af" }}
            dy={10}
          />

          {/* Hide Y axis */}
          <YAxis hide />

          {/* Area curve with gradient */}
          <Area
            type="monotone"
            dataKey="value"
            stroke="#ff6b7a"
            strokeWidth={3}
            fill="url(#colorGradient)"
            fillOpacity={1}
          />

          {/* Highlighted reference point (dot + tooltip-like label) */}
          <ReferenceDot
            x="Jun"
            y={refrenceDot}
            r={4}
            fill="white"
            stroke="#ff6b7a"
            strokeWidth={3}>
            <Label
              position="top"
              content={({ viewBox }) => {
                if (!viewBox) return null;
                const x = (viewBox as any).x as number;
                const y = (viewBox as any).y as number;

                // Calculate tooltip box size & position
                const padX = 8;
                const text = `${refrenceDot}B`;
                const approxCharW = 7;
                const w = Math.max(44, text.length * approxCharW + padX * 2);
                const h = 22;

                const topY = y - 10 - h;
                const safeY = topY < 0 ? y + 10 : topY;

                return (
                  <g>
                    {/* Tooltip background box */}
                    <rect
                      x={x - w / 2}
                      y={safeY}
                      width={w}
                      height={h}
                      rx={6}
                      ry={6}
                      fill="#111827"
                      opacity="0.9"
                    />
                    {/* Small arrow under the box */}
                    <polygon
                      points={`${x},${safeY + h} ${x - 5},${safeY + h} ${x},${
                        safeY + h + 6
                      } ${x + 5},${safeY + h}`}
                      fill="#111827"
                      opacity="0.9"
                    />
                    {/* Tooltip text */}
                    <text
                      x={x}
                      y={safeY + h / 2 + 4}
                      textAnchor="middle"
                      fontSize={12}
                      fontFamily="ui-sans-serif, system-ui"
                      fill="#fff">
                      {text}
                    </text>
                  </g>
                );
              }}
            />
          </ReferenceDot>
        </AreaChart>
      </ResponsiveContainer>

      {/* Month labels under chart */}
      <div className="flex justify-between text-[8px] sm:text-xs text-icon-bg px-0">
        {monthLabels?.map((month: string) => (
          <span key={month}>{month}</span>
        ))}
      </div>
    </div>
  );
};

export default WavyChart;
