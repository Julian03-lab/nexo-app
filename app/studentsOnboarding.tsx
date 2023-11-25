import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CarouselPagination from "../components/home/CarouselPagination";
import {
  BackArrowIcon,
  CircleCheckIcon,
  NextArrowIcon,
} from "../assets/icons/icons";
import FirstOnboard from "../components/StudentsOnboard/FirstOnboard";
import SecondOnboard from "../components/StudentsOnboard/SecondOnboard";
import { useRouter } from "expo-router";

const studentsOnboarding = () => {
  const router = useRouter();
  const sliderData = [
    { index: 1, component: <FirstOnboard /> },
    { index: 2, component: <SecondOnboard /> },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const slidesRef = useRef(null);
  const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
    setActiveIndex(viewableItems[0].index);
  }).current;

  const viewConfigRef = useRef({ itemVisiblePercentThreshold: 50 }).current;

  const updateViewedOnboarding = async () => {
    try {
      await AsyncStorage.setItem("@viewedOnboarding", "true");
    } catch (e) {
      console.log(e);
    } finally {
      router.replace("/students");
    }
  };

  const scrollTo = (direction: "back" | "next") => {
    if (direction === "back") {
      slidesRef.current.scrollToIndex({ index: activeIndex - 1 });
      return;
    }
    if (activeIndex < sliderData.length - 1) {
      slidesRef.current.scrollToIndex({ index: activeIndex + 1 });
    } else {
      updateViewedOnboarding();
    }
  };

  return (
    <View style={{ ...styles.container }}>
      <FlatList
        data={sliderData}
        renderItem={({ item }) => item.component}
        keyExtractor={(item) => item.index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewConfigRef}
        ref={slidesRef}
      />

      <View
        style={{
          backgroundColor: "#fff",
          flex: 100000,
        }}
      >
        <CarouselPagination SliderData={sliderData} activeIndex={activeIndex} />
        <View
          style={{
            paddingHorizontal: 20,
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          {activeIndex > 0 ? (
            <TouchableHighlight
              onPress={() => scrollTo("back")}
              underlayColor="transparent"
              activeOpacity={0.5}
            >
              <View style={styles.button}>
                <NextArrowIcon style={{ transform: [{ rotate: "180deg" }] }} />
                <Text
                  style={{
                    color: "#bcbaba",
                    fontSize: 12,
                    fontFamily: "Roboto_400Regular",
                  }}
                >
                  Volver
                </Text>
              </View>
            </TouchableHighlight>
          ) : (
            <View style={{ width: 1, height: 1 }}></View>
          )}
          <TouchableHighlight
            onPress={() => scrollTo("next")}
            underlayColor="transparent"
            activeOpacity={0.5}
          >
            {activeIndex === sliderData.length - 1 ? (
              <View style={styles.button}>
                <Text
                  style={{
                    color: "#bcbaba",
                    fontSize: 12,
                    fontFamily: "Roboto_400Regular",
                  }}
                >
                  Finalizar
                </Text>
                <CircleCheckIcon />
              </View>
            ) : (
              <View style={styles.button}>
                <Text
                  style={{
                    color: "#bcbaba",
                    fontSize: 12,
                    fontFamily: "Roboto_400Regular",
                  }}
                >
                  Siguiente
                </Text>
                <NextArrowIcon />
              </View>
            )}
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default studentsOnboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  button: {
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
  },
});
