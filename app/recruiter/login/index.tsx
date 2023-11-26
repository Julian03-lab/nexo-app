import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { NexoIcon } from "../../../assets/icons/nexo-icon";
import {
  EyeOff,
  EyeOn,
  GoogleIcon,
  LinkedinIcon,
} from "../../../assets/icons/icons";
import { Link, useRouter } from "expo-router";
import useUserStore from "../../../services/context";
import { dataList } from "../../../assets/info/jobsList";
import { trashList } from "../../../assets/info/trashList";

const login = () => {
  const router = useRouter();
  const { setUser } = useUserStore();
  const passwordRef = useRef(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    if (email === "") {
      setError({
        email: "El correo electrónico es requerido",
        password: "",
      });
      return;
    }
    if (password === "") {
      setError({
        email: "",
        password: "La contraseña es requerida",
      });
      return;
    }
    if (
      email.toLocaleLowerCase() !== "ana.garcia@example.com" &&
      email.toLocaleLowerCase() !== "bruno.ortiz@example.com"
    ) {
      setError({
        email: "El correo electrónico es inválido",
        password: "",
      });
      return;
    }

    if (email.toLocaleLowerCase() === "ana.garcia@example.com") {
      if (password !== "Aa1luna") {
        setError({
          email: "",
          password: "La contraseña es incorrecta",
        });
        return;
      }
    }

    if (email.toLocaleLowerCase() === "bruno.ortiz@example.com") {
      if (password !== "Bb2carro") {
        setError({
          email: "",
          password: "La contraseña es incorrecta",
        });
        return;
      }
    }

    setUser({
      email,
      name:
        email.toLocaleLowerCase() === "ana.garcia@example.com"
          ? "Ana García"
          : "Bruno Ortiz",
      publications:
        email.toLocaleLowerCase() === "bruno.ortiz@example.com" ? dataList : [],
      trash:
        email.toLocaleLowerCase() === "bruno.ortiz@example.com"
          ? trashList
          : [],
    });

    router.replace("/recruiter/home");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ScrollView>
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
                Publica empleos, gestiona candidatos, simplifica la
                contratación.
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
              <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                placeholderTextColor="rgba(31, 34, 105, 0.50)"
                keyboardType="email-address"
                autoComplete="email"
                enterKeyHint="next"
                onSubmitEditing={() => passwordRef.current.focus()}
                blurOnSubmit={false}
                onChange={(e) => setEmail(e.nativeEvent.text)}
              />

              <Text
                style={{
                  color: "#FF5C5C",
                  fontFamily: "Roboto_400Regular",
                  fontSize: 11,
                }}
              >
                {error.email}
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
                ref={passwordRef}
                autoComplete="off"
                keyboardType={!passwordVisible ? "default" : "visible-password"}
                onChange={(e) => setPassword(e.nativeEvent.text)}
                onSubmitEditing={handleSubmit}
              />
              {error.password ? (
                <Text
                  style={{
                    color: "#FF5C5C",
                    fontFamily: "Roboto_400Regular",
                    fontSize: 11,
                  }}
                >
                  {error.password}
                </Text>
              ) : (
                <Link
                  href="/recruiter/login/recovery"
                  style={{
                    color: "#0076B2",
                    fontFamily: "Roboto_400Regular",
                    fontSize: 11,
                  }}
                >
                  Olvide mi contraseña
                </Link>
              )}
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
                Iniciar sesión
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => console.log("press")}
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
                  Iniciar sesion con Google
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => console.log("press")}
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
                  Iniciar sesion con Linkedin
                </Text>
              </View>
            </TouchableHighlight>
            <Link href="/recruiter/register" style={styles.link}>
              No tengo cuenta
            </Link>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default login;

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
  link: {
    color: "#1F2269",
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
    textDecorationColor: "#1F2269",
    textDecorationLine: "underline",
  },
});
