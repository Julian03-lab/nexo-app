import {
  Animated,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useRef, useState } from "react";
import { Image } from "expo-image";
import Carousel from "react-native-snap-carousel";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import CarouselPagination from "./CarouselPagination";

const SliderData = [
  {
    id: 0,
    title: "Carreras",
    link: "students/carreers",
    image: require("../../assets/images/carreers-image.png"),
  },
  {
    id: 1,
    title: "Rubros",
    link: "students/headings",
    image: require("../../assets/images/rubros-image.png"),
  },
  {
    id: 2,
    title: "Sugerencias",
    link: "students/sugerences",
    image: require("../../assets/images/sugerencias-image.png"),
  },
  {
    id: 3,
    title: "Preguntas",
    link: "students/faqs",
    image: require("../../assets/images/preguntas-image.png"),
  },
];

const sliderWidth = Dimensions.get("window").width;

const ImageSlider = () => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOnViewableItemsChanged = useCallback(({ viewableItems }) => {
    setActiveIndex(viewableItems[0].index);
  }, []);

  const viewConfigRef = useRef({ itemVisiblePercentThreshold: 50 }).current;

  const Card = useCallback(({ item }) => {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => router.push(item.link)}
          style={styles.button}
          underlayColor={"#AF13F2"}
          activeOpacity={0.5}
        >
          <Text style={styles.buttonTextStyle}>{item.title}</Text>
        </TouchableHighlight>
        <Image
          source={item.image}
          style={styles.image}
          contentFit="cover"
          contentPosition={"left"}
        />
      </View>
    );
  }, []);

  return (
    <View>
      <FlatList
        data={SliderData}
        renderItem={({ item }) => <Card item={item} />}
        horizontal={true}
        keyExtractor={(item) => item.id.toString()}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewConfigRef}
      />
      <CarouselPagination activeIndex={activeIndex} SliderData={SliderData} />
    </View>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
    flex: 1,
    position: "relative",
    height: 315,
    width: sliderWidth,
    paddingHorizontal: 24,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  button: {
    position: "absolute",
    zIndex: 1,
    alignSelf: "center",
    bottom: 32,
    borderRadius: 100,
    paddingVertical: 12,
    elevation: 2,
    backgroundColor: "#ab13ed",
    width: "85%",
    alignItems: "center",
  },

  buttonTextStyle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 0.1,
  },
});
