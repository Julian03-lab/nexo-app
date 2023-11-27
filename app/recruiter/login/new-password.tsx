import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { NexoIcon } from "../../../assets/icons/nexo-icon";
import { EyeOff, EyeOn } from "../../../assets/icons/icons";
import { useRouter } from "expo-router";

const newPassword = () => {
  const passwordRef = useRef(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <KeyboardAvoidingView
        behavior={"padding"}
        style={{
          flex: 1,
          backgroundColor: "#fff",
          gap: 58,
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
        <View style={styles.inputArea}>
          <View>
            <TouchableHighlight
              onPress={() => setPasswordVisible(!passwordVisible)}
              underlayColor="transparent"
              style={{
                position: "absolute",
                right: 0,
                top: 16,
                zIndex: 1,
              }}
            >
              {passwordVisible ? <EyeOff /> : <EyeOn />}
            </TouchableHighlight>
            <TextInput
              style={styles.input}
              placeholder="Nueva Contraseña"
              placeholderTextColor="rgba(31, 34, 105, 0.50)"
              secureTextEntry={!passwordVisible}
              autoComplete="off"
              keyboardType={!passwordVisible ? "default" : "visible-password"}
              enterKeyHint="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              blurOnSubmit={false}
            />
          </View>
          <View>
            <TouchableHighlight
              onPress={() => setPasswordVisible2(!passwordVisible2)}
              underlayColor="transparent"
              style={{
                position: "absolute",
                right: 0,
                top: 16,
                zIndex: 1,
              }}
            >
              {passwordVisible2 ? <EyeOff /> : <EyeOn />}
            </TouchableHighlight>
            <TextInput
              style={styles.input}
              placeholder="Confirmar Contraseña"
              placeholderTextColor="rgba(31, 34, 105, 0.50)"
              secureTextEntry={!passwordVisible2}
              ref={passwordRef}
              autoComplete="off"
              keyboardType={!passwordVisible2 ? "default" : "visible-password"}
            />
          </View>
        </View>
        <View style={styles.buttonArea}>
          <TouchableHighlight
            onPress={() => router.push("/recruiter/login")}
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

export default newPassword;

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
