import {
  Animated,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import QuestionDropdown from "../../../components/recruiter/QuestionDropdown";
import PercentBar from "../../../components/PercentBar";
import { IconArrow } from "../../../assets/icons/icons";
import InputWithLabel from "../../../components/InputWithLabel";
import Question1 from "../../../components/formsExamples/Question1";
import Question7 from "../../../components/formsExamples/Question7";
import Question6 from "../../../components/formsExamples/Question6";
import Question5 from "../../../components/formsExamples/Question5";
import Question4 from "../../../components/formsExamples/Question4";
import Question3 from "../../../components/formsExamples/Question3";
import Question2 from "../../../components/formsExamples/Question2";

const statsList = [
  {
    id: 1,
    total: 12,
    points: 12,
    globePosition: 83,
    FormQuestion: <Question1 />,
  },
  {
    id: 2,
    total: 10,
    points: 6,
    globePosition: 51,
    FormQuestion: <Question2 />,
  },
  {
    id: 3,
    total: 10,
    points: 2,
    globePosition: 11,
    FormQuestion: <Question3 />,
  },
  {
    id: 4,
    total: 32,
    points: 20,
    globePosition: 53,
    FormQuestion: <Question4 />,
  },
  {
    id: 5,
    total: 10,
    points: 4,
    globePosition: 31,
    FormQuestion: <Question5 />,
  },
  {
    id: 6,
    total: 10,
    points: 6,
    globePosition: 51,
    FormQuestion: <Question6 />,
  },
  {
    id: 7,
    total: 12,
    points: 8,
    globePosition: 57,
    FormQuestion: <Question7 />,
  },
];

const stats = () => {
  const animatedHeight = useRef(new Animated.Value(84)).current;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDespliegue = () => {
    setMenuOpen(!menuOpen);

    Animated.timing(animatedHeight, {
      toValue: menuOpen ? 84 : 1010,
      duration: 400,
      useNativeDriver: false,
    }).start();
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              width: "100%",
              gap: 10,
            }}
          >
            <Text style={styles.title}>Formulario de contratación</Text>
            <Text style={styles.title}>ABC Tecnology</Text>
            <TouchableHighlight
              onPress={toggleDespliegue}
              underlayColor={"transparent"}
              activeOpacity={0.5}
            >
              <View style={styles.dropdown}>
                <Text style={styles.text}>Desarrollador Full Stack Senior</Text>
                <IconArrow fill={"#000000"} />
              </View>
            </TouchableHighlight>
            <Animated.View
              style={{ height: animatedHeight, overflow: "hidden" }}
            >
              <Text
                numberOfLines={menuOpen ? 100 : 4}
                style={{
                  flex: 1,
                  color: "#1F2269",
                  fontSize: 14,
                  fontFamily: "Roboto_400Regular",
                  lineHeight: 21,
                }}
              >{`¡Únete a nuestro equipo de desarrollo como Desarrollador Web fullstack senior  en               TEC-SOFT! 
Estamos en busca desarrolladores apasionados y creativos que deseen comenzar su carrera en el mundo del desarrollo web y contribuir al crecimiento de nuestro equipo.
Acerca de Nosotros: TEC-SOFT es una empresa líder en sitios de e-commerce para importantes compañías nacionales e internacionales. Como Desarrollador Web Full stack, tendrás la oportunidad de trabajar en emocionantes proyectos que desafiarán tus habilidades y te permitirán crecer profesionalmente.
Responsabilidades:
 · Colaborar con el equipo de desarrollo para implementar diseños visuales y elementos interactivos en sitios web y aplicaciones.
 · Traducir conceptos de diseño en código funcional utilizando tecnologías web estándar (HTML, CSS y JavaScript).
 · Optimizar aplicaciones web para una rápida velocidad de carga y una experiencia de usuario excepcional.
 · Participar en revisiones de código y brindar aportes constructivos para mejorar la calidad del código.
 · Creación de base datos y ambiente de    desarrollo.
 · Conocimiento de hosting y devops. Requisitos:
 · Conocimiento básico de HTML, CSS y JavaScript.
 · Pasión por la creación de experiencias de usuario atractivas y funcionales.
 · Excelente habilidad para trabajar en equipo y comunicarse eficazmente.
 · Actitud positiva y disposición para aprender y crecer.
 · Deseo de contribuir de manera proactiva al éxito del equipo y la empresa.
Instrucciones para Aplicar: Completa el siguiente formulario con tus datos y respuestas a las preguntas proporcionadas. Queremos conocer tu pasión por el desarrollo web y cómo crees que puedes contribuir a nuestro equipo.
¡Esperamos con ansias recibir tu solicitud y explorar juntos las posibilidades de unirte a TEC-SOFT como nuestro nuevo Desarrollador Web Fullstack senior! `}</Text>
            </Animated.View>
          </View>
          <Text style={styles.compatibility}>
            Compatibilidad general con el empleo
          </Text>
          <PercentBar
            points={76.4}
            total={100}
            globePosition={67.4}
            valor={false}
          />
          <InputWithLabel label="Nombre y Apellido *">
            <TextInput
              style={styles.input}
              value="Marisol Medrano"
              editable={false}
            />
          </InputWithLabel>

          <InputWithLabel label="Correo electrónico * ">
            <TextInput
              style={styles.input}
              value="marisol18@gmail.com"
              editable={false}
            />
          </InputWithLabel>
          {statsList.map((item) => (
            <QuestionDropdown
              key={item.id}
              total={item.total}
              points={item.points}
              globePosition={item.globePosition}
              id={item.id}
              FormQuestion={item.FormQuestion}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default stats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 30,
    gap: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: "Roboto_700Bold",
    color: "#000",
    marginBottom: 10,
    textAlign: "center",
  },
  compatibility: {
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
    color: "#1F2269",
    paddingVertical: 5,
    backgroundColor: "rgba(26, 217, 229, 0.50)",
    width: "100%",
    textAlign: "center",
  },
  dropdown: {
    backgroundColor: "rgba(26, 217, 229, 0.50)",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  text: {
    color: "#1F2269",
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
    maxWidth: "90%",
  },
  input: {
    padding: 10,
    borderBottomColor: "#6b6982",
    borderBottomWidth: 1,
    backgroundColor: "rgba(255, 255, 255, 0.00)",
    color: "#000",
    fontFamily: "Roboto_400Regular",
    fontSize: 14,
    width: "100%",
  },
});
