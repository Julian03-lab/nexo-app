import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import CarreerCard from "../../../components/carreers/DetailsCard";
import { carreersList } from "../../../assets/info/carreersList";

const carreers = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.carreerList}>
          {carreersList.map((carreer) => (
            <CarreerCard
              route="/students/carreers/"
              key={carreer.id}
              id={carreer.id}
              name={carreer.info.title}
              image={carreer.info.image}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default carreers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  carreerList: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    padding: 20,
  },
});
