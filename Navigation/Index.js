import React from "react";
import Routes from "./Routes";

import Auth from "./Auth";

const AppProvider = () => {
  return (
    <Auth>
      <Routes />
    </Auth>
  );
};

export default AppProvider;
