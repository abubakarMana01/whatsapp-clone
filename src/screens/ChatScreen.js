import moment from "moment";
import React from "react";
import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	FlatList,
} from "react-native";

import ChatInputBox from "../components/ChatInputBox";
import chats from "../data/Chats";
import ChatBox from "../components/ChatBox";

const ChatScreen = () => {
	return (
		<ImageBackground
			source={require("../../assets/images/chatbackground.jpg")}
			resizeMode="cover"
			style={styles.image}
		>
			<FlatList
				keyExtractor={item => item.id}
				data={chats.messages}
				renderItem={({ item: message }) => {
					return <ChatBox message={message} />;
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
