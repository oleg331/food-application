import * as React from "react";
import { StyleSheet, ImageBackground } from "react-native";

import { View } from "../components/Themed";
import FocusAwareStatusBar from "../components/FocusAwareStatusBar";

export default function TabFavoritesScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/bg-favorites.jpg")}
        style={styles.image}
      ></ImageBackground>
      <FocusAwareStatusBar barStyle="light-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
