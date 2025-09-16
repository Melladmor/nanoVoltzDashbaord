import type { WavyChartDataT } from "../../../components/Charts/type";

export interface WavyChartStatisticsI {
  icon: string;
  title: string;
  amount: string;
  refrenceDot: string | number;
  chartData: WavyChartDataT[];
}
