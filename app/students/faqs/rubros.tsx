import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import FaqsDraw from "../../../assets/images/undraw/faqsdraw";
import Accordion from "../../../components/Accordion";

const faqslist = [
  {
    id: 1,
    title:
      "¿Es necesario estudiar una carrera tecnológica o terminarla para trabajar en un empleo relacionado con el rubro IT?",
    content:
      "No es estrictamente necesario estudiar una carrera tecnológica o completarla para trabajar en un empleo relacionado con el rubro IT. Si bien una formación universitaria puede proporcionar una base sólida de conocimientos y habilidades,existen otras vías de ingreso a la industria. En la actualidad, hay múltiples opciones para adquirir habilidades técnicas en IT, como el aprendizaje autodidacta a través de videos en línea, cursos cortos y certificaciones. Estos métodos permiten a las personas adquirir conocimientos necesarios para desempeñarse en roles de IT sin necesidad de una carrera universitaria. Lo que suele ser más valorado es la experiencia práctica, las habilidades demostrables y la capacidad de resolver problemas. Por lo tanto, aunque la formación académica puede ser beneficiosa, no es un requisito excluyente para trabajar en el algún rubro IT.",
  },
  {
    id: 2,
    title:
      "¿ Cuáles son los roles y responsabilidades comunes en el rubro IT ? ",
    content: `Los roles y respoonsabilidades mas comunes en el rubro IT son:
      Desarrollo de software: Los profesionales de este rubro se dedican a diseñar, programar y mantener aplicaciones y sistemas de software. Pueden especializarse en áreas como desarrollo web, desarrollo móvil, desarrollo de juegos, entre otros.
      Soporte técnico: Los profesionales de soporte técnico brindan asistencia y resuelven problemas relacionados con el hardware, software y redes. Responden a consultas, ofrecen soluciones y resuelven problemas para garantizar el correcto funcionamiento de los sistemas informáticos.
      Tester o analista de calidad de software: Se dedican a garantizar que los productos y sistemas de software cumplan con los estándares de calidad establecidos. Diseñan y ejecutan pruebas, identifican errores y colaboran en la mejora continua de los procesos de desarrollo de software.
      Seguridad informática: En un mundo cada vez más digital, la seguridad de la información es fundamental. Los especialistas en seguridad informática se encargan de proteger los sistemas, redes y datos de posibles amenazas y vulnerabilidades.
      Entre otras.`,
  },
  {
    id: 3,
    title: "¿Cuáles son las ventajas de trabajar en el campo de IT?",
    content:
      "Algunas ventajas de trabajar en el rubro de IT son: un alto potencial de crecimiento profesional, salarios competitivos, oportunidades de trabajo remoto, creatividad , desafíos constantes, y la posibilidad de contribuir a la innovación tecnológica.",
  },
  {
    id: 4,
    title:
      "¿Qué empresas tecnológicas famosas ofrecen programas de pasantías para estudiantes de secundaria interesados en el campo de IT?",
    content:
      "Empresas como Google, Microsoft y Apple ofrecen programas de pasantías para estudiantes de secundaria que deseen explorar el campo de IT y obtener experiencia práctica.",
  },
  {
    id: 5,
    title:
      "¿Qué tipos de habilidades de programación son más demandados en la industria actualmente?",
    content:
      "Algunas habilidades de programación en alta demanda incluyen el dominio de lenguajes populares como Python, JavaScript y Java, así como el conocimiento de frameworks y herramientas como React, Angular y Node.js.",
  },
];

const rubros = () => {
  const [open, setOpen] = React.useState<null | string>(null);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <FaqsDraw />
          <Text style={styles.title}>
            A continuación, encontrarás las preguntas y respuestas más
            relevantes sobre los{" "}
            <Text style={{ color: "#ab13ed" }}>Rubros IT</Text>
          </Text>
          <View style={styles.accordionContainer}>
            {faqslist.map((item) => (
              <Accordion
                id={item.id}
                key={item.id}
                title={item.title}
                content={item.content}
                open={open === item.id.toString()}
                setOpen={setOpen}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default rubros;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    gap: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  accordionContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
});
