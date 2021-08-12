import React, { useEffect } from "react";
import { StyleSheet, View, FlatList, BackHandler, Alert } from "react-native";

import users from "../data/users";
import chats from "../data/Chats";
import MessageCard from "../components/MessageCard";
import { colors } from "../config";
import AddChatFloatingButton from "../components/AddChatFloatingButton";

const ChatsScreen = ({ navigation }) => {
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to exit Mi Messenger?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        { text: "YES", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

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
