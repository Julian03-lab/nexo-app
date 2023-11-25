import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React from "react";

type Props = {
  applicants: number;
  jobName: string;
  publisher: string;
};

const NotificationCard = ({ applicants, jobName, publisher }: Props) => {
  return (
    <TouchableHighlight
      onPress={() => console.log("click")}
      style={{
        borderRadius: 5,
      }}
      //   activeOpacity={0.8}
      underlayColor={"rgb(31, 34, 105)"}
    >
      <View style={styles.container}>
        <Text style={styles.text}>
          Se presentaron {applicants} Aspirantes para {jobName}, {publisher}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  text: {
    color: "#000",
    fontFamily: "Roboto_400Regular",
    lineHeight: 16.5,
    fontSize: 12,
  },
  container: {
    paddingVertical: 8,
    paddingLeft: 9,
    paddingRight: 29,
    backgroundColor: "#fff",
    borderRadius: 5,
    elevation: 3,
    minHeight: 50,
  },
});
