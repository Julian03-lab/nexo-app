import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import OfferCard from "../../../../components/recruiter/offerCard";
import EditedModal from "../../../../components/recruiter/EditedModal";

const previous = () => {
  const [modal, setModal] = React.useState(false);
  const router = useRouter();
  const params = useLocalSearchParams();
  const { puesto, empresa, descripcion, vacantes, cv, modo, experiencia } =
    params;

  const item = {
    title: puesto,
    publisher: empresa,
    description: descripcion,
    vacantes: vacantes,
    aspirantes: cv,
    modalidad: modo,
    experiencia: experiencia,
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingVertical: 30,
      }}
    >
      <ScrollView
        style={{
          paddingHorizontal: 20,
        }}
      >
        <EditedModal
          modalVisible={modal}
          setModalVisible={setModal}
          callback={() => router.replace("/recruiter/home")}
        />
        <View
          style={{
            marginBottom: 30,
          }}
        >
          <Text style={styles.title}>Vista del reclutador</Text>
          <OfferCard data={item} isExample />
        </View>
        <View>
          <Text style={styles.title}>Vista del aspirante</Text>
          <View
            style={{
              borderColor: "#1AD9E5",
              borderWidth: 1,
              padding: 10,
              gap: 10,
            }}
          >
            <Text
              style={{
                color: "#000",
                fontSize: 16,
                fontFamily: "Roboto_500Medium",
                textAlign: "center",
              }}
            >
              {puesto}
            </Text>
            <View>
              <Text style={styles.item}>{`\u2022 ${empresa}`}</Text>
              <Text style={styles.item}>{`\u2022 ${modo}`}</Text>
              <Text style={styles.item}>{`\u2022 ${experiencia}`}</Text>
              <Text style={styles.item}>{`\u2022 ${experiencia}`}</Text>
            </View>
            <Text
              style={{
                color: "#000",
                fontSize: 16,
                fontFamily: "Roboto_400Regular",
              }}
            >
              {descripcion}
            </Text>
          </View>
        </View>
        <View
          style={{
            gap: 20,
            paddingTop: 30,
          }}
        >
          <TouchableHighlight
            style={styles.firstButton}
            underlayColor="rgba(31, 34, 105, 0.50)"
            onPress={() => setModal(true)}
          >
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontSize: 16,
                fontFamily: "Roboto_500Medium",
              }}
            >
              Actualizar
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default previous;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
    color: "#000",
    textAlign: "center",
    paddingVertical: 12,
  },
  item: {
    color: "#000",
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
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
