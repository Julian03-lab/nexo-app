import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const JobCard = ({
  id,
  job,
  publisher,
  experience,
  mode,
}: {
  id: number;
  job: string | string[];
  publisher: string | string[];
  experience: string | string[];
  mode: string | string[];
}) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "flex-start",
        }}
      >
        <Text style={styles.title}>{job}</Text>
        <TouchableHighlight
          onPress={() => router.push(`/employements/${id}`)}
          underlayColor={"#8CE2C8"}
          activeOpacity={1}
          style={{
            backgroundColor: "#fff",
            borderRadius: 100,
            paddingHorizontal: 10,
            borderColor: "#BCBABA",
            borderWidth: 1,
          }}
        >
          <Text
            style={{
              fontFamily: "Roboto_500Medium",
              fontSize: 16,
              color: "#1f2269",
              lineHeight: 21,
            }}
          >
            Ver
          </Text>
        </TouchableHighlight>
      </View>
      <Text style={styles.subtitle}>{publisher}</Text>
      <Text style={styles.text}>Experiencia / {experience}</Text>
      <Text style={styles.text}>Modalidad / {mode}</Text>
    </View>
  );
};

export default JobCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    gap: 2,
    borderRadius: 5,
    borderBottomColor: "#8CE2C8",
    borderBottomWidth: 1,
    elevation: 2,
    width: "100%",
  },
  title: {
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
    color: "#1f2269",
    width: "80%",
  },
  subtitle: {
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
    color: "#1f2269",
  },
  text: {
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    color: "#1f2269",
  },
});
