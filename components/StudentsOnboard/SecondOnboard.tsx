import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  ConffetiFirst,
  ConffetiSecond,
  FirstOnboardDraw,
  SecondOnboardDraw,
} from "../../assets/images/undraw/onboardingDraws";
import { NexoIcon } from "../../assets/icons/nexo-icon";

const SecondOnboard = () => {
  return (
    <View style={styles.container}>
      <ConffetiSecond />
      <View
        style={{
          gap: 12,
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <NexoIcon fill={"#BBA2DA"} width={46} height={46} />
        <Text style={styles.title}>¡Explora el Futuro!</Text>
      </View>
      <SecondOnboardDraw
        style={{
          position: "relative",
          bottom: -3,
        }}
      />
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Descubre carreras, universidades y rubros del área tecnológica. Toda
          la información que necesitas para tu futuro.
        </Text>
      </View>
    </View>
  );
};

export default SecondOnboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F2151",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontFamily: "Roboto_700Bold",
    color: "#BBA2DA",
    textAlign: "center",
  },
  footer: {
    backgroundColor: "#fff",
    paddingVertical: 32.5,
    paddingHorizontal: 20,
    // flex: 1,
    width: "100%",
    alignItems: "center",
  },
  footerText: {
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
    color: "#1F2269",
    textAlign: "center",
    width: 320,
  },
});
