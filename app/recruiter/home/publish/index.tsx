import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import InputWithLabel from "../../../../components/InputWithLabel";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { useRouter } from "expo-router";

const publish = () => {
  const [puesto, setPuesto] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [vacantes, setVacantes] = useState("");
  const [cv, setCv] = useState("");
  const [modo, setModo] = useState("Remoto");
  const [experiencia, setExperiencia] = useState("Senior");
  const [link, setLink] = useState("");
  const router = useRouter();

  const verifyForm = () => {
    if (
      puesto === "" ||
      empresa === "" ||
      descripcion === "" ||
      vacantes === "" ||
      cv === "" ||
      modo === "" ||
      experiencia === "" ||
      link === ""
    ) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        <View style={styles.haeder}>
          <Text style={styles.title}>
            Rellena el formularios con la descripción del empleo
          </Text>
        </View>
        <View style={styles.inputList}>
          <InputWithLabel label="Puesto solicitado">
            <TextInput
              style={styles.input}
              placeholder="Desarrollador Frontend"
              placeholderTextColor={"#BCBABA"}
              value={puesto}
              onChangeText={(text) => setPuesto(text)}
            />
          </InputWithLabel>
          <InputWithLabel label="Empresa">
            <TextInput
              style={styles.input}
              placeholder="TechNova"
              placeholderTextColor={"#BCBABA"}
              value={empresa}
              onChangeText={(text) => setEmpresa(text)}
            />
          </InputWithLabel>
          <InputWithLabel label="Descripcion del empleo">
            <TextInput
              style={styles.input}
              placeholderTextColor={"#BCBABA"}
              multiline={true}
              numberOfLines={4}
              placeholder="Describe brevemente las características del empleo, la información debe ser  precisa. ¡Buena suerte con tu búsqueda de candidatos!"
              value={descripcion}
              onChangeText={(text) => setDescripcion(text)}
            />
          </InputWithLabel>
          <InputWithLabel label="Vacantes">
            <TextInput
              style={styles.input}
              placeholder="3"
              placeholderTextColor={"#BCBABA"}
              keyboardType="numeric"
              value={vacantes}
              onChangeText={(text) => setVacantes(text)}
            />
          </InputWithLabel>
          <InputWithLabel label="Cantidad de CV a recibir">
            <TextInput
              style={styles.input}
              placeholder="10"
              placeholderTextColor={"#BCBABA"}
              keyboardType="numeric"
              value={cv}
              onChangeText={(text) => setCv(text)}
            />
          </InputWithLabel>
          <InputWithLabel label="Modo">
            <View style={styles.inputSelect}>
              <Picker
                selectedValue={modo}
                onValueChange={(itemValue) => setModo(itemValue)}
                mode="dropdown"
              >
                <Picker.Item label="Remoto" value="Remoto" />
                <Picker.Item label="Presencial" value="Presencial" />
                <Picker.Item label="Hibrido" value="Hibrido" />
              </Picker>
            </View>
          </InputWithLabel>
          <InputWithLabel label="Experiencia">
            <View style={styles.inputSelect}>
              <Picker
                selectedValue={experiencia}
                onValueChange={(itemValue) => setExperiencia(itemValue)}
                mode="dropdown"
              >
                <Picker.Item label="Training" value="Training" />
                <Picker.Item label="Junior" value="Junior" />
                <Picker.Item label="Semi Senior" value="SemiSenior" />
                <Picker.Item label="Senior" value="Senior" />
              </Picker>
            </View>
          </InputWithLabel>
          <InputWithLabel label="Link a formulario">
            <TextInput
              style={styles.input}
              placeholder="https://docs.google.com/forms/d/e/1FAIpQLSeI8_vYyaJgM7SJM4Y9AWfLq-tglWZh6yt7bEXEOJr_L-hV1A/viewform?formkey=dGx0b1ZrTnoyZDgtYXItMWVBdVlQQWc6MQ"
              placeholderTextColor={"#BCBABA"}
              value={link}
              onChangeText={(text) => setLink(text)}
            />
          </InputWithLabel>
        </View>
        <View style={{ gap: 20, paddingHorizontal: 20, paddingBottom: 44 }}>
          <TouchableHighlight
            disabled={!verifyForm()}
            onPress={() =>
              router.push({
                pathname: "/recruiter/home/publish/submit",
                params: {
                  puesto,
                  empresa,
                  descripcion,
                  vacantes,
                  cv,
                  modo,
                  experiencia,
                  link,
                },
              })
            }
            style={{ ...styles.firstButton, opacity: verifyForm() ? 1 : 0.5 }}
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
              Continuar
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => console.log("press")}
            style={styles.secondButton}
            underlayColor="rgba(31, 34, 105, 0.20)"
          >
            <Text
              style={{
                color: "#FF5C5C",
                textAlign: "center",
                fontSize: 16,
                fontFamily: "Roboto_500Medium",
              }}
            >
              Cancelar
            </Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default publish;

const styles = StyleSheet.create({
  haeder: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 21,
    paddingHorizontal: 70,
    backgroundColor: "#8CECF2",
  },
  title: {
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
    color: "#1F2269",
    textAlign: "center",
  },
  inputList: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    gap: 18,
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
  inputSelect: {
    fontSize: 16,
    fontFamily: "Roboto_400Regular",
    color: "#000",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderColor: "#1F2269",
    borderWidth: 0.5,
    textAlignVertical: "top",
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
    borderColor: "#FF5C5C",
    borderWidth: 1,
    alignItems: "center",
    width: "100%",
  },
});
