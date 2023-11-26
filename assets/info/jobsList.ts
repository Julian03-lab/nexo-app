export type publications = {
  id: number;
  title: string | string[];
  publisher: string | string[];
  vacantes: number | string | string[];
  aspirantes: number | string | string[];
  experiencia: string | string[];
  modalidad: string | string[];
  description: string | string[];
  applicants: {
    stepId: number;
    applicantList: {
      id: number;
      email: string;
      column: number;
    }[];
  }[];
};

const applicants = [
  { id: 1, email: "Marisol18@gmail.com", column: 5 },
  { id: 2, email: "mateogonzález7898@gmail.com", column: 1 },
  { id: 3, email: "jarol0215@gmail.com", column: 5 },
  { id: 4, email: "cachicamo.2@gmail.com", column: 5 },
  { id: 5, email: "martínlópez123@gmail.com", column: 1 },
  { id: 6, email: "sofíarodríguez456@gmail.com", column: 2 },
  { id: 7, email: "valentinafernández321@gmail.com", column: 2 },
  { id: 8, email: "juanmartínez654@gmail.com", column: 3 },
  { id: 9, email: "camilagarcía987@gmail.com", column: 3 },
  { id: 10, email: "facundopérez123@gmail.com", column: 4 },
];

export const dataList: publications[] = [
  {
    id: 1,
    title: "Tester",
    publisher: "ABC Solutions",
    vacantes: 1,
    aspirantes: 15,
    experiencia: "semi-senior",
    modalidad: "Remoto",
    description:
      "Estamos buscando un desarrollador Full Stack con experiencia en JavaScript para unirse a nuestro equipo. Serás responsable de diseñar, desarrollar y mantener aplicaciones web utilizando tecnologías como React, Node.js y MongoDB. Trabajarás en un entorno colaborativo y participarás en proyectos emocionantes.",
    applicants: [{ stepId: 1, applicantList: applicants }],
  },

  {
    id: 2,
    title: "Desarrollador/a web front-end en react",
    publisher: "Tecnology Five",
    vacantes: 2,
    aspirantes: 15,
    experiencia: "semi-senior",
    modalidad: "Hibrido",
    description:
      "Estamos buscando un desarrollador Full Stack con experiencia en JavaScript para unirse a nuestro equipo. Serás responsable de diseñar, desarrollar y mantener aplicaciones web utilizando tecnologías como React, Node.js y MongoDB. Trabajarás en un entorno colaborativo y participarás en proyectos emocionantes.",
    applicants: [{ stepId: 1, applicantList: applicants }],
  },
  {
    id: 3,
    title: "Desarrollador/a back-end en laravel",
    publisher: "Factory Z",
    vacantes: 3,
    aspirantes: 15,
    experiencia: "Senior",
    modalidad: "Remoto",
    description:
      "Estamos buscando un desarrollador Full Stack con experiencia en JavaScript para unirse a nuestro equipo. Serás responsable de diseñar, desarrollar y mantener aplicaciones web utilizando tecnologías como React, Node.js y MongoDB. Trabajarás en un entorno colaborativo y participarás en proyectos emocionantes.",
    applicants: [{ stepId: 1, applicantList: applicants }],
  },
  {
    id: 4,
    title: "Soporte técnico",
    publisher: "Prisma Global",
    vacantes: 2,
    aspirantes: 20,
    experiencia: "semi-senior",
    modalidad: "Presencial",
    description:
      "Estamos buscando un desarrollador Full Stack con experiencia en JavaScript para unirse a nuestro equipo. Serás responsable de diseñar, desarrollar y mantener aplicaciones web utilizando tecnologías como React, Node.js y MongoDB. Trabajarás en un entorno colaborativo y participarás en proyectos emocionantes.",
    applicants: [{ stepId: 1, applicantList: applicants }],
  },
  {
    id: 5,
    title: "Desarrollador/a de apps en Android",
    publisher: "ABC Tecnology",
    vacantes: 1,
    aspirantes: 20,
    experiencia: "semi-senior",
    modalidad: "Presencial",
    description:
      "Estamos buscando un desarrollador Full Stack con experiencia en JavaScript para unirse a nuestro equipo. Serás responsable de diseñar, desarrollar y mantener aplicaciones web utilizando tecnologías como React, Node.js y MongoDB. Trabajarás en un entorno colaborativo y participarás en proyectos emocionantes.",
    applicants: [{ stepId: 1, applicantList: applicants }],
  },
  {
    id: 6,
    title: "Desarrollador/a de apps en Android",
    publisher: "Art Tech",
    vacantes: 3,
    aspirantes: 20,
    experiencia: "semi-senior",
    modalidad: "Hibrido",
    description:
      "Estamos buscando un desarrollador Full Stack con experiencia en JavaScript para unirse a nuestro equipo. Serás responsable de diseñar, desarrollar y mantener aplicaciones web utilizando tecnologías como React, Node.js y MongoDB. Trabajarás en un entorno colaborativo y participarás en proyectos emocionantes.",
    applicants: [{ stepId: 1, applicantList: applicants }],
  },
];
