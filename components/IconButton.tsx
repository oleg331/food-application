import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, TouchableOpacity } from "react-native";

function IconButton(props: any) {
  const { name, color = "", onPress, size = 30 } = props;

  return (
    <TouchableOpacity style={styles.container}>
      <Ionicons
        onPress={onPress}
        name={name}
        color={color}
        size={size}
        style={{ marginBottom: -2 }}
        {...props}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default IconButton;
