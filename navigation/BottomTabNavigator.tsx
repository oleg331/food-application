import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import TabHomeScreen from "../screens/TabHomeScreen";
import TabCalendarScreen from "../screens/TabCalendarScreen";
import TabBasketScreen from "../screens/TabBasketScreen";
import TabFavoritesScreen from "../screens/TabFavoritesScreen";
import TabProfileScreen from "../screens/TabProfileScreen";
import {
  BottomTabParamList,
  TabHomeParamList,
  TabCalendarParamList,
  TabBasketParamList,
  TabFavoritesParamList,
  TabProfileParamList,
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        style: {
          marginBottom: 5,
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={TabHomeNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Calendar"
        component={TabCalendarNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "calendar" : "calendar-outline"}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Basket"
        component={TabBasketNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "basket" : "basket-outline"}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={TabFavoritesNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "heart" : "heart-outline"}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={TabProfileNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "person" : "person-outline"}
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -2 }} {...props} />;
}

const TabHomeStack = createStackNavigator<TabHomeParamList>();

function TabHomeNavigator() {
  return (
    <TabHomeStack.Navigator>
      <TabHomeStack.Screen
        name="TabHomeScreen"
        component={TabHomeScreen}
        options={{ headerShown: false }}
      />
    </TabHomeStack.Navigator>
  );
}

const TabCalendarStack = createStackNavigator<TabCalendarParamList>();

function TabCalendarNavigator() {
  return (
    <TabCalendarStack.Navigator>
      <TabCalendarStack.Screen
        name="TabCalendarScreen"
        component={TabCalendarScreen}
        options={{ headerTitle: "Calendar" }}
      />
    </TabCalendarStack.Navigator>
  );
}

const TabBasketStack = createStackNavigator<TabBasketParamList>();

function TabBasketNavigator() {
  return (
    <TabBasketStack.Navigator>
      <TabBasketStack.Screen
        name="TabBasketScreen"
        component={TabBasketScreen}
        options={{ headerShown: false }}
      />
    </TabBasketStack.Navigator>
  );
}

const TabFavoritesStack = createStackNavigator<TabFavoritesParamList>();

function TabFavoritesNavigator() {
  return (
    <TabFavoritesStack.Navigator>
      <TabFavoritesStack.Screen
        name="TabFavoritesScreen"
        component={TabFavoritesScreen}
        options={{ headerShown: false }}
      />
    </TabFavoritesStack.Navigator>
  );
}

const TabProfileStack = createStackNavigator<TabProfileParamList>();

function TabProfileNavigator() {
  return (
    <TabProfileStack.Navigator>
      <TabProfileStack.Screen
        name="TabProfileScreen"
        component={TabProfileScreen}
        options={{ headerTitle: "Profile" }}
      />
    </TabProfileStack.Navigator>
  );
}
