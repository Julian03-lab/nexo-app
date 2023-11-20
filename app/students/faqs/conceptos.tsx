import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import FaqsDraw from "../../../assets/images/undraw/faqsdraw";
import Accordion from "../../../components/Accordion";

const faqslist = [
  {
    id: 1,
    title: "¿Qué es HTML?",
    content:
      "HTML(por sus siglas en ingles HyperText Markup Language) es un lenguaje de marcado utilizado para estructurar y organizar el contenido de una página web. HTML utiliza una sintaxis basada en etiquetas para marcar los diferentes elementos de una página web, cada elemento se define mediante una etiqueta de apertura(<etiqueta>) y una etiqueta de cierre (</etiqueta>), y el contenido se coloca entre estas etiquetas. Imagina que una página web es como un documento. HTML es el lenguaje que define los diferentes elementos y su jerarquía, como encabezados, párrafos, enlaces, imágenes y otros elementos.",
  },
  {
    id: 2,
    title: "¿Que es CSS?",
    content:
      "CSS(por sus siglas en ingles Cascading Style Sheet) es un lenguaje de estilos utilizado para controlar la apariencia visual de una página web creada con HTML. Mientras que HTML define la estructura de la página, CSS se encarga de definir los estilos y el diseño. Con CSS, puedes cambiar los colores, fuentes, tamaños, márgenes y otros aspectos visuales de los elementos HTML. Permite personalizar la apariencia de una página web y garantizar una presentación coherente y atractiva.",
  },
  {
    id: 3,
    title: "¿Qué es JAVASCRIPT?",
    content:
      "JavaScript(js) es un lenguaje de programación que se utiliza en el desarrollo web para agregar funcionalidad a las páginas para hacer que las páginas sean interactivas. Con JavaScript,Con JavaScript, puedes crear efectos especiales, como hacer que las imágenes cambien cuando pasas el cursor sobre ellas o mostrar mensajes emergentes cuando haces clic en un botón como responder a eventos (como hacer clic en un botón), validar formularios, mostrar y ocultar elementos, entre otras cosas. JavaScript se puede utilizar tanto en el desarrollo de páginas web estáticas como en el de páginas web dinámicas para mejorar la experiencia del usuario y crear aplicaciones web más avanzadas.",
  },
  {
    id: 4,
    title: "¿Que es WORDPRESS?",
    content:
      "WordPress es un sistema de gestión de contenidos (CMS) que facilita la creación y administración de sitios web. Utiliza HTML, CSS y JavaScript en el fondo para construir y mostrar el contenido de los sitios web. Sin embargo, WordPress proporciona una interfaz de usuario amigable que no requiere conocimientos avanzados de programación. Con WordPress, puedes crear y gestionar fácilmente contenido, instalar temas, añadir funcionalidades con complementos y administrar tu sitio web sin tener que escribir código desde cero.",
  },
  {
    id: 5,
    title: "¿Qué es una pagina web Estática y Dinámica",
    content: `Una página estática es una página web cuyo contenido se muestra tal como fue creado y generalmente no cambia automáticamente. Se crea utilizando HTML para estructurar el contenido y CSS para darle estilo. Aunque JavaScript se puede utilizar en una página estática, su uso se limita a agregar funcionalidades y efectos visuales simples, como mostrar y ocultar elementos, realizar validaciones de formularios o mostrar mensajes emergentes.
      Una página web dinámica es una página web que puede cambiar su contenido automáticamente y adaptarse a las acciones y preferencias de las personas que la visitan. A diferencia de las páginas estáticas que siempre muestran la misma información, las páginas dinámicas pueden mostrar cosas diferentes según lo que hagas en ellas. Estas páginas utilizan tecnologías especiales, como lenguajes de programación como PHP, Ruby o Python, y bases de datos, que permiten almacenar y mostrar información de manera interactiva. Por ejemplo, una página dinámica puede mostrar resultados de búsqueda en tiempo real, permitirte iniciar sesión en una cuenta personalizada, publicar comentarios en un blog o realizar compras en línea. La información en una página dinámica puede provenir de una base de datos que almacena datos actualizados, como nombres de usuarios, imágenes, precios de productos, noticias, entre otros. Además, las páginas dinámicas pueden actualizarse sin necesidad de recargar toda la página. Esto significa que solo se actualiza el contenido que ha cambiado, lo que hace que la navegación sea más rápida y eficiente. En resumen, una página web dinámica utiliza lenguajes de programación y bases de datos para mostrar información personalizada y actualizada automáticamente, adaptándose a tus acciones y preferencias en tiempo real.`,
  },
];

const conceptos = () => {
  const [open, setOpen] = React.useState<null | string>(null);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <FaqsDraw />
          <Text style={styles.title}>
            A continuación, encontrarás las preguntas y respuestas más
            relevantes sobre los{" "}
            <Text style={{ color: "#ab13ed" }}>
              Conceptos Esenciales en la Creación de Sitios Web
            </Text>
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

export default conceptos;

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
