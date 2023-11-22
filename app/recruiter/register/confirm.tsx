import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React from "react";
import ConfirmationSVG from "../../../assets/images/undraw/confirmationdraw";
import { useRouter } from "expo-router/src/hooks";

const confirm = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", gap: 5 }}>
        <Text style={styles.title}>¡Perfecto, ya casi terminamos!</Text>
        <Text style={styles.subtitle}>
          Sólo queda validar tu cuenta con el correo que te enviamos. No olvides
          revisar tu correo de spam
        </Text>
      </View>
      <ConfirmationSVG />
      <TouchableHighlight
        onPress={() => router.push("/recruiter/login")}
        style={styles.firstButton}
        underlayColor="rgba(31, 34, 105, 0.50)"
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: 16,
            fontFamily: "Roboto_500Medium",
          }}
        >
          Ingresar
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default confirm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    paddingHorizontal: 40,
    backgroundColor: "#8CECF2",
  },
  title: {
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
    color: "#1F2269",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    fontFamily: "Roboto_400Regular",
    color: "#1F2269",
    lineHeight: 21,
    textAlign: "center",
  },
  firstButton: {
    backgroundColor: "#1F2269",
    borderRadius: 100,
    paddingVertical: 12,
    alignItems: "center",
    width: "100%",
  },
});
