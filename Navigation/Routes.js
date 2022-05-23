import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../Screens/HomeScreen";
import { AuthStack } from "./AuthStack";

const Routes = () => {
  const user = false;

  return (
    <NavigationContainer>
      {user ? <HomeScreen /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
