import "react-native-gesture-handler";
import React, { useState } from "react";
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
      {Platform.OS === "android" ? (
        <StatusBar style="light" backgroundColor="#084d44" />
      ) : (
        <SB barStyle="light-content" backgroundColor="#084d44" />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#084d44",
     marginTop: Platform.OS === "android" ? SB.currentHeight : 0,
  },
});
