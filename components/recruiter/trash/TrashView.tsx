import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useMemo, useState } from "react";
import { SearchIcon } from "../../../assets/icons/icons";
import DateTimePicker, { DateType } from "react-native-ui-datepicker";
import dayjs from "dayjs";
import TrashApplicantCard from "./TrashApplicantCard";

const TrashView = ({
  users,
}: {
  users: {
    id: number;
    job: string;
    email: string;
    date: string;
    type: string;
  }[];
}) => {
  const [query, setQuery] = useState("");
  const [value, setValue] = useState<any>(null);
  const animatedHeight = React.useRef(new Animated.Value(0)).current;
  const [openCalendar, setOpenCalendar] = useState(false);

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const dateMatches =
        !value || user.date.includes(dayjs(value).format("DD/MM/YY"));
      const queryMatches =
        !query || user.job.toLowerCase().includes(query.toLowerCase());

      return dateMatches && queryMatches;
    });
  }, [value, users, query]);

  const handlePress = () => {
    setOpenCalendar(!openCalendar);

    Animated.timing(animatedHeight, {
      toValue: openCalendar ? 0 : 368,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            keyboardType="web-search"
            placeholder="Buscar empleo"
            style={{
              width: "90%",
              fontFamily: "Roboto_400Regular",
              fontSize: 16,
            }}
            placeholderTextColor="rgba(31, 34, 105, 0.50)"
            value={query}
            onChangeText={(text) => setQuery(text)}
          />
          <SearchIcon />
        </View>
        <View>
          <TouchableHighlight
            onPress={handlePress}
            style={styles.seeDate}
            underlayColor={"rgba(255, 92, 92, 0.20)"}
          >
            <Text style={styles.seeDateText}>Filtrar por fecha</Text>
          </TouchableHighlight>
          <Animated.View style={{ height: animatedHeight, overflow: "hidden" }}>
            <View
              style={{
                backgroundColor: "#D1F7FA",
                paddingHorizontal: 12,
                paddingVertical: 12,
                borderBottomStartRadius: 28,
                borderBottomEndRadius: 28,
              }}
            >
              <DateTimePicker
                mode="date"
                displayFullDays={true}
                locale="es"
                selectedItemColor={!value ? "#D1F7FA" : "#1AD9E5"}
                selectedTextStyle={{
                  color: !value ? "#1F2269" : "#fff",
                  fontFamily: "Roboto_400Regular",
                  fontSize: 16,
                }}
                value={value}
                onValueChange={(date) =>
                  date === value ? setValue(null) : setValue(date)
                }
                calendarTextStyle={{
                  fontFamily: "Roboto_400Regular",
                  fontSize: 16,
                  color: "#1F2269",
                }}
                weekDaysTextStyle={{
                  fontFamily: "Roboto_400Regular",
                  fontSize: 16,
                  color: "#1F2269",
                }}
                headerButtonsPosition="right"
                headerTextStyle={{
                  fontFamily: "Roboto_500Medium",
                  fontSize: 14,
                  color: "#1F2269",
                }}
                todayContainerStyle={{
                  backgroundColor: "#D1F7FA",
                }}
                todayTextStyle={{
                  color: "#1F2269",
                }}
              />
            </View>
          </Animated.View>
        </View>
        {filteredUsers.map((user) => (
          <TrashApplicantCard
            id={user.id}
            key={user.id}
            job={user.job}
            email={user.email}
            date={user.date}
            type={user.type}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default TrashView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "#fff",
    gap: 20,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0.50)",
    borderRadius: 200,
    justifyContent: "space-between",
    borderColor: "#BCBABA",
    borderWidth: 1,
  },
  seeDate: {
    backgroundColor: "#fff",
    paddingVertical: 8,
    width: "100%",
    borderBottomColor: "#FF6584",
    borderBottomWidth: 1,
    borderTopStartRadius: 28,
    borderTopEndRadius: 28,
  },
  seeDateText: {
    color: "#FF6584",
    fontSize: 16,
    fontFamily: "Roboto_700Bold",
    textAlign: "center",
  },
});
