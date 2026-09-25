const es = {

  home: {

    hero: {

      title: "Hola, soy Katherine.",

      paragraphs: [

        "Soy <strong>Líder de Diseño de Producto</strong> y me gusta descubrir cómo funcionan realmente las cosas.",

        "Me muevo entre <strong class=\"hero-typewriter\" data-words=\"dirección de producto|sistemas|UX|implementación\"><span class=\"tw-text\">dirección de producto</span><span class=\"hero-caret\" aria-hidden=\"true\"></span></strong>",

        "Me acerco al problema lo suficiente como para tomar una buena decisión.",

      ],

    },


    buttons: {
      work: "Ver mi trabajo"
    },

    work: {

      title:
        "Proyectos en los que he trabajado",

      projects: [

        {
          title: "De una idea a una plataforma de credenciales escalable",
          category: "Enterprise SaaS · Credenciales Digitales",
          description:
            "Diseño de una plataforma escalable de gestión de credenciales para múltiples organizaciones y roles complejos.",
          tags: ["Product Strategy", "Systems Design", "Architecture", "Enterprise UX"],
          link: `${import.meta.env.BASE_URL}es/work/credential-platform/`,
          image: `${import.meta.env.BASE_URL}images/case-studies/credential-platform/asset-01.png`
        },


        {
          title: "De compras asistidas a autoservicio.",
          category: "B2B Commerce · Plataforma Empresarial",
          description:
            "Transformación de un proceso comercial tradicional en una experiencia de autoservicio para compradores profesionales.",
          tags: ["Product Discovery", "Complex UX", "Self-Service", "Business Systems"],
          link: `${import.meta.env.BASE_URL}es/work/b2b-commerce/`,
          image: `${import.meta.env.BASE_URL}images/case-studies/b2b-commerce/cover.png`
        }

      ],

      action: "Ver caso de estudio"

    },


    options: {

      fun: {
        title: "Escritos",
        link: `${import.meta.env.BASE_URL}es/writings/`
      },

      experiments: {
        title: "Experimentos",
        link: `${import.meta.env.BASE_URL}es/experiments/`
      }

    },


    pointOfView: {
      title: "Tiendo a ir una capa más profunda.",

      paragraphs: [
      "Un producto rara vez empieza donde dice el brief.",
      "Una petición de funcionalidad puede ser un problema de negocio.",
      "Una pantalla confusa puede ser un problema de permisos.",
      "Una “limitación técnica” puede ser una decisión que nadie revisó.",
      "Por eso sigo el hilo: hablo con quienes conocen el negocio, pregunto cómo funciona hoy, dónde se rompe y por qué llegó ahí. Mapeo dependencias, cuestiono supuestos y entro en detalle cuando importa.",
      "A veces eso lleva a un flujo nuevo.",
      "A veces cambia la estructura del producto.",
      "A veces significa decir que no.",
      "<strong>No necesito ser dueña de cada decisión. Solo entender lo suficiente para ayudar a tomar las correctas.</strong>"
      ]
    },


    beyond: {

      title: "Más allá de la pantalla.",

      paragraphs: [

        "Me gusta tener una vida que no parezca trabajo.",

        "Me muevo, exploro, aprendo, creo cosas, desaparezco en la naturaleza por un tiempo, salgo, me quedo en casa, leo, experimento y paso una cantidad irracional de tiempo con mis gatos.",

        "El trabajo es importante para mí.",

        "Simplemente no es el cuadro completo."

      ]

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

  },

  sidebar: {
    navigation: {
      work: "Trabajo",
      experiments: "Experimentos",
      fun: "Escritos",
    },
  
    actions: {
      downloadCV: "Descargar CV",
      linkedin: "LinkedIn",
      email: "Email",
    },

    preferences: {
      typography: "Tamaño del texto",
      typographyLarge: "Grande",
      typographyMedium: "Mediana",
      typographySmall: "Pequeña",
    },
  },

  underConstruction: {
    badge: "Próximamente",
    title: "Esta página está en construcción",
    description: "Estoy trabajando en algo aquí. Vuelve pronto.",
    backLabel: "Ver mi trabajo",
  },
  credentialPlatform: {
    hero: {
      tag: "PLATAFORMA DE CREDENCIALES · SECTOR EDUCATIVO Y CORPORATIVO",
      title: "De institución lineal a sistema multi-organización",
      description: [
        "Una plataforma B2B donde instituciones educativas, corporaciones y entes certificadores emiten, gestionan y verifican credenciales digitales —títulos, certificados, insignias y microcredenciales— usando estándares internacionales como Blockchain, Open Badges y credenciales verificables de la W3C.",
        "El proyecto fue 0 → 1. Diseñé el modelo organizacional, el sistema de roles y permisos, la lógica de créditos y los flujos que hacen posible emitir credenciales a escala sin que la operación colapse."
      ],
      role: "Product Designer (liderazgo de facto sobre UI/UX y equipo técnico)",
      timeline: "2 años · 3 cortes de funcionalidades (2 de producto + 1 técnico) · 4ª iteración en planificación",
      team: "PM (mi jefe directo) · 1 UI/UX Designer · 2 programadores · 1 QA",
      focus: "2 fundadoras (ingenieras de sistemas) con mandato de replicar un competidor del sector",
      ndaText:
        "Los detalles se han generalizado para proteger la confidencialidad del cliente."
    },

    challenge: {
      eyebrow: "El Desafío",
      title: "Emitir credenciales a escala era manual, lento y sin trazabilidad",
      paragraphs: [
        "Una empresa de soluciones tecnológicas para el sector educativo quería construir desde cero una plataforma B2B para que instituciones educativas, corporaciones y entes certificadoras pudieran emitir, gestionar y verificar credenciales digitales —títulos, certificados, insignias y microcredenciales— usando estándares internacionales como Blockchain, Open Badges y credenciales verificables de la W3C.",
        "El proyecto era 0 → 1. No había plataforma previa. Las instituciones emitían credenciales de forma manual: datos en hojas de cálculo, diseños en herramientas externas, envío uno a uno por email o impresión física."
      ],
      painsTitle: "Tres dolores concretos",
      pains: [
        {
          title: "Emisión manual y lenta",
          text: "Pasar datos a certificados uno a uno, con diseños externos y envío manual."
        },
        {
          title: "Sin trazabilidad",
          text: "No se sabía con certeza quién recibió qué, quién lo asignó, cuándo ni en qué estado estaba. La información existía, pero se obtenía preguntando a compañeros o por correo al acreditado."
        },
        {
          title: "Sin autogestión institucional",
          text: "Las instituciones dependían de procesos manuales para emitir, asignar y hacer seguimiento."
        }
      ],
      latentTitle: "Dolores latentes",
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
      context: [
        {
          label: "Modelo de cobro",
          value: "Por credencial asignada (no emitida; crear credenciales es gratis), por acreditado (sin importar cuántas credenciales obtenga), con versión gratuita de prueba."
        },
        {
          label: "Mercado inicial",
          value: "Colombia. Piloto de 2 empresas con 20–50 acreditados cada una."
        },
        {
          label: "Expansión futura",
          value: "Europa, con requisitos Europass y ELM."
        }
      ],
      pivotLabel: "El reto de diseño no era…",
      pivot:
        "Hacer una plataforma de certificados. Era diseñar el sistema de organizaciones, roles, permisos y planes que hiciera posible emitir credenciales a escala sin que la operación colapsara.",
      mandateLabel: "Mandato inicial de los stakeholders",
      mandate:
        "Replicar el modelo de un competidor del sector. Mi trabajo fue traducir esa ambición en un sistema propio, escalable y alineado a estándares internacionales.",
      screenshot: {
        id: "SHOT 01",
        label: "Hero del proyecto — pantalla principal o collage de las vistas clave",
        note: "Reemplazar con una captura real. Sugerencia: el listado de credenciales con sus filtros, la expresión más clara del producto."
      }
    },

    vision: {
      number: "01",
      title: "Visión de Producto: De Organización Lineal a Sistema Multi-Organización",
      paragraphs: [
        "Al inicio no existían multi-organizaciones. El modelo era una institución lineal: una única cadena de roles desde quien gestionaba la plataforma a nivel global hasta el acreditado.",
        "Conforme el producto evolucionó, el modelo mutó a organización + multi-organización."
      ],
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
        id: "SHOT 02",
        label: "Diagrama del modelo de roles — institución lineal vs. multi-organización",
        note: "Reemplazar con el diagrama real. Es el visual más importante del caso de estudio."
      }
    },

    sharedCatalog: {
      number: "02",
      title: "Decisión Clave 1: Credenciales Compartidas, Asignaciones Específicas",
      questionLabel: "La primera pregunta",
      question:
        "Al diseñar multi-organización, ¿cada sub-organización tiene sus propias credenciales o comparten el catálogo?",
      rejectedLabel: "Alternativa descartada",
      rejected: "Cada sub-organización con sus propias credenciales.",
      decisionLabel: "Decisión tomada",
      decision:
        "Todas las credenciales creadas están disponibles para todas las sub-organizaciones, pero las asignaciones pertenecen a la sub-organización específica que las realizó.",
      whyTitle: "Por qué",
      why: [
        "Evita duplicidad de credenciales: una misma insignia puede ser usada por varias sub-organizaciones.",
        "Mantiene trazabilidad: cada asignación pertenece a una sub-organización y los historiales nunca se mezclan.",
        "Permite que una sub-organización vea todas las credenciales disponibles pero solo gestione sus propias asignaciones."
      ],
      uiTitle: "Cómo se reflejó en la UI/UX",
      ui: [
        "Las sub-organizaciones ven todas las credenciales.",
        "Al entrar, solo se muestran sus asignaciones; las que no les pertenecen aparecen como sin asignación.",
        "El historial de actividad registra qué administrador hizo la asignación y a quién (individual o lote)."
      ],
      typesTitle: "Tipos de credencial",
      types: [
        "Certificado o insignia.",
        "Pueden tener constancia.",
        "Pueden pertenecen a una colección: el sistema, al detectar que un acreditado aprobó un curso (vía Global Certifica, Moodle o API integrada), asigna automáticamente la siguiente credencial de la colección."
      ],
      screenshot: {
        id: "SHOT 03",
        label: "Listado de credenciales con estado de asignación por sub-organización",
        note: "Reemplazar con una captura real. El estado sin asignación junto a las asignaciones propias es lo que hace legible la decisión."
      }
    },

    creditDistribution: {
      number: "03",
      title: "Decisión Clave 2: Créditos Distribuidos vs. Consumo en Tiempo Real",
      questionLabel: "La pregunta que forzó el modelo de cobro",
      question:
        "El modelo de cobro por créditos (credencial asignada, acreditado) obligó a definir cómo se gestionan entre la organización principal y sus sub-organizaciones.",
      rejectedLabel: "Alternativa descartada",
      rejected: "Consumo en tiempo real entre todas las sub-organizaciones.",
      decisionLabel: "Decisión tomada",
      decision:
        "Los créditos se asignan a la organización principal, y esta los redistribuye entre sus sub-organizaciones.",
      whyTitle: "Por qué",
      why: [
        "Historial claro: si el consumo es global, el historial mezcla sub-organizaciones. Si es específico por sub-organización, el historial es filtrable y entendible.",
        "Reutilización de componentes: permitió reutilizar el modal de historial de actividad existente, evitando añadir filtros que afectarían también a la generación de reportes.",
        "Operación controlada: el consumo en tiempo real entre sub-organizaciones era caótico de seguir."
      ],
      uiTitle: "Cómo se reflejó en la UI/UX",
      ui: [
        "La organización principal tiene un modal para distribuir créditos.",
        "Ve cuántas sub-organizaciones tiene, si tienen créditos o no, y cuántos han consumido.",
        "Ve cómo el consumo del plan total va cambiando.",
        "Los administradores principales pueden solicitar créditos a su administrador de organización (si es multi-organización) o planes a Global Certifica."
      ],
      align:
        "Cómo se alineó con los stakeholders: les presenté las dos opciones y ambas partes acordaron que distribuir créditos era mejor que el consumo en tiempo real.",
      screenshots: [
        {
          id: "SHOT 04",
          label: "Modal de distribución de créditos",
          note: "Reemplazar con una captura real."
        },
        {
          id: "SHOT 05",
          label: "Panel de consumo del plan",
          note: "Reemplazar con una captura real."
        }
      ]
    },

    historyModal: {
      number: "04",
      title: "Decisión Clave 3: Reutilizar el Modal de Historial vs. Añadir Filtros",
      questionLabel: "Conectada con la decisión anterior",
      question:
        "Esta decisión sigue directamente del modelo de distribución de créditos.",
      rejectedLabel: "Alternativa descartada",
      rejected:
        "Añadir filtros al modal de historial para soportar consumo global.",
      decisionLabel: "Decisión tomada",
      decision:
        "Mantener el modal existente y que el historial sea específico por sub-organización.",
      whyTitle: "Por qué",
      why: [
        "Añadir filtros habría afectado también la generación de reportes.",
        "El modal existente ya cubría el caso de uso si el consumo se manejaba por sub-organización.",
        "Menor complejidad técnica, mayor claridad para el usuario."
      ],
      uiTitle: "Cómo se reflejó en la UI/UX",
      ui: [
        "El modal de historial de actividad no se modificó: el mismo componente ahora sirve a un alcance más estrecho, por sub-organización.",
        "La generación de reportes heredó la especificidad sin nuevos estados de filtro que diseñar, probar y traducir."
      ],
      closing:
        "Esto es pensamiento sistémico: una decisión de UX (claridad del historial) más una decisión técnica (reutilización de componente) más una decisión de producto (los reportes no se complican). Tres capas, una sola decisión."
    },

    systems: {
      number: "05",
      title: "Pensamiento Sistémico: Roles, Permisos, Visibilidad y Auditoría",
      paragraphs: [
        "El corazón del producto no son las credenciales, es quién puede ver qué, quién puede hacer qué y cómo se registra.",
        "Todo lo que sigue lo diseñé yo y lo documenté como el contrato con el que el equipo técnico construyó."
      ],
      matrixTitle: "Matriz de visibilidad de historial por rol",
      matrixColumns: [
        "Rol",
        "Ve su actividad",
        "Ve la de otros",
        "Puede solicitar créditos"
      ],
      matrixRows: [
        [
          "Administrador principal",
          "Sí",
          "Sí",
          "A su admin de organización (multi) o a Global Certifica"
        ],
        ["Administrador secundario", "Sí", "No", "No"],
        [
          "Admin de organización",
          "Sí",
          "Sí (de sus sub-organizaciones)",
          "A Global Certifica"
        ],
        ["Responsable de plataforma", "Sí", "Sí (global)", "N/A"]
      ],
      statesTitle: "Estados de una asignación",
      statesIntro:
        "Todos los roles de organización pueden ver el estado de una asignación a un acreditado:",
      states: [
        "Pendiente",
        "Aceptada",
        "Rechazada",
        "Vencida",
        "Compartida",
        "Descargada",
        "Revocada (la ejecuta un administrador)"
      ],
      eventsTitle: "Eventos registrados en el historial (todos con hora y fecha)",
      events: [
        "Asignación de credencial a acreditado X por administrador Y.",
        "Asignación de credencial a lote X por administrador Y.",
        "Creación de credencial Z por administrador Y.",
        "Distribución de N créditos a sub-organización A.",
        "Credencial editada por administrador Y."
      ],
      eventsNote:
        "Eventos automáticos: recordatorios de pago de plan, recordatorios de credencial pendiente, recordatorios de credencial vencida.",
      docsTitle: "Documentación como contrato de implementación",
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
      docsClosing:
        "Esto no fue solo comunicación: fue el contrato de implementación que el equipo técnico usó para construir.",
      screenshots: [
        {
          id: "SHOT 06",
          label: "Diagrama de flujo de roles",
          note: "Reemplazar con el diagrama real."
        },
        {
          id: "SHOT 07",
          label: "Tabla de visibilidad por rol",
          note: "Reemplazar con una captura real de la tabla usada en implementación."
        }
      ]
    },

    leadership: {
      number: "06",
      title: "Liderazgo: Gestionar Stakeholders Resistentes y Alinear con Evidencia",
      contextTitle: "Contexto",
      context: [
        "Los stakeholders eran dos fundadoras, ingenieras de sistemas, con mandato de replicar un competidor. No tenían reglas de negocio definidas: pasaban videos del competidor diciendo «así debería funcionar».",
        "Mi trabajo fue ver qué se podía ajustar, qué no, y proponer el modelo."
      ],
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
      approachTitle: "Cómo lo gestioné",
      approach: [
        {
          title: "Diagramas de flujo",
          text: "Para que entendieran flujos paralelos y afectación entre roles."
        },
        {
          title: "Tablas de visibilidad",
          text: "De historial y eventos, desglosadas por rol."
        },
        {
          title: "Casos de uso",
          text: "Con registro de eventos y permisos."
        },
        {
          title: "Alineación por evidencia",
          text: "En la decisión de créditos presenté las dos opciones y ambas partes acordaron la distribución."
        }
      ],
      processTitle: "Proceso de validación",
      process:
        "Cerca del 90% de las revisiones ocurrieron en reunión, y luego las reenviaba por correo para tener constancia —porque cuando algo no salía como esperaban, la respuesta era que no se había explicado bien.",
      debtTitle: "La deuda de producto que nadie era dueño",
      debt:
        "En un periodo en que no estuve, se añadieron funcionalidades sin visión sistémica. Eso generó deuda de producto que afectan la escalabilidad. Lo detecté al reincorporarme y lo documenté como deuda técnica. No se remedió del todo en su momento, pero quedó visible en la lista de mejoras.",
      closing:
        "Gestionar este contexto no consistía en hablar más fuerte. Consistía en hacer el sistema lo bastante legible para que las decisiones se pudieran revisar con evidencia y no con preferencia."
    },

    tradeoffs: {
      number: "07",
      title: "Trade-offs: Lo que sacrificamos",
      intro:
        "Cada decisión de este caso tuvo un costo. Estas son las que aceptamos a conciencia.",
      columns: ["Dimensión", "Prioridad", "Costo"],
      rows: [
        [
          "Flexibilidad de roles",
          "Por encima de simplicidad",
          "Complejidad en permisos y visibilidad"
        ],
        [
          "Rigurosidad de auditoría",
          "Por encima de simplicidad",
          "Maraña de interacciones entre roles"
        ],
        [
          "Velocidad de entrega",
          "Por encima de escalabilidad",
          "Deuda de producto"
        ],
        [
          "Ausencia de visión completa",
          "Los stakeholders iteraban sobre la marcha",
          "Dificultad para planificar la arquitectura"
        ],
        [
          "Notificaciones en tiempo real",
          "Descartadas",
          "Solo notificaciones batch y recordatorios"
        ]
      ],
      closing:
        "Estos trade-offs son realistas y honestos. Reconocer el costo de las decisiones es más valioso que mostrar un proyecto perfecto."
    },

    impact: {
      number: "08",
      title: "Impacto: Lo que sabemos (sin métricas formales)",
      limitationTitle: "Limitación honesta",
      limitation:
        "La empresa nunca definió métricas formales. La medición se basaba en satisfacción del stakeholder —lo solicitado versus lo entregado— y no en comportamiento del usuario final.",
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
      number: "09",
      title: "Reflexiones y Visión de Futuro",
      intro:
        "Este proyecto no fue solo un rediseño de UI/UX. Fue el diseño del sistema de negocio que hace posible emitir credenciales a escala.",
      contributionTitle: "Mi mayor contribución como diseñador",
      contribution: [
        "Definir roles, jerarquías y permisos desde cero: no venían del brief.",
        "Diseñar el modelo multi-organización con credenciales compartidas y asignaciones específicas.",
        "Definir la lógica de planes, créditos y distribución entre sub-organizaciones.",
        "Documentar el sistema con diagramas, tablas y casos de uso que sirvieron como contrato de implementación.",
        "Sostener decisiones de producto con evidencia en un contexto de alta fricción con los stakeholders.",
        "Detectar y documentar la deuda de producto generada por funcionalidades añadidas sin visión sistémica."
      ],
      roadmapTitle: "Roadmap",
      roadmap: [
        "Portal de búsqueda de acreditados",
        "Ampliación de marca blanca",
        "Adaptación a otros países (Europass, ELM)",
        "Analíticas formales de producto",
        "Remediación de deuda de producto"
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
