import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import users from "../data/users";
import chats from "../data/Chats";
import MessageCard from "../components/MessageCard";
import { colors } from "../config";
import AddChatFloatingButton from "../components/AddChatFloatingButton";

const ChatsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => {
          return (
            <MessageCard
              messages={chats.messages}
              navigation={navigation}
              user={item}
              chats={chats}
            />
          );
        }}
      />
      <AddChatFloatingButton />
    </View>
  );
};

export default ChatsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
