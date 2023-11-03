import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Image } from "expo-image";
import Carousel from "react-native-snap-carousel";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

const SliderData = [
  {
    id: 0,
    title: "Carreras",
    link: "/carreers",
    image: require("../../assets/images/carreers-image.png"),
  },
  {
    id: 1,
    title: "Rubros",
    link: "/headings",
    image: require("../../assets/images/rubros-image.png"),
  },
  {
    id: 2,
    title: "Sugerencias",
    link: "/sugerences",
    image: require("../../assets/images/sugerencias-image.png"),
  },
  {
    id: 3,
    title: "Preguntas",
    link: "/",
    image: require("../../assets/images/preguntas-image.png"),
  },
];

const ImageSlider = () => {
  const router = useRouter();
  const sliderWidth = Dimensions.get("window").width;
  const itemWidth = 297;

  const Card = ({ item }) => {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => router.push(item.link)}
          style={styles.button}
          underlayColor={"#AF13F2"}
          activeOpacity={0.5}
        >
          <LinearGradient
            //   locations={[0.1, 1]}
            colors={["#AF13F2", "#E2AFF8"]}
            start={{ x: 0.7, y: 0 }}
            end={{ x: 0.2, y: 1 }}
            style={styles.gradient}
          >
            <Text style={styles.buttonTextStyle}>{item.title}</Text>
          </LinearGradient>
        </TouchableHighlight>
        <Image
          source={item.image}
          style={styles.image}
          contentFit="cover"
          contentPosition={"left"}
        />
      </View>
    );
  };

  //   linear-gradient(248deg, #AF13F2 32.37%, #E2AFF8 89.18%)

  return (
    <Carousel
      layout="default"
      data={SliderData}
      renderItem={({ item }) => <Card item={item} />}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
      activeSlideOffset={5}
      useScrollView={true}
      enableSnap={true}
      enableMomentum={true}
    ></Carousel>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
    flex: 1,
    gap: 20,
    position: "relative",
    height: 315,
  },
  image: {
    width: 297,
    height: "100%",
    borderRadius: 10,
  },
  button: {
    position: "absolute",
    zIndex: 1,
    alignSelf: "center",
    bottom: 32,
    borderRadius: 100,
  },
  gradient: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 100,
    elevation: 2,
  },

  buttonTextStyle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 0.1,
  },
});
