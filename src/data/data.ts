import type {
  DataPoint,
  TimePeriod,
  WavyChartDataT,
} from "../components/Charts/type";
import type { StatsWidgetT, WidgetI } from "../components/Widget/type";
import SHIB from "../assets/logo/shiba.svg";
import LTC from "../assets/logo/ltc.svg";
import XRP from "../assets/logo/xrp.svg";
import TRX from "../assets/logo/trx.svg";
import SUSHI from "../assets/logo/sushi.svg";
import type { Column } from "../components/DataTable/type";
export const WavyChartdata: WavyChartDataT[] = [
  { month: "Jan", value: 5.2 },
  { month: "Feb", value: 7.8 },
  { month: "Mar", value: 3.5 },
  { month: "Apr", value: 9.1 },
  { month: "May", value: 4.7 },
  { month: "Jun", value: 6.98 },
  { month: "Jul", value: 3.2 },
  { month: "Aug", value: 12.1 },
  { month: "Sep", value: 4.8 },
  { month: "Oct", value: 5.3 },
  { month: "Nov", value: 14.1 },
  { month: "Dec", value: 15.5 },
];

export const widgets: WidgetI[] = [
  {
    id: 1,
    icon: SHIB,
    title: "SHIB",
    amount: "$0.00002642",
    trend: {
      trendType: "up",
      value: "1.56%",
    },
  },
  {
    id: 2,
    icon: LTC,
    title: "LTC",
    amount: "$106.42",
    trend: {
      trendType: "up",
      value: "1.56%",
    },
  },
  {
    id: 3,
    icon: XRP,
    title: "XRP",
    amount: "$0.8235",
    trend: {
      trendType: "down",
      value: "1.56%",
    },
  },
  {
    id: 4,
    icon: TRX,
    title: "TRX",
    amount: "$1.01",
    trend: {
      trendType: "up",
      value: "1.56%",
    },
  },
  {
    id: 5,
    icon: SUSHI,
    title: "SUSHI",
    amount: "$2.642",
    trend: {
      trendType: "up",
      value: "1.56%",
    },
  },
];

export const statsWidgetData: StatsWidgetT[] = [
  {
    id: 1,
    title: "TVL",
    value: "$4.86B",
    trend: { trendType: "up", value: 1.56 },
    chartData: [
      { value: 3.5 },
      { value: 4.2 },
      { value: 3.9 },
      { value: 4.8 },
      { value: 4.1 },
      { value: 5.0 },
      { value: 4.3 },
      { value: 5.3 },
      { value: 4.6 },
      { value: 5.6 },
      { value: 4.9 },
      { value: 5.9 },
      { value: 5.1 },
      { value: 6.2 },
      { value: 5.4 },
      { value: 6.5 },
      { value: 5.7 },
      { value: 6.8 },
      { value: 6.0 },
      { value: 7.0 },
    ],
  },

  {
    id: 2,
    title: "Circulating Supply",
    value: "285,277,770",
    trend: { trendType: "down", value: 1.56 },
    chartData: [
      { value: 320 },
      { value: 310 },
      { value: 305 },
      { value: 295 },
      { value: 288 },
      { value: 278 },
      { value: 270 },
      { value: 260 },
      { value: 252 },
      { value: 245 },
      { value: 238 },
      { value: 230 },
      { value: 224 },
      { value: 218 },
      { value: 212 },
      { value: 207 },
      { value: 202 },
      { value: 198 },
      { value: 194 },
      { value: 190 },
    ],
  },

  {
    id: 3,
    title: "Price",
    value: "$0.51",
    trend: { trendType: "no", value: 0 },
    chartData: [
      { value: 0.45 },
      { value: 0.52 },
      { value: 0.47 },
      { value: 0.55 },
      { value: 0.49 },
      { value: 0.57 },
      { value: 0.5 },
      { value: 0.58 },
      { value: 0.51 },
      { value: 0.56 },
      { value: 0.5 },
      { value: 0.54 },
      { value: 0.49 },
      { value: 0.53 },
      { value: 0.48 },
      { value: 0.52 },
      { value: 0.5 },
      { value: 0.51 },
      { value: 0.49 },
      { value: 0.5 },
    ],
  },
];

export const periods: TimePeriod[] = ["1W", "1M", "1Y"];

export const monthLabels: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const precomputedNoise = Array.from({ length: 365 }, () => Math.random() * 0.4);

const generateSinusoidalData = (
  length: number,
  frequency: number,
  amplitude: number,
  offset: number,
  step: number = 1
): DataPoint[] => {
  const arr: DataPoint[] = [];
  for (let i = 0; i < length; i += step) {
    arr.push({
      period: `D${i + 1}`,
      value:
        Math.sin(i * frequency) * amplitude +
        offset +
        precomputedNoise[i % precomputedNoise.length],
    });
  }
  return arr;
};

export const data1W: DataPoint[] = generateSinusoidalData(30, 0.3, 0.8, 1.2);
export const data1M: DataPoint[] = generateSinusoidalData(60, 0.2, 1.0, 1.4);
export const data1Y: DataPoint[] = generateSinusoidalData(
  365,
  0.1,
  1.2,
  1.3,
  5
);
// Types for Employee data
export interface Employee {
  name: string;
  id: string;
  phone: string;
  appliedShift: string;
  substitute: string;
  status: "Active" | "Active Substitute" | "Inactive";
  comments: string;
}

export const tableData: Employee[] = [
  {
    name: "Andrew Jacob",
    id: "ADSW-134KY",
    phone: "+971 50 123 4567",
    appliedShift: "9:00 - 18:00\nAll Days",
    substitute: "N/A",
    status: "Active",
    comments: "N/A",
  },
  {
    name: "John Castrovieh",
    id: "ADSW-432F7",
    phone: "+971 50 123 4567",
    appliedShift: "9:00 - 18:00\nSun, Mon, Tue, Sat",
    substitute: "N/A",
    status: "Active Substitute",
    comments: "N/A",
  },
  {
    name: "Sarah Wilson",
    id: "ADSW-789XY",
    phone: "+971 50 555 0123",
    appliedShift: "10:00 - 19:00\nMon, Wed, Fri",
    substitute: "Available",
    status: "Active",
    comments: "Flexible hours",
  },
  {
    name: "Mike Johnson",
    id: "ADSW-456AB",
    phone: "+971 50 987 6543",
    appliedShift: "8:00 - 17:00\nAll Days",
    substitute: "N/A",
    status: "Inactive",
    comments: "On leave",
  },
];
