import * as React from "react";
import { StyleSheet, ImageBackground, useWindowDimensions } from "react-native";

import { Text, View } from "../../components/Themed";
import FocusAwareStatusBar from "../../components/FocusAwareStatusBar";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { TouchableOpacity } from "react-native-gesture-handler";

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#ff4081" }}>
    <Text>asdasd</Text>
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }}>
    <Text>asdasd</Text>
  </View>
);

const renderTabBar = (props: any) => {
  const { route, focused, color } = props;
  return (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "#FF6C37" }}
      style={{ backgroundColor: "white" }}
      renderLabel={({ route, focused, color }) => (
        <TouchableOpacity>
          <Text style={{ color: "black" }}>{route.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export const FoodScreen = ({ navigation }: any) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
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
