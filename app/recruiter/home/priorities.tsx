import { StyleSheet, Text, View } from "react-native";
import React from "react";
import OfferCard from "../../../components/recruiter/offerCard";
import useUserStore from "../../../services/context";
import { NoPrioritiesSVG } from "../../../assets/images/undraw/noPrioritiesSVG";
import { PressPrioritiesSVG } from "../../../assets/images/undraw/pressPrioritiesSVG";

const priorities = () => {
  const { user } = useUserStore();

  const filterData = user.publications.filter((item) => item.priority === true);

  if (filterData.length === 0) {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          paddingHorizontal: 20,
          paddingVertical: 30,
          backgroundColor: "#fff",
          gap: 32,
        }}
      >
        <NoPrioritiesSVG />
        <Text
          style={{
            textAlign: "center",
            fontFamily: "Roboto_400Regular",
            color: "#1f2269",
            fontSize: 16,
          }}
        >
          Actualmente no hay empleos agregados a prioridades. Para hacerlo, haz
          clic en el botón 'Prioridades' que se encuentra en la barra de
          navegación de cada empleo que publiques.
        </Text>
        <PressPrioritiesSVG />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {filterData.map((item) => (
        <OfferCard key={item.id} data={item} />
      ))}
    </View>
  );
};

export default priorities;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "#fff",
    gap: 20,
  },
});
