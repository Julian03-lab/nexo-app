import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CarouselPagination from "../components/home/CarouselPagination";
import { BackArrowIcon } from "../assets/icons/icons";
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

  const scrollTo = () => {
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
        <TouchableHighlight
          style={{
            position: "absolute",
            bottom: 36,
            right: 36,
          }}
          onPress={scrollTo}
        >
          {activeIndex === sliderData.length - 1 ? (
            <BackArrowIcon />
          ) : (
            <BackArrowIcon style={{ transform: [{ rotate: "180deg" }] }} />
          )}
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default studentsOnboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
