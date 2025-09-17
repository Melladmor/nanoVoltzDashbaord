import CountUp from "react-countup";
import type { WidgetI } from "./type";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

type Props = WidgetI;

const Widget = ({ amount, icon, title, trend }: Props) => {
  return (
    // Card wrapper with hover effect
    <div className="min-w-[220px] bg-bg rounded-xl p-4 flex flex-col gap-2 items-start transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      {/* Header: icon + title + amount */}
      <div className="flex flex-row gap-4 items-center">
        {/* Icon image */}
        <img src={icon} className="w-[40px] h-[40px] rounded-full" />
        <div className="flex flex-col">
          <h3 className="text-icon-bg text-[12px] sm:text-sm">{title}</h3>
          <p className="text-black font-bold text-[12px] sm:text-sm">
            {/* Animated counter for amount */}
            <CountUp
              end={Number(amount.replace(/[^0-9.]/g, ""))}
              decimals={amount.split(".")[1]?.length || 0}
              duration={1}
              prefix="$"
            />
          </p>
        </div>
      </div>

      {/* Trend indicator (arrow + percentage) */}
      <div className="flex items-center gap-2 font-bold text-[12px] sm:text-sm">
        {trend?.trendType === "up" ? (
          <FaArrowTrendUp className="text-green-500 animate-pulse-up" />
        ) : (
          <FaArrowTrendDown className="text-red-500 animate-pulse-down" />
        )}

        <p
          className={`${
            trend?.trendType === "up" ? "text-green-500" : "text-red-500"
          }`}>
          {/* Animated counter for % change */}
          <CountUp
            end={Number(String(trend?.value).replace(/[^0-9.-]/g, ""))}
            decimals={2}
            duration={0.5}
            suffix="%"
          />
        </p>
      </div>
    </div>
  );
};

export default Widget;
