import * as React from "react";
import {
  StyleSheet,
  ImageBackground,
  StatusBar,
  Image,
  useWindowDimensions,
} from "react-native";
import axios, { AxiosResponse } from "axios";

import HTMLView from "react-native-htmlview";
import { Text, View } from "../components/Themed";
import FocusAwareStatusBar from "../components/FocusAwareStatusBar";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "./Button";
import FavoriteToggler from "./FavoriteToggler";
import IconButton from "./IconButton";

const Item = (data: any) => {
  const { title, summary: description, image: imageUrl, navigation } = data;

  return (
    <View style={styles.item}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <View style={styles.itemContainer}>
        <View style={styles.titleContainer}>
          <View style={styles.titleTextContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.titleFavoriteContainer}>
            <FavoriteToggler isFavorite={false} />
          </View>
        </View>

        <View style={styles.descriptionContainer}>
          <HTMLView
            value={description.split(".")[0] + "."}
            style={StyleSheet.create({})}
            stylesheet={htmlView}
          />
          {/* <HtmlText
            style={styles.description}
            html={description.split(".")[0] + "."}
          /> */}
        </View>

        <View style={styles.actions}>
          <View style={styles.cookAction}>
            <Button
              onPress={() => navigation.replace("Food", { title: "PropTest" })}
              size="small"
              title="Let's cook!"
            />
          </View>
          <View style={styles.calendarAction}>
            <IconButton name="calendar-outline" />
          </View>
          <View style={styles.basketAction}>
            <IconButton name="basket-outline" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default function RecipesList({ navigation }: any) {
  const [recipesData, setRecipesData] = React.useState<any[]>();
  const layout = useWindowDimensions();

  React.useEffect(() => {
    axios
      .get(
        "https://api.spoonacular.com/recipes/random?limitLicense=false&tags=&number=10&apiKey=a35f7dda3819443b95ce18e4c43cfb2d"
      )
      .then((res: AxiosResponse<any>) => {
        setRecipesData([
          {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bss",
            titleHeading: "Just for You",
          },
          ...res?.data?.recipes,
        ]);
      });
  }, [setRecipesData]);

  const TitleHeading = ({ titleHeading }: any) => (
    <View style={styles.titleHeadingContainer}>
      <Text style={styles.titleHeading}>{titleHeading}</Text>
    </View>
  );
  const renderItem = ({ item }: any) => {
    if (item?.titleHeading) {
      return <TitleHeading titleHeading={item.titleHeading} />;
    }

    return <Item key={item.id} navigation={navigation} {...item} />;
  };

  const flatList = React.useMemo(
    () => (
      <FlatList
        data={recipesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    ),
    [recipesData]
  );

  return <SafeAreaView style={styles.container}>{flatList}</SafeAreaView>;
}

const htmlView = StyleSheet.create({
  b: {
    fontWeight: "bold",
  },
});

const styles = StyleSheet.create({
  titleHeadingContainer: {
    backgroundColor: "transparent",
    marginHorizontal: 16,
  },
  titleHeading: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    width: "100%",
    marginTop: StatusBar.currentHeight || 0,
    marginBottom: 0,
  },
  item: {
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingRight: 0,
    paddingBottom: 10,
    marginVertical: 18,
    marginRight: 16,
    marginLeft: 94,
    flex: 1,
    flexDirection: "row",
    width: "100%",
    borderRadius: 12,
  },
  itemContainer: {
    position: "relative",
    left: -78,
    marginRight: 30,
    flex: 1,
    flexDirection: "column",
    width: "100%",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  // title container
  titleContainer: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 10,
  },
  titleTextContainer: {
    flex: 1,
    flexDirection: "row",
  },
  titleFavoriteContainer: {
    width: 30,
  },
  description: {},
  descriptionContainer: {
    marginBottom: 16,
  },
  image: {
    backgroundColor: "#ccc",
    width: 138,
    height: 138,
    borderRadius: 12,
    marginRight: 8,
    position: "relative",
    left: -78,
  },
  actions: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  cookAction: {
    flex: 1,
    flexDirection: "row",
  },
  calendarAction: {
    width: 50,
  },
  basketAction: {},
});
