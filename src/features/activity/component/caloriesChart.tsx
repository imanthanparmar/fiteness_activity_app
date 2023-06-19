import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler,
    ChartOptions
} from 'chart.js';
import Spinner from 'shared/components/spinner/spinner';
import { useParams } from 'react-router-dom';
import { ACTIVITYDATA } from 'shared/constants/constants';

interface ILineChartData {
	labels: string[];
	datasets: {
		label: string;
		data: number[];
		fill: boolean;
		backgroundColor: string;
		borderColor: string;
		borderWidth: number;
		borderDash: number[];
		borderDashOffset: number;
	}[];
}

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const CaloriesChart = () => {
    const params = useParams()
    const activityData = ACTIVITYDATA[params.id || 0].weeklyData
	const transformData = (data: any) => {
		const chartData: ILineChartData = {
			labels: [] as string[],
			datasets: [
				{
					label: 'Calories',
					data: [],
					fill: true, // Fill the area under the line
					backgroundColor: '#9ecbe3',
					borderColor: '#5893ff', // Border color of the line,
					borderWidth: 4,
					borderDash: [],
					borderDashOffset: 0.0
				}
			]
		};

		data.forEach((item: any) => {
			chartData.labels.push(item.date);
			chartData.datasets[0].data.push(Math.round(item.kcal));
		});

		return chartData;
	};
	const chartData = transformData(activityData.activities);
	return (
		<div className='p--20 line-graph--container'>
			{chartData ? <Line data={chartData} options={lineChartOption} width={1040} height={520} className='m--30' /> : <Spinner />}
		</div>
	);
};

export default CaloriesChart;

export const lineChartOption: ChartOptions<'line'> = {
	plugins: {
		legend: {
			display: true
		},
		tooltip: {
			mode: 'index',
			intersect: true,
			displayColors: false
		}
	},
	elements: {
		line: {
			tension: 0.4 // smooth lines
		}
	},

	scales: {
		x: {
			type: 'category',
			ticks: {
				display: true
			},
			grid: {
				display: true
			}
		},
		y: {
			type: 'linear',
			beginAtZero: true,
			ticks: {
				color: 'black',
				font: {
					weight: 'bold',
					size: 15
				}
			},
			grid: {
				display: true
			}
		}
	}
};