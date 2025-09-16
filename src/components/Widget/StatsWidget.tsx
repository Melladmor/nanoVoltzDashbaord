import React, { useMemo } from "react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import type { StatsWidgetT } from "./type";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import CountUp from "react-countup";

const StatsWidget: React.FC<StatsWidgetT> = ({
  chartData,
  title,
  value,
  trend,
}) => {
  const { stroke, fillFrom, fillTo } = useMemo(() => {
    if (trend?.trendType === "up")
      return { stroke: "#22c55e", fillFrom: "0.28", fillTo: "0.05" };
    if (trend?.trendType === "down")
      return { stroke: "#ef4444", fillFrom: "0.28", fillTo: "0.05" };
    return { stroke: "#94a3b8", fillFrom: "0.22", fillTo: "0.06" };
  }, [trend?.trendType]);

  const gradId = useMemo(
    () => `sw-grad-${title?.replace(/\s+/g, "-").toLowerCase()}`,
    [title]
  );
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 min-w-[350px]">
      <div className="flex justify-between items-start mb-1">
        <div>
          <h3 className="text-icon-bg text-sm font-medium mb-1">{title}</h3>
          <h2 className="text-2xl font-bold text-black">{value}</h2>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <circle cx="10" cy="4" r="1.5" />
            <circle cx="10" cy="10" r="1.5" />
            <circle cx="10" cy="16" r="1.5" />
          </svg>
        </button>
      </div>
      <div className="flex items-center">
        <div className="flex items-center gap-1 font-bold text-sm ">
          {trend?.trendType === "up" ? (
            <FaArrowTrendUp className="text-green-500 animate-pulse-up" />
          ) : trend?.trendType === "down" ? (
            <FaArrowTrendDown className="text-red-500 animate-pulse-down" />
          ) : (
            <FaArrowTrendUp className="text-gray-400" />
          )}
          <p
            className={`${
              trend?.trendType === "up"
                ? "text-green-500"
                : trend?.trendType === "down"
                ? "text-red-500"
                : "text-gray-400"
            } text-sm`}>
            <CountUp
              end={Number(String(trend?.value).replace(/[^0-9.-]/g, ""))}
              decimals={2}
              duration={0.5}
              suffix="%"
            />
          </p>
        </div>
      </div>

      <div className="h-8 -mx-2 mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
            <defs>
              <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor={stroke}
                  stopOpacity={Number(fillFrom)}
                />
                <stop
                  offset="100%"
                  stopColor={stroke}
                  stopOpacity={Number(fillTo)}
                />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="value"
              stroke={stroke}
              strokeWidth={2}
              fill={`url(#${gradId})`}
              dot={false}
              activeDot={false}
              isAnimationActive={true}
              animationDuration={500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatsWidget;
{
  /* Percentage Change */
}
