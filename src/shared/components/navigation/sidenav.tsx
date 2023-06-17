import React, { useCallback, useState } from "react";
import "./style/sidenav.scss";
import { ActivityIcon, HomeIcon, TrackerIcon } from "../icons/icons";
import { useNavigate } from "react-router-dom";

interface INavArray {
  id: number;
  name: string;
  icon: JSX.Element;
  route: string;
}

const Sidenav: React.FC = () => {
  const [activeSidenav, setActiveSidenav] = useState(0);
  const navigate = useNavigate();

  const handleOnClick = useCallback((id: number, navigationPath: string) => {
    navigate(navigationPath);
    setActiveSidenav(id);
  }, []);
  return (
    <div className="sidenav-container">
      <div className="main-icon active-background">
        <TrackerIcon />
      </div>
      <div className="main-tabs_container pt--50">
        {NAVARRAY.map((item: INavArray) => {
          return (
            <div className="pt--20 cursor--pointer">
              <div
                onClick={() => handleOnClick(item.id, item.route)}
                className={`main-icon ${
                  activeSidenav === item.id && "active-background"
                }`}
              >
                {item.icon}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidenav;

const NAVARRAY: INavArray[] = [
  {
    id: 0,
    name: "dashboard",
    icon: <HomeIcon />,
    route: "/dashboard",
  },
  {
    id: 1,
    name: "activity",
    icon: <ActivityIcon />,
    route: "/activity",
  },
];
