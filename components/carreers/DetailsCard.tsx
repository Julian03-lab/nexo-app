import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Image, ImageContentPosition } from "expo-image";
import { useRouter } from "expo-router";

const CarreerCard = ({
  id,
  name,
  image,
  position,
  route,
}: {
  id: number | string;
  name: string;
  image: any;
  position?: ImageContentPosition;
  route: string;
}) => {
  const router = useRouter();
  return (
    <Pressable style={styles.container} onPress={() => router.push(route + id)}>
      <Image
        source={image}
        contentPosition={position || "top"}
        style={{
          width: "100%",
          height: 150,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <View style={styles.textContainer}>
        <Text numberOfLines={2} style={styles.text}>
          {name}
        </Text>
      </View>
    </Pressable>
  );
};

export default CarreerCard;

const styles = StyleSheet.create({
  container: {
    width: 150,
    backgroundColor: "#fff",
    elevation: 2,
    borderRadius: 10,
    marginBottom: 20,
  },
  textContainer: {
    height: 64,
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
});
