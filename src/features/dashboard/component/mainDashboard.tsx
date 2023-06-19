import React from "react";

import { FITNESS_DATA } from "shared/constants/constants";

import HeartRateChart from "./heartRateChart";
import TodayActivities from "./todaysActivities";
import Activities from "./activities";
import StepsChart from "./stepsBarChart";

const MainDashboard: React.FC = () => {
  const data = FITNESS_DATA;
  return (
    <div className="main-dashboard-container">
      <div className="flex flex--wrap">
        <HeartRateChart userActivities={data.activities} />
        <Activities />
      </div>
      <div className="flex mt--30">
        <StepsChart />
        <TodayActivities />
      </div>
    </div>
  );
};

export default MainDashboard;
