import * as React from "react";
import { StyleSheet, ImageBackground } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import FocusAwareStatusBar from "../../components/FocusAwareStatusBar";
import RecipesList from "../../components/RecipesList";
import { NavigationContainer } from "@react-navigation/native";
import { HomeRootStackParamList } from "../../types";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import { FoodScreen } from "./FoodScreen";
import Button from "../../components/Button";

const TabHomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/bg-home.jpg")}
        style={styles.image}
      >
        <RecipesList navigation={navigation} />
      </ImageBackground>
      <FocusAwareStatusBar barStyle="light-content" />
    </View>
  );
};

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<HomeRootStackParamList>();

export const HomeRootScreen = ({ navigation }: any) => {
  return (
    <>
      <Stack.Navigator initialRouteName="RootHome" mode="card">
        <Stack.Screen
          name="RootHome"
          component={TabHomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Food"
          component={FoodScreen}
          options={{
            // gestureDirection: "horizontal",
            title: "Test",
            headerShown: true,
            headerLeft: () => (
              <HeaderBackButton
                tintColor="#FF6C37"
                onPress={() => navigation.replace("Root")}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </>
  );
};

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
