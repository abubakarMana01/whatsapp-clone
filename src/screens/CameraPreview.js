import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  BackHandler,
} from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { colors } from "../config";

const ImageCaptionBox = () => {
  const navigation = useNavigation();
  const [caption, setCaption] = useState("");
  const handleSendMessage = () => {
    setCaption("");
  };
  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputBox}>
        <TouchableOpacity activeOpacity={0.7}>
          <MaterialIcons
            name="photo-library"
            size={24}
            color={colors.darkgrey}
          />
        </TouchableOpacity>
        <TextInput
          multiline
          placeholder="Add a caption..."
          style={styles.textInput}
          value={caption}
          onChangeText={(text) => setCaption(text)}
        />
        <TouchableOpacity activeOpacity={0.7}>
          <MaterialCommunityIcons
            name="numeric-1-circle-outline"
            size={24}
            color={colors.darkgrey}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.doneContainer}
        onPress={() => navigation.navigate("Chats")}
      >
        <MaterialCommunityIcons name="check" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const CameraPreview = ({ photo, setShowPreview }) => {
  const navigation = useNavigation();

  useEffect(() => {
    const backAction = () => {
      navigation.navigate("Camera");
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <>
      <View style={styles.imageContainer}>
        <View style={styles.editingOptions}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => setShowPreview(false)}
          >
            <MaterialCommunityIcons
              name="arrow-left"
              size={30}
              color="white"
              style={styles.editingIcons}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="crop-rotate"
              size={24}
              color="white"
              style={styles.editingIcons}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="emoticon-happy-outline"
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
            <MaterialCommunityIcons
              name="pencil-outline"
              size={24}
              color="white"
              style={styles.editingIcons}
            />
          </TouchableOpacity>
        </View>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <ImageBackground
            source={{ uri: photo && photo.uri }}
            style={{
              height: "100%",
              width: "100%",
              flex: 1,
            }}
          ></ImageBackground>
        </TouchableWithoutFeedback>
      </View>
      <ImageCaptionBox />
    </>
  );
};

export default CameraPreview;

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: "transparent",
    width: "100%",
    height: Dimensions.get("window").height - 90,
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
    paddingHorizontal: 10,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: Platform.OS === "android" ? 0 : 10,
    marginHorizontal: 10,
    position: "absolute",
    bottom: 0,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "flex-end",
    flex: 1,
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 25,
  },
  doneContainer: {
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
    fontSize: 18,
  },
  textBoxRightIcons: {
    marginHorizontal: 5,
  },
});
