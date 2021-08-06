import React from "react";
import { Button, StyleSheet, Text, View, ImageBackground } from "react-native";

const ChatScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/images/chatbackground.jpg")}
      resizeMode="cover"
      style={styles.image}
    ></ImageBackground>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});
