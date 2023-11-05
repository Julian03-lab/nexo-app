import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CarouselPagination = ({ SliderData, activeIndex }) => {
  return (
    <View style={styles.pagination}>
      {SliderData.map((_, index) => (
        <View
          key={index.toString()}
          style={index === activeIndex ? styles.activeDot : styles.dot}
        />
      ))}
    </View>
  );
};

export default CarouselPagination;

const styles = StyleSheet.create({
  dot: {
    height: 12,
    width: 12,
    borderRadius: 12,
    marginHorizontal: 10,
    backgroundColor: "#767575",
  },

  activeDot: {
    height: 12,
    width: 12,
    borderRadius: 12,
    marginHorizontal: 10,
    backgroundColor: "#ab13ed",
  },

  pagination: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    width: "100%",
    justifyContent: "center",
  },
});
