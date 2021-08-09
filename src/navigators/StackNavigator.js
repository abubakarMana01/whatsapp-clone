import React from "react";
import {
	Pressable,
	StyleSheet,
	View,
	Image,
	TouchableHighlight,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeTabNavigator from "./HomeTabNavigator";
import SettingsScreen from "../screens/SettingsScreen";
import { colors } from "../config";
import {
	Ionicons,
	MaterialCommunityIcons,
	MaterialIcons,
} from "@expo/vector-icons";
import ChatScreen from "../screens/ChatScreen";

const Stack = createStackNavigator();

const StackHeaderRight = () => (
	<View style={styles.headerRight}>
		<Pressable>
			<Ionicons name="ios-search-sharp" color={colors.white} size={23} />
		</Pressable>
		<Pressable>
			<MaterialCommunityIcons
				style={styles.headerIcon}
				name="dots-vertical"
				color={colors.white}
				size={25}
			/>
		</Pressable>
	</View>
);

const ChatScreenStackHeaderRight = () => (
	<View style={styles.headerRight}>
		<TouchableHighlight
			underlayColor="#ffffff50"
			onPress={() => {}}
			style={styles.pressable}
		>
			<Ionicons name="videocam" color={colors.white} size={22} />
		</TouchableHighlight>
		<TouchableHighlight
			underlayColor="#ffffff50"
			onPress={() => {}}
			style={styles.pressable}
		>
			<MaterialIcons name="local-phone" color={colors.white} size={22} />
		</TouchableHighlight>
		<TouchableHighlight
			underlayColor="#ffffff50"
			onPress={() => {}}
			style={{ marginRight: 10, borderRadius: 30, padding: 5 }}
		>
			<MaterialCommunityIcons
				name="dots-vertical"
				color={colors.white}
				size={25}
			/>
		</TouchableHighlight>
	</View>
);

const ChatScreenStackHeaderLeft = ({ navigation, route }) => (
	<TouchableHighlight
		underlayColor={"#ffffff50"}
		style={{ borderRadius: 30, padding: 5, marginLeft: 5 }}
		onPress={() => {}}
		onPress={() => navigation.goBack()}
	>
		<View
			style={{
				flexDirection: "row",
				alignItems: "center",
				marginLeft: 5,
			}}
		>
			<Ionicons name="arrow-back" size={25} color="white" />
			<View style={styles.profileImgContainer}>
				<Image
					style={styles.profileImg}
					source={{ uri: route.params.profileImg }}
				/>
			</View>
		</View>
	</TouchableHighlight>
);

const StackNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerTitle: "WhatsApp",
				headerTitleStyle: { fontSize: 19 },
				headerStyle: {
					elevation: 0,
					shadowOpacity: 0,
					backgroundColor: colors.green,
				},
				headerTintColor: colors.white,
				headerRight: () => <StackHeaderRight />,
			}}
		>
			<Stack.Screen component={HomeTabNavigator} name="General" />
			<Stack.Screen component={SettingsScreen} name="Settings" />
			<Stack.Screen
				component={ChatScreen}
				name="Chat"
				options={({ navigation, route }) => {
					return {
						headerMode: "screen",
						headerTitle: route.params.headerTitle,
						headerLeft: () => (
							<ChatScreenStackHeaderLeft
								route={route}
								navigation={navigation}
							/>
						),
						headerRight: () => <ChatScreenStackHeaderRight />,
						headerTitleAlign: "left",
						headerTitleStyle: { margin: 0, fontSize: 20 },
					};
				}}
			/>
		</Stack.Navigator>
	);
};

export default StackNavigator;

const styles = StyleSheet.create({
	headerRight: {
		flexDirection: "row",
		alignItems: "center",
	},
	headerIcon: {
		marginHorizontal: 10,
		marginLeft: 15,
	},
	profileImgContainer: {
		width: 35,
		height: 35,
		overflow: "hidden",
	},
	profileImg: {
		width: "100%",
		height: "100%",
		borderRadius: 22.5,
	},
	pressable: {
		padding: 10,
		borderRadius: 30,
		marginRight: 5,
	},
});
