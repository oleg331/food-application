import * as React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = ({ title, size = "default", ...rest }: any) => {
  const { container, text } = React.useMemo(() => {
    switch (size) {
      case "small": {
        return {
          container: styles.containerSmall,
          text: styles.textSmall,
        };
      }
      default: {
        return {
          container: styles.container,
          text: styles.text,
        };
      }
    }
  }, [size]);
  return (
    <TouchableOpacity style={container} {...rest}>
      <Text style={text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 8,
    backgroundColor: "#FF6C37",
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 12,
    minWidth: 165,
    height: 52,
  },
  containerSmall: {
    elevation: 8,
    backgroundColor: "#FF6C37",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    minWidth: 100,
    height: 32,
  },
  text: {
    fontSize: 16,
    color: "#fff",
    alignSelf: "center",
  },
  textSmall: {
    fontSize: 16,
    color: "#fff",
    alignSelf: "center",
  },
});

export default Button;
