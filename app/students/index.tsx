import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Button,
} from "react-native";
import React from "react";
import { Image } from "expo-image";
import ImageSlider from "../../components/home/carousel";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginPage = () => {
  const deleteAsync = async () => {
    await AsyncStorage.removeItem("@viewedOnboarding");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          source={require("../../assets/images/derechos-y-obligaciones.png")}
          style={{
            width: "100%",
            height: 212, // 212
          }}
          contentFit="cover"
          contentPosition={"top"}
        />
        <View style={styles.textContainer}>
          <Button title="Go to Home" onPress={deleteAsync} />
          <Text style={styles.title}>¡¡Da el primer paso!!</Text>
          <Text style={styles.subtitle}>
            Revisa cada una de las opciones que tenemos para vos
          </Text>
        </View>
        <ImageSlider />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  title: {
    fontWeight: "700",
    fontSize: 20,
    color: "#ab13ed",
  },
  subtitle: {
    fontWeight: "400",
    letterSpacing: 0.02,
    color: "#000",
    fontSize: 16,
    textAlign: "center",
  },
});
