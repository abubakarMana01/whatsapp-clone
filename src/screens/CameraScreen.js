import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  BackHandler,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Camera } from "expo-camera";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";

import CameraPreview from "./CameraPreview";
import { colors } from "../config";

export default function CameraScreen({ navigation }) {
  useEffect(() => {
    const backAction = () => {
      navigation.navigate("Chats");
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [showPreview, setShowPreview] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [flashMode, setFlashMode] = useState("off");

  const handleFlashMode = () => {
    if (flashMode === "on") {
      setFlashMode("off");
    } else if (flashMode === "off") {
      setFlashMode("on");
    } else {
      setFlashMode("auto");
    }
  };

  let camera;

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePicture = async () => {
    try {
      const photo = await camera.takePictureAsync();
      setPreviewImage(photo);
      setShowPreview(!showPreview);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor="black" />

      {showPreview && previewImage ? (
        <CameraPreview photo={previewImage} setShowPreview={setShowPreview} />
      ) : (
        <Camera
          flashMode={flashMode}
          style={styles.camera}
          type={type}
          ratio={"16:9"}
          ref={(r) => {
            camera = r;
          }}
        >
          <View style={styles.bottomContainer}>
            <View style={styles.bottom}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  setFlashMode(
                    flashMode == "on" ? setFlashMode("off") : setFlashMode("on")
                  );
                }}
              >
                {flashMode === "on" ? (
                  <TouchableOpacity
                    onPress={handleFlashMode}
                    style={styles.bottomIconsContainer}
                  >
                    <MaterialIcons
                      name="flash-on"
                      size={25}
                      color="white"
                      style={styles.bottomIcons}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={handleFlashMode}
                    style={styles.bottomIconsContainer}
                  >
                    <MaterialIcons
                      name="flash-off"
                      size={25}
                      color="white"
                      style={styles.bottomIcons}
                    />
                  </TouchableOpacity>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={takePicture}
                activeOpacity={0.8}
                style={styles.snapButton}
              />
              <TouchableOpacity
                style={styles.bottomIconsContainer}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}
                activeOpacity={0.8}
              >
                <Ionicons
                  name="camera-reverse"
                  color="white"
                  size={25}
                  style={styles.bottomIcons}
                />
              </TouchableOpacity>
            </View>
            <Text style={{ color: "white" }}>
              Hold for video, tap for photo
            </Text>
          </View>
        </Camera>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  camera: {
    alignItems: "center",
    justifyContent: "flex-end",
    top: 50,
    height: Dimensions.get("screen").height - 170,
  },
  snapButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 2,
  },
  bottomContainer: {
    justifyContent: "center",
    alignItems: "center",
    bottom: -63,
    zIndex: 100,
  },
  bottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  bottomIconsContainer: {
    marginHorizontal: 25,
    height: 70,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
