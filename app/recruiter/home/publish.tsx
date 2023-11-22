import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import React from "react";
import InputWithLabel from "../../../components/InputWithLabel";
import { Picker } from "@react-native-picker/picker";

const publish = () => {
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
              placeholder="Ej. Desarrollador Frontend"
              placeholderTextColor={"#BCBABA"}
            />
          </InputWithLabel>
          <InputWithLabel label="Empresa">
            <TextInput
              style={styles.input}
              placeholder="Ej. Desarrollador Frontend"
              placeholderTextColor={"#BCBABA"}
            />
          </InputWithLabel>
          <InputWithLabel label="Descripcion del empleo">
            <TextInput
              style={styles.input}
              placeholderTextColor={"#BCBABA"}
              multiline={true}
              numberOfLines={4}
              placeholder="Ej. Desarrollador Frontend"
            />
          </InputWithLabel>
          <InputWithLabel label="Vacantes">
            <TextInput
              style={styles.input}
              placeholder="Ej. Desarrollador Frontend"
              placeholderTextColor={"#BCBABA"}
            />
          </InputWithLabel>
          <InputWithLabel label="Cantidad de CV a recibir">
            <TextInput
              style={styles.input}
              placeholder="Ej. Desarrollador Frontend"
              placeholderTextColor={"#BCBABA"}
            />
          </InputWithLabel>
          <InputWithLabel label="Modo">
            <View style={styles.inputSelect}>
              <Picker
                selectedValue={"remoto"}
                onValueChange={(itemValue, itemIndex) => console.log(itemValue)}
                mode="dropdown"
              >
                <Picker.Item label="Remoto" value="remoto" />
                <Picker.Item label="Presencial" value="presencial" />
                <Picker.Item label="Hibrido" value="hibrido" />
              </Picker>
            </View>
          </InputWithLabel>
          <InputWithLabel label="Experiencia">
            <View style={styles.inputSelect}>
              <Picker
                selectedValue={"junior"}
                onValueChange={(itemValue, itemIndex) => console.log(itemValue)}
                mode="dropdown"
              >
                <Picker.Item label="Training" value="training" />
                <Picker.Item label="Junior" value="junior" />
                <Picker.Item label="Semi Senior" value="semisenior" />
                <Picker.Item label="Senior" value="senior" />
              </Picker>
            </View>
          </InputWithLabel>
          <InputWithLabel label="Link a formulario">
            <TextInput
              style={styles.input}
              placeholder="Ej. Desarrollador Frontend"
              placeholderTextColor={"#BCBABA"}
            />
          </InputWithLabel>
        </View>
        <View style={{ gap: 20, paddingHorizontal: 20 }}>
          <TouchableHighlight
            onPress={() => console.log("press")}
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
