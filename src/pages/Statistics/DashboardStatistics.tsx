import Widget from "../../components/Widget/Widget";
import { widgets } from "../../components/Widget/data";
import type { WidgetI } from "../../components/Widget/type";

const DashboardStatistics = () => {
  return (
    <div>
      <h1 className="text-xl font-bold">Dashboard Statistics</h1>
      <div className="bg-white p-6 rounded-2xl flex gap-5 items-center">
        {widgets?.map((el: WidgetI) => {
          return <Widget key={el?.id} {...el} />;
        })}
      </div>
    </div>
  );
};

export default DashboardStatistics;
