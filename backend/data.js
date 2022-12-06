import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Basir",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("1234"),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: "1",
      name: "Nurofen",
      precio: 600,
      slug: "nurofen",
      category: "dolor_de_cabeza",
      image:
        "https://res.cloudinary.com/dbovldjfc/image/upload/v1668718245/farmacia/nurofen_rqqymb.jpg",
      description:
        "Es un medicamento cuyo principio activo es el ibuprofeno, por eso actúa efectivamente aliviando el dolor leve a moderado",
      stock: 10,
      receta: false,
      day: true,
      isFavorite: false,
    },
    {
      // _id: "2",
      name: "Mesalazina",
      precio: 600,
      slug: "mesalazina",
      category: "dolor_de_panza",
      image:
        "https://res.cloudinary.com/dbovldjfc/image/upload/v1668718247/farmacia/mesalazina_ubf29a.jpg",
      description:
        "La mesalamina se usa para tratar la colitis ulcerosa (una afección que provoca hinchazón y llagas en el revestimiento del colon [intestino grueso] y el recto) y también para mantener la mejora de los síntomas de la colitis ulcerosa",
      stock: 15,
      receta: true,
      day: false,
      isFavorite: false,
    },
    {
      name: "Aspirina",
      precio: 4.41,
      slug: "aspirina-248",
      category: "dolor_de_cabeza",
      image:
        "https://res.cloudinary.com/dbovldjfc/image/upload/v1668718247/farmacia/farmacologia-farmacologia_clinica-medicamentos_313481328_81018046_1706x960_hrgwmc.jpg",
      description:
        "La aspirina pertenece a un grupo de medicamentos llamados salicilatos. Su acción consiste en detener la producción de ciertas sustancias naturales que causan fiebre, dolor, inflamación y coágulos sanguíneos.",
      stock: 15,
      receta: true,
      day: true,
      isFavorite: false,
    },
    {
      name: "Levonorgestrel",
      precio: 10,
      slug: "pastilla-225",
      category: "dolor_de_cabeza",
      image:
        "https://res.cloudinary.com/dbovldjfc/image/upload/v1668718272/farmacia/segurite_zoqte8.jpg",
      description:
        "El levonorgestrel se usa para evitar el embarazo después de una relación sexual sin protección (tener relaciones sexuales sin ningún método anticonceptivo o con un método anticonceptivo que falló o que no se usó de manera correcta [p. ej., un condón que se deslizó o se rompió, o píldoras anticonceptivas que no se tomaron según lo indicado]). ",
      stock: 15,
      receta: true,
      day: false,
      isFavorite: false,
    },
    {
      name: "Simvastatina",
      precio: 10,
      slug: "simvastatina-888",
      category: "dolor_de_cabeza",
      image:
        "https://res.cloudinary.com/dbovldjfc/image/upload/v1668718244/farmacia/simvastatina_lsyjun.jpg",
      description:
        "Simvastatina es un medicamento que se utiliza para reducir las concentraciones de colesterol total, colesterol “malo” (colesterol LDL) y unas sustancias grasas llamadas triglicéridos que circulan en la sangre. Además, simvastatina eleva las concentraciones del colesterol “bueno” (colesterol HDL).",
      stock: 15,
      receta: true,
      day: true,
      isFavorite: false,
    },
    {
      name: "Amlodipinaa",
      precio: 10,
      slug: "amlodipina-433",
      category: "dolor_de_cabeza",
      image:
        "https://res.cloudinary.com/dbovldjfc/image/upload/v1668718246/farmacia/amlodipina_kt1mie.jpg",
      description:
        "El amlodipino pertenece a una clase de medicamentos llamados bloqueadores del canal de calcio. Reduce la presión arterial al relajar los vasos sanguíneos para que el corazón no tenga que bombear tan fuerte. Controla el dolor de pecho aumentando el suministro de sangre al corazón",
      stock: 15,
      receta: true,
      day: false,
      isFavorite: false,
    },
    {
      name: "Paracetamol",
      precio: 10,
      slug: "paracetamol-100",
      category: "dolor_de_cabeza",
      image:
        "https://res.cloudinary.com/dbovldjfc/image/upload/v1668718247/farmacia/paracetamol_pt7pwy.webp",
      description:
        "Paracetamol pertenece al grupo de medicamentos llamados analgésicos y antipiréticos. Paracetamol está indicado para el tratamiento de los síntomas del dolor leve a moderado y la fiebre.",
      stock: 15,
      receta: true,
      day: false,
      isFavorite: false,
    },

    {
      name: "Ultra Hombre",
      precio: 10,
      slug: "ultra-10",
      category: "dolor_de_cabeza",
      image:
        "https://res.cloudinary.com/dbovldjfc/image/upload/v1668718246/farmacia/ultra_emhoxo.jpg",
      description:
        "Las Cápsulas ULTRA HOMBRE son el mejor método disponible para aumentar y restaurar la potencia sexual de una forma sana, sencilla y natural.",
      stock: 15,
      receta: true,
      day: false,
      isFavorite: false,
    },
    {
      name: "Levotiroxina sódica",
      precio: 10,
      slug: "lexotiroxina-soica-700",
      category: "dolor_de_cabeza",
      image:
        "https://res.cloudinary.com/dbovldjfc/image/upload/v1668718245/farmacia/Lexotirorina_ldbvhn.jpg",
      description:
        "La levotiroxina se utiliza para tratar el hipotiroidismo (una afección donde la glándula tiroidea no produce suficiente hormona de la tiroides). También se usa con cirugía y terapia de yodo radioactivo para tratar el cáncer de tiroides. La levotiroxina pertenece a una clase de medicamentos llamados hormonas. Actúa reemplazando la hormona tiroidea que normalmente produce el cuerpo.",
      stock: 15,
      receta: true,
      day: true,
      isFavorite: false,
    },
    {
      name: "Strepsils",
      precio: 40,
      slug: "strepsils-x8",
      category: "dolor_de_garganta",
      image:
        "https://res.cloudinary.com/dbovldjfc/image/upload/v1670273527/farmacia/strepsils-intensive-caramelos-x-8-unidades_rynofx.png",
      description:
        "Se utiliza para el alivio local sintomático de las infecciones leves de boca y garganta que cursan sin fiebre en adultos y niños a partir de 6 años de edad.",
      stock: 15,
      receta: false,
      day: true,
      isFavorite: false,
    },
    {
      name: "Lizipaina",
      precio: 28,
      slug: "lizipaina-x20",
      category: "dolor_de_garganta",
      image:
        "https://res.cloudinary.com/dbovldjfc/image/upload/v1670273530/farmacia/Lizipaina-20-Comprimidos_g9snr3.jpg",
      description:
        "Lizipaína comprimidos se trata de un medicamento de acción calmante y anestésica local que alivia los síntomas y molestias ocasionados debido a la garganta irritada.",
      stock: 15,
      receta: true,
      day: false,
      isFavorite: false,
    },
    {
      name: "Noraver",
      precio: 45,
      slug: "noraver-10mg",
      category: "dolor_de_garganta",
      image:
        "https://res.cloudinary.com/dbovldjfc/image/upload/v1670273532/farmacia/noraver_gy8lr5.jpg",
      description:
        "Noraver Solución Garganta está indicado en los procesos asociados a infecciones localizadas leves, como las úlceras tipo aftas, gingivitis aguda y crónica y dolor en infecciones leves de la garganta como la faringitis aguda.",
      stock: 15,
      receta: false,
      day: true,
      isFavorite: false,
    },
  ],
  category: [
    {
      //id: 1,    //id add auto into db
      value: "dolor_de_cabeza",
      label: "dolor de cabeza",
    },
    {
      //id: 2,
      value: "dolor_de_panza",
      label: "dolor de panza",
    },
    {
      //id: 3,
      value: "dolor_de_garganta",
      label: "dolor de garganta",
    },
  ],
};

export default data;
