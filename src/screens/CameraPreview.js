import { Feather } from "@expo/vector-icons";
import React from "react";
import {
	StyleSheet,
	View,
	ImageBackground,
	TouchableOpacity,
	Dimensions,
	BackHandler,
} from "react-native";

import {
	Entypo,
	SimpleLineIcons,
	MaterialIcons,
	MaterialCommunityIcons,
} from "@expo/vector-icons";

const CameraPreview = ({ photo, setShowPreview }) => {
	return (
		<View style={styles.imageContainer}>
			<View style={styles.editingOptions}>
				<TouchableOpacity
					style={{ flex: 1 }}
					onPress={() => setShowPreview(false)}
				>
					<Feather
						name="arrow-left"
						size={30}
						color="white"
						style={styles.editingIcons}
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<MaterialIcons
						name="crop-rotate"
						size={24}
						color="white"
						style={styles.editingIcons}
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<Entypo
						name="emoji-happy"
						size={24}
						color="white"
						style={styles.editingIcons}
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<MaterialCommunityIcons
						name="format-text"
						size={29}
						color="white"
						style={styles.editingIcons}
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<SimpleLineIcons
						name="pencil"
						size={20}
						color="white"
						style={styles.editingIcons}
					/>
				</TouchableOpacity>
			</View>
			<ImageBackground
				source={{ uri: photo && photo.uri }}
				style={{
					height: Dimensions.get("window").height - 120,
					width: "100%",
				}}
			></ImageBackground>
		</View>
	);
};

export default CameraPreview;

const styles = StyleSheet.create({
	imageContainer: {
		backgroundColor: "transparent",
		width: "100%",
		flex: 1,
	},
	editingOptions: {
		flexDirection: "row",
		alignItems: "center",
		paddingLeft: 0,
		paddingRight: 10,
		paddingBottom: 10,
		paddingTop: 10,
	},
	editingIcons: {
		marginHorizontal: 10,
	},
});
