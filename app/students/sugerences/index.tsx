import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import SugerencesSVG from "../../../assets/images/undraw/sugerencesdraw";
import Selector from "../../../components/sugerences/selector";

const sugerences = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.textViolet}>
              Selecciona las palabras claves que más te llamen la atención según
              tus intereses.
            </Text>
            <Text style={styles.textBlack}>
              De esta manera, veras las sugerencias de las carreras que podrías
              estudiar.
            </Text>
          </View>
          <SugerencesSVG />
          <Selector />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default sugerences;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 20,
    paddingVertical: 20,
    backgroundColor: "#fff",
  },

  textContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 18,
  },
  textBlack: {
    color: "#000",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
  textViolet: {
    color: "#AB13ED",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
});
