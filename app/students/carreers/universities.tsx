import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { Link } from "expo-router";
import carreers from ".";

//Es un placeholder, poner info final
const Universities = ({ universities }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.body}>
        <Text style={styles.title}>Universidades donde se cursa</Text>
        {universities.map((university) => (
          <View style={{ gap: 16, alignItems: "center" }} key={universities.id}>
            <Text style={styles.text}>{university.text}</Text>
            <Image
              source={university.image}
              style={{ width: "100%", height: 180 }}
              contentFit="contain"
            />
            <View style={{ flex: 1, alignItems: "center", width: "25 %" }}>
              <Link href={university.link} style={styles.link}>
                Ver más
              </Link>
              <View
                style={{
                  width: "100%",
                  borderColor: "#ab13ed",
                  borderWidth: 1,
                  marginTop: 5,
                }}
              />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Universities;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 44,
    gap: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#ab13ed",
    textAlign: "center",
  },
  text: {
    color: "#000",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
  },
  link: {
    color: "#ab13ed",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
