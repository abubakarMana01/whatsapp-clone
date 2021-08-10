import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
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
      <ImageBackground
        source={{ uri: photo && photo.uri }}
        style={{
          flex: 1,
        }}
      >
        <View style={styles.editingOptions}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => setShowPreview(false)}
          >
            <Ionicons
              name="arrow-back"
              size={30}
              color="white"
              style={styles.editingIcons}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo
              name="emoji-happy"
              size={27}
              color="white"
              style={styles.editingIcons}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <SimpleLineIcons
              name="pencil"
              size={27}
              color="white"
              style={styles.editingIcons}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons
              name="crop-rotate"
              size={27}
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
        </View>
      </ImageBackground>
    </View>
  );
};

export default CameraPreview;

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: "transparent",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  editingOptions: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  editingIcons: {
    marginHorizontal: 10,
  },
});
