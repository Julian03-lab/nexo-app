import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import OfferForm from "../../../../components/recruiter/OfferForm";
import { useLocalSearchParams } from "expo-router";
import useUserStore from "../../../../services/context";

const index = () => {
  const { id } = useLocalSearchParams();
  const { user } = useUserStore();

  const filterJob = user.publications.filter((item) => item.id === Number(id));

  const data = filterJob[0];
  const formInfo = {
    puesto: data.title,
    empresa: data.publisher,
    descripcion: data.description,
    vacantes: data.vacantes,
    cv: data.aspirantes,
    modo: data.experiencia,
    experiencia: data.experiencia,
    link: "",
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        <OfferForm
          pathname="/recruiter/home/edit/preview"
          formInfo={formInfo}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
