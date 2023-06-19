import React from "react";

import avatarImage from "assets/images/avatar.png";
import { IUserData } from "../interface/dashboard.interface";

interface IProps {
  profileData: IUserData;
}
const Profile: React.FC<IProps> = (props) => {
  const { profileData } = props;
  return (
    <div className="profile-container">
      <h6 className="no--margin font-size--24 font--medium">Profile</h6>
      <div className="image-container mt--40">
        <img src={avatarImage} alt="" />
      </div>
      <h3 className="text--center mt--20">{profileData.name}</h3>
      <h6 className="text--center mt--20 font-size--md font--regular">
        {profileData.email}
      </h6>

      <div className="user-info-container">
        <div>
          <h5>Weight</h5>
          <p className="mt--10">{profileData.weight} kg</p>
        </div>
        <div>
          <h5>Height</h5>
          <p className="mt--10">{profileData.height} cm</p>
        </div>
        <div>
          <h5>Age</h5>
          <p className="mt--10">{profileData.age} years</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
