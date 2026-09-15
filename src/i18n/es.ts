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
          link: `${import.meta.env.BASE_URL}es/work/credential-platform-v2/`,
          image: `${import.meta.env.BASE_URL}images/case-studies/credential-platform-v2/asset-01.png`
        },


        {
          title: "De compras asistidas a autoservicio.",
          category: "B2B Commerce · Plataforma Empresarial",
          description:
            "Transformación de un proceso comercial tradicional en una experiencia de autoservicio para compradores profesionales.",
          tags: ["Product Discovery", "Complex UX", "Self-Service", "Business Systems"],
          link: `${import.meta.env.BASE_URL}es/work/b2b-commerce-platform/`,
          image: `${import.meta.env.BASE_URL}images/case-studies/b2b-commerce-platform/cover.png`
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

    roleMatrix: {
      id: "ASSET 03",
      label: "Modelo de roles y permisos",
      heading: "¿Quién es responsable de qué?",
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
      title: "Había un modelo de negocio, pero no había producto.",
      paragraphs: [
        "Los fundadores tenían una plataforma de referencia, pero necesitaban la arquitectura para hacerla funcionar."
      ],
      listTitle: "Tuve que definir:",
      items: [
        "quiénes eran los distintos actores",
        "cómo se relacionaban las organizaciones entre sí",
        "qué podía ver y gestionar cada rol",
        "cómo se movían las credenciales a lo largo de su ciclo de vida",
        "cómo podían coexistir múltiples organizaciones"
      ],
      closing:
        "El desafío no era copiar la referencia. Era convertir una idea en un producto que pudiera operar de verdad."
    },

    businessModel: {
      number: "01",
      title: "Convertir el modelo de negocio en producto",
      paragraphs: [
        "Mapeé las reglas de negocio, las relaciones entre organizaciones y los flujos operativos con los stakeholders."
      ],
      layersTitle: "Surgieron dos capas",
      layers: [
        {
          title: "Gobernanza de la plataforma",
          description: "Gestión de la plataforma y sus organizaciones."
        },
        {
          title: "Gestión de la organización",
          description: "Gestión de personas, credenciales y operaciones del día a día."
        }
      ],
      layersNote:
        "Esta separación fue la base del modelo multi-tenant de la plataforma.",
      roleTitle: "Evolución del modelo de roles",
      roleIntro: "Inicial:",
      roleFrom: ["Plataforma", "Organización", "Administrador", "Operador"],
      roleParagraphs: [
        "A medida que el producto crecía, esto no era suficiente.",
        "Lo reformulé para soportar organizaciones padre, sub-organizaciones y niveles de responsabilidad. El objetivo no eran más roles — era hacer explícita la responsabilidad."
      ],
      asset: { id: "ASSET 03", label: "Evolución de la jerarquía de roles" }
    },

    evolution: {
      number: "02",
      title: "Deja que los casos de uso reales den forma al producto",
      paragraphs: [
        "La primera organización lo cambió todo.",
        "Los supuestos se pusieron a prueba contra flujos de trabajo reales."
      ],
      gapsTitle: "Los nuevos clientes expusieron vacíos en torno a:",
      gaps: [
        "autoservicio",
        "permisos",
        "flujos de asignación",
        "reportes",
        "estructura organizacional"
      ],
      shift:
        "Mi rol pasó de definir el producto inicial a dar forma continua al sistema a medida que surgían casos de uso reales."
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
        "Un curso típico tenía entre 20 y 50 usuarios acreditados.",
        "El flujo original requería un formulario extenso, una persona a la vez.",
        "El esfuerzo escalaba con los destinatarios."
      ],
      approachTitle: "Cambié la unidad de trabajo.",
      approachSteps: ["Definir una vez", "Reutilizar", "Asignar en bloque"],
      templateTitle: "Plantillas de credencial reutilizables",
      templateText:
        "Crea una vez, reutiliza o duplica.",
      bulkTitle: "Asignación masiva",
      bulkText:
        "Prepara los datos de los destinatarios y súbelos mediante CSV. Una asignación masiva tomaba aproximadamente 2 minutos.",
      stat: { value: "~2 min", label: "para una asignación masiva" }
    },

    accreditedUX: {
      number: "05",
      title: "Hacer la experiencia más clara para los usuarios acreditados",
      paragraphs: [
        "Algunos flujos eran técnicamente correctos pero difíciles de entender.",
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
        "La navegación consciente del contexto se adaptaba al nivel de responsabilidad del usuario."
      ],
      navFormulaText: "La navegación sigue a:",
      navFormula: "Rol + organización + responsabilidad",
      navExampleTitle: "ADMIN DE ORG",
      navExample: ["Dashboard", "Organizaciones", "Miembros", "Credenciales", "Reportes"],
      navCaptionBefore: "Navegación del admin",
      navCaptionAfter: "Navegación del acreditado"
    },

    reporting: {
      number: "07",
      title: "Hacer que los reportes reflejen la organización",
      paragraphs: [
        "El problema no era la falta de reportes — era que el negocio no había definido qué necesitaba entender cada nivel organizacional. Eso generaba información duplicada."
      ],
      approachTitle: "Reestructuré los reportes en torno a niveles de visibilidad.",
      approachText:
        "Un sistema de reportes, distinta visibilidad.",
      modelTitle: "Un sistema de reportes",
      modelSubtitle: "Distinta visibilidad",
      screens: [
        "Reporte a nivel de plataforma",
        "Reporte a nivel de organización",
        "Vista filtrada"
      ],
      annotation: "La misma base de reportes, distinta visibilidad."
    },

    expansion: {
      number: "08",
      title: "Expandir más allá del mercado original",
      paragraphs: [
        "La plataforma creció para sostener cuatro organizaciones en Colombia y España.",
        "España introdujo nuevas consideraciones:"
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
        "La arquitectura evolucionó de sostener un modelo de negocio específico a sostener distintos clientes y contextos.",
      diagramTitle: "EXPANSIÓN DE MERCADO",
      diagram: [
        "Colombia",
        "Clientes reales",
        "Nuevo mercado",
        "España",
        "Nuevos requisitos",
        "Arquitectura de producto adaptable"
      ]
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
      montageTitle: "Pantallas",
      montage: [
        "Dashboard",
        "Gestión de la organización",
        "Constructor de credenciales",
        "Asignación masiva",
        "Reportes",
        "Perfil de usuario"
      ]
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

  b2bCommerceV2: {
    hero: {
      tag: "COMERCIO B2B · SUMINISTROS CIENTÍFICOS",
      title: "De compras asistidas por ventas a comercio B2B de autoservicio",
      description: [
        "Una empresa de suministros científicos tenía clientes, productos y procesos de venta establecidos, pero ninguna experiencia digital que los conectara.",
        "Los clientes compraban a través de los equipos de ventas, por teléfono y por catálogos impresos. Los departamentos operaban con reglas y procesos diferentes.",
      ],
      role: "Product Designer (end-to-end)",
      timeline: "2 años",
      team: "Ventas · Marketing · Compras · Contabilidad · Ingeniería",
      focus: "Estrategia de producto · Discovery · Comercio B2B · UX/UI · Búsqueda · Arquitectura de producto · Autoservicio",
      ndaText:
        "Debido a un acuerdo de confidencialidad (NDA), los detalles del negocio y los elementos visuales del producto han sido generalizados, preservando el proceso de diseño y las decisiones de diseño.",
    },

    challenge: {
      title: "El desafío",
      paragraphs: [
        "La consigna era construir una experiencia de comercio B2B similar a la de Fisher Scientific.",
      ],
      pivotLabel: "El desafío",
      pivot: "El desafío no era poner un catálogo en línea.",
      pivotAfter:
        "Era convertir una operación de compra compleja y fragmentada en una experiencia de autoservicio que los clientes pudieran usar de verdad.",
      summaryLabel: "Antes / Después",
      before: {
        label: "ANTES",
        sublabel: "Asistido por ventas",
        items: [
          "Teléfono",
          "Catálogos impresos",
          "Cotizaciones",
          "Seguimiento manual",
          "Departamentos fragmentados"
        ]
      },
      after: {
        label: "DESPUÉS",
        sublabel: "Autoservicio",
        items: [
          "Búsqueda",
          "Descubrimiento de productos",
          "Cotizaciones",
          "Pedidos",
          "Gestión de cuenta",
          "Seguimiento",
          "Soporte"
        ]
      }
    },

    productModel: {
      number: "01",
      title: "Convertir procesos de negocio fragmentados en un modelo de producto único",
      paragraphs: [
        "Antes de diseñar cualquier cosa, necesitaba entender cómo funcionaba el negocio en realidad.",
        "Ventas, marketing, compras, contabilidad y desarrollo tenían cada uno una perspectiva distinta del mismo proceso comercial. Facilité talleres de discovery y mapeé esas perspectivas en un modelo de producto compartido.",
      ],
      departmentsTitle: "Departamentos distintos. Vistas distintas del mismo proceso.",
      departments: [
        { name: "Ventas", note: "Relaciones con clientes · Procesos comerciales" },
        { name: "Marketing", note: "Productos · Promociones · Contenido" },
        { name: "Compras", note: "Disponibilidad · Adquisición" },
        { name: "Contabilidad", note: "Condiciones de cliente · Reglas comerciales" },
        { name: "Desarrollo", note: "Sistemas · Datos · Restricciones técnicas" }
      ],
      synthesisLabel: "Síntesis",
      outputsTitle: "Un modelo de producto compartido",
      outputsNote: "El resultado no era una pantalla. Era un entendimiento compartido que pudiera guiar las decisiones de producto entre los equipos.",
      outputs: [
        "Reglas de negocio",
        "Roles de usuario",
        "Lógica de producto",
        "Restricciones del sistema"
      ]
    },

    productDetail: {
      number: "02",
      title: "Diseñar una ficha de producto alrededor de las decisiones de compra",
      paragraphs: [
        "Este era el problema más difícil. No era un catálogo convencional.",
      ],
      variantsTitle: "Los productos podían tener:",
      variants: [
        "Sin variantes, varias variantes o familias de productos",
        "Compra basada en cotizaciones",
        "Restricciones de compra (requiere autorización)",
        "Manejo especial (materiales peligrosos, hielo seco)"
      ],
      variantsClosing:
        "Para algunos productos científicos, los clientes podían necesitar autorización para comprarlos. Otros requerían un manejo especial por tratarse de materiales peligrosos o hielo seco.",
      questionsTitle: "Entonces la ficha de producto debía responder:",
      questions: [
        "¿Qué es este producto?",
        "¿Puedo comprarlo?",
        "¿Qué versión necesito?",
        "¿Qué condiciones aplican?",
        "¿Necesito una cotización?"
      ],
      pathsTitle: "Una experiencia de producto, múltiples caminos de compra",
      paths: [
        "Compra directa",
        "Selección de variante",
        "Familia de productos",
        "Solicitar cotización",
        "Restricción de compra"
      ],
      closing:
        "El desafío era exponer la información correcta en el momento correcto sin convertir la página en un muro de reglas de negocio.",
      ui: {
        label: "Ficha de producto conceptual — anonimizada",
        imageLabel: "IMAGEN DEL PRODUCTO",
        brand: "SUMINISTROS CIENTÍFICOS",
        name: "Medio de cultivo celular X",
        sku: "SKU 4521-900ML",
        priceLabel: "Precio",
        priceValue: "A consulta",
        quoteLabel: "O",
        availability: "En stock · Envío en 48 h",
        variantLabel: "Elegir tamaño",
        variants: ["500 ml", "1 L", "2 L"],
        conditionLabel: "Condiciones de compra",
        condition: "Requiere autorización",
        conditionNote: "Material peligroso — compra restringida",
        handlingLabel: "Manejo especial",
        handling: "Envío con hielo seco",
        handlingNote: "Se empaqueta con hielo seco — entrega exprés",
        buyButton: "Agregar al carrito",
        quoteButton: "Solicitar cotización",
        infoLabel: "Elegible para pedido",
        quoteInfo: "El precio debe ser confirmado por ventas"
      },
      callouts: [
        { number: "01", title: "Configuración del producto", text: "Variantes / familias" },
        { number: "02", title: "Camino de compra", text: "Comprar vs. solicitar cotización" },
        { number: "03", title: "Elegibilidad", text: "Requisitos de autorización" },
        { number: "04", title: "Manejo especial", text: "Materiales peligrosos / hielo seco" }
      ]
    },

    searchEcosystem: {
      number: "03",
      title: "Hacer que un catálogo científico grande sea buscable",
      paragraphs: [
        "La búsqueda se convirtió en un método de navegación primario. Los compradores profesionales llegaban con consultas precisas — nombre del producto, marca, SKU — mientras que otros necesitaban explorar.",
        "Diseñé la búsqueda como un sistema de descubrimiento, no como un campo.",
      ],
      systemTitle: "La búsqueda no era un campo. Era un sistema de descubrimiento.",
      system: [
        "Autocompletado",
        "Sugerencias",
        "Búsquedas recientes",
        "Búsquedas populares",
        "Categorías",
        "Marcas",
        "Filtros",
        "Productos similares",
        "Promociones"
      ],
      flowTitle: "De la búsqueda a la decisión de producto",
      flow: ["Búsqueda", "Sugerencias", "Resultados", "Filtros", "Producto", "Decisión"],
      flowNote: "El objetivo era ayudar a los clientes a pasar de la intención al producto correcto sin exigirles que entendieran la estructura subyacente del catálogo.",
      ui: {
        label: "Ecosistema de búsqueda — conceptual",
        tabs: ["Entrada de búsqueda", "Resultados", "Descubrimiento de productos"],
        inStock: "En stock",
        onDemand: "Bajo demanda",
        inputPlaceholder: "Buscar productos, marcas, SKU…",
        recentTitle: "Búsquedas recientes",
        recent: ["Extracción de ADN", "Pipetas", "Suero"],
        popularTitle: "Búsquedas populares",
        popular: ["Cultivo celular", "Microplacas", "Buffers"],
        suggestedTitle: "Sugerido",
        categoriesLabel: "Categorías",
        categories: ["Biología molecular"],
        productsLabel: "Productos",
        products: ["Agarosa LE"],
        resultsTitle: "Resultados",
        filtersTitle: "Filtros",
        filters: ["Marca", "Categoría", "Disponibilidad"],
        activeFilter: "En stock",
        resultItems: [
          { name: "Agarosa LE", brand: "SciBrand", sku: "SKU 2214" },
          { name: "Agarosa SEAKEM", brand: "SciBrand", sku: "SKU 2218" },
          { name: "Tris-acetato", brand: "BioLab", sku: "SKU 8810" },
          { name: "SYBR Safe", brand: "BioLab", sku: "SKU 9004" }
        ],
        discoveryTitle: "Descubrimiento de productos",
        relatedTitle: "Productos relacionados",
        related: ["Agarosa LM", "Buffer de carga", "Ladder 1 kb"],
        promoTitle: "Promociones",
        promos: ["20% en buffers", "Envío gratis en cadena de frío"]
      }
    },

    twoMarkets: {
      number: "04",
      title: "Diseñar una sola plataforma para dos mercados",
      paragraphs: [
        "La plataforma atendía clientes en España y Portugal. Variaban el idioma, los productos, el stock, las promociones, el contenido y las condiciones comerciales — pero el objetivo no eran dos tiendas.",
      ],
      closing: "El objetivo no eran dos tiendas.",
      closing2: "Era un solo sistema con contextos distintos: una experiencia consistente, un comportamiento específico por mercado.",
      platformLabel: "UNA PLATAFORMA",
      spain: { label: "ESPAÑA", items: ["Español", "Catálogo", "Stock", "Promociones", "Contenido", "Condiciones comerciales"] },
      portugal: { label: "PORTUGAL", items: ["Portugués", "Catálogo", "Stock", "Promociones", "Contenido", "Condiciones comerciales"] },
      sharedNote: "Experiencia compartida + comportamiento específico del mercado"
    },

    organization: {
      number: "05",
      title: "Diseñar el autoservicio alrededor de la organización",
      paragraphs: [
        "La compra B2B no es una actividad individual. El producto debía representar a la organización detrás del comprador: compradores autorizados, permisos, direcciones de envío, actividad individual, actividad del equipo e historial de pedidos.",
      ],
      questionsIntro: "La experiencia debía responder no solo",
      questions: [
        "¿Qué puedo comprar?",
        "¿Qué puedo hacer en nombre de mi organización?"
      ],
      goal: "El objetivo era reducir la necesidad de que los clientes contactaran a ventas para tareas rutinarias.",
      quote: "El cliente no era solo un comprador. Era una organización.",
      ui: {
        label: "Pantallas de cuenta conceptuales — anonimizadas",
        orgTab: "Organización",
        orgItems: ["Miembros", "Roles y permisos", "Direcciones", "Actividad"],
        ordersTab: "Pedidos",
        ordersItems: ["Historial", "Estado", "Detalles"],
        memberName: "M. García",
        memberRole: "Comprador",
        memberStatus: "Autorizado",
        addressLabel: "Dirección de envío",
        address: "Madrid — Lab 3, Av. Principal 12",
        activityLabel: "Última actividad",
        activity: "Pedido #4821 · hace 2 días",
        orderRow: [
          { id: "#4817", status: "Entregado", date: "02 Sep" },
          { id: "#4821", status: "En tránsito", date: "09 Sep" },
          { id: "#4830", status: "En proceso", date: "12 Sep" }
        ]
      }
    },

    postPurchase: {
      number: "06",
      title: "Conectar la compra con lo que pasa después del checkout",
      paragraphs: [
        "La experiencia no terminaba en el checkout. Trabajé con desarrolladores y stakeholders para traducir la logística a una experiencia orientada al cliente: empaquetado, progreso del envío y documentación de entrega.",
      ],
      needsTitle: "También debía gestionar lo que pasa cuando algo sale mal:",
      needs: ["Devoluciones", "Incidencias", "Soporte técnico", "Consultas del cliente"],
      principleTitle: "El cliente no debería tener que entender la estructura interna de la empresa para recibir ayuda.",
      orderTitle: "Pedido",
      orderFlow: ["Pedido", "Empaquetado", "Envío", "Entrega"],
      problemTitle: "Problema",
      problemFlow: ["Incidencia", "Soporte / Devolución", "Derivación interna", "Resolución"],
      principleA: "El cliente describe el problema.",
      principleB: "El sistema lo deriva al lugar correcto."
    },

    adoption: {
      number: "07",
      title: "Diseñar para la adopción, no solo para el lanzamiento",
      paragraphs: [
        "Los clientes existentes ya sabían comprar. Sabían a quién llamar, a quién escribir, cómo solicitar una cotización.",
        "Llevarlos al autoservicio no podía significar obligarlos a aprender un proceso completamente distinto. El producto preservaba los conceptos comerciales conocidos mientras eliminaba fricciones innecesarias.",
      ],
      wrongTitle: "El objetivo no era",
      wrong: "Hacer que los clientes usaran el sitio web.",
      rightTitle: "Era",
      right: "Hacer que el sitio web fuera más fácil que llamar."
    },

    transformation: {
      title: "Qué cambió",
      before: {
        label: "ANTES · Asistido por ventas",
        items: [
          "Teléfono",
          "Email",
          "Catálogos impresos",
          "Cotizaciones manuales",
          "Seguimiento manual de pedidos",
          "Procesos fragmentados"
        ]
      },
      after: {
        label: "DESPUÉS · Autoservicio",
        items: [
          "Búsqueda",
          "Descubrimiento de productos",
          "Cotizaciones",
          "Pedidos",
          "Gestión de cuenta",
          "Seguimiento",
          "Soporte",
          "Devoluciones"
        ]
      }
    },

    outcome: {
      title: "Resultado",
      intro:
        "El producto reunió los procesos comerciales y operativos en una única experiencia de comercio B2B que atiende clientes en España y Portugal.",
      sections: [
        {
          title: "Descubrimiento de productos",
          items: [
            "Búsqueda, categorías, marcas, filtros, sugerencias y productos relacionados."
          ]
        },
        {
          title: "Compras",
          items: [
            "Compras directas, variantes, familias de productos y productos basados en cotización coexistiendo en una sola experiencia."
          ]
        },
        {
          title: "Autonomía del cliente",
          items: [
            "Las organizaciones gestionan compradores, permisos, direcciones y actividad de compra."
          ]
        },
        {
          title: "Más allá de la compra",
          items: [
            "La logística, el soporte, las devoluciones y las incidencias pasaron a formar parte de la experiencia del cliente."
          ]
        }
      ],
      glanceTitle: "Métricas de un vistazo",
      glance: [
        { value: "2 años", label: "Evolución del producto" },
        { value: "España + Portugal", label: "Mercados" },
        { value: "500k+ productos", label: "Catálogo grande" },
        { value: "Comprar · Configurar · Cotizar · Restringido", label: "Caminos de compra" }
      ],
      reflectionTitle: "Reflexión",
      reflectionLead: "El comercio B2B no es solo e-commerce.",
      reflectionItems: [
        "Detrás de cada producto hay un conjunto de reglas de negocio.",
        "Detrás de cada comprador hay una organización.",
        "Detrás de cada pedido hay un proceso operativo.",
        "Mi rol era conectar esas capas y convertirlas en una experiencia que al cliente le resultara coherente."
      ],
      reflectionClose:
        "Las mejores experiencias de autoservicio no hacen el negocio más simple. Hacen que su complejidad sea más fácil de navegar para los clientes."
    }
  },

};


export default es;