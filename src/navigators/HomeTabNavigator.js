import React, { useEffect } from "react";
import { StyleSheet, View, Button } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useIsFocused } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import ChatsScreen from "../screens/ChatsScreen";

import StatusScreen from "../screens/StatusScreen";
import CallsScreen from "../screens/CallsScreen";
import CameraScreen from "../screens/CameraScreen";
import { colors } from "../config";

const Tab = createMaterialTopTabNavigator();

const Camera = ({ navigation }) => {
  const isFocused = useIsFocused();
  useEffect(() => {
    isFocused ? navigation.navigate("CameraScreen") : null;
  });
  return <View style={{ flex: 1, backgroundColor: "#000" }}></View>;
};

const AppNavigator = () => {
  return (
    <Tab.Navigator
      style={{ width: "100%" }}
      initialRouteName="Chats"
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: colors.white,
        },
        tabBarActiveTintColor: colors.white,
        tabBarStyle: {
          backgroundColor: colors.green,
        },
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: "700",
        },
        tabBarIndicatorStyle: {
          height: 3,
          backgroundColor: colors.white,
        },
      }}
    >
      <Tab.Screen component={ChatsScreen} name="Chats" />
      <Tab.Screen
        component={Camera}
        name="Camera"
        options={{
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <Ionicons name="camera" size={25} color={colors.white} />
            ) : (
              <Ionicons name="camera" size={25} color={color} />
            ),
          tabBarShowLabel: false,
          tabBarStyle: { height: 0 },
        }}
      />
      <Tab.Screen component={StatusScreen} name="Status" />
      <Tab.Screen component={CallsScreen} name="Calls" />
    </Tab.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
