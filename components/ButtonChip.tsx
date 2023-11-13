import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React from "react";

const ButtonChip = ({ text }: { text: string }) => {
  return (
    <TouchableHighlight
      style={styles.container}
      onPress={() => console.log(text)}
      activeOpacity={0.9}
      underlayColor={"#BCBABA"}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableHighlight>
  );
};

export default ButtonChip;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: "center",
    borderRadius: 100,
    borderColor: "#BCBABA",
    borderWidth: 1,
    backgroundColor: "#fff",
  },
  text: {
    color: "#000",
    fontSize: 11,
    fontWeight: "400",
  },
});
