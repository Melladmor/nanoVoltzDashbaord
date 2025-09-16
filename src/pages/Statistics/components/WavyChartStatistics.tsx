import React from "react";
import CountUp from "react-countup";
import type { WavyChartStatisticsI } from "./type.d";
import WavyChart from "../../../components/Charts/WavyChart";
import { FaEllipsisH } from "react-icons/fa";

type Props = WavyChartStatisticsI;

const WavyChartStatistics = ({
  amount,
  chartData,
  icon,
  title,
  refrenceDot,
}: Props) => {
  return (
    <div className="bg-white rounded-xl p-4">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-row gap-4 items-center">
          <img src={icon} className="w-[40px] h-[40px] rounded-full" />
          <div className="flex flex-col">
            <h3 className="text-icon-bg text-sm">{title}</h3>
            <p className="text-2xl font-bold">
              <CountUp
                end={Number(amount.replace(/[^0-9.]/g, ""))}
                decimals={amount.split(".")[1]?.length || 0}
                duration={1}
                prefix="$"
              />
              B
            </p>
          </div>
        </div>
        <div>
          <button className="bg-hover-pink w-10 h-10 rounded-full flex justify-center items-center">
            <FaEllipsisH className="text-icon-bg" />
          </button>
        </div>
      </div>
      <WavyChart refrenceDot={refrenceDot} data={chartData} />
    </div>
  );
};

export default WavyChartStatistics;
