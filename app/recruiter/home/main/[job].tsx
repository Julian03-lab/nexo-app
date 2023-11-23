import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Applicant = () => {
  const { job } = useLocalSearchParams();
  return (
    <View>
      <Text>{job} 1</Text>
    </View>
  );
};

export default Applicant;

const styles = StyleSheet.create({});
