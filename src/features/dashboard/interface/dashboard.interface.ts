export interface IFitnessData {
  user: IUserData;
  activities: IActivityData[];
  sleepDataWeekly: ISleepDataWeekly
}

export interface IUserData {
  id: number;
  name: string;
  email: string;
  age: number;
  height: number;
  weight: number;
  oxygen_level: number;
}

export interface IActivityData {
  id: string;
  name: string;
  date: string;
  duration: number;
  distance: number;
  calories_burned: number;
  heart_rate: IHeartRateData;
  steps: number;
  pace: IPaceData;
  weeklyData: weeklyData;
  elevation_gain: number;
}

export interface IHeartRateData {
  average: number;
  max: number;
}

export interface IPaceData {
  average: number;
  best: number;
}

export interface weeklyData {
  week: string;
  activities: IWeeklyActivityData[];
}

export interface IWeeklyActivityData {
  date: string;
  distance: number;
  duration: string;
  kcal: number;
}

export interface ISleepDataWeekly {
  week: string;
  activities: ISleepDataWeeklyActivities[];
}

export interface ISleepDataWeeklyActivities {
  date: string;
  duration: number;
  heart_rate: IHeartRateData;
  label: string;
}

export interface IChartData {
	labels: string[];
	datasets: {
		label: string;
		data: number[];
		fill: boolean;
		backgroundColor: string;
		borderColor: string;
		borderWidth: number;
		barThickness: number;
		borderRadius: number;
	}[];
}