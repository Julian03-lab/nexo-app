import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";

const Resume = () => {
  return (
    <View>
      <Text style={styles.text}>Resumen curricular</Text>
      <Image
        style={styles.image}
        source={require("../../assets/images/resume.png")}
      />
    </View>
  );
};

export default Resume;

const styles = StyleSheet.create({
  text: {
    color: "#1f2269",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 31,
    fontFamily: "Roboto_500Medium",
  },
  image: {
    width: 320,
    height: 480,
  },
});
