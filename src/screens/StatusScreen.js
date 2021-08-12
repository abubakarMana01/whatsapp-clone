import React, { useEffect } from "react";
import { StyleSheet, Text, View, BackHandler } from "react-native";

const StatusScreen = ({ navigation }) => {
  useEffect(() => {
    const backAction = () => {
      navigation.navigate("Chats");
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
  return (
    <View>
      <Text>Status</Text>
    </View>
  );
};

export default StatusScreen;

const styles = StyleSheet.create({});
