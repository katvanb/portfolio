const es = {

  home: {

    hero: {

      eyebrow: "DISEÑADORA E INGENIERA",

      name: "Katherine Gaspare",

      paragraphs: [

        "Un producto rara vez empieza con el brief, así que sigo el hilo:",

        "Hablo con quienes conocen el negocio, pregunto cómo funciona hoy, dónde se rompe y por qué llegó ahí. Mapeo dependencias, cuestiono supuestos y entro en detalle cuando importa.",

        "No necesito ser dueña de cada decisión. Solo entender lo suficiente para ayudar a tomar las correctas.",

      ],

    },


    work: {

      eyebrow: "TRABAJOS SELECCIONADOS",

      projects: [

        {
          title: "De una idea a una plataforma de credenciales escalable",
          tags: ["estrategia de producto", "diseño de sistemas", "arquitectura", "ux empresarial"],
          link: `${import.meta.env.BASE_URL}es/work/credential-platform/`,
          image: `${import.meta.env.BASE_URL}images/case-studies/credential-platform/asset-01.png`
        },

        {
          title: "De compras asistidas a autoservicio",
          tags: ["descubrimiento de producto", "ux compleja", "autoservicio", "sistemas de negocio"],
          link: `${import.meta.env.BASE_URL}es/work/b2b-commerce/`,
          image: `${import.meta.env.BASE_URL}images/case-studies/b2b-commerce/cover.png`
        }

      ],

      action: "Ver caso de estudio"

    },


    experience: {

      eyebrow: "EXPERIENCIA",

      entries: [

        {
          role: "Diseñadora de Producto",
          company: "Bertoni Solutions GmbH",
          period: "Nov 2021 — Actualidad",
          summary:
            "Diseño end-to-end de productos SaaS, e-commerce y sistemas institucionales. Descubrimiento con stakeholders, requisitos, flujos, documentación y acompañamiento a ingeniería y QA.",
        },

        {
          role: "Diseñadora de Producto freelance",
          company: "Red Activa",
          period: "2022",
          summary:
            "Landing page responsive para una empresa de servicios financieros, diseñada y construida en Webflow junto a un equipo de dos desarrolladores.",
        },

        {
          role: "Diseñadora UX/UI",
          company: "cloutZOO",
          period: "Mar 2020 — Jul 2021",
          summary:
            "Experiencias móviles y web para una red social que conectaba personas con servicios y empleos.",
        },

      ],

    },


    closing: {

      quote: "Tráeme la situación.",

      sub: "Entendamos qué está pasando realmente, averigüemos qué importa y decidamos qué hacer a continuación.",

      workWithMe: "Trabaja conmigo",

      copied: "Email copiado",

    }

  },

  footer: {

    email: "Email",

    linkedin: "LinkedIn",

    resume: "Currículum",

    credit: "Diseñado + programado por Katherine",

    copied: "Copiado",

  },

  controls: {

    language: "Cambiar idioma",

    theme: "Cambiar tema",

    accent: "Cambiar color de acento",

    surpriseMe: "Sorpréndeme",

    toggleSidebar: "Mostrar u ocultar barra lateral",

    files: "Archivos del portafolio",

  },

  underConstruction: {
    badge: "Próximamente",
    title: "Esta página está en construcción",
    description: "Estoy trabajando en algo aquí. Vuelve pronto.",
    backLabel: "Ver mi trabajo",
  },
  caseStudy: {
    role: "Rol",
    timeline: "Cronología",
    team: "Equipo",
    focus: "Enfoque",
    readingTimeSuffix: "min de lectura",
    sectionsAriaLabel: "Secciones del caso de estudio",
  },
  credentialPlatform: {
    hero: {
      tag: "PLATAFORMA DE CREDENCIALES · SECTOR EDUCATIVO Y CORPORATIVO",
      title: "De institución lineal a sistema multi-organización",
      description: [
        "Una plataforma B2B donde instituciones educativas, corporaciones y entes certificadores emiten, gestionan y verifican credenciales digitales —títulos, certificados, insignias y microcredenciales— usando estándares internacionales como Blockchain, Open Badges y credenciales verificables de la W3C.",
        "El proyecto fue 0 → 1. Diseñé el modelo organizacional, el sistema de roles y permisos, la lógica de créditos y los flujos que hacen posible emitir credenciales a escala sin que la operación colapse."
      ],
      role: "Product Designer",
      timeline: "2 años · 3 cortes de funcionalidades (2 de producto + 1 técnico) · 4ª iteración en planificación",
      team: "PM (mi jefe directo) · 1 UI/UX Designer · 2 programadores · 1 QA",
      focus: "2 fundadoras (ingenieras de sistemas) con mandato de replicar un competidor del sector",
      ndaText:
        "Los detalles se han generalizado para proteger la confidencialidad del cliente."
    },

    challenge: {
      eyebrow: "El desafío",
      title: "Emitir credenciales a escala era manual, lento y sin trazabilidad",
      paragraphs: [
        "Una empresa de soluciones tecnológicas para el sector educativo quería construir desde cero una plataforma B2B para que instituciones educativas, corporaciones y entes certificadores pudieran emitir, gestionar y verificar credenciales digitales —títulos, certificados, insignias y microcredenciales— usando estándares internacionales como Blockchain, Open Badges y credenciales verificables de la W3C.",
        "El proyecto era 0 → 1. No había plataforma previa. Las instituciones emitían credenciales de forma manual: datos en hojas de cálculo, diseños en herramientas externas, envío uno a uno por email o impresión física."
      ],
      painsTitle: "DOLORES",
      pains: [
        {
          title: "Emisión manual y lenta",
          text: "Pasar datos a certificados uno a uno, con diseños externos y envío manual.",
          chip: "Datos en hojas de cálculo"
        },
        {
          title: "Sin trazabilidad",
          text: "No se sabía con certeza quién recibió qué, quién lo asignó, cuándo ni en qué estado estaba. La información existía, pero se obtenía preguntando a compañeros o por correo al acreditado.",
          chip: "Diseños en herramientas externas"
        },
        {
          title: "Sin autogestión institucional",
          text: "Las instituciones dependían de procesos manuales para emitir, asignar y hacer seguimiento.",
          chip: "Uno a uno por email o impresión"
        }
      ],
      latentTitle: "LATENTES",
      latent: [
        {
          title: "Fraude",
          text: "No había forma de verificar una credencial salvo llamando a la institución."
        },
        {
          title: "Imposibilidad de escalar",
          text: "A otros tipos de institución, reconocido en versiones futuras."
        }
      ],
      contextTitle: "Contexto de negocio",
      contextLead: "Modelo B2B SaaS (pago por credencial).",
      context: [
        "Escala: 120 clientes institucionales en Colombia y Europa.",
        "Volumen: ~100 asignaciones activas por cliente.",
        "Modelo: Precio basado en cuenta con itinerarios de certificación personalizados."
      ],
      pivotLabel: "RETO DE DISEÑO",
      pivotTitle: "Crear una plataforma de certificados.",
      pivot:
        "Diseñar las organizaciones, los roles, los permisos y los planes para poder emitir credenciales a escala sin que la operación colapse.",
      mandateLabel: "Mandato inicial de los stakeholders",
      mandateTitle: "Replicar el modelo de un competidor del sector.",
      mandate:
        "Mi trabajo: convertir esa ambición en un sistema propio, escalable y alineado a estándares."
    },

    vision: {
      eyebrow: "Decisión clave 1",
      title: "De Institución Lineal a Sistema Multi-Organización",
      paragraphs: [
        "Al principio era una institución lineal, luego, el modelo mutó a organización + multi-organización."
      ],
      comparison: {
        positiveLabel: "Multi-organización",
        positive: [
          "Jerarquía anidada (Plataforma > Institución > Sub-organización).",
          "Control administrativo granular en cada nivel.",
          { lead: "Por qué:", text: "Escaló manteniendo un modelo mental sencillo para el usuario." }
        ],
        negativeLabel: "Modelo lineal",
        negative: [
          "Un único administrador lo gestiona todo.",
          "Jerarquía rígida y plana.",
          { lead: "Por qué falló:", text: "Imposible escalar a más de 120 organizaciones." }
        ]
      },
      beforeTitle: "Institución lineal",
      beforeRoles: [
        "Responsable de plataforma",
        "Administrador principal",
        "Administrador secundario",
        "Operador",
        "Acreditado"
      ],
      afterTitle: "Organización simple",
      afterRoles: [
        "Administrador principal",
        "Administrador secundario",
        "Acreditado"
      ],
      multiTitle: "Multi-organización",
      multiIntro:
        "Cuando una organización principal necesita gestionar una red de entidades con sus propios administradores y acreditaciones:",
      orgAdmin:
        "Administrador de organización — crea y gestiona sub-organizaciones, solicita planes y redistribuye créditos",
      subLabel: "Sub-organización",
      subRoles: [
        "Administrador principal",
        "Administrador secundario",
        "Acreditado"
      ],
      decisionTitle: "La decisión estratégica",
      decisionText:
        "Todos los roles y jerarquías los propuse yo, basándome en el benchmark del competidor y en lo que los stakeholders expresaban como necesidad (\"quiero poder ver esto\", \"esta persona necesita saber tal cosa\"). No recibí un modelo de roles; lo diseñé.",
      futureTitle: "Visión a futuro",
      future: [
        "Portal de búsqueda de acreditados",
        "Ampliación de marca blanca",
        "Adaptación a otros países"
      ],
      screenshot: {
        id: "",
        label: "",
        note: "Diagrama del modelo de roles mostrando la institución lineal frente a la estructura multi-organización.",
        src: `${import.meta.env.BASE_URL}images/case-studies/credential-platform/role%20model.png`,
      }
    },

    sharedCatalog: {
      eyebrow: "Decisión clave 2",
      title: "Credenciales Compartidas, Asignaciones Específicas",
      questionLabel: "primera pregunta",
      question:
        "Al diseñar multi-organización, ¿cada sub-organización tiene sus propias credenciales o comparten el catálogo?",
      positiveLabel: "Modelo compartido",
      positive: [
        "Las credenciales son globales; las asignaciones pertenecen a la sub-organización.",
        {
          lead: "Por qué:",
          text: "Permitió reutilizar plantillas a nivel institucional manteniendo una propiedad clara de los datos."
        }
      ],
      negativeLabel: "Modelo aislado",
      negative: [
        "Cada sub-organización gestiona sus propias credenciales.",
        "Duplicación de trabajo y datos."
      ],
      screenshots: [
        {
          id: "",
          label: "Lista de credenciales",
          src: `${import.meta.env.BASE_URL}images/case-studies/credential-platform/List%20of%20credentials.jpg`,
        },
        {
          id: "",
          label: "Lista de asignaciones",
          src: `${import.meta.env.BASE_URL}images/case-studies/credential-platform/List%20of%20assignments.jpg`,
        },
        {
          id: "",
          label: "Asignación por lote - estado vacío",
          src: `${import.meta.env.BASE_URL}images/case-studies/credential-platform/Batch%20assign%20-%20empty%20state.jpg`,
        },
        {
          id: "",
          label: "Asignación por lote - documento cargado",
          src: `${import.meta.env.BASE_URL}images/case-studies/credential-platform/Batch%20assign%20-%20uploaded%20document.jpg`,
        },
        {
          id: "",
          label: "Asignar a lote existente - estado vacío",
          src: `${import.meta.env.BASE_URL}images/case-studies/credential-platform/Assign%20to%20existing%20batch%20-%20empty%20state.jpg`,
        },
        {
          id: "",
          label: "Asignar a lote existente - verificación",
          src: `${import.meta.env.BASE_URL}images/case-studies/credential-platform/Assign%20to%20existing%20batch%20-%20verification.jpg`,
        }
      ]
    },

    creditDistribution: {
      eyebrow: "Decisión clave 3",
      title: "Créditos Distribuidos vs. Consumo en Tiempo Real",
      questionLabel: "modelo de facturación forzado",
      question:
        "¿Cómo se deben gestionar los créditos entre la organización principal y sus sub-organizaciones?",
      positiveLabel: "Créditos distribuidos",
      positive: [
        'El administrador de plataforma asigna un "presupuesto" de créditos a las sub-organizaciones.',
        {
          lead: "Por qué:",
          text: "Presenté ambas opciones; las dos partes acordaron que la distribución era el mejor modelo mental."
        }
      ],
      negativeLabel: "Consumo en tiempo real",
      negative: [
        "Deducir créditos al instante confundía a los administradores.",
        "Difícil de seguir la asignación de presupuesto entre sub-organizaciones."
      ],
      screenshots: [
        {
          id: "SHOT 04",
          label: "Modal de distribución de créditos",
        },
        {
          id: "SHOT 05",
          label: "Comportamiento de consumo de créditos",
        }
      ]
    },

    systems: {
      eyebrow: "Pensamiento sistémico",
      title: "Roles, Permisos, Visibilidad y Auditoría",
      quote:
        "Todo lo que sigue lo diseñé yo y lo documenté como la especificación con la que el equipo técnico construyó.",
      matrixTitle: "Matriz de visibilidad de historial por rol",
      matrixColumns: ["Rol", "Ve la actividad", "Asigna credenciales", "Edita el historial"],
      matrixRows: [
        ["Admin de plataforma", "Todas las orgs", "Sí", "No"],
        ["Admin de organización", "Solo su org", "Solo su org", "No"],
        ["Acreditado", "Su propio historial", "No", "No"]
      ],
      matrixCaption:
        "Diseñé un modelo RBAC estricto (control de acceso basado en roles) donde la visibilidad se restringe de arriba hacia abajo.",
      uxDecision: {
        label: "Decisión de UX: modal de historial vs. filtros",
        items: [
          {
            label: "El trade-off:",
            text: "Necesitábamos mostrar el historial de toda la plataforma, pero los usuarios avanzados querían filtrar cientos de entradas."
          },
          {
            label: "La solución:",
            text: "Elegimos reutilizar el modal de historial existente en lugar de construir una vista compleja con filtros."
          },
          {
            label: "Por qué:",
            text: "Priorizaba la visibilidad para el usuario medio, evitaba duplicar componentes y mantenía una UX consistente sin añadir deuda técnica innecesaria."
          }
        ]
      },
      stateParagraph:
        "Diseñé una máquina de estados que registra el ciclo de vida de la credencial, de Pendiente a Aceptada, con 5 estados intermedios para garantizar la trazabilidad.",
      docsTitle: "Documentación como especificación de implementación",
      docs: [
        {
          title: "Diagramas de flujo",
          text: "Para mostrar flujos paralelos y cómo las acciones de un rol afectan a otro."
        },
        {
          title: "Tablas de visibilidad",
          text: "De historial y eventos, desglosadas por rol."
        },
        {
          title: "Casos de uso",
          text: "Con registro de todos los eventos y permisos involucrados."
        }
      ],
      screenshots: [
        {
          id: "SHOT 06.1",
          label: "Ciclo de vida de la asignación",
        },
        {
          id: "SHOT 06.2",
          label: "Reglas del sistema",
        }
      ]
    },

    leadership: {
      eyebrow: "liderazgo",
      title: "Gestionar Stakeholders Resistentes y Alinear con Evidencia",
      paragraph:
        "Los stakeholders eran dos fundadores, ingenieros de sistemas, con el mandato de replicar a un competidor. No tenían reglas de negocio definidas: enviaban videos del competidor diciendo «así debería funcionar».",
      quote:
        "Tenía que determinar qué se podía ajustar, qué no, y proponer el modelo.",
      resistanceTitle: "Resistencia",
      resistance: [
        {
          title: "Constante",
          text: "Cuestionaban decisiones sin contexto técnico."
        },
        {
          title: "Difícil de explicar",
          text: "Cómo ciertas acciones de un rol afectaban a los roles por debajo, o cómo manejar casos fuera del happy path."
        },
        {
          title: "Fricción en los peores momentos",
          text: "Mi jefe manejaba la mayor parte, pero cuando estaba de vacaciones yo asumía."
        }
      ],
      managedTitle: "Cómo lo gestioné",
      managed: [
        {
          title: "Diagramas de flujo",
          text: "Para que entendieran flujos paralelos y afectación entre roles."
        },
        {
          title: "Casos de uso",
          text: "Con registro de eventos y permisos."
        },
        {
          title: "Tablas de visibilidad",
          text: "De historial y eventos, desglosadas por rol."
        },
        {
          title: "Alineación por evidencia",
          text: "En la decisión de créditos presenté las dos opciones y ambas partes acordaron la distribución."
        }
      ],
      validationTitle: "Proceso de validación",
      validation:
        "Cerca del 90% de las revisiones ocurrieron en reunión, y luego las reenviaba por correo para tener constancia —porque cuando algo no salía como esperaban, la respuesta era que no se había explicado bien.",
      debtTitle: "Deuda técnica",
      debt:
        "En un periodo en que no estuve, se añadieron funcionalidades sin visión sistémica. Eso generó deuda de producto que afecta la escalabilidad. Lo detecté al reincorporarme y lo documenté como deuda técnica. No se remedió del todo en su momento, pero quedó visible en la lista de mejoras.",
      closing:
        "Gestionar este contexto no consistía en hablar más fuerte. Consistía en hacer el sistema lo bastante legible para que las decisiones se pudieran revisar con evidencia y no con preferencia."
    },

    tradeoffs: {
      eyebrow: "trade-offs",
      title: "Lo que sacrificamos",
      intro:
        "Cada decisión de este caso tuvo un costo. Estas son las que aceptamos a conciencia.",
      columns: ["Dimensión", "Prioridad", "Costo"],
      rows: [
        [
          "Flexibilidad de roles",
          "Por encima de escalabilidad",
          "Complejidad en permisos y visibilidad"
        ],
        [
          "Rigurosidad de auditoría",
          "Por encima de escalabilidad",
          "Maraña de interacciones entre roles"
        ],
        [
          "Velocidad de entrega",
          "Por encima de escalabilidad",
          "Deuda de producto"
        ],
        [
          "Falta de visión completa",
          "Los stakeholders iteraban sobre la marcha",
          "Dificultad para planificar la arquitectura"
        ],
        [
          "Notificaciones en tiempo real",
          "Descartadas",
          "Solo notificaciones batch y recordatorios"
        ]
      ]
    },

    impact: {
      eyebrow: "Impacto",
      title: "Lo que sabemos (sin métricas formales)",
      limitationTitle: "Limitación",
      limitation:
        "La empresa nunca definió métricas formales.\nLa medición se basó en la satisfacción de los stakeholders\n\nLo solicitado frente a lo entregado— no en el comportamiento del usuario final.",
      columns: ["Área", "Antes", "Después", "Evidencia"],
      rows: [
        [
          "Emisión de credenciales",
          "Manual, una a una",
          "Asignación individual o por lote",
          "Funcionalidad desplegada"
        ],
        [
          "Trazabilidad",
          "Preguntando a compañeros o por correo",
          "Historial de actividad por rol, con eventos, hora y fecha",
          "Funcionalidad desplegada"
        ],
        [
          "Autogestión institucional",
          "Dependencia de procesos manuales",
          "Organizaciones y sub-organizaciones gestionan sus propias asignaciones y créditos",
          "Funcionalidad desplegada"
        ],
        [
          "Verificación",
          "Llamando a la institución",
          "Verificación por blockchain y estándares W3C",
          "Funcionalidad desplegada"
        ],
        [
          "Escalabilidad",
          "Institución lineal",
          "Multi-organización con roles y permisos",
          "Funcionalidad desplegada"
        ],
        [
          "Deuda de producto",
          "—",
          "Funcionalidades añadidas sin visión sistémica",
          "Documentada, pendiente de remediar"
        ]
      ],
      tableNote:
        "La columna de evidencia dice «funcionalidad desplegada» a propósito. Cuando no tengo una métrica, lo digo en lugar de inventarla.",
      evolutionTitle: "Evolución",
      evolution: [
        "2 años de desarrollo.",
        "3 cortes de funcionalidades: 2 de producto + 1 técnico.",
        "4ª iteración en planificación."
      ],
      pendingTitle: "Pendiente",
      pending: [
        "Analíticas formales de producto",
        "Portal de acreditados",
        "Marca blanca",
        "Adaptación a otros países",
        "Requisitos Europass y ELM"
      ],
      quoteLabel: "Frase de impacto",
      quote:
        "Diseñé de cero una plataforma B2B de emisión de credenciales digitales para instituciones educativas y corporativas, definiendo el modelo de organizaciones, roles, permisos, historial de actividad y planes de consumo que soporta la operación actual del producto."
    },

    reflections: {
      eyebrow: "contribución",
      title: "Como Diseñador",
      contribution: [
        "Definir roles, jerarquías y permisos desde cero: no venían del brief.",
        "Diseñar el modelo multi-organización con credenciales compartidas y asignaciones específicas.",
        "Definir la lógica de planes, créditos y distribución entre sub-organizaciones.",
        "Documentar el sistema con diagramas, tablas y casos de uso que sirvieron como contrato de implementación.",
        "Sostener decisiones de producto con evidencia en un contexto de alta fricción con los stakeholders.",
        "Detectar y documentar la deuda de producto generada por funcionalidades añadidas sin visión sistémica."
      ]
    },
  },
  b2bCommerce: {
    hero: {
      tag: "B2B COMMERCE · DISTRIBUCIÓN DE SUMINISTROS PARA LABORATORIOS",
      title: "De la venta asistida al autoservicio",
      description: [
        "Un distribuidor líder de material, reactivos y equipamiento para laboratorios en el País Vasco operaba con un proceso completamente manual: pedidos por teléfono y email, catálogos en PDF, cotizaciones por correo y gestión de incidencias sin plataforma. Su ERP era interno; el cliente final nunca lo tocaba.",
        "Mi trabajo fue traducir un modelo de negocio fragmentado y manual en un sistema de autoservicio que fuera confiable, escalable y que no canibalizara la relación con el cliente."
      ],
      role: "Product Designer (liderando 1 UI/UX Designer y supervisando a 3 programadores)",
      timeline: "2 años · 3 versiones desplegadas · 4ª en planificación",
      team: "PM (mi jefe directo) · PO del cliente · Equipo técnico · Marketing · Ventas · Operaciones",
      focus: "Benchmark constante: Fisher Scientific, la competencia principal",
      ndaText:
        "Los detalles se han generalizado para proteger la confidencialidad del cliente."
    },

    challenge: {
      eyebrow: "El Desafío",
      title: "Un modelo de negocio 100% manual",
      paragraphs: [
        "Un distribuidor líder de material, reactivos y equipamiento para laboratorios en el País Vasco operaba con un proceso completamente manual: pedidos por teléfono y email, catálogos en PDF, cotizaciones por correo y gestión de incidencias sin plataforma. Su ERP era interno; el cliente final nunca lo tocaba.",
        "El problema número uno era el costo operativo: cada pedido, queja, devolución o cotización requería intervención humana. No existía autoservicio.",
        "La presión estratégica: el CEO quería replicar Fisher Scientific, su competencia principal. Eso definió una restricción constante: cada decisión de producto se comparaba con ese benchmark."
      ],
      objectivesTitle: "Objetivos de negocio",
      objectiveGroups: [
        {
          version: "V1",
          items: [
            "Que el cliente viera precios, descripciones y especificaciones en tiempo real.",
            "Que pudiera hacer pedidos sin asistencia.",
            "Que entendiera familias de productos, variantes y condiciones.",
            "Que supiera cuándo pedir cotización."
          ]
        },
        {
          version: "V2",
          items: [
            "Mejorar la búsqueda de productos.",
            "Permitir generar cotizaciones.",
            "Visualizar el historial de compras propio y el de sus contactos.",
            "Mostrar promociones y aplicarlas.",
            "Saber tiempos de entrega y estados de pedido."
          ]
        },
        {
          version: "V3",
          items: [
            "Mejorar el soporte técnico y enrutar cada solicitud al departamento correcto."
          ]
        }
      ],
      risksTitle: "Riesgos identificados",
      risks: [
        {
          title: "Curva de adopción",
          text: "Los clientes estaban acostumbrados al proceso manual."
        },
        {
          title: "Información incompleta de productos",
          text: "Información incompleta provoca compras erróneas y devoluciones."
        },
        {
          title: "Dificultad de búsqueda",
          text: "Dificultad para encontrar productos o similares."
        }
      ],
      pivotLabel: "El reto de diseño no era…",
      pivot:
        "Poner un catálogo online. Era traducir un modelo de negocio fragmentado y manual en un sistema de autoservicio que fuera confiable, escalable y que no canibalizara la relación con el cliente."
    },

    vision: {
      number: "01",
      title: "Visión de Producto: De Digitalizar un Catálogo a Construir un Sistema de Comercio",
      paragraphs: [
        "Mi primera decisión fue definir la visión del producto. No podíamos replicar el catálogo PDF ni copiar a Fisher Scientific sin entender primero nuestro propio negocio."
      ],
      discoveryTitle: "Descubrimiento",
      discoveryStats: [
        { value: "28", label: "reuniones en un mes" },
        { value: "6", label: "departamentos involucrados" },
        { value: "1", label: "conjunto de criterios unificado" }
      ],
      discoveryText:
        "Lideré 28 reuniones en un mes con 6 departamentos —Ventas, Operaciones, Marketing y el equipo que estructuraba las categorías del catálogo— para mapear el proceso real y unificar criterios. Cada departamento tenía su propio entendimiento y sus propias inconsistencias.",
      insightLabel: "El insight clave",
      insight:
        "El negocio no vendía productos; vendía acceso a productos con reglas de precio y condiciones específicas por cliente. La complejidad no estaba en el catálogo, sino en las reglas de negocio.",
      decisionLabel: "La decisión estratégica",
      decision:
        "En lugar de construir un e-commerce tradicional, diseñamos un Sistema de Comercio con un modelo de producto unificado. El usuario puede buscar un producto, comprarlo si el sistema lo permite, o cotizarlo si no.",
      flowTitle: "El flujo que esto abrió",
      flow: [
        { step: "BUSCAR", text: "Encontrar un producto por nombre, SKU, marca o categoría." },
        { step: "COMPRAR O COTIZAR", text: "El sistema decide qué vía está disponible para este cliente y este producto." },
        { step: "HISTORIAL", text: "Cada cotización y cada pedido acumulan actividad en el registro del cliente." },
        { step: "RECOMPRAR", text: "Un pedido completo se puede volver a pedir, o marcarse como favorito." }
      ],
      enablesTitle: "Qué dejó esto abierto para",
      enables: [
        "Flujos de aprobación automatizados.",
        "Historial de actividad sobre una cotización.",
        "Recomprar un pedido completo.",
        "Marcar pedidos como favoritos."
      ],
      futureTitle: "Visión a futuro",
      future:
        "Que el sistema soportara autogestión de permisos para contactos que supervisan a otros contactos.",
      screenshot: {
        id: "SHOT 01",
        label: "Diagrama del Sistema de Comercio — buscar → comprar o cotizar → historial → recompra",
        note: "Reemplazar con el diagrama real. Es el diagrama que explica todo el producto en una sola imagen."
      }
    },

    systems: {
      number: "02",
      title: "Pensamiento Sistémico: Diseñar para la Complejidad Real",
      paragraphs: [
        "Las reglas de negocio eran más complejas que la interfaz. Cada parte de esta sección es una decisión para hacer esa complejidad legible en lugar de esconderla."
      ],
      model: {
        title: "El modelo cliente / contacto",
        text:
          "Descubrimos que un cliente se comporta como una organización con varios miembros que comparten beneficios. Cada cliente tiene un código; los contactos (empleados) compran con ese código y heredan sus descuentos. El cliente ve toda la actividad de sus contactos.",
        chain: ["ORGANIZACIÓN", "CONTACTOS", "ACTIVIDAD"],
        outcomesTitle: "Modelarlo así permitió:",
        outcomes: [
          "Historial de compras por contacto y consolidado.",
          "Base para permisos futuros.",
          "Checkout con datos precargados, porque más del 85% de quienes crean órdenes son empleados, no dueños."
        ]
      },
      pdp: {
        title: "La página de detalle de producto (PDP)",
        text:
          "No existe un happy path único. Hay ramificaciones según el tipo de producto: variantes, condiciones, materiales peligrosos, hielo seco. El objetivo siempre es el mismo: buscar → seleccionar → agregar al carrito → comprar.",
        branchesTitle: "Ramificaciones en la PDP:",
        branches: [
          "Las variantes dependen del producto, no del cliente.",
          "Lo que afecta al cliente es si tiene un descuento predeterminado sobre ese producto.",
          "Y si puede solicitar cotización del pedido completo para obtener mejor precio."
        ],
        affectsTitle: "Lo que realmente varía por cliente:",
        affects: [
          {
            label: "Descuento predeterminado",
            text: "Si el cliente ya tiene un descuento automático sobre ese producto."
          },
          {
            label: "Cotización del pedido completo",
            text: "Si el cliente puede solicitar cotización del pedido completo para obtener un mejor precio."
          }
        ],
        tradeoffLabel: "El trade-off",
        tradeoff:
          "Reconciliamos reglas de negocio que chocaban —descuento automático frente a cotización manual— priorizando que cada pedido fuera válido desde el primer intento. Esto redujo errores y devoluciones, a costa de no ofrecer compra en un clic."
      },
      orders: {
        title: "La complejidad operativa: albaranes",
        stat: {
          value: "65%",
          label: "de los pedidos se repartían en varios albaranes aun perteneciendo a una sola orden"
        },
        text:
          "El detalle de pedido no podía ser una lista plana. La jerarquía tenía que mostrar qué pertenecía a cada entrega sin perder la visión global.",
        chain: ["ORDEN", "ALBARÁN", "LÍNEA"]
      },
      search: {
        title: "La búsqueda como herramienta de trabajo",
        text:
          "La búsqueda no es un buscador. Para compradores profesionales es una herramienta de descubrimiento, y así la diseñé.",
        capabilities: [
          "Búsqueda por nombre, SKU, marca y categoría.",
          "Sugiere productos similares (petición de Marketing)."
        ]
      },
      screenshots: [
        {
          id: "SHOT 02",
          label: "Árbol de decisión de la PDP — variantes, condiciones, descuento frente a cotización",
          note: "Reemplazar con una captura real. La rama donde compiten descuento y cotización es la que hay que mostrar."
        },
        {
          id: "SHOT 03",
          label: "Detalle de pedido jerárquico — orden → albarán → línea",
          note: "Reemplazar con una captura real. El anidamiento tiene que verse de un vistazo."
        },
        {
          id: "SHOT 04",
          label: "Búsqueda unificada — SKU, marca, categoría, similares",
          note: "Reemplazar con una captura real."
        }
      ]
    },

    execution: {
      number: "03",
      title: "Ejecución y Liderazgo: Alineando a la Organización",
      paragraphs: [
        "El éxito dependía de dos cosas a la vez: que fuera técnicamente posible y que los departamentos lo adoptaran."
      ],
      feasibilityTitle: "Lo que lo hacía técnicamente difícil",
      feasibility: [
        "Limitantes en el almacenamiento de datos.",
        "Inventario actualizado quincenalmente vía Excel.",
        "Desconexión entre las imágenes y los productos."
      ],
      resistanceTitle: "Gestión de la resistencia",
      resistanceIntro:
        "Tres grupos presionaron, cada uno por un motivo distinto. Cada uno necesitaba una respuesta distinta.",
      resistance: [
        {
          stakeholder: "Ventas",
          resisted: "Resistían porque «los procesos no podían realizarse al 100% en la plataforma».",
          action:
            "Mi rol fue mapear qué áreas del proceso sí se podían integrar y cuáles no, y proponer un modelo híbrido."
        },
        {
          stakeholder: "Marketing",
          resisted: "Resistían porque querían métricas específicas de Google Analytics.",
          action:
            "Sugerí implementar las más relevantes primero y explicar cuáles eran prioritarias. Quedó pendiente."
        },
        {
          stakeholder: "CEO",
          resisted: "Quería copiar a Fisher Scientific.",
          action:
            "Mi trabajo fue usar el benchmark como referencia y no como copia, y encontrar el punto medio entre lo que Marketing quería, lo que el equipo técnico aprobaba y lo que el CEO exigía."
        }
      ],
      validationTitle: "Cómo validamos",
      validation: [
        { label: "Análisis", text: "Workshops con los departamentos." },
        { label: "Diseño", text: "Reviews con stakeholders." },
        {
          label: "Interacción",
          text: "Prototipos para evaluar respuesta del sistema, procesos en segundo plano y cambios en tiempo real."
        },
        {
          label: "A/B testing",
          text: "Con empleados de la propia empresa: no se permitió testear con usuarios reales."
        },
        { label: "Post-lanzamiento", text: "Feedback de usuarios reales tras cada despliegue." }
      ],
      supervisionTitle: "Supervisión técnica",
      supervision:
        "Supervisé al equipo de 3 programadores para que lo implementado compaginara con los casos de uso, los diseños y las reglas de negocio. También hice pruebas de QA junto con la persona de QA."
    },

    impact: {
      number: "04",
      title: "Impacto: Lo que sabemos (sin métricas formales)",
      limitationTitle: "Limitación honesta",
      limitation:
        "La empresa nunca definió métricas formales. La medición se basaba en satisfacción del stakeholder —lo solicitado frente a lo entregado— y no en comportamiento del usuario final.",
      columns: ["Área", "Antes", "Después", "Evidencia"],
      rows: [
        [
          "Gestión de pedidos",
          "100% por teléfono y email",
          "Autoservicio en el portal",
          "Menos llamadas para gestión de pedidos"
        ],
        [
          "Soporte técnico",
          "Correos directos sin registro",
          "Tickets centralizados en plataforma y ERP",
          "Los departamentos reciben tickets desde la plataforma"
        ],
        [
          "Actualización de productos",
          "Proceso lento y descoordinado",
          "Casi inmediata para el cliente",
          "Feedback interno de Operaciones"
        ],
        [
          "Cotizaciones",
          "Manuales por email",
          "Generables en la plataforma",
          "Funcionalidad desplegada en V2"
        ],
        [
          "Historial de compras",
          "Inexistente para el cliente",
          "Historial propio y de contactos visible",
          "Funcionalidad desplegada en V2"
        ],
        [
          "Recompra",
          "Manual",
          "Pedido completo reordenable y marcable como favorito",
          "Funcionalidad desplegada en V2"
        ]
      ],
      tableNote:
        "Donde tengo una señal cualitativa la digo; donde no tengo métrica dejo la celda como está en lugar de inventarla.",
      evolutionTitle: "Evolución del producto",
      evolution: [
        "3 versiones desplegadas en 2 años.",
        "4ª versión en planificación."
      ],
      pendingTitle: "Pendiente",
      pending: [
        "Analíticas",
        "Gestión avanzada de cliente / contacto",
        "Devoluciones",
        "Incidencias",
        "Cotizaciones con flujos de aprobación automatizados"
      ],
      quoteLabel: "Frase de impacto",
      quote:
        "Digitalizamos un proceso 100% manual —teléfono, email, PDFs— en una plataforma de autoservicio que hoy gestiona pedidos, cotizaciones y soporte técnico, reduciendo llamadas operativas y centralizando la actividad del cliente en el ERP."
    },

    reflections: {
      number: "05",
      title: "Reflexiones y Visión de Futuro",
      intro:
        "Este proyecto no fue solo un rediseño de UI/UX. Fue la re-arquitectura del modelo de negocio digital de la compañía, con restricciones técnicas fuertes y una cultura organizacional resistente al cambio.",
      contributionTitle: "Mi mayor contribución como diseñador",
      contribution: [
        "Definir la visión del producto desde el negocio, no desde la UI.",
        "Unificar departamentos que operaban con lógicas distintas.",
        "Diseñar un sistema que soporta el presente y habilita el futuro: permisos, aprobaciones, analíticas.",
        "Supervisar la implementación para que la lógica de negocio no se perdiera en el código."
      ],
      roadmapTitle: "Roadmap — próximos 12 meses",
      roadmap: [
        "Instrumentar analíticas de producto (Google Analytics u otra).",
        "Gestión avanzada de permisos para contactos.",
        "Flujos de devoluciones e incidencias.",
        "Cotizaciones con flujos de aprobación automatizados."
      ]
    },
  },

};


export default es;
