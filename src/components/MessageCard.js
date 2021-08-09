import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableHighlight,
} from "react-native";

import { colors } from "../config";
const MessageCard = ({ user, chats, navigation }) => {
	let unreadDate = new Date(
		chats.messages[chats.messages.length - 1].createdAt
	);

	useEffect(() => {}, []);

	let todaysDate = new Date();

	const yesterdaysDate = new Date(todaysDate);
	yesterdaysDate.setDate(yesterdaysDate.getDate() - 1);

	const [justdate, setJustDate] = useState(unreadDate.toLocaleDateString());
	const [justTime, setJustTime] = useState(
		unreadDate.getHours() + ":" + unreadDate.getMinutes()
	);

	return (
		<TouchableHighlight
			onPress={() =>
				navigation.navigate("Chat", {
					headerTitle: user.name,
					profileImg: user.imageUri,
				})
			}
			activeOpacity={0.9}
		>
			<View style={styles.card}>
				<View style={styles.profileImgContainer}>
					<Image style={styles.profileImg} source={{ uri: user.imageUri }} />
				</View>
				<View style={styles.info}>
					<View style={styles.top}>
						<Text numberOfLines={1} style={styles.title}>
							{user.name}
						</Text>
						<Text
							style={{
								...styles.time,
								color:
									user.numberOfUnreadMessages === 0
										? colors.darkgrey
										: colors.lightGreen,
							}}
						>
							{unreadDate.toDateString() === todaysDate.toDateString()
								? justTime
								: unreadDate.toDateString() === yesterdaysDate.toDateString()
								? "Yesterday"
								: justdate}
						</Text>
					</View>
					<View style={styles.bottom}>
						<Text numberOfLines={1} style={styles.unreadMessage}>
							{user.unreadMessage}
						</Text>
						{user.numberOfUnreadMessages > 0 ? (
							<View style={styles.unreadContainer}>
								<Text style={styles.numberOfUnread}>
									{user.numberOfUnreadMessages}
								</Text>
							</View>
						) : null}
					</View>
				</View>
			</View>
		</TouchableHighlight>
	);
};

export default MessageCard;

const styles = StyleSheet.create({
	card: {
		backgroundColor: colors.white,
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 15,
		paddingHorizontal: 10,
	},
	profileImgContainer: {
		width: 45,
		height: 45,
		overflow: "hidden",
	},
	profileImg: {
		width: "100%",
		height: "100%",
		borderRadius: 22.5,
	},
	info: {
		marginLeft: 15,
		marginRight: 5,
		flex: 1,
		justifyContent: "space-between",
	},
	top: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		flex: 1,
		width: "100%",
		marginBottom: 5,
	},
	bottom: {
		flexDirection: "row",
		justifyContent: "space-between",
		flex: 1,
	},
	title: {
		fontWeight: "700",
		fontSize: 17,
		maxWidth: "80%",
	},
	unreadMessage: {
		color: "#00000085",
		fontSize: 15,
		maxWidth: "90%",
	},
	time: {
		fontSize: 12,
		color: colors.lightGreen,
	},
	unreadContainer: {
		width: 20,
		height: 20,
		borderRadius: 10,
		backgroundColor: colors.lightGreen,
		justifyContent: "center",
		alignItems: "center",
	},
	numberOfUnread: {
		color: colors.white,
		fontSize: 10,
	},
});
