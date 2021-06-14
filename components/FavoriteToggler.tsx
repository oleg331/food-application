import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

function FavoriteToggler(props: any) {
  const { isFavorite: isInitialFavorite } = props;
  const [isFavorite, setFavorite] = React.useState(isInitialFavorite);

  const handlePress = React.useCallback(() => {
    setFavorite((isFavorite: boolean) => !isFavorite);
  }, [setFavorite]);

  return (
    <Ionicons
      onPress={handlePress}
      name={isFavorite ? "heart" : "heart-outline"}
      size={30}
      style={{ marginBottom: -2 }}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default FavoriteToggler;
