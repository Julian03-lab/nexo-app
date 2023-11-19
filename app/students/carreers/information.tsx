import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";

const Information = ({ carreerInfo }) => {
  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <Image source={carreerInfo.image} style={styles.image} />
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>{carreerInfo.title}</Text>
        <Text style={styles.bodyText}>{carreerInfo.text}</Text>
        <View style={{ gap: 5 }}>
          <View style={styles.divider} />
          <Text style={styles.finalText1}>{carreerInfo.finalText1}</Text>
          <Text style={styles.finalText2}>{carreerInfo.finalText2}</Text>
          <View style={styles.divider} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Information;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "rgba(171, 19, 237, 0.80)",
    lineHeight: 21,
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
  },
  headerContainer: {
    position: "relative",
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 44,
    gap: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#ab13ed",
    textAlign: "center",
  },
  bodyText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#000",
    lineHeight: 24,
  },
  divider: {
    alignSelf: "center",
    width: "65%",
    borderWidth: 0.5,
    borderColor: "#BCBABA",
  },

  finalText1: {
    color: "#ab13ed",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 21,
    textAlign: "center",
    marginVertical: 5,
  },

  finalText2: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 21,
    textAlign: "center",
    marginVertical: 5,
  },
});
