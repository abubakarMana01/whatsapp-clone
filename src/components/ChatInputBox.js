import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";

import {
	FontAwesome5,
	MaterialCommunityIcons,
	Entypo,
	MaterialIcons,
} from "@expo/vector-icons";
import { colors } from "../config";

const ChatInputBox = () => {
	const [message, setMessage] = useState("");
	const handleSendMessage = () => {
		setMessage("");
	};

	return (
		<View style={styles.inputContainer}>
			<View style={styles.inputBox}>
				<TouchableOpacity activeOpacity={0.7}>
					<FontAwesome5 name="laugh-beam" size={24} color={colors.darkgrey} />
				</TouchableOpacity>
				<TextInput
					multiline
					placeholder="Type a message"
					style={styles.textInput}
					value={message}
					onChangeText={text => setMessage(text)}
				/>
				<TouchableOpacity activeOpacity={0.7}>
					<Entypo
						name="attachment"
						style={styles.textBoxRightIcons}
						size={20}
						color={colors.darkgrey}
					/>
				</TouchableOpacity>
				{!message && (
					<TouchableOpacity activeOpacity={0.7}>
						<FontAwesome5
							name="camera"
							style={styles.textBoxRightIcons}
							size={21}
							color={colors.darkgrey}
						/>
					</TouchableOpacity>
				)}
			</View>
			<TouchableOpacity
				activeOpacity={0.7}
				style={styles.micContainer}
				onPress={handleSendMessage}
			>
				{!message ? (
					<MaterialCommunityIcons
						name="microphone"
						size={24}
						color={colors.white}
					/>
				) : (
					<MaterialIcons name="send" size={24} color={colors.white} />
				)}
			</TouchableOpacity>
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
