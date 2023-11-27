import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useState } from "react";
import { NexoIcon } from "../../../assets/icons/nexo-icon";
import {
  EyeOff,
  EyeOn,
  GoogleIcon,
  LinkedinIcon,
} from "../../../assets/icons/icons";
import Checkbox from "expo-checkbox";
import { useRouter } from "expo-router/src/hooks";

const index = () => {
  const router = useRouter();
  const [errors, setErrors] = useState({
    nombre: null,
    apellido: null,
    email: null,
    password: null,
    confirmPassword: null,
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setChecked] = useState(false);

  const validateName = (name) => {
    if (name.trim() === "") {
      return {
        isValid: false,
        error: "El nombre es obligatorio",
        field: "nombre",
      };
    }
    return { isValid: true };
  };

  const validateLastName = (name) => {
    if (name.trim() === "") {
      return {
        isValid: false,
        error: "El apellido es obligatorio",
        field: "apellido",
      };
    }
    return { isValid: true };
  };

  const validateEmail = (email) => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return {
        isValid: false,
        error: "El correo electrónico no es válido",
        field: "email",
      };
    }
    return { isValid: true };
  };

  const validatePassword = (password) => {
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-+]).{8,}$/.test(
        password
      )
    ) {
      return {
        isValid: false,
        error: "La contraseña no es válida",
        field: "password",
      };
    }
    return { isValid: true };
  };

  const validateConfirmPassword = (confirmPassword) => {
    if (confirmPassword !== password) {
      return {
        isValid: false,
        error: "Las contraseñas no coinciden",
        field: "confirmPassword",
      };
    }
    return { isValid: true };
  };

  const handleSubmit = () => {
    const nameValidation = validateName(nombre);
    const lastNameValidation = validateLastName(apellido);
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
    const confirmPasswordValidation = validateConfirmPassword(confirmPassword);

    if (
      nameValidation.isValid &&
      emailValidation.isValid &&
      passwordValidation.isValid &&
      confirmPasswordValidation.isValid &&
      lastNameValidation.isValid &&
      isChecked
    ) {
      router.push("/recruiter/register/confirm");
    } else {
      setErrors({
        nombre: nameValidation.error,
        email: emailValidation.error,
        password: passwordValidation.error,
        confirmPassword: confirmPasswordValidation.error,
        apellido: lastNameValidation.error,
      });
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
      }}
    >
      <ScrollView>
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            gap: 23,
          }}
        >
          <View>
            <View style={styles.header}>
              <NexoIcon width={48} height={48} fill={"#1F2269"} />
              <Text style={styles.title}>¡Bienvenido a Nexo!</Text>
              <Text style={styles.subtitle}>
                Publica empleos, gestiona candidatos, simplifica la
                contratación.
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                backgroundColor: "#C3FBFF",
                alignItems: "center",
                paddingVertical: 6,
              }}
            >
              <Text
                style={{
                  fontFamily: "Roboto_500Medium",
                  fontSize: 16,
                  color: "#1f2269",
                }}
              >
                Ingresar datos
              </Text>
            </View>
          </View>
          <View style={styles.inputArea}>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Nombre"
                placeholderTextColor="rgba(31, 34, 105, 0.50)"
                autoComplete="name"
                value={nombre}
                onChangeText={(value) => {
                  setNombre(value);
                  setErrors((prevErrors) => ({ ...prevErrors, nombre: null }));
                }}
              />
              <Text
                style={{
                  color: "#FF5C5C",
                  fontFamily: "Roboto_400Regular",
                  fontSize: 11,
                }}
              >
                {errors.nombre}
              </Text>
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Apellido"
                placeholderTextColor="rgba(31, 34, 105, 0.50)"
                autoComplete="name-family"
                value={apellido}
                onChangeText={(value) => {
                  setApellido(value);
                  setErrors((prevErrors) => ({
                    ...prevErrors,
                    apellido: null,
                  }));
                }}
              />
              <Text
                style={{
                  color: "#FF5C5C",
                  fontFamily: "Roboto_400Regular",
                  fontSize: 11,
                }}
              >
                {errors.apellido}
              </Text>
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                placeholderTextColor="rgba(31, 34, 105, 0.50)"
                keyboardType="email-address"
                autoComplete="email"
                value={email}
                onChangeText={(value) => {
                  setEmail(value);
                  setErrors((prevErrors) => ({ ...prevErrors, email: null }));
                }}
              />
              <Text
                style={{
                  color: "#FF5C5C",
                  fontFamily: "Roboto_400Regular",
                  fontSize: 11,
                }}
              >
                {errors.email}
              </Text>
            </View>
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
                placeholder="Contraseña"
                placeholderTextColor="rgba(31, 34, 105, 0.50)"
                secureTextEntry={!passwordVisible}
                autoComplete="off"
                keyboardType={!passwordVisible ? "default" : "visible-password"}
                value={password}
                onChangeText={(value) => {
                  setPassword(value);
                  setErrors((prevErrors) => ({
                    ...prevErrors,
                    password: null,
                  }));
                }}
              />
              <Text style={styles.helper}>
                8 caracteres, Mayuscula, Minuscula, Nùmero, Simbolo (-./*+)
              </Text>
              <Text
                style={{
                  color: "#FF5C5C",
                  fontFamily: "Roboto_400Regular",
                  fontSize: 11,
                }}
              >
                {errors.password}
              </Text>
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
                autoComplete="off"
                keyboardType={
                  !passwordVisible2 ? "default" : "visible-password"
                }
                value={confirmPassword}
                onChangeText={(value) => {
                  setConfirmPassword(value);
                  setErrors((prevErrors) => ({
                    ...prevErrors,
                    confirmPassword: null,
                  }));
                }}
              />
              <Text style={styles.helper}>Repetir contraseña</Text>
              <Text
                style={{
                  color: "#FF5C5C",
                  fontFamily: "Roboto_400Regular",
                  fontSize: 11,
                }}
              >
                {errors.confirmPassword}
              </Text>
            </View>
            <View style={styles.section}>
              <Checkbox
                color={"#1F2269"}
                value={isChecked}
                onValueChange={setChecked}
              />
              <Text style={styles.paragraph}>
                Autorizo el uso de mis datos conforme a la Política de
                Privacidad y aceptos los Términos y condiciones.
              </Text>
            </View>
          </View>
          <View style={styles.buttonArea}>
            <TouchableHighlight
              onPress={handleSubmit}
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
                Registrarme
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              // onPress={() => router.push("/recruiter/register/confirm")}
              style={styles.secondButton}
              underlayColor="rgba(31, 34, 105, 0.20)"
            >
              <View style={{ flexDirection: "row", gap: 10 }}>
                <GoogleIcon />
                <Text
                  style={{
                    color: "#1F2269",
                    textAlign: "center",
                    fontSize: 16,
                    fontFamily: "Roboto_500Medium",
                  }}
                >
                  Registrarme con Google
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              // onPress={() => router.push("/recruiter/register/confirm")}
              style={styles.secondButton}
              underlayColor="rgba(31, 34, 105, 0.20)"
            >
              <View style={{ flexDirection: "row", gap: 10 }}>
                <LinkedinIcon />
                <Text
                  style={{
                    color: "#1F2269",
                    textAlign: "center",
                    fontSize: 16,
                    fontFamily: "Roboto_500Medium",
                  }}
                >
                  Registrarme con Linkedin
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;

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
    alignItems: "center",
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
  section: {
    flexDirection: "row",
    gap: 5,
    paddingRight: 8,
    alignItems: "center",
  },
  paragraph: {
    fontSize: 11,
    fontFamily: "Roboto_400Regular",
    color: "#1F2269",
    lineHeight: 16.5,
  },
  helper: {
    color: "#0076b2",
    fontSize: 11,
    fontFamily: "Roboto_400Regular",
    lineHeight: 16.5,
  },
});
