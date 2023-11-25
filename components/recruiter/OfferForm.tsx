import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useState } from "react";
import InputWithLabel from "../InputWithLabel";
import { useRouter } from "expo-router";
import { Picker } from "@react-native-picker/picker";

type Props = {
  pathname: string;
  formInfo?: {
    puesto: any;
    empresa: any;
    descripcion: any;
    vacantes: any;
    cv: any;
    modo: any;
    experiencia: any;
    link: any;
  };
};

const OfferForm = ({ pathname, formInfo }: Props) => {
  const [puesto, setPuesto] = useState(formInfo?.puesto || "");
  const [empresa, setEmpresa] = useState(formInfo?.empresa || "");
  const [descripcion, setDescripcion] = useState(formInfo?.descripcion || "");
  const [vacantes, setVacantes] = useState(formInfo?.vacantes || "");
  const [cv, setCv] = useState(formInfo?.cv || "");
  const [modo, setModo] = useState(formInfo?.modo || "Remoto");
  const [experiencia, setExperiencia] = useState(
    formInfo?.experiencia || "Senior"
  );
  const [link, setLink] = useState(formInfo?.link || "");
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
    <>
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
              pathname,
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
    </>
  );
};

export default OfferForm;

const styles = StyleSheet.create({
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
