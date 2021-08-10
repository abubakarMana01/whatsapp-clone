import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "../config";

const AddChatFloatingButton = () => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <MaterialIcons name="chat" color={colors.white} size={24} />
    </TouchableOpacity>
  );
};

export default AddChatFloatingButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: colors.lightGreen,
    height: 55,
    width: 55,
    borderRadius: 27.5,
    justifyContent: "center",
    alignItems: "center",
  },
});
