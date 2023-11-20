import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import FaqsDraw from "../../../assets/images/undraw/faqsdraw";
import Accordion from "../../../components/Accordion";

const faqslist = [
  {
    id: 1,
    title:
      "¿Cómo puedo prepararme para carreras tecnológicas mientras estoy en la escuela  secundaria?",
    content:
      "Para comenzar a desarrollar habilidades tecnológicas puedes participar en actividades extracurriculares relacionadas con la informática, programación o robótica. También puedes explorar cursos en línea gratuitos o de bajo costo para aprender los fundamentos de la programación y la tecnología..",
  },
  {
    id: 2,
    title: "¿Qué conocimientos necesito para estudiar carreras tecnológicas?",
    content:
      "Para estudiar carreras tecnológicas, es importante tener una base sólida en matemáticas, como conocimientos fundamentales en álgebra, geometría y estadística son muy útiles en muchas áreas de la tecnología. Además de las matemáticas, es esencial adquirir conocimientos en áreas como la informática. Esto implica comprender los conceptos básicos de la programación, los sistemas operativos, las bases de datos y las redes de computadoras. También es beneficioso familiarizarse con conceptos basicos de los lenguajes de programación populares, como C, Java, Python o JavaScript.",
  },
  {
    id: 3,
    title:
      "¿Cuántos años de estudio son necesarios para completar una carrera tecnológica?",
    content:
      "La duración de las carreras tecnológicas varía según la elección de la carrera.. Existen carreras de 3 años, así como de 5 años, dependiendo del programa académico y la dedicación del estudiante. Durante este período, los estudiantes adquieren los conocimientos teóricos y prácticos necesarios en áreas como la informática, la ingeniería de software, las redes de computadoras y más.",
  },
  {
    id: 4,
    title:
      "¿Cuál es la diferencia entre una licenciatura e ingeniería en carreras tecnológicas?",
    content: `La diferencia entre un licenciado y un ingeniero en carreras tecnológicas radica principalmente en el enfoque de sus estudios y las habilidades adquiridas durante su formación académica
      La formacion de los licenciados en carreras tecnológicas Su formación se centra en adquirir conocimientos teóricos y prácticos en un área específica de las tecnologías de la información y la comunicación (TIC), como programación, bases de datos, redes, seguridad informática, diseño web, entre otros.
      La formacion de los ingenieros en carreras tecnológicas incluye una base sólida en matemáticas,electronica y tecnologías de ingeniería, además de conocimientos específicos en su área de especialización tecnológica. Se enfocan en el diseño, desarrollo, implementación y gestión de sistemas y tecnologías complejas. Su enfoque va más allá de la programación y abarca aspectos como la planificación, el análisis de requerimientos, la gestión de proyectos, la optimización de sistemas y la resolución de problemas técnicos.`,
  },
];

const carreras = () => {
  const [open, setOpen] = React.useState<null | string>(null);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <FaqsDraw />
          <Text style={styles.title}>
            A continuación, encontrarás las preguntas y respuestas más
            relevantes sobre los{" "}
            <Text style={{ color: "#ab13ed" }}>Carreras Tecnológicas.</Text>
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

export default carreras;

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
