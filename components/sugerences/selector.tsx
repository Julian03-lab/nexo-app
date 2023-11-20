import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React, { useState } from "react";
import ButtonChip from "../ButtonChip";
import { sugerencesList } from "../../assets/info/sugerencesList";
import { useRouter } from "expo-router";

const Selector = () => {
  const [selected, setSelected] = useState([]);
  const router = useRouter();

  const handleClick = (id: number) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    <>
      <View style={styles.chipsContainer}>
        {sugerencesList.map((sugerence) => (
          <ButtonChip
            selected={selected.includes(sugerence.id)}
            key={sugerence.id}
            text={sugerence.title}
            handleClick={handleClick}
            id={sugerence.id}
          />
        ))}
      </View>
      <TouchableHighlight
        style={styles.button}
        underlayColor={"#8E0FC5"}
        activeOpacity={0.8}
        onPress={() =>
          router.push({
            pathname: "/students/sugerences/results",
            params: { selected },
          })
        }
      >
        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "500" }}>
          Filtrar
        </Text>
      </TouchableHighlight>
    </>
  );
};

export default Selector;

const styles = StyleSheet.create({
  chipsContainer: {
    paddingHorizontal: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    width: "100%",
  },

  button: {
    paddingVertical: 12,
    width: "70%",
    borderRadius: 100,
    backgroundColor: "#AB13ED",
    alignItems: "center",
  },
});
