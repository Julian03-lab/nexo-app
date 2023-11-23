import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobeSVG } from "../assets/icons/icons";

const PercentBar = ({
  points,
  total,
  globePosition,
  valor = true,
}: {
  points: number;
  total: number;
  globePosition: number;
  valor?: boolean;
}) => {
  const percent = (points / total) * 100;

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        position: "relative",
      }}
    >
      <View
        style={{
          width: 52,
          position: "relative",
          left: `${globePosition}%`,
          marginBottom: 4,
        }}
      >
        <Text style={styles.globeText}>{points}</Text>
        <GlobeSVG />
      </View>
      <View>
        <View style={styles.baseBar} />
        <View
          style={{
            height: 12,
            width: `${percent}%`,
            backgroundColor: "#1AD9E5",
            borderRadius: 100,
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      </View>
      <Text style={styles.valueText}>
        {valor ? `Valor ${total} puntos` : ""}
      </Text>
    </View>
  );
};

export default PercentBar;

const styles = StyleSheet.create({
  baseBar: {
    height: 12,
    width: "100%",
    backgroundColor: "#D9D9D9",
    borderRadius: 100,
  },
  globeText: {
    color: "#1F2269",
    fontSize: 12,
    fontFamily: "Roboto_500Medium",
    position: "absolute",
    top: 4,
    alignSelf: "center",
    zIndex: 1,
  },
  valueText: {
    color: "#BCBABA",
    fontSize: 12,
    fontFamily: "Roboto_500Medium",
    alignSelf: "flex-end",
    marginTop: 4,
  },
});
