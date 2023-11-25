import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import OfferForm from "../../../../components/recruiter/OfferForm";

const publish = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        <View style={styles.haeder}>
          <Text style={styles.title}>
            Rellena el formularios con la descripción del empleo
          </Text>
        </View>
        <OfferForm pathname="/recruiter/home/publish/submit" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default publish;

const styles = StyleSheet.create({
  haeder: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 21,
    paddingHorizontal: 70,
    backgroundColor: "#8CECF2",
  },
  title: {
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
    color: "#1F2269",
    textAlign: "center",
  },
});
