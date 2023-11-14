import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import FaqsDraw from "../../../assets/images/undraw/faqsdraw";
import Accordion from "../../../components/Accordion";

const faqslist = [
  {
    id: 1,
    title: "¿Qué es la informática?",
    content:
      "La Informática se refiere al estudio de las computadoras y el procesamiento de la información. Incluye conceptos como la arquitectura de computadoras, los sistemas operativos, la programación y la gestión de bases de datos.",
  },
  {
    id: 2,
    title: "¿Qué es el hardware?",
    content:
      "El hardware se refiere a todas las partes físicas de un sistema informático. Son los componentes concretos que conforman una computadora, como la unidad central de procesamiento (CPU), la memoria, el disco duro, la tarjeta gráfica, el teclado, el mouse y otros dispositivos que se conectan a la computadora. El hardware es responsable de ejecutar las instrucciones del software y permite que interactúes y utilices la computadora o dispositivo.",
  },
  {
    id: 3,
    title: "¿Qué es el software?",
    content:
      "El software es la parte interna y esencial de una computadora o dispositivo tecnológico que le permite realizar tareas y ejecutar programas. Es el conjunto de instrucciones o reglas que le dicen a la computadora qué hacer, como por ejemplo, cuando enciendes tu computadora o tu celular, el software se activa y te permite usar todas las aplicaciones y programas que tienes, o cuando abres una aplicación de mensajería, el software le indica a la computadora cómo mostrar la interfaz de chat y cómo enviar y recibir mensajes.",
  },
  {
    id: 4,
    title: "¿Qué son los lenguajes de programación?",
    content:
      "Un lenguaje de programación es un conjunto de reglas y estructuras que permiten a los programadores escribir instrucciones que una computadora pueda entender y ejecutar. Los lenguajes de programación tienen una sintaxis específica que define cómo se deben escribir las instrucciones. Estas instrucciones o algoritmos pueden ser simples o complejos que resuelven problemas o realizan tareas específicas. Los lenguajes de programación pueden variar en su nivel de abstracción y enfoque, desde lenguajes de bajo nivel que se acercan más al lenguaje de la máquina,hasta lenguajes de alto nivel que son más cercanos al lenguaje humano. Algunos ejemplos populares de lenguajes de programación incluyen Python, Java, C++, JavaScript, Ruby y muchos más. Cada lenguaje de programación tiene sus propias características, usos , ventajas y desventajas, y es utilizado para diferentes propósitos, como desarrollo web, aplicaciones móviles, inteligencia artificial, análisis de datos, entre otros.",
  },
  {
    id: 5,
    title:
      "¿Cual es la diferencia entre un programador, diseñador y desarrallodor?",
    content:
      "Un programador es alguien que escribe instrucciones para hacer que una computadora haga cosas. Imagina que una computadora es como una máquina que solo entiende comandos específicos. El programador es quien le dice a la máquina qué hacer y cómo hacerlo escribiendo código en un lenguaje de programación. De esta manera, pueden crear programas y aplicaciones que resuelvan problemas y realicen tareas. Un diseñador es alguien que se encarga de cómo se ve algo en una computadora o en un dispositivo. Por ejemplo, si piensas en una página web, el diseñador es quien decide cómo se verán los botones, los colores, las imágenes y la disposición de los elementos en la pantalla. Utilizan su creatividad y habilidades de diseño para crear una apariencia atractiva y fácil de usar. Un desarrollador es alguien que combina habilidades de programación y diseño para crear software completo. No solo escriben el código, sino que también piensan en cómo se verá y se comportará el software. Trabajan en proyectos más grandes, como aplicaciones móviles o sistemas informáticos, y son responsables de todo el proceso, desde la planificación y la creación hasta el diseño final. ",
  },
];

const fundamentos = () => {
  const [open, setOpen] = React.useState<null | string>(null);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <FaqsDraw />
          <Text style={styles.title}>
            A continuación, encontrarás las preguntas y respuestas más
            relevantes sobre los{" "}
            <Text style={{ color: "#ab13ed" }}>Fundamentos Tecnológicos.</Text>
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

export default fundamentos;

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
