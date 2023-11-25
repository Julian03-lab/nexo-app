import { StyleSheet, Text, View } from "react-native";
import React from "react";

const StatColumn = ({
  color,
  percent,
  end,
}: {
  color: string;
  percent: number;
  end?: boolean;
}) => {
  return (
    <View
      style={{ ...styles.container, borderBottomRightRadius: end ? 100 : 0 }}
    >
      <View
        style={{
          ...styles.filled,
          borderBottomRightRadius: end ? 100 : 0,
          backgroundColor: color,
          height: `${percent}%`,
        }}
      />
      <View style={styles.divisor1} />
      <View style={styles.divisor2} />
    </View>
  );
};

export default StatColumn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F1F1F1",
    height: 100,
    width: 40,
    borderTopStartRadius: 100,
    borderTopEndRadius: 100,
  },
  filled: {
    width: "100%",
    borderTopStartRadius: 100,
    borderTopEndRadius: 100,
    position: "absolute",
    bottom: 0,
  },
  divisor1: {
    backgroundColor: "#FFF",
    height: 2,
    width: "100%",
    position: "absolute",
    bottom: "30%",
  },
  divisor2: {
    backgroundColor: "#FFF",
    height: 2,
    width: "100%",
    position: "absolute",
    bottom: "60%",
  },
});
