import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  ConffetiFirst,
  FirstOnboardDraw,
} from "../../assets/images/undraw/onboardingDraws";
import { NexoIcon } from "../../assets/icons/nexo-icon";

const { width } = Dimensions.get("window");

const FirstOnboard = () => {
  return (
    <View style={styles.container}>
      <ConffetiFirst />
      <View
        style={{
          gap: 12,
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <NexoIcon fill={"#1F2269"} width={46} height={46} />
        <Text style={styles.title}>¡Bienvenido a Nexo!</Text>
      </View>
      <FirstOnboardDraw
        style={{
          position: "relative",
          bottom: -3,
        }}
      />
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Tu guía en el mundo de las carreras tecnológicas.
        </Text>
      </View>
    </View>
  );
};

export default FirstOnboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BBA2DA",
    alignItems: "center",
    width: width,
  },
  title: {
    fontSize: 24,
    fontFamily: "Roboto_700Bold",
    color: "#1F2269",
    textAlign: "center",
  },
  footer: {
    backgroundColor: "#fff",
    paddingVertical: 37,
    paddingHorizontal: 57,
    width: "100%",
    alignItems: "center",
  },
  footerText: {
    fontSize: 20,
    fontFamily: "Roboto_500Medium",
    color: "#1F2269",
    textAlign: "center",
  },
});
