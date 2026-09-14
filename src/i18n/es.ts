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
          link: `${import.meta.env.BASE_URL}/es/work/credential-platform-v2/`,
          image: `${import.meta.env.BASE_URL}images/case-studies/credential-platform-v2/asset-01.png`
        },


        {
          title: "De compras asistidas a autoservicio.",
          category: "B2B Commerce · Plataforma Empresarial",
          description:
            "Transformación de un proceso comercial tradicional en una experiencia de autoservicio para compradores profesionales.",
          tags: ["Product Discovery", "Complex UX", "Self-Service", "Business Systems"],
          link: `${import.meta.env.BASE_URL}/es/work/b2b-commerce-platform/`,
          image: `${import.meta.env.BASE_URL}images/case-studies/b2b-commerce-platform/cover.png`
        }

      ],

      action: "Ver caso de estudio"

    },


    options: {

      fun: {
        title: "Escritos",
        link: `${import.meta.env.BASE_URL}/es/writings/`
      },

      experiments: {
        title: "Experimentos",
        link: `${import.meta.env.BASE_URL}/es/experiments/`
      }

    },


    pointOfView: {

      title: "Tiendo a ir una capa más profunda.",

      paragraphs: [

        "Un producto rara vez empieza donde dice el brief.",

        "Una petición de una nueva funcionalidad puede ser en realidad un problema de negocio.",

        "Una pantalla confusa puede ser en realidad un problema de permisos.",

        "Una “limitación técnica” puede ser una decisión que nadie ha vuelto a revisar.",

        "Así que me gusta seguir el hilo.",

        "Hablo con las personas que conocen el negocio. Pregunto cómo funcionan las cosas hoy, dónde se rompen y por qué han terminado así. Mapeo qué depende de qué, cuestiono supuestos y entro en los detalles cuando los detalles importan.",

        "A veces eso lleva a un flujo nuevo.",

        "A veces cambia la estructura del producto.",

        "A veces significa decir que no.",

        "<strong>No necesito ser dueña de cada decisión. Solo quiero entender lo suficiente para ayudar a tomar las correctas.</strong>"

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
      tag: "SaaS EMPRESARIAL · EDTECH · CREDENCIALES DIGITALES",
      title: "Creando estructura para un ecosistema de credenciales en crecimiento.",
      description:
        "Diseñando un sistema multi-tenant de gestión de credenciales con jerarquías de roles, capas de reporting y estructuras organizacionales escalables.",
      role: "Product Designer",
      timeline: "2 años",
      team:
        "Product Designer, UX/UI Designer, Desarrolladores, QA, PM, Stakeholders de Producto",
    },

    challenge: {
      eyebrow: "EL DESAFÍO", 
      title: "Transformando requisitos de negocio en una estructura de producto escalable.", 
      business: { 
        title: "PROBLEMA DE NEGOCIO", 
        items: [ 
          "No existía una estructura escalable para gestionar credenciales digitales.", 
          "Falta de claridad en las jerarquías organizacionales.", 
          "No había un sistema unificado para gestionar múltiples organizaciones.", 
          "Los requisitos de reporting no estaban definidos y eran inconsistentes." 
        ] 
      }, 

      product: { 
        title: "PROBLEMA DE PRODUCTO", 
        items: [ 
          "El sistema inicialmente se construyó replicando funcionalidades de competidores.", 
          "Alta complejidad debido a flujos de trabajo interconectados.", 
          "Falta de claridad entre la lógica a nivel de plataforma y a nivel de organización.", 
          "La estructura de roles y permisos de los usuarios no estaba definida." 
        ] 
      }, 

      role: { 
        title: "MI ENFOQUE", 
        items: [ 
          "Descubrimiento de producto", 
          "Arquitectura del sistema", 
          "Roles y permiso", 
          "Arquitectura de información", 
          "Flujos y casos límite" 
        ] 
      } 
    },

    contribution: { 
      eyebrow: "MI CONTRIBUCIÓN", 
      title: "Del descubrimiento del producto a la implementación.", 
      items: [ 
        "Lideré el descubrimiento del producto y el análisis de requisitos con stakeholders de negocio.", 
        "Definí RBAC, la arquitectura multi-tenant y la lógica del ciclo de vida de las credenciales.", 
        "Diseñé flujos de usuario, arquitectura de información y especificaciones funcionales.", 
        "Co-diseñé el lanzamiento inicial del producto y revisé las implementaciones de UI posteriores.", 
        "Colaboré con ingeniería y QA para validar flujos, casos límite y consistencia de la implementación." 
      ] 
    },

    understandingSystem: {
      title: "Comprendiendo el sistema",
      description:
        "La plataforma fue diseñada en torno a dos sistemas complementarios: la gobernanza de la plataforma y la gestión de organizaciones. Los permisos basados en roles determinaban cómo los usuarios interactuaban con cada capa."
    },

    multiTenantArchitecture: {
      title: "Arquitectura Multi-tenant"
    },

    roleHierarchy: {
      title: "Jerarquía de roles (RBAC)",
    
      roles: [
        {
          role: "Administrador Global",
          platform: "✔️",
          organization: "✔️",
          credential: "—",
          reports: "Toda la plataforma",
          experience: "—"
        },
        {
          role: "Administrador Multi-Organización",
          platform: "✔️",
          organization: "✔️",
          credential: "—",
          reports: "Multi-organización",
          experience: "—"
        },
        {
          role: "Administrador de Organización",
          platform: "—",
          organization: "✔️",
          credential: "✔️",
          reports: "Organización",
          experience: "—"
        },
        {
          role: "Administrador Secundario",
          platform: "—",
          organization: "Limitado",
          credential: "✔️",
          reports: "Limitado",
          experience: "—"
        },
        {
          role: "Acreditado",
          platform: "—",
          organization: "—",
          credential: "—",
          reports: "Actividad propia",
          experience: "✔️"
        },
        {
          role: "Invitado",
          platform: "—",
          organization: "—",
          credential: "—",
          reports: "—",
          experience: "Ver credenciales compartidas"
        }
      ],
    
      insight: {
        title: "Convertir las reglas de negocio en un modelo de acceso escalable.",
        description:
          "Traduje reglas de negocio fragmentadas en un modelo claro de roles y permisos, separando la gobernanza de la plataforma de las operaciones de las organizaciones y las experiencias de usuario. Esto proporcionó una base consistente para definir flujos, permisos y futuros roles."
      }
    },

    credentialLifecycle: {
      title: "Ciclo de vida de las credenciales",
      alt: "Flujo del ciclo de vida de las credenciales mostrando las principales etapas e interacciones del proceso de acreditación."
    },

    informationArchitecture: {
      title: "Arquitectura de Información (Alto Nivel)",
    
      description:
        "La plataforma presenta una estructura de navegación diferente según el contexto organizacional del usuario, asegurando que cada rol acceda únicamente a los módulos relevantes para sus responsabilidades.",
    
      principleTitle: "Principio de Diseño",
    
      principleHeadline: "Navegación consciente del contexto.",
    
      principleDescription:
        "En lugar de mostrar todos los módulos a cada usuario, la plataforma adapta su arquitectura de información según el alcance organizacional y las responsabilidades. Esto redujo la complejidad de navegación y permitió mantener una arquitectura multi-tenant escalable."
    },

    reportingComplexity: {
      title: "Complejidad de Reportes",
    
      columns: {
        report: "Reporte / Insight",
        globalPlatform: "Plataforma Global",
        holding: "Holding (Multi-org)",
        organization: "Organización",
        accredited: "Acreditado"
      },
    
      rows: [
        {
          name: "Resumen Organizacional",
          values: ["✔️", "Organizaciones Asignadas", "➖", "➖"]
        },
        {
          name: "Estado del Plan y Suscripción",
          values: ["✔️", "✔️", "Plan Actual", "➖"]
        },
        {
          name: "Consumo del Plan",
          values: ["✔️", "✔️", "Uso Propio", "➖"]
        },
        {
          name: "Miembros de la Organización",
          values: ["✔️", "✔️", "✔️", "➖"]
        },
        {
          name: "Inventario de Credenciales",
          values: ["✔️", "Base de Datos Compartida", "✔️", "Credenciales Propias"]
        },
        {
          name: "Asignaciones de Credenciales",
          values: ["✔️", "✔️", "✔️", "Asignaciones Propias"]
        },
        {
          name: "Estado de las Asignaciones",
          values: ["✔️", "✔️", "✔️", "Estado Propio"]
        },
        {
          name: "Analítica de Compartición de Credenciales",
          values: ["✔️", "✔️", "✔️", "Actividad Personal"]
        },
        {
          name: "Actividad de Administradores",
          values: ["✔️", "✔️", "✔️", "➖"]
        },
        {
          name: "Registros de Actividad del Sistema",
          values: ["✔️", "✔️", "Registros de la Organización", "➖"]
        },
        {
          name: "Exportación de Reportes",
          values: ["✔️", "✔️", "✔️", "➖"]
        }
      ],

      insight:
        "El sistema de reportes fue diseñado utilizando visibilidad progresiva en lugar de crear módulos de reportes diferentes para cada rol. Todos los usuarios accedían al mismo ecosistema de reportes, pero los datos disponibles se filtraban según su nivel de responsabilidad, reduciendo la complejidad de la interfaz y manteniendo una experiencia de reportes consistente en toda la plataforma."
    },

    constraints: {
      title: "Restricciones y Decisiones de Diseño",
    
      items: [
        {
          number: "01",
          title: "Alinear las Funcionalidades con la Arquitectura del Negocio",
    
          decisionLabel: "Decisión",
          decision:
            "Diseñé los flujos alrededor del modelo de negocio del cliente en lugar de replicar las funcionalidades de la competencia.",
    
          tradeoffLabel: "Trade-off",
          tradeoff:
            "Mayor trabajo de discovery inicial, pero un producto capaz de evolucionar más allá de la paridad funcional."
        },
    
        {
          number: "02",
          title: "Separar Gobernanza de Operaciones",
    
          decisionLabel: "Decisión",
          decision:
            "Separé la gobernanza de la plataforma, la gestión de organizaciones y la propiedad de credenciales en capas independientes.",
    
          tradeoffLabel: "Trade-off",
          tradeoff:
            "Mayor complejidad de implementación a cambio de escalabilidad a largo plazo."
        },
    
        {
          number: "03",
          title: "Diseñar en Función de las Responsabilidades",
    
          decisionLabel: "Decisión",
          decision:
            "Agrupé los permisos por responsabilidades en lugar de acciones individuales para simplificar la gestión de acceso.",
    
          tradeoffLabel: "Trade-off",
          tradeoff:
            "Mayor análisis inicial y una reducción significativa del mantenimiento a medida que la plataforma crecía."
        },
    
        {
          number: "04",
          title: "Optimizar para Operaciones Masivas",
    
          decisionLabel: "Decisión",
          decision:
            "Priorizamos la emisión masiva de credenciales con validación mediante CSV sobre los flujos individuales.",
    
          tradeoffLabel: "Trade-off",
          tradeoff:
            "Un flujo más complejo que mejoró significativamente la eficiencia administrativa."
        },
    
        {
          number: "05",
          title: "Diseñar los Reportes para el Crecimiento",
    
          decisionLabel: "Decisión",
          decision:
            "Estructuré los reportes según niveles de visibilidad en lugar de dashboards fijos.",
    
          tradeoffLabel: "Trade-off",
          tradeoff:
            "Una arquitectura de reportes más flexible frente a requisitos de negocio en evolución."
        }
      ]
    },

    quote:
      "El buen diseño de producto consiste diseñar arquitecturas que mantengan la complejidad bajo control a medida que los productos evolucionan.",
    
    impact: {
      title: "Impacto",
    
      impact: [
        "Adoptado exitosamente por múltiples organizaciones en Colombia.",
        "Estableció una arquitectura multi-tenant escalable para diferentes modelos organizacionales.",
        "Estandarizó la emisión de credenciales mediante flujos reutilizables y permisos basados en roles.",
        "Mejoró la eficiencia administrativa mediante operaciones masivas y funcionalidades de autoservicio."
      ],
    
      highlights: [
        "6 Roles",
        "2 Capas del Sistema",
        "5 Estados de Credencial",
        "Arquitectura Multi-tenant",
        "Producto Enterprise en Producción"
      ],
    
      reflection: {
        title: "Reflexión",
    
        items: [
          "Este proyecto reforzó mi convicción de que los productos enterprise rara vez están limitados por la complejidad de la interfaz; están limitados por la complejidad del negocio.",
          "Traducir reglas de negocio en evolución a una arquitectura escalable requirió equilibrar flexibilidad, gobernanza y usabilidad. Fortaleció mi capacidad para transformar requisitos de negocio ambiguos en arquitecturas de producto escalables que equilibran gobernanza, usabilidad y crecimiento a largo plazo."
        ]
      }
    },
  },

  credentialPlatformV2: {
    hero: {
      tag: "CASO DE ESTUDIO",
      title: "De una idea a una plataforma de credenciales escalable",
      description: [
        "Un concepto de negocio se convirtió en una plataforma de credenciales multi-tenant en producción que da soporte a cuatro organizaciones en Colombia y España.",
        "Definí la estructura del producto, el modelo organizacional, los roles y permisos, la arquitectura de información, los flujos de trabajo principales y los patrones de interacción — trabajando de cerca con producto, ingeniería y QA mientras la plataforma evolucionaba."
      ],
      role: "Product Designer",
      timeline: "2 años",
      team: "Producto · UX/UI · Ingeniería · QA · Stakeholders",
      focus: "Estrategia de producto · Arquitectura de producto · UX/UI · AI · Roles y permisos · Flujos de trabajo · Casos límite",
      ndaText:
        "Los detalles han sido generalizados para proteger la confidencialidad del cliente."
    },

    productMap: {
      id: "ASSET 01",
      label: "Mapa del producto",
      platformLabel: "PLATAFORMA DE CREDENCIALES",
      levels: [
        { number: "01", title: "Plataforma", chips: ["Organizaciones", "Roles", "Reportes"] },
        { number: "02", title: "Organización", chips: ["Miembros", "Credenciales", "Ajustes"] }
      ],
      lifecycleTitle: "Ciclo de vida de la credencial",
      lifecycleSteps: ["Crear", "Asignar", "Emitir", "Reportar"],
      footer: "Multi-tenant · Basado en roles · Autoservicio"
    },

    roleMatrix: {
      id: "ASSET 03",
      label: "Modelo de roles y permisos",
      heading: "¿QUIÉN ES RESPONSABLE DE QUÉ?",
      roles: [
        { title: "ADMIN PLATAFORMA", items: ["Organizaciones", "Miembros", "Credenciales", "Reportes"] },
        { title: "ADMIN ORG", items: ["Organizaciones", "Miembros", "Credenciales", "Reportes"] },
        { title: "ADMIN SECUNDARIO", items: ["Miembros", "Credenciales", "Reportes limitados"] },
        { title: "ACREDITADO", items: ["Sus credenciales", "Su información"] }
      ],
      hierarchyLabel: "LA JERARQUÍA",
      hierarchyRoot: "PLATAFORMA",
      hierarchyBranches: [
        { name: "Organización A", children: ["Admin Org", "Admin Secundario", "Acreditado"] },
        { name: "Organización B", children: ["Admin Org", "Acreditado"] }
      ],
      footer: "Los permisos seguían a la responsabilidad organizacional, no a las acciones individuales."
    },

    challenge: {
      eyebrow: "EL DESAFÍO",
      title: "Había un modelo de negocio, pero todavía no había producto.",
      paragraphs: [
        "Los fundadores sabían qué querían vender y tenían una referencia del tipo de plataforma que querían construir.",
        "Lo que faltaba era el sistema detrás de ella."
      ],
      listTitle: "Necesitaba definir:",
      items: [
        "quiénes eran los distintos actores",
        "cómo se relacionaban las organizaciones entre sí",
        "qué podía ver y gestionar cada rol",
        "cómo se movían las credenciales a lo largo de su ciclo de vida",
        "cómo podían coexistir múltiples organizaciones",
        "cómo podía evolucionar el producto a medida que cambiaba el negocio"
      ],
      closing:
        "El desafío no era reproducir el producto de referencia. Era convertir una idea en una arquitectura de producto que realmente funcionara.",
      asset: { id: "ASSET 02", label: "Diagrama de arquitectura de producto" }
    },

    businessModel: {
      number: "01",
      title: "Convertir el modelo de negocio en producto",
      paragraphs: [
        "Empecé mapeando las reglas de negocio, las relaciones entre organizaciones, las responsabilidades y los flujos operativos con los stakeholders.",
        "En lugar de reproducir el producto de referencia, traduje el modelo de negocio a una estructura que pudiera sostener la plataforma que realmente estábamos construyendo."
      ],
      layersTitle: "Surgieron dos capas",
      layers: [
        {
          title: "Gobernanza de la plataforma",
          description: "Gestión de la plataforma y sus organizaciones."
        },
        {
          title: "Gestión de la organización",
          description:
            "Gestión de personas, credenciales y operaciones del día a día dentro de cada organización."
        }
      ],
      layersNote:
        "Esta separación se convirtió en la base del modelo multi-tenant de la plataforma.",
      roleTitle: "El modelo de roles evolucionó",
      roleIntro: "El modelo inicial era simple:",
      roleFrom: ["Plataforma", "Organización", "Administrador", "Operador"],
      roleParagraphs: [
        "A medida que el producto se hizo real, esa estructura ya no alcanzaba.",
        "La reformulé en una jerarquía con organizaciones padre, sub-organizaciones y distintos niveles de responsabilidad."
      ],
      roleGoal:
        "El objetivo no era crear más roles. Era hacer explícita la responsabilidad.",
      asset: { id: "ASSET 03", label: "Modelo de roles y permisos" }
    },

    evolution: {
      number: "02",
      title: "El primer lanzamiento reveló el producto real",
      paragraphs: [
        "La primera organización cambió el proyecto.",
        "Hasta entonces, muchas decisiones se basaban en requisitos y supuestos. Cuando organizaciones reales empezaron a usar la plataforma, esos supuestos se pusieron a prueba contra flujos de trabajo reales."
      ],
      gapsTitle: "Los nuevos clientes expusieron vacíos en torno a:",
      gaps: [
        "autoservicio",
        "permisos",
        "flujos de asignación",
        "reportes",
        "estructura organizacional"
      ],
      closing: "El producto tenía que evolucionar con ellos.",
      shift:
        "Esto cambió mi rol: de definir el producto inicial a dar forma continua al sistema a medida que surgían casos de uso reales.",
      timeline: [
        "Idea de negocio",
        "Producto inicial",
        "Primera organización",
        "Flujos de trabajo reales",
        "Nuevos casos límite",
        "Evolución del producto",
        "4 organizaciones"
      ],
      asset: { id: "ASSET 04", label: "Evolución del producto" }
    },

    selfService: {
      number: "03",
      title: "Reemplazar el trabajo operativo por autoservicio",
      paragraphs: [
        "Al inicio, los clientes dependían del equipo interno para los cambios operativos.",
        "Necesitaban que el equipo:"
      ],
      items: [
        "creara organizaciones",
        "agregara miembros",
        "cambiara roles",
        "modificara créditos del plan",
        "gestionara el consumo"
      ],
      transition: ["Eso funcionaba a pequeña escala.", "No iba a escalar."],
      resultTitle: "Trasladé esas operaciones al producto.",
      resultText:
        "Los clientes podían crear organizaciones, agregar miembros y gestionar roles por sí mismos.",
      beforeTitle: "Antes",
      beforeFlow: ["Solicitud del cliente", "Equipo interno", "Cambio manual"],
      afterTitle: "Después",
      afterFlow: ["Cliente", "Configuración de la organización", "Cambio completado"],
      contributionTitle: "Contribución de diseño",
      contribution: [
        "Arquitectura de autoservicio",
        "Lógica de permisos",
        "Flujo de interfaz",
        "Casos límite",
        "Estados de validación"
      ],
      mgmtUi: {
        id: "ASSET 06",
        label: "UI de gestión de organización y miembros",
        title: "Organizaciones",
        newMember: "+ Nuevo miembro",
        orgName: "Organización Acme",
        orgMeta: "48 miembros · 3 admins",
        membersTitle: "Miembros",
        searchPlaceholder: "Buscar miembros…",
        filterLabel: "Filtrar ▾",
        columns: ["Nombre", "Rol", "Estado"],
        rows: [
          { name: "Ana Torres", role: "Admin Org", status: "Activo" },
          { name: "Luis Pérez", role: "Admin Secundario", status: "Activo" },
          { name: "Marta Ruiz", role: "Acreditada", status: "Pendiente" },
          { name: "Carlos Díaz", role: "Acreditado", status: "Activo" }
        ],
        detailLabel: "MIEMBRO",
        detailName: "Marta Ruiz",
        roleLabel: "Rol",
        roleValue: "Acreditada ▾",
        orgLabel: "Organización",
        orgValue: "Organización Acme",
        credsLabel: "Credenciales",
        credsValue: "12 emitidas · 2 pendientes",
        cancel: "Cancelar",
        save: "Guardar",
        callouts: [
          { number: "01", title: "Visibilidad del rol", text: "Los usuarios solo ven acciones que su responsabilidad permite." },
          { number: "02", title: "Autoservicio", text: "Las organizaciones gestionan miembros sin intervención interna." },
          { number: "03", title: "Validación", text: "Los cambios de rol respetan las restricciones organizacionales." }
        ]
      }
    },

    workflow: {
      number: "04",
      title: "Convertir la emisión de credenciales en un flujo escalable",
      paragraphs: [
        "Un curso típico podía tener entre 20 y 50 usuarios acreditados.",
        "El flujo original requería ingresar la información a través de un formulario extenso, una persona a la vez.",
        "Eso significaba que el esfuerzo crecía directamente con el número de destinatarios."
      ],
      approachTitle: "Cambié la unidad de trabajo.",
      approachText: "En lugar de crear cada credencial desde cero:",
      approachSteps: ["Definir una vez", "Reutilizar", "Asignar en bloque"],
      templateTitle: "Plantillas de credencial reutilizables",
      templateText:
        "Las organizaciones podían crear una credencial una vez y reutilizarla o duplicarla.",
      bulkTitle: "Asignación masiva",
      bulkText:
        "Las organizaciones podían preparar la información de los destinatarios y subirla mediante CSV. Con los datos listos, una asignación múltiple podía tomar aproximadamente 2 minutos.",
      stat: { value: "~2 min", label: "para una asignación masiva" },
      prototype: {
        id: "ASSET 07 – 08",
        label: "Prototipo interactivo de asignación en lote",
        title: "Emisión de credenciales — de uno en uno a lote",
        beforeTitle: "ANTES",
        beforeItems: [
          "Destinatario 1 → Formulario",
          "Destinatario 2 → Formulario",
          "Destinatario 3 → Formulario",
          "…",
          "Destinatario 50 → Formulario"
        ],
        afterTitle: "DESPUÉS",
        afterSteps: ["Plantilla", "CSV", "Validación", "Revisión", "Asignar"],
        stepPrefix: "Paso",
        back: "Atrás",
        next: "Siguiente",
        selected: "Seleccionada",
        dropTitle: "Arrastra tu CSV aquí",
        csvBadge: "CSV",
        steps: [
          {
            number: "01",
            name: "Plantilla de credencial",
            prompt: "Selecciona una credencial",
            templates: [
              "Finalización de curso — Nivel 1",
              "Acreditación — BLS",
              "Técnico certificado"
            ]
          },
          {
            number: "02",
            name: "Subir CSV",
            drop: "Arrastra tu CSV aquí",
            or: "o",
            choose: "Elegir archivo"
          },
          {
            number: "03",
            name: "Validación",
            found: "48",
            foundLabel: "destinatarios encontrados",
            valid: "46",
            validLabel: "válidos",
            attention: "2",
            attentionLabel: "requieren atención"
          },
          {
            number: "04",
            name: "Revisión",
            colName: "Destinatario",
            colStatus: "Estado",
            validLabel: "Válido",
            attentionLabel: "Requiere atención",
            rows: [
              { name: "Ana Torres" },
              { name: "Carlos Díaz", attention: true },
              { name: "Elena Gómez" },
              { name: "Luis Pérez" },
              { name: "Marta Ruiz", attention: true },
              { name: "Sergio Blanco" }
            ],
            more: "+ 42 más"
          },
          {
            number: "05",
            name: "Asignar",
            ready: "Listo para asignar",
            stats: [
              { value: "48", label: "destinatarios" },
              { value: "1", label: "credencial" },
              { value: "~2 min", label: "tiempo est." }
            ],
            button: "Asignar credenciales"
          }
        ],
        successTitle: "48 credenciales asignadas",
        successDone: "Completado",
        startOver: "↻"
      }
    },

    accreditedUX: {
      number: "05",
      title: "Hacer la experiencia más clara para los usuarios acreditados",
      paragraphs: [
        "Escalar el lado administrativo reveló otro problema: algunos flujos eran técnicamente correctos pero difíciles de entender.",
        "Los usuarios tenían dificultades con:"
      ],
      issues: ["etiquetas poco familiares", "registro largo", "información solicitada demasiado pronto"],
      mentalTitle:
        "Rediseñé la experiencia de entrada en torno a un modelo mental más simple:",
      mentalBold: "Entra al producto → Completa tu perfil",
      mentalText:
        "En lugar de exigir todo durante la creación de la cuenta, los usuarios podían acceder a su cuenta mediante un enlace dedicado y completar o editar su perfil después.",
      beforeTitle: "Antes",
      beforeFlow: ["Invitación", "Registro largo", "Cuenta"],
      afterTitle: "Después",
      afterFlow: ["Invitación", "Cuenta", "Completa el perfil"],
      annotations: [
        "Carga cognitiva inicial reducida",
        "Información no esencial diferida",
        "Separación más clara de tareas"
      ],
      asset: { id: "ASSET 09", label: "UX antes / después" }
    },

    permissions: {
      number: "06",
      title: "Diseñar permisos en torno a la responsabilidad",
      paragraphs: [
        "A medida que las organizaciones ganaron autonomía, los permisos se convirtieron en un problema central del producto."
      ],
      wrongQIntro: "La pregunta no era:",
      wrongQuestion: "¿Qué puede hacer clic este usuario?",
      rightQIntro: "Era:",
      rightQuestion:
        "¿Qué información y acciones debería gestionar esta persona?",
      modelText:
        "Estructuré los permisos en torno a la responsabilidad organizacional en lugar de tratar cada acción como un permiso aislado.",
      modelTitle: "El modelo contemplaba:",
      model: [
        "gobernanza de la plataforma",
        "organizaciones padre",
        "sub-organizaciones",
        "administradores primarios y secundarios",
        "gestión de credenciales",
        "reportes",
        "usuarios acreditados"
      ],
      navTitle: "Navegación consciente del contexto",
      navParagraphs: [
        "El mismo principio dio forma a la arquitectura de información.",
        "Los usuarios no necesitaban todos los módulos disponibles en la plataforma."
      ],
      navFormulaText: "La navegación se adaptaba a:",
      navFormula: "Rol + organización + responsabilidad",
      navExampleTitle: "ADMIN DE ORG",
      navExample: ["Dashboard", "Organizaciones", "Miembros", "Credenciales", "Reportes"],
      navCaptionBefore: "Navegación del admin",
      navCaptionAfter: "Navegación del acreditado",
      asset: { id: "ASSET 10", label: "AI + navegación" }
    },

    reporting: {
      number: "07",
      title: "Hacer que los reportes reflejen la organización",
      paragraphs: [
        "El problema no era simplemente la falta de reportes.",
        "El negocio aún no había definido del todo qué necesitaba entender cada nivel organizacional. Eso generaba información duplicada y reportes que no respondían a las preguntas correctas."
      ],
      approachTitle:
        "Reestructuré los reportes en torno a niveles de visibilidad en lugar de crear experiencias de reporte completamente separadas para cada rol.",
      approachText:
        "El mismo ecosistema de reportes podía servir a distintos usuarios mientras la información se filtraba según la responsabilidad organizacional.",
      modelTitle: "Un sistema de reportes",
      modelSubtitle: "Distinta visibilidad",
      screens: [
        "Reporte a nivel de plataforma",
        "Reporte a nivel de organización",
        "Vista filtrada"
      ],
      annotation: "La misma base de reportes, distinta visibilidad.",
      asset: { id: "ASSET 11", label: "Modelo de reportes + UI" }
    },

    expansion: {
      number: "08",
      title: "Expandir el producto más allá de su mercado original",
      paragraphs: [
        "A medida que se sumaron más organizaciones, el producto llegó a sostener cuatro organizaciones en Colombia y España.",
        "La oportunidad española introdujo nuevas consideraciones:"
      ],
      considerations: [
        "GDPR",
        "moneda",
        "geolocalización",
        "sistemas educativos",
        "estructuras organizacionales",
        "requisitos de white-label"
      ],
      noteTitle: "No eran simplemente pantallas adicionales.",
      noteText: "Cuestionaban supuestos incrustados en el producto original.",
      conclusion:
        "La arquitectura tuvo que evolucionar de sostener un modelo de negocio y mercado específicos a sostener distintos clientes y contextos.",
      diagramTitle: "SUPUESTOS INICIALES",
      diagram: [
        "Colombia",
        "Clientes reales",
        "Nuevo mercado",
        "España",
        "Nuevos requisitos",
        "Arquitectura de producto adaptable"
      ],
      asset: { id: "ASSET 12", label: "Diagrama de expansión / adaptación" }
    },

    whatChanged: {
      title: "Qué cambió",
      columns: ["Desde", "Hacia"],
      rows: [
        ["Idea de negocio", "Estrategia + arquitectura de producto"],
        ["Producto de referencia", "Producto específico del negocio"],
        ["Dependencia operativa interna", "Autoservicio del cliente"],
        ["Emisión uno a uno", "Asignación masiva"],
        ["Credenciales únicas", "Plantillas reutilizables"],
        ["Modelo de roles plano", "Modelo organizacional jerárquico"],
        ["Reportes fijos", "Reportes basados en visibilidad"],
        ["Supuestos de Colombia", "Colombia + España"],
        ["Lanzamiento inicial", "4 organizaciones"]
      ],
      metrics: [
        { value: "2 años", label: "Evolución del producto" },
        { value: "4", label: "Organizaciones · Colombia + España" },
        { value: "20–50", label: "Usuarios en una asignación masiva típica" },
        { value: "~2 min", label: "Flujo de asignación masiva" }
      ]
    },

    outcome: {
      title: "Resultado",
      paragraphs: [
        "El producto pasó de una idea de negocio inicial a una plataforma de credenciales multi-tenant en producción.",
        "Las organizaciones podían gestionar su propia estructura y miembros. Los equipos de credenciales podían crear plantillas reutilizables y asignar credenciales masivamente. Los roles y permisos evolucionaron con estructuras organizacionales cada vez más complejas. Los reportes se alinearon con la visibilidad organizacional.",
        "La arquitectura ya no estaba atada al producto de referencia original."
      ],
      closing: "Se había convertido en un sistema capaz de adaptarse.",
      montageTitle: "Un sistema diseñado para evolucionar.",
      montage: [
        "Dashboard",
        "Gestión de la organización",
        "Constructor de credenciales",
        "Asignación masiva",
        "Reportes",
        "Perfil de usuario"
      ],
      asset: { id: "ASSET 14", label: "Montaje del producto final" }
    },

    lessons: {
      title: "Qué aprendí",
      heading: "Diseñar el sistema, no solo la pantalla",
      paragraphs: [
        "La parte más difícil no fue diseñar pantallas individuales.",
        "Fue tomar decisiones de producto mientras el negocio mismo todavía se estaba formando.",
        "Los requisitos eran incompletos. Las estructuras organizacionales evolucionaban. Los clientes reales cuestionaban los supuestos.",
        "Mi rol era crear la estructura suficiente para sostener el negocio hoy sin hacer innecesariamente caros los cambios de mañana."
      ],
      quote:
        "El buen diseño de producto no solo resuelve el flujo de trabajo de hoy. Crea la estructura suficiente para que el producto evolucione sin romperse."
    }
  },

  b2bCommercePlatform: {
    hero: {
      tag: "COMERCIO B2B · SUMINISTROS CIENTÍFICOS",
      title: "De compras asistidas por ventas a autoservicio.",
      description:
        "Transformando procesos de compra fragmentados en una experiencia digital centralizada para clientes empresariales en España y Portugal.",
      role: "Product Designer",
      timeline: "2 años",
      team:
        "Product Designer, UX/UI Designer, Desarrolladores, QA, PM, Equipo de Desarrollo del Cliente, Stakeholders del Negocio",
      ndaText:
        "Debido a un acuerdo de confidencialidad (NDA), algunos detalles del negocio y elementos visuales del producto han sido generalizados, preservando el proceso de diseño, los desafíos y los resultados.",
    },

    challenge: {
      title: "El desafío",

      before: {
        label: "Antes",
        image: `${import.meta.env.BASE_URL}images/case-studies/b2b-commerce-platform/before.png`,
        items: [
          "Teléfono",
          "Email",
          "Catálogos impresos",
          "Cotizaciones",
          "Seguimiento manual",
          "Departamentos fragmentados"
        ]
      },

      after: {
        label: "Después",
        image: `${import.meta.env.BASE_URL}images/case-studies/b2b-commerce-platform/after.png`,
        items: [
          "Autoservicio",
          "Búsqueda",
          "Cotizaciones",
          "Pedidos",
          "Seguimiento",
          "Historial de compras"
        ]
      },

      goal: {
        label: "Objetivo",
        description:
          "Transformar operaciones comerciales fragmentadas en una experiencia unificada de autoservicio donde los clientes empresariales pudieran buscar productos, solicitar cotizaciones, monitorear pedidos y gestionar sus actividades de compra de forma independiente desde una sola plataforma."
      },
    },

    contribution: {
      eyebrow: "Mi contribución",

      title: "Diseñando el producto desde adentro hacia afuera",

      description:
        "A lo largo del proyecto, lideré el proceso de descubrimiento y análisis de requerimientos durante las distintas versiones, traduciendo las necesidades del negocio y la complejidad operativa en requerimientos de producto listos para implementación.",

      items: [
        "Facilitación de workshops de descubrimiento con diferentes áreas y stakeholders del negocio",

        "Liderazgo del análisis de requerimientos y traducción de las necesidades del negocio en requerimientos de producto",

        "Definición de flujos de usuario, casos de uso, arquitectura de información, navegación y lógica funcional",

        "Diseño del comportamiento de búsqueda y de interacciones clave del producto",

        "Co-diseño de interfaces clave durante la primera versión y establecimiento de patrones que guiaron las versiones posteriores",

        "Elaboración de especificaciones funcionales y colaboración cercana con ingeniería durante la implementación",

        "Actuar como referencia de diseño durante la implementación, validando la lógica de interacción, casos límite, navegación y consistencia del diseño entre ingeniería y QA",

        "Apoyo a QA y revisión de diseños posteriores para asegurar su alineación con las reglas de negocio, flujos de trabajo, restricciones técnicas y evolución del producto"
      ],

      note:
        "Aunque las integraciones técnicas con el ERP fueron implementadas por el equipo de ingeniería del cliente, trabajé estrechamente con stakeholders y desarrolladores para definir cómo los datos empresariales debían traducirse en experiencias de usuario significativas."
    },

    businessDiscovery: {
      title: "Descubrimiento del negocio",
      departments: [
        "Ventas",
        "Marketing",
        "Compras",
        "Contabilidad",
        "Desarrollo"
      ],
      workshops: "Talleres de descubrimiento",
      sharedUnderstanding: "Comprensión compartida",
      note: "Los diferentes departamentos describían el mismo proceso de manera distinta."
    },

    constraints: {
      title: "Restricciones",

      items: [
        {
          number: "01",
          title: "Procesos de negocio heredados",

          decisionLabel: "Decisión",
          decision:
            "Usamos la experiencia del competidor como referencia, adaptándola a las reglas de negocio del cliente y refinando o automatizando los procesos existentes cuando era posible.",

          tradeoffLabel: "Trade-off",
          tradeoff:
            "Más trabajo de descubrimiento y análisis de procesos al inicio, pero una experiencia familiar que seguía reflejando cómo operaba realmente el negocio."
        },

        {
          number: "02",
          title: "Silos organizacionales",

          decisionLabel: "Decisión",
          decision:
            "Mapeamos cómo los distintos departamentos entendían e interactuaban con los mismos procesos comerciales para identificar brechas, dependencias y supuestos en conflicto.",

          tradeoffLabel: "Trade-off",
          tradeoff:
            "Más trabajo de alineación al inicio, pero menos supuestos trasladados al producto."
        },

        {
          number: "03",
          title: "Datos impulsados por el ERP",

          decisionLabel: "Decisión",
          decision:
            "Diseñamos la plataforma tomando el ERP como fuente de verdad, permitiendo que la estructura de datos evolucionara sin tener que modificar repetidamente la experiencia de cara al usuario.",

          tradeoffLabel: "Trade-off",
          tradeoff:
            "Mayor dependencia del ERP y más trabajo arquitectónico inicial, pero una experiencia de producto más consistente a medida que evolucionaban los datos del negocio."
        },

        {
          number: "04",
          title: "Información de producto en constante evolución",

          decisionLabel: "Decisión",
          decision:
            "Diseñamos una jerarquía visual compacta para las categorías de productos, equilibrando imágenes, densidad y facilidad de escaneo dentro de un catálogo amplio y en constante cambio.",

          tradeoffLabel: "Trade-off",
          tradeoff:
            "Menos espacio para que cada categoría destacara visualmente, pero una forma más rápida de escanear y navegar una amplia variedad de productos."
        },

        {
          number: "05",
          title: "Reglas de compra complejas",

          decisionLabel: "Decisión",
          decision:
            "Tradujimos precios específicos por cliente, cuentas, cotizaciones, inventario y condiciones de compra en flujos que pudieran entenderse y gestionarse desde la plataforma.",

          tradeoffLabel: "Trade-off",
          tradeoff:
            "Más lógica condicional, pero una experiencia de autoservicio más precisa para compradores profesionales."
        },

        {
          number: "06",
          title: "Implementación incremental en múltiples versiones",

          decisionLabel: "Decisión",
          decision:
            "Diseñamos fundamentos que pudieran evolucionar a través de múltiples versiones, en lugar de tratar cada versión como un producto independiente.",

          tradeoffLabel: "Trade-off",
          tradeoff:
            "Algunas mejoras tuvieron que implementarse por etapas, pero la experiencia pudo evolucionar sin reconstruir constantemente sus fundamentos."
        }
      ]
    },

    impact: {
      title: "Impacto",

      impactSections: [
        {
          title: "Autoservicio del cliente",
          items: [
            "Cotizaciones iniciadas a través de la plataforma",
            "Adopción del seguimiento de pedidos",
            "Uso del historial de compras y la recompra",
            "Adopción de listas de compras"
          ]
        },

        {
          title: "Eficiencia operativa",
          items: [
            "Consultas sobre disponibilidad de productos",
            "Consultas sobre el estado de los pedidos",
            "Consultas sobre el estado de las cotizaciones",
            "Compras basadas en catálogos desactualizados"
          ]
        },

        {
          title: "Descubrimiento de productos",
          items: [
            "Tasa de éxito en búsquedas",
            "Interacción con las páginas de producto",
            "Uso de refinamientos de búsqueda",
            "Identificación exitosa de productos antes de solicitar una cotización"
          ]
        }
      ],

      reflection: {
        title: "Reflexión",

        items: [
          "La transformación digital comienza por comprender cómo opera un negocio, dónde se rompe la información y cómo diseñar sistemas que devuelvan claridad y autonomía.",

          "Este proyecto fortaleció mi capacidad para navegar la ambigüedad, facilitar conversaciones entre diferentes áreas y transformar flujos operativos complejos en experiencias digitales escalables.",

          "La lección más valiosa fue entender que el autoservicio no consiste simplemente en llevar las transacciones al entorno digital. Se trata de brindar a los clientes la información y visibilidad necesarias para tomar decisiones con confianza."
        ]
      }
    },
  },

};


export default es;