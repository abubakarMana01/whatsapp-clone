import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors } from "../config";

const ChatBox = ({ message }) => {
	const isMyMessage = () => {
		return message.user.id === "u1";
	};
	return (
		<View
			style={[
				styles.chatContainer,
				{
					backgroundColor: isMyMessage() ? "#d9f5c1" : colors.white,
					marginRight: isMyMessage() ? 15 : 70,
					marginLeft: isMyMessage() ? 70 : 15,
				},
			]}
		>
			{!isMyMessage() && (
				<Text style={styles.username}>{message.user.name}</Text>
			)}
			<Text style={{ marginBottom: 10 }}>{message.content}</Text>
			<Text
				style={{
					textAlign: "right",
					fontSize: 12,
					color: colors.darkgrey,
					position: "absolute",
					bottom: 5,
					right: 15,
				}}
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
	},
	username: {
		color: "dodgerblue",
		marginBottom: 5,
	},
});
