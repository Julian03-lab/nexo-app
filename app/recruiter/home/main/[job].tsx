import {
  Animated,
  Easing,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useRef } from "react";
import { useLocalSearchParams } from "expo-router";
import useUserStore from "../../../../services/context";
import ApplicantCard from "../../../../components/recruiter/applicantCard";
import { IconArrow } from "../../../../assets/icons/icons";

const Applicant = () => {
  const { job } = useLocalSearchParams();
  const { user } = useUserStore();
  const [open, setOpen] = React.useState(false);
  const animatedRotation = useRef(new Animated.Value(0)).current;

  const toggleDespliegue = () => {
    setOpen(!open);

    Animated.timing(animatedRotation, {
      toValue: open ? 0 : 1,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const rotateInterpolate = animatedRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const { title, experiencia, modalidad, publisher, description, applicant } =
    user.publications.filter((pub) => pub.id === Number(job))[0];

  return (
    <SafeAreaView style={styles.containter}>
      <ScrollView>
        <TouchableHighlight
          onPress={toggleDespliegue}
          underlayColor={"transparent"}
        >
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <Animated.View
              style={{
                transform: [{ rotate: rotateInterpolate }],
              }}
            >
              <IconArrow
                // style={open && { transform: [{ rotate: "180deg" }] }}
                fill={"#000000"}
              />
            </Animated.View>
          </View>
        </TouchableHighlight>
        <View style={styles.content}>
          <TouchableHighlight
            onPress={() => {}}
            style={styles.button}
            underlayColor="rgba(31, 34, 105, 0.20)"
          >
            <Text
              style={{
                color: "#1F2269",
                textAlign: "center",
                fontSize: 16,
                fontFamily: "Roboto_500Medium",
              }}
            >
              Ver estadísticas
            </Text>
          </TouchableHighlight>
          {open && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{title}</Text>
              <Text style={styles.sectionItem}>{`\u2022 ${publisher}`}</Text>
              <Text style={styles.sectionItem}>{`\u2022 ${modalidad}`}</Text>
              <Text style={styles.sectionItem}>{`\u2022 ${experiencia}`}</Text>
              <Text style={styles.sectionDescription}>{description}</Text>
            </View>
          )}
          <View style={styles.applicants}>
            {applicant.map((item) => (
              <ApplicantCard email={item.email} key={item.id} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Applicant;

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    gap: 26,
    alignItems: "center",
    paddingHorizontal: 22,
    paddingVertical: 26,
  },
  header: {
    backgroundColor: "#EFFEFF",
    paddingVertical: 18,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#1AD9E5",
  },
  headerActive: {
    backgroundColor: "#D1F7FA",
    paddingVertical: 18,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: "#1F2269",
  },
  title: {
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
    maxWidth: "95%",
  },
  section: {},
  sectionTitle: {
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
    marginBottom: 20,
    textAlign: "center",
  },
  sectionItem: {
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
  },
  sectionDescription: {
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
    marginTop: 20,
  },
  applicants: {
    width: "100%",
    gap: 20,
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 100,
    paddingVertical: 12,
    borderColor: "#1F2269",
    borderWidth: 1,
    width: "100%",
  },
});
