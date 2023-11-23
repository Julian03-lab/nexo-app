import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import useUserStore from "../services/context";

const SelectorPage = () => {
  const { user } = useUserStore();
  const router = useRouter();
  return (
    <SafeAreaView style={{ paddingTop: 12 }}>
      <ScrollView>
        <TouchableHighlight onPress={() => router.push("/students/")}>
          <View style={styles.section}>
            <LinearGradient
              colors={["rgba(175, 19, 242, 0.40)", "rgba(175, 19, 242, 0.40)"]}
              style={styles.gradient}
            />
            <Text style={styles.textStyles}>Estudiantes</Text>
            <Image
              source={require("../assets/images/derechos-y-obligaciones.png")}
              style={{
                width: "100%",
                height: 280,
              }}
              contentFit="cover"
            />
          </View>
        </TouchableHighlight>
        <View style={styles.section}>
          <LinearGradient
            colors={["rgba(255, 229, 0, 0.40)", "rgba(255, 229, 0, 0.40)"]}
            style={styles.gradient}
          />
          <Text style={styles.textStyles}>Empleos</Text>
          <Image
            source={require("../assets/images/empleos-image.png")}
            style={{
              width: "100%",
              height: 280,
            }}
            contentFit="cover"
          />
        </View>
        <TouchableHighlight
          onPress={() =>
            user ? router.push("/recruiter/home") : router.push("/recruiter/")
          }
        >
          <View style={styles.section}>
            <LinearGradient
              colors={["rgba(26, 188, 254, 0.40)", "rgba(26, 188, 254, 0.40)"]}
              style={styles.gradient}
            />
            <Text style={styles.textStyles}>Reclutador</Text>
            <Image
              source={require("../assets/images/reclutador-image.png")}
              style={{
                width: "100%",
                height: 280,
              }}
              contentFit="cover"
            />
          </View>
        </TouchableHighlight>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SelectorPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    position: "relative",
    display: "flex",
    width: "100%",
  },
  textStyles: {
    letterSpacing: 0.1,
    position: "absolute",
    alignSelf: "center",
    top: "40%",
    zIndex: 2,
    color: "#fff",
    fontSize: 32,
    textShadowColor: "rgba(0, 0, 0, 0.80)",
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 3,
    fontFamily: "Roboto_700Bold",
  },
  gradient: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 10,
    zIndex: 1,
  },
});
