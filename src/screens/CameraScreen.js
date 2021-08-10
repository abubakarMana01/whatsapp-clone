import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { Camera } from "expo-camera";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import CameraPreview from "./CameraPreview";

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
  const [showPreview, setShowPreview] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
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
          <View style={styles.bottom}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                setFlashMode(
                  flashMode === Camera.Constants.FlashMode.off
                    ? Camera.Constants.FlashMode.on
                    : Camera.Constants.FlashMode.off
                );
              }}
            >
              {Camera.Constants.FlashMode.on == "1" ? (
                <MaterialIcons
                  name="flash-on"
                  size={30}
                  color="white"
                  style={styles.bottomIcons}
                />
              ) : (
                <MaterialIcons
                  name="flash-off"
                  size={30}
                  color="white"
                  style={styles.bottomIcons}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={takePicture}
              activeOpacity={0.8}
              style={styles.snapButton}
            />
            <TouchableOpacity
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
                size={30}
                style={styles.bottomIcons}
              />
            </TouchableOpacity>
          </View>
        </Camera>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  container: {
    flex: 1,
    height: Dimensions.get("window").height,
  },
  snapButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 3,
  },
  bottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  bottomIcons: {
    marginHorizontal: 45,
  },
});
