import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React from "react";

const ButtonChip = ({
  text,
  handleClick,
  id,
  selected,
}: {
  text: string;
  handleClick?: (id: number) => void;
  id?: number;
  selected: boolean;
}) => {
  return (
    <TouchableHighlight
      disabled={!handleClick}
      style={selected ? styles.selected : styles.container}
      onPress={() => handleClick && handleClick(id)}
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
  selected: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "#E0A6FA",
    borderColor: "#E0A6FA",
    borderWidth: 1,
  },
  text: {
    color: "#000",
    fontSize: 11,
    fontWeight: "400",
  },
});
