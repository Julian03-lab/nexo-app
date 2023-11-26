import { StyleSheet, Text, View } from "react-native";
import React from "react";
import OfferCard from "../../../components/recruiter/offerCard";
import useUserStore from "../../../services/context";

const priorities = () => {
  const { user } = useUserStore();

  const filterData = user.publications.filter((item) => item.priority === true);

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
