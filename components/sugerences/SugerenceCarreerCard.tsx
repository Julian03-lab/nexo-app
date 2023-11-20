import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SugerenceCarreerCard = ({
  title,
  text,
}: {
  title: string;
  text: string;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default SugerenceCarreerCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#BCBABA",
    backgroundColor: "#fff",
    // elevation: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
    lineHeight: 21,
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    color: "#000",
    lineHeight: 21,
    textAlign: "center",
  },
});
