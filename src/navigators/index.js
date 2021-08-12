import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { DefaultTheme } from "@react-navigation/native";

import StackNavigator from "./StackNavigator";

const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#ffffff",
    notification: "red",
  },
};

const Navigator = () => {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
