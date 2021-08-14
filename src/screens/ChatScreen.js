import React, {useEffect} from "react";
import { StyleSheet, ImageBackground, FlatList, BackHandler } from "react-native";

import ChatInputBox from "../components/ChatInputBox";
import chats from "../data/Chats";
import ChatBox from "../components/ChatBox";

const ChatScreen = ({ route, navigation }) => {
  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
  return (
    <ImageBackground
      source={require("../../assets/images/chatbackground.jpg")}
      resizeMode="repeat"
      style={styles.image}
    >
      <FlatList
        keyExtractor={(item) => item.id}
        data={chats.messages}
        renderItem={({ item: message }) => {
          return (
            <ChatBox senderName={route.params.headerTitle} message={message} />
          );
        }}
      />

      <ChatInputBox />
    </ImageBackground>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});
