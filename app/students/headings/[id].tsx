import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { headingsList } from "../../../assets/info/headingsList";
import { useLocalSearchParams } from "expo-router";
import { Image } from "expo-image";
import RenderHTML from "react-native-render-html";

const info = () => {
  const { headingid } = useLocalSearchParams();
  const { width } = useWindowDimensions();
  const heading = headingsList.find(
    (carreer) => carreer.id === Number(headingid)
  );

  const listaSecciones = (string: string) =>
    string.match(/\(LISTA\)(.*?)\(LISTA\)/gs);

  return (
    <ScrollView>
      <Image source={heading.image} style={styles.image} />
      <View style={styles.body}>
        <Text style={styles.title}>{heading.name}</Text>
        {/* <Text style={styles.bodyText}>{heading.info}</Text> */}
        <RenderHTML
          contentWidth={width}
          source={{
            html: heading.info,
          }}
          // style={{ flex: 1 }}
        />
      </View>
    </ScrollView>
  );
};

export default info;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
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
  bodyText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#000",
    lineHeight: 27,
    backgroundColor: "red",
  },
});
