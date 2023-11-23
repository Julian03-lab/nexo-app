import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Checkbox from "expo-checkbox";

const Question1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        1){" "}
        <Text style={styles.bold}>
          Podrías seleccionar las tecnologías y librerías de desarrollo web
          front-end que has utilizado ?
        </Text>{" "}
        <Text style={styles.violet}>*</Text>{" "}
      </Text>
      <View style={styles.input}>
        <Checkbox
          style={{
            marginTop: 6,
          }}
          color={"#000"}
          value={true}
        />
        <Text style={styles.label}>HTML</Text>
      </View>
      <View style={styles.input}>
        <Checkbox
          style={{
            marginTop: 6,
          }}
          color={"#000"}
          value={true}
        />
        <Text style={styles.label}>CSS3</Text>
      </View>
      <View style={styles.input}>
        <Checkbox
          style={{
            marginTop: 6,
          }}
          color={"#000"}
          value={true}
        />
        <Text style={styles.label}>JAVASCRIPT</Text>
      </View>
      <View style={styles.input}>
        <Checkbox
          style={{
            marginTop: 6,
          }}
          color={"#000"}
          value={true}
        />
        <Text style={styles.label}>JQUERY</Text>
      </View>
      <View style={styles.input}>
        <Checkbox
          style={{
            marginTop: 6,
          }}
          color={"#000"}
          value={true}
        />
        <Text style={styles.label}>BOOTSTRAP</Text>
      </View>
      <TextInput
        style={styles.inputText}
        value="Otros: angular, vue, react"
        editable={false}
      />
    </View>
  );
};

export default Question1;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 5,
  },
  input: {
    flexDirection: "row",
    gap: 8,
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
  inputText: {
    padding: 10,
    borderBottomColor: "#6b6982",
    borderBottomWidth: 1,
    backgroundColor: "rgba(255, 255, 255, 0.00)",
    color: "#666",
    fontFamily: "Roboto_400Regular",
    fontSize: 14,
    width: "100%",
  },
});
