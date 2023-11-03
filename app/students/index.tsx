import { StyleSheet, SafeAreaView, View, Text, ScrollView } from "react-native";
import React from "react";
import { Image } from "expo-image";
import ImageSlider from "../../components/home/carousel";

const LoginPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          source={require("../../assets/images/derechos-y-obligaciones.png")}
          style={{
            width: 440,
            height: 290,
            marginBottom: 44,
          }}
          contentFit="cover"
        />
        <View style={styles.textContainer}>
          <Text
            style={{
              fontSize: 24,
              ...styles.textStyles,
            }}
          >
            Da el primer paso
          </Text>
          <Text
            style={{
              fontSize: 15,
              ...styles.textStyles,
            }}
          >
            Revisa cada una de las opciones que tenemos para ti
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
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 16,
    width: "85%",
  },
  textStyles: {
    fontWeight: "700",
    letterSpacing: 0.1,
  },
});
