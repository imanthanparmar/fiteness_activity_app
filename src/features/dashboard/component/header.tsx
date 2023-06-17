import React from "react";
import { WavingHandIcon } from "shared/components/icons/icons";
const Header: React.FC = () => {
  return (
    <div className="header-container">
      <h1 className="pl--20 font--medium">
        Welcome, <span className="font--light font-size--26">Manthan</span>{" "}
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
