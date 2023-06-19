import React from "react";
import { WavingHandIcon } from "shared/components/icons/icons";

interface IProps {
  name: string
}
const Header: React.FC<IProps> = (props) => {
  const {
    name
  } = props
  return (
    <div className="header-container">
      <h1 className="pl--20 font--medium">
        Welcome, <span className="font--light font-size--26">{name.split(' ')[0]}</span>{" "}
        <span>
          <WavingHandIcon />
        </span>{" "}
      </h1>
      <p className="pl--20 mt--10 font--light">
        Here's your summary progress in health the last month.
      </p>
    </div>
  );
};

export default Header;
