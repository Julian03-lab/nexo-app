import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import SugerencesSVG from "../../../assets/images/undraw/sugerencesdraw";
import ButtonChip from "../../../components/ButtonChip";
import SugerenceCarreerCard from "../../../components/sugerences/SugerenceCarreerCard";
import { useLocalSearchParams } from "expo-router";
import { sugerencesList } from "../../../assets/info/sugerencesList";

const Data = () => {
  const params = useLocalSearchParams();
  let { selected } = params;
  if (typeof selected === "string") {
    selected = selected.split(",");
  }

  const filtrados = sugerencesList.filter((sugerence) =>
    selected.includes(sugerence.id.toLocaleString())
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flexGrow: 1, backgroundColor: "#fff" }}>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.textBlack}>
              Vuelve atrás en caso de que quieras ver otras sugerencias
            </Text>
          </View>
          <SugerencesSVG />
          <View style={styles.chipsContainer}>
            {filtrados.map((sugerence) => (
              <ButtonChip
                key={sugerence.id}
                text={sugerence.title}
                selected={true}
              />
            ))}
          </View>
          <SugerenceCarreerCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Data;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 20,
    padding: 20,
    backgroundColor: "#fff",
  },

  textContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
  },
  textBlack: {
    color: "#000",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
  chipsContainer: {
    // paddingHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    width: "100%",
  },
});
