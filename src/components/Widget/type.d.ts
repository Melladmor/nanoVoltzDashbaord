// Reusable trend info
export type TrendT = {
  trendType: "up" | "down" | "no"; // direction of trend
  value: string | number; // percentage or numeric value
};

// Basic widget props (small card with icon, title, amount, trend)
export interface WidgetI {
  id: number; // unique identifier
  icon: string; // path to icon image
  title: string; // widget title
  amount: string; // formatted amount (e.g. "$1200")
  trend: TrendT; // trend details
}

// Stats widget props (bigger card with chart and trend)
interface StatsWidgetT {
  id: number; // unique identifier
  title?: string; // main title
  subTitle?: string; // optional secondary label
  value?: string; // main value to display
  chartData?: { value: number }[]; // small chart data (sparkline)
  trend: TrendT; // trend details
}
