import React from "react";
import "../style/activity.scss";
import ActivityData from "../component/activityData";
import { useParams } from "react-router-dom";
import { ACTIVITYDATA } from "shared/constants/constants";

const ActivityContainer: React.FC = () => {
  const params = useParams();

  return (
    <div className="main-container">
      <div>
        <h2 className="mt--30 ml--20" >{ACTIVITYDATA[params.id || 0].name}</h2>
        <ActivityData />
      </div>
    </div>
  );
};

export default ActivityContainer;
