export type WavyChartDataT = {
  month: string;
  value: string | number;
};

export interface DataPoint {
  period: string;
  value: number;
}

export type TimePeriod = "1W" | "1M" | "1Y";
