import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import useUserStore from "../../../../services/context";
import SubmitModal from "../../../../components/recruiter/SubmitModal";

const submit = () => {
  const { setUser, user } = useUserStore();
  const [modal, setModal] = React.useState(false);
  const router = useRouter();
  const params = useLocalSearchParams();
  const { puesto, empresa, descripcion, vacantes, cv, modo, experiencia } =
    params;

  const submitForm = () => {
    setUser({
      ...user,
      publications: [
        ...user.publications,
        {
          id: user.publications.length + 1,
          title: puesto,
          publisher: empresa,
          vacantes,
          aspirantes: cv,
          experiencia,
          modalidad: modo,
          description: descripcion,
          applicants: [],
          priority: false,
        },
      ],
    });
    setModal(true);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <SubmitModal
        modalVisible={modal}
        setModalVisible={setModal}
        callback={() => router.replace("/recruiter/home/")}
      />
      <View style={styles.container}>
        <Text style={styles.title}>{puesto}</Text>
        <View>
          <Text style={styles.text}>{`\u2022 ${empresa}`}</Text>
          <Text style={styles.text}>{`\u2022 ${modo}`}</Text>
          <Text style={styles.text}>{`\u2022 ${experiencia}`}</Text>
        </View>
        <Text style={styles.text}>{descripcion}</Text>
        <View style={{ gap: 20 }}>
          <TouchableHighlight
            onPress={() => submitForm()}
            style={styles.firstButton}
            underlayColor="rgba(31, 34, 105, 0.50)"
          >
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontSize: 16,
                fontFamily: "Roboto_500Medium",
              }}
            >
              Publicar
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => router.back()}
            style={styles.secondButton}
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
              Editar
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
};

export default submit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
    paddingHorizontal: 22,
    gap: 20,
  },
  title: {
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
    color: "#000",
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
    color: "#000",
    lineHeight: 21,
  },
  firstButton: {
    backgroundColor: "#1F2269",
    borderRadius: 100,
    paddingVertical: 12,
    alignItems: "center",
    width: "100%",
  },
  secondButton: {
    backgroundColor: "#fff",
    borderRadius: 100,
    paddingVertical: 12,
    borderColor: "#1F2269",
    borderWidth: 1,
    alignItems: "center",
    width: "100%",
  },
});
