import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React from "react";
import FaqsDraw from "../../../assets/images/undraw/faqsdraw";
import { useRouter } from "expo-router";

const Faqs = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Elige de las siguientes categorías la que prefieras para resolver tus
        dudas
      </Text>
      <FaqsDraw />
      <TouchableHighlight
        style={styles.buttons}
        onPress={() => router.push("/students/faqs/fundamentos")}
        underlayColor={"#E0A6FA"}
      >
        <Text style={styles.buttonText}>Fundamentos Tecnológicos</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.buttons}
        onPress={() => router.push("/students/faqs/carreras")}
        underlayColor={"#E0A6FA"}
      >
        <Text style={styles.buttonText}>Carreras Tecnológicas</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.buttons}
        onPress={() => router.push("/students/faqs/rubros")}
        underlayColor={"#E0A6FA"}
      >
        <Text style={styles.buttonText}>Rubros IT</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.buttons}
        onPress={() => router.push("/students/faqs/conceptos")}
        underlayColor={"#E0A6FA"}
      >
        <Text style={styles.buttonText}>
          Conceptos Esenciales en la Creación de Sitios Web
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default Faqs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 36,
    paddingVertical: 20,
    gap: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    color: "#000",
  },
  buttons: {
    backgroundColor: "#fff",
    borderColor: "#ab13ed",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "100%",
  },
  buttonText: {
    lineHeight: 21,
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    color: "#000",
  },
});
