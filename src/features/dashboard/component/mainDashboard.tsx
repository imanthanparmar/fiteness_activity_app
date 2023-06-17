import React from "react";
import HeartRateChart from "./heartRateChart";
import { FITNESS_DATA } from "shared/constants/constants";
const MainDashboard: React.FC = () => {
    const data = FITNESS_DATA
  return (
    <div className="main-dashboard-container">
        <HeartRateChart userActivities={data.activities}/>
    </div>
  );
};

export default MainDashboard;
