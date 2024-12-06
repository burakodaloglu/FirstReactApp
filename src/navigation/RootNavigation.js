import React from "react";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import AuthStack from "../navigation/AuthStack";
import UserStack from "../navigation/UserStack";

const RootNavigation = () => {
  const isAuthenticated = false;

  return (
    <NavigationIndependentTree>
      {!isAuthenticated ? <AuthStack /> : <UserStack />}
    </NavigationIndependentTree>
  );
};

export default RootNavigation;
