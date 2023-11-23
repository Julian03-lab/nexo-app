import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Checkbox from "expo-checkbox";

const Question7 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        7){" "}
        <Text style={styles.bold}>
          ¿Cuál es de estos procesos de trabajo utilizas para desarrollar la
          interfaz de usuario de un sitio web?
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
          Planifica y organiza el proceso de diseño en función de las
          necesidades y requisitos del cliente
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
        />
        <Text style={styles.label}>
          Mantiene una comunicación fluida con el cliente o el equipo de
          trabajo.
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
          Realiza presentaciones regulares para obtener comentarios y
          sugerencias sobre el diseño, y asegurarme de que el producto final
          cumpla con las expectativas.
        </Text>
      </View>
    </View>
  );
};

export default Question7;

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
});
