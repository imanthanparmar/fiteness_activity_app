import React from "react";
import Header from "../component/header";

import "../style/dashboard.scss";
import { FITNESS_DATA } from "shared/constants/constants";
import MainDashboard from "../component/mainDashboard";
import Profile from "../component/profile";
import { IFitnessData } from "../interface/dashboard.interface";

const DashboardContainer: React.FC = () => {
  const data: IFitnessData | any = FITNESS_DATA;
  return (
    <div className="main-container">
      <div className="dashboard-main">
        <Header name={data.user.name} />
        <MainDashboard />
      </div>
      <Profile profileData={data.user} />
    </div>
  );
};

export default DashboardContainer;
