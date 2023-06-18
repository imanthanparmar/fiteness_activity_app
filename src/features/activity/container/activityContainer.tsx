import React from "react";
import "../style/activity.scss";
import ActivityData from "../component/activityData";
import { useNavigate, useParams } from "react-router-dom";
import { ACTIVITYDATA } from "shared/constants/constants";
import CaloriesChart from "../component/caloriesChart";

const ActivityContainer: React.FC = () => {
  const params = useParams();

  const navigate = useNavigate()

  return (
    <div className="main-container">
      <div>
        <div onClick={() => navigate(-1)} className="back-btn">
            Back
        </div>
        <h2 className="mt--30 ml--20" >{ACTIVITYDATA[params.id || 0].name}</h2>
        <ActivityData />
        <CaloriesChart/>
      </div>
    </div>
  );
};

export default ActivityContainer;
