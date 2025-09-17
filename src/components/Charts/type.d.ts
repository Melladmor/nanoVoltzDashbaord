// Props for the VolumeChart component
interface VolumeChartProps {
  amount?: string; // formatted amount string (e.g., "$12.3")
}

// Single data point for the wavy area chart
export type WavyChartDataT = {
  month: string; // month label (e.g., "Jan", "Feb")
  value: string | number; // numeric value (string allowed if preformatted)
};

// Single bar item for the volume chart
export interface DataPoint {
  period: string; // bucket label (e.g., day/month key)
  value: number; // numeric value used by Recharts
}

// Allowed time ranges for switching datasets
export type TimePeriod = "1W" | "1M" | "1Y";
