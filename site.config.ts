import { defineSiteConfig } from "@andrei-leads/core";

// DATOS FICTICIOS para la demo de electricidad-2 «Del barrio». Negocio inventado en el barrio de Patraix (Valencia).
// Antes de enseñarla: comprobar el nombre en Google y Maps, y sustituir el teléfono.
// Nombres alternativos por si el principal ya existe: «Electricistas Bonavista» o «Instalaciones Eléctricas Mira».
// TODOS los precios son ficticios (marcados): borrarlos o sustituirlos en la web del cliente.
export default defineSiteConfig({
  negocio: {
    nombre: "Ribes e Hijo Electricistas",
    nombreLegal: "Ribes e Hijo Instalaciones Eléctricas SL",
    nif: "B98000053",
    sector: "Electricista",
    descripcionCorta:
      "Electricistas de Patraix desde 1998. Averías con urgencias 24 h, cuadros, enchufes e iluminación. Te decimos el precio antes de ir.",
    anioFundacion: 1998,
    registroMercantil:
      "Inscrita en el Registro Mercantil de Valencia, tomo 0000, folio 00, hoja V-000000 (ficticio)",
    tipoSchema: ["Electrician"],
  },
  contacto: {
    telefono: "+34600000000", // SUSTITUIR por el móvil de Ysst
    whatsapp: "+34600000000", // SUSTITUIR por el móvil de Ysst
    email: "hola@ribeselectricistas.example",
    direccion: {
      calle: "Carrer de Bonavista, 14, bajo",
      cp: "46018",
      ciudad: "Valencia",
      provincia: "Valencia",
    },
    horario: [
      { dias: ["lunes", "martes", "miercoles", "jueves", "viernes"], abre: "08:30", cierra: "13:30" },
      { dias: ["lunes", "martes", "miercoles", "jueves", "viernes"], abre: "16:00", cierra: "19:30" },
      { dias: ["sabado"], abre: "09:00", cierra: "13:00" },
    ],
    coordenadas: { lat: 39.4605, lng: -0.3965 },
    mensajeWhatsapp: "Hola, os escribo desde vuestra web. Tengo un problema con la luz:",
    urgencias24h: true,
    tiempoLlegada: "30-45 min",
  },
  zonas: [
    "Patraix",
    "Jesús",
    "Sant Marcel·lí",
    "La Creu Coberta",
    "Russafa",
    "Sant Isidre",
    "Mislata",
    "Xirivella",
    "Aldaia",
    "Valencia",
  ],
  valoracion: { media: 4.8, total: 138 },
  imagenesHero: [
    {
      src: "/ejemplo/hero.jpg",
      alt: "Electricista de espaldas, con ropa de trabajo gris, revisando un cuadro eléctrico abierto en el recibidor de un piso",
    },
  ],
  servicios: [
    {
      titulo: "Averías y urgencias",
      descripcion: "Te quedas sin luz, salta el diferencial o huele a quemado. Vamos a buscar el fallo, también de noche.",
      contenido: [
        "Cuando salta el diferencial y no vuelve a subir, casi siempre hay un aparato o un enchufe con problemas. Desenchufa todo, sube el diferencial y ve conectando las cosas de una en una. Cuando salte, ya sabes quién es el culpable. Si no lo encuentras, nos llamas.",
        "Si hay olor a quemado, humo o chispas, baja el interruptor general y no lo vuelvas a subir. Si ves fuego, llama primero al 112. Cuando todo esté seguro, nos avisas y buscamos de dónde viene.",
        "Cuando llegamos, buscamos el fallo antes de cambiar piezas. Antes de salir de casa te decimos por teléfono cuánto cuesta ir, y si es de noche o festivo, el recargo. Si la avería es sencilla, la arreglamos en la misma visita.",
      ],
      incluye: [
        "Precio de la visita dicho antes de ir",
        "Localización del fallo",
        "Reparación en la misma visita si es posible",
        "Factura con IVA",
      ],
      imagenes: [
        { src: "/ejemplo/servicio-averia.jpg", alt: "Mano con un comprobador de tensión en un enchufe" },
      ],
      preguntas: [
        {
          pregunta: "¿Venís de noche y en festivo?",
          respuesta: "Sí. Tenemos urgencias 24 h, con recargo. Te lo decimos por teléfono antes de ir.",
        },
        {
          pregunta: "¿Y si no sé qué es lo que falla?",
          respuesta: "No pasa nada. Cuéntanos qué ha pasado y, si puedes, mándanos una foto del cuadro por WhatsApp.",
        },
      ],
      mensajeWhatsapp: "Hola, tengo una avería eléctrica. Os mando una foto del cuadro:",
      precioDesde: "desde 49 €", // PRECIO FICTICIO: borrar en la web del cliente
    },
    {
      titulo: "Cuadros y diferenciales",
      descripcion: "Cambiamos cuadros antiguos y diferenciales que saltan sin motivo.",
      contenido: [
        "Un cuadro con fusibles de porcelana, cables ennegrecidos o un diferencial que salta cada dos por tres es una señal de que toca renovarlo. Los fusibles no te protegen de una descarga. Los diferenciales sí.",
        "Montamos un cuadro nuevo con su interruptor general, sus diferenciales y un automático por circuito: luces, enchufes, cocina, lavadora, baño. Dejamos los cables ordenados y todo etiquetado, para que cualquier electricista lo entienda dentro de diez años.",
        "Antes de empezar te damos el precio cerrado. Al terminar medimos la toma de tierra y te explicamos qué hace cada interruptor.",
      ],
      incluye: [
        "Cuadro nuevo con diferenciales y automáticos",
        "Circuitos etiquetados",
        "Medición de la toma de tierra",
      ],
      imagenes: [
        { src: "/ejemplo/servicio-cuadro.jpg", alt: "Cuadro eléctrico doméstico con diferenciales nuevos" },
      ],
      mensajeWhatsapp: "Hola, quiero que me miréis el cuadro eléctrico. Os mando una foto:",
      precioDesde: "desde 290 €", // PRECIO FICTICIO: borrar en la web del cliente
    },
    {
      titulo: "Enchufes e iluminación",
      descripcion: "Enchufes nuevos, lámparas, apliques y luces LED en casa o en la escalera.",
      imagenes: [
        {
          src: "/ejemplo/servicio-iluminacion.jpg",
          alt: "Manos instalando una lámpara de techo en un salón",
        },
      ],
    },
    {
      titulo: "Boletín eléctrico",
      descripcion: "El certificado de tu instalación para dar de alta la luz o subir la potencia.",
      contenido: [
        "El boletín eléctrico es el papel que dice que la instalación de tu casa es segura. Te lo piden sobre todo para dar de alta la luz en un piso nuevo o reformado, y a veces para subir la potencia.",
        "Vamos a casa, revisamos el cuadro, la toma de tierra y los cables, y lo apuntamos todo. Si algo no cumple, te decimos qué hay que cambiar y cuánto cuesta antes de tocar nada. Si cumple, firmamos el certificado y te damos una copia.",
      ],
      imagenes: [
        {
          src: "/ejemplo/servicio-boletin.jpg",
          alt: "Carpeta con documentos y un comprobador sobre una mesa",
        },
      ],
    },
    {
      titulo: "Instalaciones en reformas",
      descripcion: "Instalación eléctrica completa para pisos y locales en reforma, con su boletín al terminar.",
    },
  ],
  trabajos: [
    {
      titulo: "Enchufe quemado en una cocina",
      descripcion:
        "Un enchufe de la encimera se había derretido por una regleta sobrecargada. Cambiamos el enchufe y el cable hasta la caja y dejamos la pared reparada.",
      ubicacion: "Patraix",
      anio: 2026,
      servicio: "averias-y-urgencias",
      duracion: "2 horas",
      contenido: [
        "La vecina nos llamó un domingo por la noche: en media casa no había luz y olía a plástico. En la cocina, el enchufe de la encimera estaba derretido y la pared tenía marcas negras.",
        "Había una regleta con la cafetera, el microondas y la freidora, todo a la vez. Cambiamos el enchufe y el cable hasta la caja, reparamos la pared y le explicamos qué aparatos conviene no juntar en la misma toma.",
      ],
      imagenes: [
        {
          src: "/ejemplo/trabajo-enchufe.jpg",
          alt: "Enchufe nuevo y limpio en la pared de una cocina, con la pared reparada",
        },
      ],
      antes: {
        src: "/ejemplo/trabajo-enchufe-antes.jpg",
        alt: "El mismo enchufe antes: plástico derretido y ennegrecido, con marcas negras de quemado en la pared",
      },
      testimonio: {
        autor: "Carmen B.",
        texto: "Pensaba que me tocaba pasar la noche a oscuras. A los cuarenta minutos estaban en el portal y me lo explicaron todo.",
      },
    },
    {
      titulo: "Cuadro nuevo en un bajo comercial",
      descripcion:
        "Cambio de cuadro y separación de circuitos en un bajo que se quedaba sin luz al encender el aire acondicionado.",
      ubicacion: "Jesús",
      anio: 2026,
      servicio: "cuadros-y-diferenciales",
      duracion: "1 día",
      contenido: [
        "El local tenía un cuadro de hacía treinta años con todo en un solo circuito. Cada vez que encendían el aire, saltaba el general.",
        "Montamos un cuadro nuevo, separamos las luces, los enchufes y el aire en circuitos distintos y dejamos todo etiquetado. Trabajamos por la mañana con el local cerrado, para que por la tarde pudieran abrir.",
      ],
      imagenes: [
        {
          src: "/ejemplo/trabajo-cuadro.jpg",
          alt: "Cuadro eléctrico de un bajo comercial renovado, con el cableado ordenado",
        },
      ],
    },
    {
      titulo: "Luces LED en el rellano de una comunidad",
      descripcion: "Apliques LED con detector de presencia en los cinco rellanos de una finca, para ahorrar y no andar a oscuras.",
      ubicacion: "Sant Marcel·lí",
      anio: 2025,
      servicio: "enchufes-e-iluminacion",
      duracion: "1 mañana",
      contenido: [
        "Las luces de la escalera eran de las de encendido por pulsador, que se apagaban a mitad de piso. La presidenta de la comunidad nos pidió algo que no costara una fortuna en luz.",
        "Cambiamos los puntos de luz de los cinco rellanos por apliques LED con detector de presencia. Se encienden solos al pasar y se apagan al poco rato.",
      ],
      imagenes: [
        {
          src: "/ejemplo/trabajo-iluminacion.jpg",
          alt: "Pasillo de comunidad con apliques LED nuevos encendidos",
        },
      ],
    },
  ],
  resenas: [
    {
      autor: "Carmen B.",
      texto:
        "Se me fue la luz de media casa un domingo por la noche. Llamé con poca esperanza y a los cuarenta minutos tenía a Pau en el portal. Encontró un enchufe de la cocina a punto de quemarse, me lo enseñó y me dijo lo que costaba antes de tocar nada. Lo dejó todo recogido. Ya tengo su número apuntado en la nevera.",
      puntuacion: 5,
      fecha: "2026-10-06",
      fuente: "google",
    },
    {
      autor: "Toni S.",
      texto: "Los llamó mi vecina del tercero y ahora los llamo yo. Puntuales y sin vueltas.",
      puntuacion: 5,
      fecha: "2026-09-19",
      fuente: "google",
    },
    {
      autor: "Rosa M.",
      texto:
        "Cambiaron el cuadro de mi piso, de los de fusibles de toda la vida. Me explicaron cada cosa, trabajaron limpios y la factura fue la del presupuesto, ni un euro más. Josep tiene una paciencia increíble con mi marido, que no para de preguntar.",
      puntuacion: 5,
      fecha: "2026-09-02",
      fuente: "google",
    },
    {
      autor: "Héctor V.",
      texto:
        "Buen trabajo y buen precio. Tardaron un día más de lo que dijeron porque les faltaba una pieza, pero me avisaron por la mañana. Por eso cuatro estrellas. Lo demás, perfecto.",
      puntuacion: 4,
      fecha: "2026-08-14",
      fuente: "google",
    },
    {
      autor: "Mª Ángeles P.",
      texto:
        "Soy la presidenta de mi escalera y les pedí cambiar las luces de los rellanos, que eran un desastre. Pasaron presupuesto en dos días, instalaron los LED en una mañana y la gente de la finca está encantada. Hasta el vecino que siempre se quejaba de la luz se ha callado.",
      puntuacion: 5,
      fecha: "2026-07-21",
      fuente: "google",
    },
    {
      autor: "Sergio L.",
      texto:
        "Me saltaba el diferencial todas las noches. Lo encontraron en media hora: era el termo. Me lo explicaron y no me cobraron de más.",
      puntuacion: 5,
      fecha: "2026-06-30",
      fuente: "google",
    },
    {
      autor: "Paqui G.",
      texto: "Mi madre ya los llamaba cuando abrieron el local en la calle Bonavista. Ahora los llamo yo. Gente de la de siempre.",
      puntuacion: 5,
      fecha: "2026-05-27",
      fuente: "google",
    },
    {
      autor: "Dani C.",
      texto:
        "Rápidos y majos. Solo pongo un pero: el recargo del festivo. Me lo dijeron por teléfono antes de venir, así que no me puedo quejar.",
      puntuacion: 4,
      fecha: "2026-04-15",
      fuente: "google",
    },
    {
      autor: "Lucía N.",
      texto:
        "Me hicieron el boletín del piso que acabo de comprar. Me dijeron qué había que cambiar y qué no hacía falta, que se agradece. Cero abusos.",
      puntuacion: 5,
      fecha: "2026-03-08",
      fuente: "google",
    },
  ],
  acreditaciones: [
    {
      nombre: "Empresa instaladora en baja tensión (RII), categoría básica",
      numero: "46/000000 (ficticio)",
    },
    {
      nombre: "Instalador autorizado en baja tensión, categoría básica",
      numero: "46/IBTB-0000 (ficticio)",
    },
  ],
  garantias: [
    "Precio dicho antes de ir",
    "Factura con IVA",
    "Seguro de responsabilidad civil",
    "Lo dejamos todo limpio",
    "Si algo falla por nuestra culpa, volvemos sin cobrar",
  ],
  empresa: {
    historia: [
      "Josep Ribes abrió el local de la calle Bonavista en 1998, después de muchos años de oficial en una empresa de instalaciones. Empezó con una furgoneta y un cuaderno donde apuntaba a los vecinos que le llamaban.",
      "En 2012 entró su hijo Pau, que se había criado entre cuadros y cajas de cable. Desde entonces somos una sociedad familiar. Marisa lleva el teléfono, las citas y los papeles.",
      "Trabajamos sobre todo en Patraix y los barrios de alrededor: pisos, bajos comerciales y escaleras de comunidad. La mayoría de la gente nos conoce porque se lo dijo un vecino. Si hay que cambiar algo, te lo decimos con su precio antes de tocarlo. Y si no hace falta cambiar nada, también.",
    ],
    imagenes: [
      {
        src: "/ejemplo/empresa-furgoneta.jpg",
        alt: "Furgoneta blanca sin rotular aparcada en una calle de barrio con naranjos",
      },
      {
        src: "/ejemplo/empresa-equipo.jpg",
        alt: "Dos técnicos de espaldas caminando hacia un portal con la caja de herramientas",
      },
    ],
    equipo: [
      { nombre: "Josep", cargo: "Instalador autorizado y fundador" },
      { nombre: "Pau", cargo: "Electricista" },
      { nombre: "Marisa", cargo: "Oficina: teléfono, citas y papeles" },
    ],
  },
  preguntas: [
    {
      pregunta: "¿Cuánto cuesta que vengáis?",
      respuesta: "Te lo decimos por teléfono antes de ir, según la hora y la zona. Sin sorpresas al llegar.",
    },
    {
      pregunta: "¿Venís de noche y en festivo?",
      respuesta: "Sí, tenemos urgencias 24 h, con recargo. Te lo decimos antes de salir.",
    },
    { pregunta: "¿Dais factura?", respuesta: "Siempre, con IVA." },
    {
      pregunta: "¿Hasta dónde llegáis?",
      respuesta: "Trabajamos en Patraix y por todo Valencia, y también en Mislata, Xirivella y Aldaia. Si dudas, pregúntanos.",
    },
  ],
  seo: {
    titulo: "Electricista en Patraix, Valencia | Ribes e Hijo",
    descripcion:
      "Electricistas en Patraix y Valencia: averías 24 h, cuadros, enchufes e iluminación. Precio antes de ir. Más de 25 años en el barrio.",
    url: "https://electricidad-2.vercel.app", // PROVISIONAL: poner la URL real de Vercel tras el primer despliegue
  },
});
