import React, { useState } from "react";
import { FireIcon, FootIcon, MoonIcon } from "shared/components/icons/icons";
import { FITNESS_DATA } from "shared/constants/constants";
import CustomModal from "shared/modal/modal";
import ActivityPopup from "./activityPopup";

const Activities: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
  const data = FITNESS_DATA.activities;
  return (
    <div className="activities-container flex">
      <div className="activity-card">
        <div className="activity-icon">
          <FootIcon />
        </div>
        <h6 className="mb--10">{data[0].name}</h6>
        <p>{data[0].steps} Steps</p>
      </div>
      <div className="activity-card">
        <div className="activity-icon orange-bg">
          <FireIcon />
        </div>
        <h6 className="mb--10">Calories</h6>
        <p>{data[0].calories_burned} Kcal</p>
      </div>
      <div className="activity-card">
        <div className="activity-icon">
          <MoonIcon />
        </div>
        <h6 className="mb--10">Sleep</h6>
        <p>4.5 Hours</p>
      </div>
      <div className="activity-card flex align-items--center show-more" onClick={() => setIsOpen(true)}>
        <div className="cursor--pointer">
          <p>Show</p>
          <p>more &gt;&gt;&gt;</p>
        </div>
      </div>
      {isOpen && <ActivityPopup setIsOpen={setIsOpen}/>}
    </div>
  );
};

export default Activities;
