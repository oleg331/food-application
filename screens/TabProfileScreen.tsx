import * as React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SettingsList from "react-native-settings-list";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function TabProfileScreen() {
  const [notificationState, setNotificationState] = React.useState(false);
  return (
    <View style={{ backgroundColor: "#f6f6f6", flex: 1 }}>
      {/* <SettingsList borderColor="#d6d5d9" defaultItemSize={50}>
        <SettingsList.Item
          hasNavArrow={false}
          title="Settings"
          titleStyle={{ color: "#009688", marginTop: 10, fontWeight: "500" }}
          itemWidth={50}
          borderHide={"Both"}
        />
        <SettingsList.Item
          icon={
            <View style={styles.imageStyle}>
              <Ionicons size={24} name="mail-outline" style={styles.icon} />
            </View>
          }
          hasNavArrow={true}
          titleStyle={{ color: "black", fontSize: 16 }}
          title="E-mail"
        />
        <SettingsList.Item
          icon={
            <View style={styles.imageStyle}>
              <Ionicons size={24} name="key-outline" style={styles.icon} />
            </View>
          }
          hasNavArrow={true}
          titleStyle={{ color: "black", fontSize: 16 }}
          title="Create a new password"
        />
        <SettingsList.Item
          icon={
            <View style={styles.imageStyle}>
              <Ionicons
                style={styles.icon}
                size={24}
                name="notifications-outline"
              />
            </View>
          }
          hasSwitch={true}
          switchState={notificationState}
          switchOnValueChange={() => setNotificationState((value) => !value)}
          title="Notifications"
          hasNavArrow={false}
          titleStyle={{ color: "black", fontSize: 16 }}
        />
        <SettingsList.Item
          icon={
            <View style={styles.imageStyle}>
              <Ionicons size={24} name="language-outline" style={styles.icon} />
            </View>
          }
          title="Language"
          hasNavArrow={true}
          titleInfo="English"
          titleStyle={{ color: "black", fontSize: 16 }}
        />
        <SettingsList.Item
          icon={
            <View style={styles.imageStyle}>
              <Ionicons
                size={24}
                name="information-circle-outline"
                style={styles.icon}
              />
            </View>
          }
          title="Help"
          hasNavArrow={false}
          titleStyle={{ color: "black", fontSize: 16 }}
        />
        <SettingsList.Item
          icon={
            <View style={styles.imageStyle}>
              <Ionicons size={24} name="log-out-outline" style={styles.icon} />
            </View>
          }
          title="Log out"
          hasNavArrow={false}
          titleStyle={{ color: "black", fontSize: 16 }}
        />
      </SettingsList> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  icon: {
    backgroundColor: "white",
  },
  imageStyle: {
    marginLeft: 15,
    marginRight: 10,
    alignSelf: "center",
    width: 24,
    height: 24,
    justifyContent: "center",
  },
});
