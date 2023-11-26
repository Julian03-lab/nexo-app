import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import { TrashDrawSVG } from "../../../../assets/images/undraw/trashDrawSVG";

const trash = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TrashDrawSVG />
      <TouchableHighlight
        onPress={() => router.push("/recruiter/home/trash/junior")}
        style={styles.button}
        underlayColor={"rgba(255, 92, 92, 0.20)"}
      >
        <Text style={styles.ButtonText}>Junior</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => router.push("/recruiter/home/trash/semisenior")}
        style={styles.button}
        underlayColor={"rgba(255, 92, 92, 0.20)"}
      >
        <Text style={styles.ButtonText}>Semi Senior</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => router.push("/recruiter/home/trash/senior")}
        style={styles.button}
        underlayColor={"rgba(255, 92, 92, 0.20)"}
      >
        <Text style={styles.ButtonText}>Senior</Text>
      </TouchableHighlight>
    </View>
  );
};

export default trash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 30,
    gap: 36,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 8,
    borderRadius: 100,
    width: "100%",
    alignItems: "center",
    borderColor: "#FF6584",
    borderWidth: 1,
  },
  ButtonText: {
    color: "#FF6584",
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
  },
});
