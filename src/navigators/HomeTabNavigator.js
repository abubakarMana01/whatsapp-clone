import React, { useEffect } from "react";
import { StyleSheet, View, Button } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons } from "@expo/vector-icons";

import ChatsScreen from "../screens/ChatsScreen";

import StatusScreen from "../screens/StatusScreen";
import CallsScreen from "../screens/CallsScreen";
import CameraScreen from "../screens/CameraScreen";
import { colors } from "../config";

const Tab = createMaterialTopTabNavigator();

const Camera = ({ navigation }) => {
  useEffect(() => {
    navigation.navigate("CameraScreen");
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Button
        title="Camera"
        onPress={() => navigation.navigate("CameraScreen")}
      />
    </View>
  );
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
        }}
      />
      <Tab.Screen component={ChatsScreen} name="Chats" />
      <Tab.Screen component={StatusScreen} name="Status" />
      <Tab.Screen component={CallsScreen} name="Calls" />
    </Tab.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
