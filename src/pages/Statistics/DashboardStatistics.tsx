import Widget from "../../components/Widget/Widget";
import { statsWidgetData, WavyChartdata, widgets } from "../../data/data";
import WavyChartStatistics from "./components/WavyChartStatistics";
import SOLANA from "../../assets/logo/solana.png";
import VolumeChart from "../../components/Charts/VolumeChart";
import StatsWidget from "../../components/Widget/StatsWidget";
import type { StatsWidgetT, WidgetI } from "../../components/Widget/type";

const DashboardStatistics = () => {
  return (
    <div className="grid grid-cols-1 gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <WavyChartStatistics
          amount="4.68B"
          refrenceDot={6.8}
          icon={SOLANA}
          title="TVL"
          chartData={WavyChartdata}
        />
        <VolumeChart amount="1.42" />
      </div>
      {/* <div className="bg-white p-6 rounded-2xl flex gap-6 items-center">
        {widgets?.map((el: WidgetI) => {
          return <Widget key={el?.id} {...el} />;
        })}
      </div>
      <div className="flex gap-6 items-center">
        {statsWidgetData?.map((el: StatsWidgetT) => {
          return <StatsWidget key={el?.id} {...el} />;
        })}
      </div> */}
    </div>
  );
};

export default DashboardStatistics;
