import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Checkbox from "expo-checkbox";

const Question5 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        5){" "}
        <Text style={styles.bold}>
          En una escala del 1 al 5, ¿Cuánta experiencia tienes con frameworks de
          JavaScript como React o Angular?
        </Text>{" "}
        <Text style={styles.violet}>*</Text>{" "}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View style={styles.input}>
          <Checkbox
            style={{
              marginTop: 6,
            }}
            color={"#000"}
          />
          <Text style={styles.label}>1</Text>
        </View>
        <View style={styles.input}>
          <Checkbox
            value={true}
            style={{
              marginTop: 6,
            }}
            color={"#000"}
          />
          <Text style={styles.label}>2</Text>
        </View>
        <View style={styles.input}>
          <Checkbox
            style={{
              marginTop: 6,
            }}
            color={"#000"}
          />
          <Text style={styles.label}>3</Text>
        </View>
        <View style={styles.input}>
          <Checkbox
            style={{
              marginTop: 6,
            }}
            color={"#000"}
          />
          <Text style={styles.label}>4</Text>
        </View>
        <View style={styles.input}>
          <Checkbox
            style={{
              marginTop: 6,
            }}
            color={"#000"}
          />
          <Text style={styles.label}>5</Text>
        </View>
      </View>
    </View>
  );
};

export default Question5;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 5,
  },
  input: {
    flexDirection: "column-reverse",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontFamily: "Roboto_400Regular",
    fontSize: 14,
    color: "#000",
    lineHeight: 21,
    maxWidth: "90%",
  },
  title: {
    fontFamily: "Roboto_400Regular",
    fontSize: 14,
    color: "#000",
    lineHeight: 21,
  },
  violet: {
    fontFamily: "Roboto_700Bold",
    color: "#AB13ED",
  },
  bold: {
    fontFamily: "Roboto_700Bold",
  },
});
