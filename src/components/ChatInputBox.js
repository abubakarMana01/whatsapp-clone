import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

import {
	FontAwesome5,
	MaterialCommunityIcons,
	Entypo,
	Fontisto,
	Ionicons,
} from "@expo/vector-icons";
import { colors } from "../config";

const ChatInputBox = () => {
	return (
		<View style={styles.inputContainer}>
			<View style={styles.inputBox}>
				<FontAwesome5 name="laugh-beam" size={24} color={colors.darkgrey} />
				<TextInput
					multiline
					placeholder="Type a message"
					style={styles.textInput}
				/>
				<Entypo
					name="attachment"
					style={styles.textBoxRightIcons}
					size={20}
					color={colors.darkgrey}
				/>
				<Fontisto
					name="camera"
					style={styles.textBoxRightIcons}
					size={20}
					color={colors.darkgrey}
				/>
			</View>
			<View style={styles.micContainer}>
				<MaterialCommunityIcons
					name="microphone"
					size={24}
					color={colors.white}
				/>
			</View>
		</View>
	);
};

export default ChatInputBox;

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: "row",
		alignItems: "flex-end",
		marginHorizontal: 10,
		marginBottom: 10,
	},
	inputBox: {
		flexDirection: "row",
		alignItems: "flex-end",
		flex: 1,
		backgroundColor: colors.white,
		padding: 10,
		borderRadius: 25,
	},
	micContainer: {
		width: 45,
		height: 45,
		backgroundColor: colors.green,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 22.5,
		marginLeft: 5,
	},
	textInput: {
		flex: 1,
		marginLeft: 10,
	},
	textBoxRightIcons: {
		marginHorizontal: 5,
	},
});
