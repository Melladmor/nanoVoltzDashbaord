export type TrendT = {
  trendType: "up" | "down" | "no";
  value: string | number;
};

export interface WidgetI {
  id: number;
  icon: string;
  title: string;
  amount: string;
  trend: TrendT;
}

interface StatsWidgetT {
  id: number;
  title?: string;
  subTitle?: string;
  value?: string;
  chartData?: { value: number }[];
  trend: TrendT;
}
