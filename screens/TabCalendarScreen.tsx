import * as React from "react";
import { Alert, StyleSheet, TouchableOpacity } from "react-native";
import { Agenda } from "react-native-calendars";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Ionicons } from "@expo/vector-icons";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import FocusAwareStatusBar from "../components/FocusAwareStatusBar";
import Colors from "../constants/Colors";

const testIDs = {
  menu: {
    CONTAINER: "menu",
    CALENDARS: "calendars_btn",
    CALENDAR_LIST: "calendar_list_btn",
    HORIZONTAL_LIST: "horizontal_list_btn",
    AGENDA: "agenda_btn",
    EXPANDABLE_CALENDAR: "expandable_calendar_btn",
    WEEK_CALENDAR: "week_calendar_btn",
  },
  calendars: {
    CONTAINER: "calendars",
    FIRST: "first_calendar",
    LAST: "last_calendar",
  },
  calendarList: { CONTAINER: "calendarList" },
  horizontalList: { CONTAINER: "horizontalList" },
  agenda: {
    CONTAINER: "agenda",
    ITEM: "item",
  },
  expandableCalendar: { CONTAINER: "expandableCalendar" },
  weekCalendar: { CONTAINER: "weekCalendar" },
};

export default function TabCalendarScreen() {
  const [items, setItems] = React.useState<any>({});

  const renderItem = (items: any) => (
    <View style={styles.containerItem}>
      {items.name.map((name: any) => (
        <BouncyCheckbox
          isChecked={false}
          // textColor="#000"
          unfillColor="white"
          text={name}
          // fontFamily="JosefinSans-Regular"
          onPress={(checked) => console.log("Checked: ", checked)}
          iconComponent={null}
          style={styles.item}
        />
      ))}
    </View>
  );

  const renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>There are no items now.</Text>
      </View>
    );
  };

  const rowHasChanged = (r1: any, r2: any) => {
    return r1.name !== r2.name;
  };

  const timeToString = (time: any) => {
    const date = new Date(time);
    return date.toISOString().split("T")[0];
  };

  const loadItems = (day: any) => {
    // console.log("day", day);

    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [
            {
              name: [],
            },
          ];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime][0].name.push("Item for " + strTime + " #" + j);
          }
        }
      }
      const newItems = {} as any;
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      console.log("newItems", newItems);

      setItems(newItems);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Agenda
        // testID={"agenda" as any}
        style={{ backgroundColor: "blue" }}
        items={items}
        loadItemsForMonth={loadItems}
        selected={"2017-05-16"}
        renderItem={renderItem}
        renderEmptyDate={renderEmptyDate}
        rowHasChanged={rowHasChanged}
        // markingType={'period'}
        // markedDates={{
        //    '2017-05-08': {textColor: '#43515c'},
        //    '2017-05-09': {textColor: '#43515c'},
        //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2017-05-21': {startingDay: true, color: 'blue'},
        //    '2017-05-22': {endingDay: true, color: 'gray'},
        //    '2017-05-24': {startingDay: true, color: 'gray'},
        //    '2017-05-25': {color: 'gray'},
        //    '2017-05-26': {endingDay: true, color: 'gray'}}}
        // monthFormat={'yyyy'}
        theme={{
          agendaDayTextColor: Colors["light"].tint,
          agendaDayNumColor: Colors["light"].tint,
          agendaTodayColor: Colors["light"].tint,
          agendaKnobColor: Colors["light"].tint,
          dotColor: Colors["light"].tint,
          selectedDayBackgroundColor: Colors["light"].tint,
        }}
        //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
        // hideExtraDays={false}
      />
      <FocusAwareStatusBar barStyle="dark-content" />
    </View>
  );
}

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
  containerItem: {
    backgroundColor: "white",
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 5,
    marginRight: 15,
  },
  item: {
    flex: 1,
    padding: 10,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
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
