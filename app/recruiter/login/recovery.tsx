import {
  Alert,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useState } from "react";
import { NexoIcon } from "../../../assets/icons/nexo-icon";
import RecoveryModal from "../../../components/recovery/RecoveryModal";

const recovery = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <RecoveryModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <KeyboardAvoidingView
        behavior={"padding"}
        style={{
          flex: 1,
          backgroundColor: "#fff",
          gap: 35,
        }}
      >
        <View>
          <View style={styles.header}>
            <NexoIcon width={48} height={48} fill={"#1F2269"} />
            <Text style={styles.title}>¡Bienvenido a Nexo!</Text>
            <Text style={styles.subtitle}>
              Publica empleos, gestiona candidatos, simplifica la contratación.
            </Text>
          </View>
          <View
            style={{ width: "100%", height: 24, backgroundColor: "#AFF2F6" }}
          ></View>
          <View
            style={{ width: "100%", height: 24, backgroundColor: "#D1F7FA" }}
          ></View>
        </View>
        <Text style={styles.subtitle}>
          ¡Hola! Para poder recuperar tu contraseña, necesitamos que nos
          proporciones tu correo electrónico.
        </Text>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            placeholderTextColor="rgba(31, 34, 105, 0.50)"
            keyboardType="email-address"
            autoComplete="email"
          />
        </View>

        <View style={styles.buttonArea}>
          <TouchableHighlight
            onPress={() => setModalVisible(true)}
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
              Recuperar contraseña
            </Text>
          </TouchableHighlight>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default recovery;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 40,
    paddingBottom: 26,
    backgroundColor: "#8CECF2",
    alignItems: "center",
    gap: 14,
    paddingTop: 48,
  },
  title: {
    fontSize: 24,
    fontFamily: "Roboto_700Bold",
    color: "#1F2269",
  },
  subtitle: {
    fontSize: 14,
    fontFamily: "Roboto_400Regular",
    color: "#1F2269",
    lineHeight: 21,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  inputArea: {
    paddingHorizontal: 20,
    gap: 20,
  },
  input: {
    paddingVertical: 8,
    borderBottomColor: "#1F2269",
    borderBottomWidth: 0.5,
    fontFamily: "Roboto_400Regular",
    paddingRight: 20,
  },
  buttonArea: {
    paddingHorizontal: 20,
    gap: 20,
    paddingBottom: 48,
  },
  firstButton: {
    backgroundColor: "#1F2269",
    borderRadius: 100,
    paddingVertical: 12,
    alignItems: "center",
  },
  secondButton: {
    backgroundColor: "#fff",
    borderRadius: 100,
    paddingVertical: 12,
    borderColor: "#1F2269",
    borderWidth: 1,
    alignItems: "center",
  },
});
