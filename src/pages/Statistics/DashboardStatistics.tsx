import Widget from "../../components/Widget/Widget";
import {
  columns,
  statsWidgetData,
  tableData,
  WavyChartdata,
  widgets,
} from "../../data/data";
import WavyChartStatistics from "./components/WavyChartStatistics";
import SOLANA from "../../assets/logo/solana.png";
import VolumeChart from "../../components/Charts/VolumeChart";
import StatsWidget from "../../components/Widget/StatsWidget";
import type { StatsWidgetT, WidgetI } from "../../components/Widget/type";
import { useHorizontalWheelScroll } from "../../hooks/useWheelHorizontalScroll";
import DataTable from "../../components/DataTable/DataTable";

const DashboardStatistics = () => {
  const scrollRefWidget = useHorizontalWheelScroll<HTMLDivElement>();
  const scrollRefWidgetStats = useHorizontalWheelScroll<HTMLDivElement>();

  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-6">
      <div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 sm:grid-cols-2 md:grid-cols-1  gap-4 sm:gap-6">
        <WavyChartStatistics
          amount="4.68B"
          refrenceDot={6.8}
          icon={SOLANA}
          title="TVL"
          chartData={WavyChartdata}
        />
        <VolumeChart amount="1.42" />
      </div>
      <div
        ref={scrollRefWidget}
        className="bg-white p-6 rounded-2xl flex gap-4 sm:gap-6 items-center overflow-x-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {widgets?.map((el: WidgetI) => {
          return <Widget key={el?.id} {...el} />;
        })}
      </div>
      <DataTable
        title="Employees"
        columns={columns}
        data={tableData}
        pageSize={25}
        showCheckbox={true}
        showActions={true}
      />
      <div
        ref={scrollRefWidgetStats}
        className="flex gap-4 sm:gap-6 items-center overflow-x-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {statsWidgetData?.map((el: StatsWidgetT) => {
          return <StatsWidget key={el?.id} {...el} />;
        })}
      </div>
    </div>
  );
};

export default DashboardStatistics;
