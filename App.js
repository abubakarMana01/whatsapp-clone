import "react-native-gesture-handler";
import React from "react";
import {
  Platform,
  StyleSheet,
  StatusBar as SB,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import Navigator from "./src/navigators";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigator />
      <StatusBar style="light" backgroundColor="#084d44" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? SB.currentHeight : 0,
  },
});
