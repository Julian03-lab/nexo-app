import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Checkbox from "expo-checkbox";
import InputWithLabel from "../InputWithLabel";

const Question4 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        4){" "}
        <Text style={styles.bold}>
          ¿Cómo manejas los errores o problemas que puedan surgir durante el
          desarrollo de un sitio web? ¿Cómo manejas estos casos?
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
        <Text style={styles.label}>
          Utilizar herramientas de debugging (depuración) para identificar y
          solucionar problemas
        </Text>
      </View>
      <View style={styles.input}>
        <Checkbox
          style={{
            marginTop: 6,
          }}
          color={"#000"}
          value={true}
        />
        <Text style={styles.label}>
          Utiliza herramientas de diseño como Sketch, Adobe XD o Figma para
          crear prototipos y maquetas
        </Text>
      </View>
      <View style={styles.input}>
        <Checkbox
          style={{
            marginTop: 6,
          }}
          color={"#000"}
          value={true}
        />
        <Text style={styles.label}>
          Realizo una búsqueda en internet para encontrar soluciones
        </Text>
      </View>
      <View style={styles.input}>
        <Checkbox
          style={{
            marginTop: 6,
          }}
          color={"#000"}
        />
        <Text style={styles.label}>
          Documento los errores y problemas para facilitar la identificación y
          resolución de problemas en el futuro
        </Text>
      </View>
      <TextInput style={styles.inputText} value="Otros: " editable={false} />
    </View>
  );
};

export default Question4;

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
