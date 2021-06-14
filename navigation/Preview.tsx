import { StackScreenProps } from "@react-navigation/stack";
import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";

import { RootStackParamList } from "../types";
import Button from "../components/Button";

const Preview = ({ navigation }: StackScreenProps<RootStackParamList>) => {
  const image = { uri: require("../assets/images/preview-images/1.jpg") };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/preview-images/1.jpg")}
        style={styles.image}
      >
        <Button
          onPress={() => navigation.replace("Root")}
          title="Start Cooking"
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 100,
  },
});

export default Preview;
