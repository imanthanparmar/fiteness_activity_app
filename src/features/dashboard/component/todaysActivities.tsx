import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FITNESS_DATA } from "shared/constants/constants";

const TodayaActivities = () => {
  const activityData = FITNESS_DATA.activities;
  const averageDuration =
    (activityData[0].duration + activityData[1].duration) / 2;
  return (
    <div className="ml--30">
      <h5 className="mb--20 mt--20">Today's Activity</h5>
      <div className="progressbar-main__container">
        <div className="progress-bar-container">
          <div className="outer-path">
            <CircularProgressbar
              value={activityData[0].duration}
              text={`${averageDuration}%`}
              strokeWidth={10}
              styles={buildStyles({
                strokeLinecap: "butt",
                pathColor: `rgba(62, 152, 199, 0.8)`,
                trailColor: "#d6d6d6",
              })}
            />
          </div>
          <div className="inner-path">
            <CircularProgressbar
              value={activityData[1].duration}
              strokeWidth={8}
              styles={buildStyles({
                strokeLinecap: "butt",
                pathColor: `rgba(62, 152, 199, 0.5)`,
                trailColor: "transparent",
              })}
            />
          </div>
        </div>
        <div className="details-container">
          <div>
            <span className="font-size--22 font--medium flex align-items--center">
              <div className="blue-dot" />
              {activityData[0].name}
            </span>
            <span className="font-size--sm">
              {activityData[0].duration} Minutes
            </span>
          </div>
          <div className="mt--20">
            <span className="font-size--22 font--medium flex align-items--center">
              <div className="light-blue-dot" />

              {activityData[1].name}
            </span>
            <span className="font-size--sm">
              {activityData[1].duration} Minutes
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayaActivities;
