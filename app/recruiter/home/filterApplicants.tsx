import {
  Animated,
  Easing,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useRef } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import useUserStore from "../../../services/context";
import ApplicantCard from "../../../components/recruiter/applicantCard";
import { IconArrow } from "../../../assets/icons/icons";
import InputWithLabel from "../../../components/InputWithLabel";
import MessageSendedModal from "../../../components/recruiter/MessageSendedModal";

const Applicant = () => {
  const params = useLocalSearchParams();
  const { offerId, column } = params;
  const { user } = useUserStore();
  const [open, setOpen] = React.useState(false);
  const animatedRotation = useRef(new Animated.Value(0)).current;
  const [modal, setModal] = React.useState(false);
  const router = useRouter();

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

  if (!user || !offerId) {
    return <></>;
  }

  const { title, experiencia, modalidad, publisher, description, applicant } =
    user.publications.filter((pub) => pub.id === Number(offerId))[0];

  const filteredApplicants = applicant.filter(
    (app) => app.column === Number(column)
  );

  return (
    <SafeAreaView style={styles.containter}>
      <ScrollView>
        <MessageSendedModal
          modalVisible={modal}
          setModalVisible={setModal}
          callback={() => router.replace("/recruiter/home")}
        />
        <TouchableHighlight
          onPress={toggleDespliegue}
          underlayColor={"transparent"}
        >
          <View style={open ? styles.headerActive : styles.header}>
            <Text style={styles.title}>{title}</Text>
            <Animated.View
              style={{
                transform: [{ rotate: rotateInterpolate }],
              }}
            >
              <IconArrow fill={"#000000"} />
            </Animated.View>
          </View>
        </TouchableHighlight>
        <View style={styles.content}>
          {open && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{title}</Text>
              <Text style={styles.sectionItem}>{`\u2022 ${publisher}`}</Text>
              <Text style={styles.sectionItem}>{`\u2022 ${modalidad}`}</Text>
              <Text style={styles.sectionItem}>{`\u2022 ${experiencia}`}</Text>
              <Text style={styles.sectionDescription}>{description}</Text>
            </View>
          )}
          <InputWithLabel label="Asunto">
            <TextInput
              style={styles.input}
              placeholder="Escribe tu asunto aqui"
            />
          </InputWithLabel>
          <InputWithLabel label="Escribir mensaje">
            <TextInput
              style={styles.input}
              numberOfLines={4}
              placeholder="Escribe tu mensaje aqui"
            />
          </InputWithLabel>
          <TouchableHighlight
            onPress={() => setModal(true)}
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
              Enviar
            </Text>
          </TouchableHighlight>
          <View style={styles.applicants}>
            {filteredApplicants.map((item) => (
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
    backgroundColor: "#D1F7FA",
    paddingVertical: 18,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  headerActive: {
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
  title: {
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
    maxWidth: "95%",
  },
  section: {},
  sectionTitle: {
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
    marginBottom: 16,
    textAlign: "center",
  },
  sectionItem: {
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
  },
  sectionDescription: {
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
    marginTop: 16,
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
  input: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
    color: "#000",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderColor: "#1F2269",
    borderWidth: 0.5,
    textAlignVertical: "top",
  },
});
