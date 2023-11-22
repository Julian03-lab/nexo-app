import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { SearchIcon } from "../../../assets/icons/icons";
import OfferCard from "../../../components/recruiter/offerCard";

const data = {
  vacantes: 2,
  aspirantes: 4,
  experiencia: "1 año",
  modalidad: "Remoto",
  salario: "$ 20.000",
};

const index = () => {
  return (
    <SafeAreaView style={styles.containter}>
      <View style={styles.header}>
        <Text style={styles.title}>¡Hola Lucas!</Text>
        <Text style={styles.subtitle}>
          Este es un resumen de tus publicaciones
        </Text>
        <View style={styles.inputContainer}>
          <SearchIcon style={styles.searchIcon} />
          <TextInput
            keyboardType="web-search"
            style={styles.searchInput}
            placeholder="Buscar"
            placeholderTextColor="rgba(31, 34, 105, 0.50)"
          />
        </View>
      </View>
      <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
        <OfferCard
          data={data}
          title="Desarrollador Full Stack Senior"
          publisher="ABC Tecnology"
        />
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  containter: { flex: 1, backgroundColor: "#fff" },
  header: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 22,
    paddingBottom: 30,
    paddingHorizontal: 23,
    backgroundColor: "#8CECF2",
  },
  title: {
    fontSize: 24,
    fontFamily: "Roboto_700Bold",
    color: "#1F2269",
    textAlign: "center",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: "Roboto_700Bold",
    color: "#1F2269",
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
    position: "relative",
    marginTop: 30,
    backgroundColor: "rgba(255, 255, 255, 0.50)",
    borderRadius: 200,
  },
  searchIcon: {
    position: "absolute",
    top: "25%",
    right: 12,
    zIndex: 1,
  },
  searchInput: {
    color: "rgb(31, 34, 105)",
    width: "88%",
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontFamily: "Roboto_400Regular",
  },
});
