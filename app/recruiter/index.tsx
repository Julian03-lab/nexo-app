import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import { NexoIcon } from "../../assets/icons/nexo-icon";
import MainRecruiterSVG from "../../assets/images/undraw/main-recruiter";

const index = () => {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#8CECF2",
        flex: 1,
        justifyContent: "flex-end",
      }}
    >
      {/* <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}> */}
      <View style={styles.container}>
        <View style={styles.header}>
          <NexoIcon width={48} height={48} fill={"#1F2269"} />
          <Text style={styles.title}>¡Bienvenido a Nexo!</Text>
          <Text style={styles.subtitle}>
            Un espacio para publicar empleos y gestionar candidatos de manera
            eficiente. Estamos aquí para simplificar tu proceso de contratación.{" "}
          </Text>
        </View>
        <MainRecruiterSVG style={styles.image} />
        <View style={styles.ctaSection}>
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
              Iniciar sesión
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => router.push("/recruiter/register")}
            style={styles.secondButton}
            underlayColor="rgba(31, 34, 105, 0.20)"
          >
            <Text
              style={{
                color: "#1F2269",
                textAlign: "center",
                fontSize: 16,
                fontFamily: "Roboto_500Medium",
              }}
            >
              Crear cuenta
            </Text>
          </TouchableHighlight>
        </View>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8CECF2",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 24,
  },
  header: {
    flexDirection: "column",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: "Roboto_700Bold",
    color: "#1F2269",
  },
  subtitle: {
    fontSize: 14,
    fontFamily: "Roboto_400Regular",
    color: "#1F2269",
    lineHeight: 21,
    textAlign: "center",
  },

  image: {
    marginTop: 34,
  },
  ctaSection: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 38,
    justifyContent: "center",
    width: "100%",
  },
  firstButton: {
    backgroundColor: "#1F2269",
    borderRadius: 100,
    paddingVertical: 12,
    marginBottom: 20,
  },
  secondButton: {
    backgroundColor: "#fff",
    borderRadius: 100,
    paddingVertical: 12,
    borderColor: "#1F2269",
    borderWidth: 1,
  },
});
