import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React, { useState } from "react";
import PercentBar from "../PercentBar";
import { IconArrow } from "../../assets/icons/icons";

const QuestionDropdown = ({
  id,
  points,
  total,
  globePosition,
  FormQuestion,
}: {
  id: number;
  points: number;
  total: number;
  globePosition: number;
  FormQuestion: React.ReactNode;
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDespliegue = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <View
      style={{
        width: "100%",
        gap: 10,
      }}
    >
      <View style={styles.container}>
        <TouchableHighlight
          onPress={toggleDespliegue}
          underlayColor={"transparent"}
          activeOpacity={0.5}
        >
          <View style={styles.dropdown}>
            <Text style={styles.text}>
              Pregunta {id}, valor {total} puntos
            </Text>
            <IconArrow fill={"#FFFFFF"} />
          </View>
        </TouchableHighlight>
        <PercentBar
          points={points}
          total={total}
          globePosition={globePosition}
        />
      </View>
      {menuOpen && FormQuestion}
    </View>
  );
};

export default QuestionDropdown;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 10,
    // marginBottom: 30,
  },
  dropdown: {
    backgroundColor: "#1F2269",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
    maxWidth: "90%",
  },
});
