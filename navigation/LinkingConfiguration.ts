import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Preview: {
        screens: {
          PreviewScreen: "preview",
        },
      },
      Root: {
        screens: {
          TabHome: {
            screens: {
              TabHomeScreen: "home",
            },
          },
          TabCalendar: {
            screens: {
              TabCalendarScreen: "calendar",
            },
          },
          TabBasket: {
            screens: {
              TabBasketScreen: "basket",
            },
          },
          TabFavorites: {
            screens: {
              TabFavoritesScreen: "favorites",
            },
          },
          TabProfile: {
            screens: {
              TabProfileScreen: "profile",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};
