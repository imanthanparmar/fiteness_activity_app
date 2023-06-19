import { useCallback } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { IChartData } from "../interface/dashboard.interface";
import { DAILY_STEPS, stepsBarChartOptions } from "shared/constants/constants";
import { FootIcon} from "shared/components/icons/icons";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);


const StepsChart: React.FC = (props) => {
  const data = DAILY_STEPS
  const handleChartData = useCallback((stepsData: any) => {
    const chartData: any = {
      labels: [],
      datasets: [
        {
          label: "Steps:",
          data: [],
          fill: true, // Fill the area under the line
          backgroundColor: "#5792ff",
          borderColor: "#5792ff",
          borderWidth: 0.5,
          barThickness: 50,
          borderRadius: 25,
        },
      ],
    };

    stepsData.forEach((item: any) => {
      chartData.labels.push(item.day);
      chartData.datasets[0].data.push(Math.trunc(item.stepsCount));
    });

    return chartData;
  },[]);

  const chartData = handleChartData(data);

    return (
    <div className="steps-chart-container">
      <div className="mb--20 flex justify-content--between align-items--center">
        <div className="flex justify-content--between align-items--center">
          <span className="steps-icon">
            <FootIcon />
          </span>
          <h2 className="ml--10 font-size--22">Steps</h2>
        </div>
      </div>
      <Bar
        options={stepsBarChartOptions}
        data={chartData as IChartData}
        className="bar-chart__container m--30"
      />
    </div>
  );
};

export default StepsChart;
