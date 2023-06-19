import { useCallback, useEffect, useState } from "react";
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
import { barChartOptions } from "shared/constants/constants";
import { HeartIcon } from "shared/components/icons/icons";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface IProps {
  userActivities: any;
}

const HeartRateChart: React.FC<IProps> = (props) => {
  const { userActivities } = props;
  
  const [averageHeartRate, setAverageHeartRate] = useState<number>();
  const [maxHeartRateBpm, setMaxHeartRateBpm] = useState<number>();

  const handleChartData = useCallback((userActivities: any) => {
    const chartData: any = {
      labels: [],
      datasets: [
        {
          label: "Average heart-rate",
          data: [],
          fill: true, // Fill the area under the line
          backgroundColor: "#5792ff",
          borderColor: "#5792ff",
          borderWidth: 0.5,
          barThickness: 6,
          borderRadius: 25,
        },
      ],
    };

    userActivities.forEach((item: any) => {
      chartData.labels.push(item.name);
      chartData.datasets[0].data.push(Math.trunc(item.heart_rate.average));
    });

    return chartData;
  },[]);

  const chartData = handleChartData(userActivities);

  const heartRateAverage = useCallback(() => {
    let averageHeartRate = 0;
    let maxHeartRate = 0;
    userActivities.forEach((activity: any) => {
      if (activity.heart_rate) {
        const { average, max } = activity.heart_rate;
        averageHeartRate += average;
        maxHeartRate += max;
      }
    });
    setAverageHeartRate(averageHeartRate / userActivities.length);
    setMaxHeartRateBpm(maxHeartRate / userActivities.length);
  }, [userActivities]);

  useEffect(() => {
    heartRateAverage();
  }, []);

  return (
    <div className="heart-rate-chart-container">
      <div className="mb--20 flex justify-content--between align-items--center">
        <div className="flex justify-content--between align-items--center">
          <span className="heart-icon">
            <HeartIcon />
          </span>
          <span className="ml--10">Heart Rate</span>
        </div>
        <p className="font-size--sm font--regular">
          {averageHeartRate} - {maxHeartRateBpm}{" "}
          <span className="font--regular">BPM</span>
        </p>
      </div>
      <Bar
        options={barChartOptions}
        data={chartData as IChartData}
        className="bar-chart__container m--30"
      />
    </div>
  );
};

export default HeartRateChart;
