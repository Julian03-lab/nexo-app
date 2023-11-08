import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { Link } from "expo-router";

//Es un placeholder, poner info final
const Universities = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.title}>Universidades donde se cursa</Text>
      <View style={{ gap: 16, alignItems: "center" }}>
        <Text style={styles.text}>
          Analista en Tecnologías de la Información y la Comunicación se trata
          de una carrera de corta de 3 años que se cursa en la Facultad de
          Informática en la Universidad Nacional de la Plata (UNLP).
        </Text>
        <Image
          source={require("../../../assets/images/informunlp.png")}
          style={{ width: 180, height: 180 }}
        />
        <Link href={"google.com"} style={styles.link}>
          Ver más
        </Link>
      </View>
    </View>
  );
};

export default Universities;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 44,
    gap: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#ab13ed",
    textAlign: "center",
  },
  text: {
    color: "#000",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
  },
  link: {
    color: "#ab13ed",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
