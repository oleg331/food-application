import { StatusBar } from "expo-status-bar";
import { registerRootComponent } from "expo";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { Text } from "react-native";
import { RootStackParamList } from "./types";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const Stack = createStackNavigator();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <>
      <Navigation colorScheme={colorScheme} />
      <StatusBar />
    </>
  );
}
