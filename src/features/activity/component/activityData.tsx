import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ACTIVITYDATA } from "shared/constants/constants";

const ActivityData: React.FC = () => {
  const params = useParams();
  const [data, setData] = useState<any>();
  useEffect(() => {
    if (params.id) {
      setData(ACTIVITYDATA[params.id || 0]);
    }
  }, [params.id]);
  return (
    <div className="mt--40 ml--20 flex flex--wrap">
      {!isEmpty(data) && data && (
        <>
          <div className="activity-data-card">
            <h4 className="mt--0 mb--20">Steps</h4>
            <p>{data.steps} steps</p>
          </div>
          <div className="activity-data-card">
            <h4 className="mt--0 mb--20">Distance</h4>
            <p>{data.distance} KM</p>
          </div>
          <div className="activity-data-card">
            <h4 className="mt--0 mb--20">Average Heart Rate</h4>
            <p>{data.heart_rate.average} BPM</p>
          </div>
          <div className="activity-data-card">
            <h4 className="mt--0 mb--20">Duration</h4>
            <p>{data.duration} Minutes</p>
          </div>
        </>
      )}
    </div>
  );
};

export default ActivityData;
