import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React from "react";

const ButtonChip = ({
  text,
  handleClick,
  id,
  selected,
  color,
}: {
  text: string;
  handleClick?: (id: number | string) => void;
  id?: number | string;
  selected: boolean;
  color?: string;
}) => {
  return (
    <TouchableHighlight
      disabled={!handleClick}
      style={
        selected
          ? {
              paddingHorizontal: 10,
              paddingVertical: 5,
              alignItems: "center",
              borderRadius: 100,
              backgroundColor: color || "#E0A6FA",
              borderColor: color || "#E0A6FA",
              borderWidth: 1,
            }
          : styles.container
      }
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
  text: {
    color: "#000",
    fontSize: 11,
    fontWeight: "400",
  },
});
