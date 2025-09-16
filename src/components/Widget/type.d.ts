export type TrendT = {
  trendType: "up" | "down";
  value: string | number;
};

export interface WidgetI {
  id: number;
  icon: string;
  title: string;
  amount: string;
  trend: TrendT;
}
