import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { dataList } from "../../assets/info/jobsList";

const jobView = () => {
  const { id } = useLocalSearchParams();

  const job = dataList.find((job) => job.id === Number(id));

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>{job.title}</Text>
        <Text style={styles.text}>{`\u2022 ${job.publisher}`}</Text>
        <Text style={styles.text}>{`\u2022 ${job.modalidad}`}</Text>
        <Text style={styles.text}>{`\u2022 ${job.experiencia}`}</Text>
        <Text style={styles.description}>{job.description}</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => "press"}
          underlayColor={"#497E6E"}
        >
          <Text style={styles.buttonText}>Postularme</Text>
        </TouchableHighlight>
      </ScrollView>
    </View>
  );
};

export default jobView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
    color: "#000",
    lineHeight: 21,
    marginBottom: 20,
    textAlign: "center",
  },
  text: {
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    color: "#000",
    lineHeight: 21,
  },
  description: {
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    color: "#000",
    lineHeight: 21,
    marginTop: 20,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#62A38F",
    borderRadius: 100,
    paddingVertical: 8,
    width: "100%",
  },
  buttonText: {
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
});
