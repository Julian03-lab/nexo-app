import { StyleSheet, Text, View } from "react-native";
import React from "react";

type InputWithLabelProps = {
  label: string;
  children: React.ReactNode;
};

const InputWithLabel = ({ children, label }: InputWithLabelProps) => {
  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <Text style={styles.label}>{label}</Text>
      {children}
    </View>
  );
};

export default InputWithLabel;

const styles = StyleSheet.create({
  label: {
    fontFamily: "Roboto_700Bold",
    fontSize: 14,
    lineHeight: 21,
    color: "#1F2269",
  },
});
