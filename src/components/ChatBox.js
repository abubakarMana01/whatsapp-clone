import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors } from "../config";

const ChatBox = ({ message, senderName }) => {
  const isMyMessage = () => {
    return message.user.id === "u1";
  };
  return (
    <View
      style={[
        styles.chatContainer,
        {
          backgroundColor: isMyMessage() ? "#d9f5c1" : colors.white,
          alignSelf: isMyMessage() ? 'flex-end' : 'flex-start'
        },
      ]}
    >
      {!isMyMessage() && <Text style={styles.username}>{senderName}</Text>}
      <Text style={{  fontSize: 16 }}>{message.content}</Text>
      <Text
        style={styles.time}
      >
        {new Date(message.createdAt).getHours() +
          ":" +
          new Date(message.createdAt).getMinutes()}
      </Text>
    </View>
  );
};

export default ChatBox;

const styles = StyleSheet.create({
  chatContainer: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginVertical: 8,
    borderRadius: 12,
    marginHorizontal: 10,
    maxWidth: '80%'
  },
  username: {
    color: "dodgerblue",
  },
  time:{
     fontSize: 12,
     color: colors.darkgrey,
     alignSelf: 'flex-end',
   }
});
