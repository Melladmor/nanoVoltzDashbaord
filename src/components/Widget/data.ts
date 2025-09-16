import type { WidgetI } from "./type";
import SHIB from "../../assets/logo/shiba.svg";
import LTC from "../../assets/logo/ltc.svg";
import XRP from "../../assets/logo/xrp.svg";
import TRX from "../../assets/logo/trx.svg";
import SUSHI from "../../assets/logo/sushi.svg";

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
