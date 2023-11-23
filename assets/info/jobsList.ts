export type publications = {
  id: number;
  title: string;
  publisher: string;
  vacantes: number;
  aspirantes: number;
  experiencia: string;
  modalidad: string;
  description: string;
  applicant: {
    id: number;
    email: string;
  }[];
};

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
    applicant: [
      { id: 1, email: "Marisol18@gmail.com" },
      { id: 2, email: "JohnDoe23@gmail.com" },
      { id: 3, email: "EmilySmith97@yahoo.com" },
      { id: 4, email: "CarlosGarcia55@hotmail.com" },
      { id: 5, email: "SophieJohnson22@gmail.com" },
      { id: 6, email: "DavidBrown89@gmail.com" },
    ],
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
    applicant: [
      { id: 1, email: "Marisol18@gmail.com" },
      { id: 2, email: "JohnDoe23@gmail.com" },
      { id: 3, email: "EmilySmith97@yahoo.com" },
      { id: 4, email: "CarlosGarcia55@hotmail.com" },
      { id: 5, email: "SophieJohnson22@gmail.com" },
      { id: 6, email: "DavidBrown89@gmail.com" },
    ],
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
    applicant: [
      { id: 1, email: "Marisol18@gmail.com" },
      { id: 2, email: "JohnDoe23@gmail.com" },
      { id: 3, email: "EmilySmith97@yahoo.com" },
      { id: 4, email: "CarlosGarcia55@hotmail.com" },
      { id: 5, email: "SophieJohnson22@gmail.com" },
      { id: 6, email: "DavidBrown89@gmail.com" },
    ],
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
    applicant: [
      { id: 1, email: "Marisol18@gmail.com" },
      { id: 2, email: "JohnDoe23@gmail.com" },
      { id: 3, email: "EmilySmith97@yahoo.com" },
      { id: 4, email: "CarlosGarcia55@hotmail.com" },
      { id: 5, email: "SophieJohnson22@gmail.com" },
      { id: 6, email: "DavidBrown89@gmail.com" },
    ],
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
    applicant: [
      { id: 1, email: "Marisol18@gmail.com" },
      { id: 2, email: "JohnDoe23@gmail.com" },
      { id: 3, email: "EmilySmith97@yahoo.com" },
      { id: 4, email: "CarlosGarcia55@hotmail.com" },
      { id: 5, email: "SophieJohnson22@gmail.com" },
      { id: 6, email: "DavidBrown89@gmail.com" },
    ],
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
    applicant: [
      { id: 1, email: "Marisol18@gmail.com" },
      { id: 2, email: "JohnDoe23@gmail.com" },
      { id: 3, email: "EmilySmith97@yahoo.com" },
      { id: 4, email: "CarlosGarcia55@hotmail.com" },
      { id: 5, email: "SophieJohnson22@gmail.com" },
      { id: 6, email: "DavidBrown89@gmail.com" },
    ],
  },
];
