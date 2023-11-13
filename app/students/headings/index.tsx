import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Button,
  TouchableHighlight,
} from "react-native";
import React from "react";
import HeadingCard from "../../../components/carreers/DetailsCard";
import { headingsList } from "../../../assets/info/headingsList";

const headings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.textContainer}>
          <Text style={styles.textViolet}>
            Explora los diversos rubros que ofrece la tecnología.
          </Text>
          <Text style={styles.textBlack}>
            ¡Tu viaje hacia un futuro tecnológico comienza aquí!
          </Text>
        </View>
        <View style={styles.carreerList}>
          {headingsList.map((heading) => (
            <HeadingCard
              route="/students/headings/"
              id={heading.id}
              key={heading.id}
              name={heading.name}
              position={"left"}
              image={heading.image}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default headings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  textContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingTop: 25,
    paddingHorizontal: 18,
  },
  textBlack: {
    color: "#000",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
  textViolet: {
    color: "#AB13ED",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },

  carreerList: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    padding: 20,
  },
});
