import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import SugerencesSVG from "../../assets/images/undraw/sugerencesdraw";
import ButtonChip from "../../components/ButtonChip";
import { sugerencesList } from "../../assets/info/sugerencesList";

const sugerences = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView> */}
      <View style={styles.textContainer}>
        <Text style={styles.textViolet}>
          Selecciona las palabras claves que más te llamen la atención según tus
          intereses.
        </Text>
        <Text style={styles.textBlack}>
          De esta manera, veras las sugerencias de las carreras que podrías
          estudiar.
        </Text>
      </View>
      <SugerencesSVG />
      <View style={styles.chipsContainer}>
        {sugerencesList.map((sugerence) => (
          <ButtonChip key={sugerence.id} text={sugerence.title} />
        ))}
      </View>
      {/* </ScrollView> */}
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

  chipsContainer: {
    paddingHorizontal: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    width: "100%",
  },
});
