import React, { Fragment, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ACTIVITYDATA } from "shared/constants/constants";
import CustomModal from "shared/modal/modal";

interface IProps {
  setIsOpen: (action: boolean) => void;
}

const ActivityPopup: React.FC<IProps> = (props) => {
  const { setIsOpen } = props;
  const data = ACTIVITYDATA;
  const navigate = useNavigate();
  const handleOnClick = useCallback((index: number) => {
    navigate(`/activities/${index}`);
    setIsOpen(false);
  }, []);
  return (
    <CustomModal show={true} handleClose={() => setIsOpen(false)}>
      <Fragment>
        {data.map((item: any, index: number) => {
          console.log("item", item);
          return (
            <div
              key={index}
              onClick={() => handleOnClick(index)}
              className="activity-name flex justify-content--between cursor--pointer"
            >
              <h3>{item.name}</h3>
              <h3>&gt;&gt;&gt;</h3>
            </div>
          );
        })}
      </Fragment>
    </CustomModal>
  );
};

export default ActivityPopup;
