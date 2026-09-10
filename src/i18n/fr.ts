const fr = {

  home: {

    hero: {

      title: "Bonjour, je suis Katherine.",

      paragraphs: [

        "Je suis <strong>Lead Produit Design</strong> et j'aime comprendre comment les choses fonctionnent réellement.",

        "Je me déplace entre <strong class=\"hero-typewriter\" data-words=\"direction produit|systèmes|UX|implémentation\"><span class=\"tw-text\">direction produit</span><span class=\"hero-caret\" aria-hidden=\"true\"></span></strong>",

        "Je me rapproche du problème autant qu'il le faut pour prendre une bonne décision.",

      ],

    },


    buttons: {
      work: "Voir mes projets"
    },

    work: {

      title: "Projets sur lesquels j'ai travaillé",

      projects: [

        {
          title: "D'une idée à une plateforme de certification évolutive",
          category: "SaaS Enterprise · Certificats numériques",
          description:
            "Conception d'une plateforme évolutive de gestion des certifications pour plusieurs organisations et des rôles utilisateurs complexes.",
          tags: ["Product Strategy", "Systems Design", "Architecture", "Enterprise UX"],
          link: `${import.meta.env.BASE_URL}/fr/work/credential-platform-v2/`,
          image: `${import.meta.env.BASE_URL}images/case-studies/credential-platform-v2/asset-01.png`
        },

        {
          title: "Des achats assistés vers le libre-service",
          category: "Commerce B2B · Plateforme entreprise",
          description:
            "Transformation d'un processus commercial traditionnel en une expérience d'achat en libre-service pour les acheteurs professionnels.",
          tags: ["Product Discovery", "Complex UX", "Self-Service", "Business Systems"],
          link: `${import.meta.env.BASE_URL}/fr/work/b2b-commerce-platform/`,
          image: `${import.meta.env.BASE_URL}images/case-studies/b2b-commerce-platform/cover.png`
        }

      ],

      action: "Voir l'étude de cas"

    },


    options: {

      fun: {
        title: "Fun",
        link: `${import.meta.env.BASE_URL}/fr/fun/`
      },

      experiments: {
        title: "Expérimentations",
        link: `${import.meta.env.BASE_URL}/fr/experiments/`
      }

    },


    pointOfView: {

      title: "J'ai tendance à aller une couche plus loin.",

      paragraphs: [

        "Un produit commence rarement là où le brief le dit.",

        "Une demande de nouvelle fonctionnalité peut en réalité être un problème métier.",

        "Un écran qui prête à confusion peut en réalité être un problème de permissions.",

        "Une « limitation technique » peut être une décision que personne n'a revisitée.",

        "Alors j'aime suivre le fil.",

        "Je parle aux personnes qui connaissent le métier. Je demande comment les choses fonctionnent aujourd'hui, où elles cassent et pourquoi elles en sont arrivées là. Je cartographie ce qui dépend de quoi, je remets en question les hypothèses et j'entre dans les détails quand les détails comptent.",

        "Parfois, cela mène à un nouveau parcours.",

        "Parfois, cela change la structure du produit.",

        "Parfois, cela signifie dire non.",

        "<strong>Je n'ai pas besoin de décider de tout. Je veux juste comprendre assez pour aider à prendre les bonnes décisions.</strong>"

      ]

    },


    beyond: {

      title: "Au-delà de l'écran.",

      paragraphs: [

        "J'aime avoir une vie qui ne ressemble pas au travail.",

        "Je bouge, j'explore, j'apprends, je crée des choses, je disparais dans la nature un moment, je sors, je reste à la maison, je lis, j'expérimente et je passe un temps déraisonnable avec mes chats.",

        "Le travail est important pour moi.",

        "Ce n'est tout simplement pas le tableau complet."

      ]

    },


    closing: {

      quote: "Amenez-moi la situation.",

      sub: "Comprenons ce qui se passe réellement, déterminons ce qui compte et décidons de la suite à donner.",

      workWithMe: "Travaillons ensemble",

      copied: "Email copié",

    }

  },

  footer: {

    email: "Email",

    linkedin: "LinkedIn",

  },

  sidebar: {
    navigation: {
      work: "Projets",
      experiments: "Expérimentations",
      fun: "Fun",
    },

    actions: {
      downloadCV: "Télécharger le CV",
      linkedin: "LinkedIn",
      email: "Email",
    },

    preferences: {
      typography: "Taille du texte",
      typographyLarge: "Grand",
      typographyMedium: "Moyen",
      typographySmall: "Petit",
    },
  },

  underConstruction: {
    badge: "Bientôt disponible",
    title: "Cette page est en cours de construction",
    description: "Je travaille sur quelque chose ici. Revenez bientôt.",
    backLabel: "Voir mon travail",
  },

  credentialPlatform: {
    hero: {
      tag: "SaaS ENTERPRISE · EDTECH · CERTIFICATS NUMÉRIQUES",
      title: "Créer une structure pour un écosystème de certification en croissance.",
      description:
        "Conception d'un système multi-tenant de gestion des certifications avec des hiérarchies de rôles, des niveaux de reporting et des structures organisationnelles évolutives.",
      role: "Product Designer",
      timeline: "2 ans",
      team:
        "Product Designer, UX/UI Designer, Développeurs, QA, PM, Parties prenantes produit",
    },

    challenge: {
      eyebrow: "LE DÉFI",
      title: "Transformer les exigences métier en une structure produit évolutive.",
  
      business: {
        title: "PROBLÈME MÉTIER",
        items: [
          "Absence de structure évolutive pour la gestion des certificats numériques.",
          "Manque de clarté dans les hiérarchies organisationnelles.",
          "Pas de système unifié pour la gestion multi-organisation.",
          "Les exigences de reporting n'étaient pas définies et inconsistantes."
        ]
      },
  
      product: {
        title: "PROBLÈME PRODUIT",
        items: [
          "Le système avait été initialement construit en replicant les fonctionnalités d'un concurrent.",
          "Forte complexité due à l'interconnexion des flux de travail.",
          "Manque de clarté entre la logique au niveau plateforme et au niveau organisation.",
          "Structure de rôles et permissions utilisateur non définie."
        ]
      },
  
      role: {
        title: "MON FOCAL POINT",
        items: [
          "Discovery produit",
          "Architecture du système",
          "Rôles & permissions",
          "Architecture de l'information",
          "Flux de travail & cas limites"
        ]
      }
    },
    
    contribution: {
      eyebrow: "MA CONTRIBUTION",
      title: "Du discovery produit à l'implémentation.",
    
      items: [
        "Pilotage du discovery produit et de l'analyse des exigences avec les parties prenantes métier.",
        "Définition du RBAC, de l'architecture multi-tenant et de la logique du cycle de vie des certifications.",
        "Conception des parcours utilisateurs, de l'architecture de l'information et des spécifications fonctionnelles.",
        "Co-conception de la version initiale du produit et revue des implémentations UI successives.",
        "Collaboration avec l'ingénierie et le QA pour valider les flux de travail, les cas limites et la cohérence de l'implémentation."
      ]
    },

    understandingSystem: {
      title: "Comprendre le système",
      description:
        "La plateforme a été conçue autour de deux systèmes complémentaires : la gouvernance de la plateforme et la gestion des organisations. Les permissions basées sur les rôles déterminaient la manière dont les utilisateurs interagissaient avec chaque couche."
    },

    multiTenantArchitecture: {
      title: "Architecture multi-tenant"
    },

    roleHierarchy: {
      title: "Hiérarchie des rôles (RBAC)",
    
      roles: [
        {
          role: "Admin Global",
          platform: "✔️",
          organization: "✔️",
          credential: "—",
          reports: "Plateforme entière",
          experience: "—"
        },
        {
          role: "Admin Multi-Organisation",
          platform: "✔️",
          organization: "✔️",
          credential: "—",
          reports: "Multi-organisation",
          experience: "—"
        },
        {
          role: "Admin Organisation",
          platform: "—",
          organization: "✔️",
          credential: "✔️",
          reports: "Organisation",
          experience: "—"
        },
        {
          role: "Admin Secondaire",
          platform: "—",
          organization: "Limité",
          credential: "✔️",
          reports: "Limité",
          experience: "—"
        },
        {
          role: "Accrédité",
          platform: "—",
          organization: "—",
          credential: "—",
          reports: "Activité propre",
          experience: "✔️"
        },
        {
          role: "Invité",
          platform: "—",
          organization: "—",
          credential: "—",
          reports: "—",
          experience: "Voir les certificats partagés"
        }
      ],
    
      insight: {
        title: "Transformer les règles métier en un modèle d'accès évolutif.",
        description:
          "J'ai traduit des règles métier fragmentées en un modèle clair de rôles et permissions, en séparant la gouvernance de la plateforme des opérations organisationnelles et des expériences utilisateur. Cela a fourni une base cohérente pour définir les flux de travail, les permissions et les rôles futurs."
      }
    },

    credentialLifecycle: {
      title: "Cycle de vie des certificats",
      alt: "Flux du cycle de vie des certificats montrant les principales étapes et interactions du processus de certification."
    },

    informationArchitecture: {
      title: "Architecture de l'information (vue haute)",
    
      description:
        "La plateforme présente une structure de navigation différente selon le contexte organisationnel de l'utilisateur, garantissant que chaque rôle n'accède qu'aux modules pertinents pour ses responsabilités.",
    
      principleTitle: "Principe de design",
    
      principleHeadline: "Navigation contextualisée.",
    
      principleDescription:
        "Plutôt que d'exposer chaque module à chaque utilisateur, la plateforme adapte son architecture de l'information en fonction de la portée organisationnelle et des responsabilités. Cela a réduit la complexité de navigation tout en soutenant une architecture multi-tenant évolutive."
    },

    reportingComplexity: {
      title: "Complexité du reporting",
    
      columns: {
        report: "Rapport / Insight",
        globalPlatform: "Plateforme globale",
        holding: "Holding (multi-org)",
        organization: "Organisation",
        accredited: "Accrédité"
      },
    
      rows: [
        {
          name: "Vue organisationnelle",
          values: ["✔️", "Organisations assignées", "➖", "➖"]
        },
        {
          name: "Statut du plan et de l'abonnement",
          values: ["✔️", "✔️", "Plan actuel", "➖"]
        },
        {
          name: "Consommation du plan",
          values: ["✔️", "✔️", "Usage propre", "➖"]
        },
        {
          name: "Membres de l'organisation",
          values: ["✔️", "✔️", "✔️", "➖"]
        },
        {
          name: "Inventaire des certificats",
          values: ["✔️", "Base de données partagée", "✔️", "Certificats propres"]
        },
        {
          name: "Attributions de certificats",
          values: ["✔️", "✔️", "✔️", "Attributions propres"]
        },
        {
          name: "Statut des attributions",
          values: ["✔️", "✔️", "✔️", "Statut propre"]
        },
        {
          name: "Analytique de partage des certificats",
          values: ["✔️", "✔️", "✔️", "Activité personnelle"]
        },
        {
          name: "Activité des administrateurs",
          values: ["✔️", "✔️", "✔️", "➖"]
        },
        {
          name: "Journaux d'activité du système",
          values: ["✔️", "✔️", "Journaux de l'organisation", "➖"]
        },
        {
          name: "Export des rapports",
          values: ["✔️", "✔️", "✔️", "➖"]
        }
      ],

      insight:
        "Le reporting a été conçu en utilisant une visibilité progressive plutôt que de créer des modules de reporting différents pour chaque rôle. Tous les utilisateurs accédaient au même écosystème de reporting, mais les données disponibles étaient filtrées selon leur niveau de responsabilité, réduisant la complexité de l'interface tout en maintenant une expérience de reporting cohérente sur l'ensemble de la plateforme."
    },

    constraints: {
      title: "Contraintes & décisions de design",
    
      items: [
        {
          number: "01",
          title: "Aligner les fonctionnalités sur l'architecture métier",
    
          decisionLabel: "Décision",
          decision:
            "Conception des flux autour du modèle métier du client plutôt que de replicer les fonctionnalités d'un concurrent.",
    
          tradeoffLabel: "Compromis",
          tradeoff:
            "Plus de discovery en amont, mais un produit capable d'évoluer au-delà de la parité fonctionnelle."
        },
    
        {
          number: "02",
          title: "Séparer la gouvernance des opérations",
    
          decisionLabel: "Décision",
          decision:
            "Séparation de la gouvernance de la plateforme, de la gestion des organisations et de la propriété des certificats en couches indépendantes.",
    
          tradeoffLabel: "Compromis",
          tradeoff:
            "Complexité d'implémentation accrue en échange d'une évolutivité à long terme."
        },
    
        {
          number: "03",
          title: "Concevoir selon les responsabilités",
    
          decisionLabel: "Décision",
          decision:
            "Regroupement des permissions par responsabilités plutôt que par actions individuelles pour simplifier la gestion des accès.",
    
          tradeoffLabel: "Compromis",
          tradeoff:
            "Plus d'analyse en amont, mais une réduction significative de la maintenance à mesure que la plateforme grandissait."
        },
    
        {
          number: "04",
          title: "Optimiser pour les opérations en masse",
    
          decisionLabel: "Décision",
          decision:
            "Priorité donnée à l'émission massive de certificats avec validation CSV plutôt qu'aux flux individuels.",
    
          tradeoffLabel: "Compromis",
          tradeoff:
            "Un flux plus complexe qui a considérablement amélioré l'efficacité administrative."
        },
    
        {
          number: "05",
          title: "Concevoir le reporting pour la croissance",
    
          decisionLabel: "Décision",
          decision:
            "Structuration du reporting par niveau de visibilité plutôt que par tableaux de bord figés.",
    
          tradeoffLabel: "Compromis",
          tradeoff:
            "Une architecture de reporting plus flexible face à des exigences métier en évolution."
        }
      ]
    },

    quote:
      "Le bon design produit consiste à concevoir des architectures qui maintiennent la complexité maîtrisée à mesure que les produits évoluent.",

    impact: {
        title: "Impact",
    
        impact: [
          "Adopté avec succès par plusieurs organisations en Colombie.",
          "Mise en place d'une architecture multi-tenant évolutive pour différents modèles organisationnels.",
          "Standardisation de l'émission de certificats via des flux réutilisables et des permissions basées sur les rôles.",
          "Amélioration de l'efficacité administrative grâce aux opérations en masse et au libre-service."
        ],
    
        highlights: [
          "6 Rôles",
          "2 couches système",
          "5 états de certificat",
          "Architecture multi-tenant",
          "Produit enterprise en production"
        ],
    
        reflection: {
          title: "Réflexion",
    
          items: [
            "Ce projet a renforcé ma conviction selon laquelle les produits enterprise sont rarement limités par la complexité de l'interface — ils le sont par la complexité métier.",
            "Traduire des règles métier en évolution en une architecture évolutive a nécessité d'équilibrer flexibilité, gouvernance et utilisabilité. Cela a renforcé ma capacité à transformer des exigences métier floues en architectures produit évolutives qui concilient gouvernance, utilisabilité et croissance à long terme."
          ]
        }
      },
  },

  credentialPlatformV2: {
    hero: {
      tag: "ÉTUDE DE CAS",
      title: "D'une idée à une plateforme de credentials scalable",
      description: [
        "Un concept business est devenu une plateforme de credentials multi-tenant en production, soutenant quatre organisations en Colombie et en Espagne.",
        "J'ai défini la structure du produit, le modèle organisationnel, les rôles et permissions, l'architecture de l'information, les parcours principaux et les patterns d'interaction — en travaillant en étroite collaboration avec le produit, l'ingénierie et la QA pendant que la plateforme évoluait."
      ],
      role: "Product Designer",
      timeline: "2 ans",
      team: "Produit · UX/UI · Ingénierie · QA · Parties prenantes",
      focus: "Stratégie produit · Architecture produit · UX/UI · AI · Rôles et permissions · Parcours · Cas limites",
      ndaText:
        "Les détails ont été généralisés pour protéger la confidentialité du client."
    },

    challenge: {
      eyebrow: "LE DÉFI",
      title: "Il y avait un modèle business, mais pas encore de produit.",
      paragraphs: [
        "Les fondateurs savaient quoi vendre et disposaient d'une référence du type de plateforme qu'ils voulaient construire.",
        "Ce qui manquait, c'était le système derrière."
      ],
      listTitle: "Je devais définir :",
      items: [
        "qui étaient les différents acteurs",
        "comment les organisations étaient liées entre elles",
        "ce que chaque rôle pouvait voir et gérer",
        "comment les credentials traversaient leur cycle de vie",
        "comment plusieurs organisations pouvaient coexister",
        "comment le produit pouvait évoluer à mesure que le business changeait"
      ],
      closing:
        "Le défi n'était pas de reproduire le produit de référence. C'était de transformer une idée en une architecture produit réellement fonctionnelle.",
      asset: { id: "ASSET 02", label: "Diagramme d'architecture produit" }
    },

    businessModel: {
      number: "01",
      title: "Transformer le modèle business en produit",
      paragraphs: [
        "J'ai commencé par cartographier les règles business, les relations entre organisations, les responsabilités et les parcours opérationnels avec les parties prenantes.",
        "Plutôt que de reproduire le produit de référence, j'ai traduit le modèle business en une structure capable de soutenir la plateforme que nous construisions réellement."
      ],
      layersTitle: "Deux couches ont émergé",
      layers: [
        {
          title: "Gouvernance de la plateforme",
          description: "Gérer la plateforme et ses organisations."
        },
        {
          title: "Gestion de l'organisation",
          description:
            "Gérer les personnes, les credentials et les opérations quotidiennes au sein de chaque organisation."
        }
      ],
      layersNote:
        "Cette séparation est devenue le fondement du modèle multi-tenant de la plateforme.",
      roleTitle: "Le modèle de rôles a évolué",
      roleIntro: "Le modèle initial était simple :",
      roleFrom: ["Plateforme", "Organisation", "Administrateur", "Opérateur"],
      roleParagraphs: [
        "À mesure que le produit devenait réel, cette structure ne suffisait plus.",
        "Je l'ai retravaillée en une hiérarchie prenant en charge les organisations parentes, les sous-organisations et différents niveaux de responsabilité."
      ],
      roleGoal:
        "L'objectif n'était pas de créer plus de rôles. C'était de rendre la responsabilité explicite.",
      matrixTitle: "Modèle de rôles et permissions",
      matrixColumns: ["Rôle", "Organisations", "Membres", "Credentials", "Rapports"],
      matrixRows: [
        ["Admin de plateforme", "✓", "✓", "✓", "✓"],
        ["Admin d'organisation", "✓", "✓", "✓", "✓"],
        ["Admin secondaire", "—", "✓", "✓", "Limité"],
        ["Accrédité", "—", "—", "Propres", "Propres"]
      ],
      asset: { id: "ASSET 03", label: "Modèle de rôles et permissions" }
    },

    evolution: {
      number: "02",
      title: "Le premier lancement a révélé le vrai produit",
      paragraphs: [
        "La première organisation a changé le projet.",
        "Jusqu'alors, beaucoup de décisions reposaient sur des exigences et des hypothèses. Dès que des organisations réelles ont commencé à utiliser la plateforme, ces hypothèses ont été confrontées à des parcours réels."
      ],
      gapsTitle: "Les nouveaux clients ont exposé des lacunes autour de :",
      gaps: [
        "libre-service",
        "permissions",
        "parcours d'assignation",
        "rapports",
        "structure organisationnelle"
      ],
      closing: "Le produit devait évoluer avec eux.",
      shift:
        "Cela a fait passer mon rôle de la définition du produit initial au façonnage continu du système à mesure que des cas d'usage réels apparaissaient.",
      timeline: [
        "Idée business",
        "Produit initial",
        "Première organisation",
        "Parcours réels",
        "Nouveaux cas limites",
        "Évolution du produit",
        "4 organisations"
      ],
      asset: { id: "ASSET 04", label: "Évolution du produit" }
    },

    selfService: {
      number: "03",
      title: "Remplacer le travail opérationnel par le libre-service",
      paragraphs: [
        "Au départ, les clients dépendaient de l'équipe interne pour les changements opérationnels.",
        "Ils avaient besoin que l'équipe :"
      ],
      items: [
        "crée des organisations",
        "ajoute des membres",
        "change les rôles",
        "modifie les crédits du plan",
        "gère la consommation"
      ],
      transition: ["Cela fonctionnait à petite échelle.", "Cela n'allait pas passer à l'échelle."],
      resultTitle: "J'ai déplacé ces opérations dans le produit.",
      resultText:
        "Les clients pouvaient créer des organisations, ajouter des membres et gérer les rôles eux-mêmes.",
      beforeTitle: "Avant",
      beforeFlow: ["Demande client", "Équipe interne", "Changement manuel"],
      afterTitle: "Après",
      afterFlow: ["Client", "Paramètres de l'organisation", "Changement effectué"],
      contributionTitle: "Contribution design",
      contribution: [
        "Architecture libre-service",
        "Logique de permissions",
        "Parcours UI",
        "Cas limites",
        "États de validation"
      ],
      callouts: [
        "La visibilité du rôle s'adapte à la responsabilité de l'utilisateur.",
        "Les actions ne sont disponibles que lorsque le modèle de permissions de l'utilisateur le permet."
      ],
      assetFlow: { id: "ASSET 05", label: "Parcours avant / après" },
      assetUi: { id: "ASSET 06", label: "UI de gestion d'organisation et de membres" }
    },

    workflow: {
      number: "04",
      title: "Faire de l'émission de credentials un parcours scalable",
      paragraphs: [
        "Un cours typique pouvait avoir entre 20 et 50 utilisateurs accrédités.",
        "Le parcours initial imposait de saisir les informations via un formulaire long, une personne à la fois.",
        "Cela signifiait que l'effort augmentait directement avec le nombre de destinataires."
      ],
      approachTitle: "J'ai changé l'unité de travail.",
      approachText: "Au lieu de créer chaque credential de zéro :",
      approachSteps: ["Définir une fois", "Réutiliser", "Assigner en masse"],
      templateTitle: "Modèles de credentials réutilisables",
      templateText:
        "Les organisations pouvaient créer un credential une seule fois puis le réutiliser ou le dupliquer.",
      bulkTitle: "Assignation en masse",
      bulkText:
        "Les organisations pouvaient préparer les informations des destinataires et les télécharger via CSV. Une fois les données prêtes, une assignation multiple prenait environ 2 minutes.",
      beforeTitle: "AVANT",
      beforeFlow: [
        "Destinataire 1 → Formulaire",
        "Destinataire 2 → Formulaire",
        "Destinataire 3 → Formulaire",
        "…",
        "Destinataire 50 → Formulaire"
      ],
      afterTitle: "APRÈS",
      afterFlow: [
        "Modèle de credential",
        "Préparer le CSV",
        "Télécharger",
        "Vérifier",
        "Assigner à 20–50 utilisateurs"
      ],
      stat: { value: "~2 min", label: "pour une assignation en masse" },
      uiTitle: "Séquence UI",
      ui: [
        "Modèle de credential",
        "Télécharger le CSV",
        "Validation des données",
        "Vérifier les destinataires",
        "Confirmation d'assignation"
      ],
      assetA: { id: "ASSET 07", label: "Transformation du parcours" },
      assetB: { id: "ASSET 08", label: "Séquence UI" }
    },

    accreditedUX: {
      number: "05",
      title: "Rendre l'expérience plus claire pour les utilisateurs accrédités",
      paragraphs: [
        "Passer à l'échelle le côté administratif a révélé un autre problème : certains parcours étaient techniquement corrects mais difficiles à comprendre.",
        "Les utilisateurs butaient sur :"
      ],
      issues: ["des libellés peu familiers", "un enregistrement long", "des informations demandées trop tôt"],
      mentalTitle:
        "J'ai redessiné l'expérience d'entrée autour d'un modèle mental plus simple :",
      mentalBold: "Entrer dans le produit → Compléter son profil",
      mentalText:
        "Au lieu d'exiger tout à la création du compte, les utilisateurs pouvaient accéder à leur compte via un lien dédié et compléter ou modifier leur profil ensuite.",
      beforeTitle: "Avant",
      beforeFlow: ["Invitation", "Enregistrement long", "Compte"],
      afterTitle: "Après",
      afterFlow: ["Invitation", "Compte", "Compléter le profil"],
      annotations: [
        "Charge cognitive initiale réduite",
        "Informations non essentielles différées",
        "Séparation plus claire des tâches"
      ],
      asset: { id: "ASSET 09", label: "UX avant / après" }
    },

    permissions: {
      number: "06",
      title: "Concevoir les permissions autour de la responsabilité",
      paragraphs: [
        "À mesure que les organisations gagnaient en autonomie, les permissions sont devenues un problème produit central."
      ],
      wrongQIntro: "La question n'était pas :",
      wrongQuestion: "Sur quoi cet utilisateur peut-il cliquer ?",
      rightQIntro: "C'était :",
      rightQuestion:
        "Quelles informations et actions cette personne doit-elle gérer ?",
      modelText:
        "J'ai structuré les permissions autour de la responsabilité organisationnelle plutôt que de traiter chaque action comme une permission isolée.",
      modelTitle: "Le modèle couvrait :",
      model: [
        "gouvernance de la plateforme",
        "organisations parentes",
        "sous-organisations",
        "administrateurs primaires et secondaires",
        "gestion des credentials",
        "rapports",
        "utilisateurs accrédités"
      ],
      navTitle: "Navigation contextuelle",
      navParagraphs: [
        "Le même principe a façonné l'architecture de l'information.",
        "Les utilisateurs n'avaient pas besoin de tous les modules disponibles dans la plateforme."
      ],
      navFormulaText: "La navigation s'adaptait à :",
      navFormula: "Rôle + organisation + responsabilité",
      navExampleTitle: "ADMIN D'ORG",
      navExample: ["Dashboard", "Organisations", "Membres", "Credentials", "Rapports"],
      navCaptionBefore: "Navigation admin",
      navCaptionAfter: "Navigation accrédité",
      asset: { id: "ASSET 10", label: "AI + navigation" }
    },

    reporting: {
      number: "07",
      title: "Faire refléter l'organisation dans les rapports",
      paragraphs: [
        "Le problème n'était pas simplement un manque de rapports.",
        "Le business n'avait pas encore pleinement défini ce que chaque niveau organisationnel devait comprendre. Cela créait des informations dupliquées et des rapports qui ne répondaient pas aux bonnes questions."
      ],
      approachTitle:
        "J'ai restructuré les rapports autour de niveaux de visibilité plutôt que de créer des expériences de reporting entièrement séparées pour chaque rôle.",
      approachText:
        "Le même écosystème de rapports pouvait servir différents utilisateurs tandis que les informations étaient filtrées selon la responsabilité organisationnelle.",
      modelTitle: "Un système de rapports",
      modelSubtitle: "Visibilité différente",
      screens: [
        "Rapport au niveau plateforme",
        "Rapport au niveau organisation",
        "Vue filtrée"
      ],
      annotation: "Même base de rapports, visibilité différente.",
      asset: { id: "ASSET 11", label: "Modèle de reporting + UI" }
    },

    expansion: {
      number: "08",
      title: "Étendre le produit au-delà de son marché d'origine",
      paragraphs: [
        "À mesure que d'autres organisations ont rejoint la plateforme, le produit a fini par soutenir quatre organisations en Colombie et en Espagne.",
        "L'opportunité espagnole a introduit de nouvelles considérations :"
      ],
      considerations: [
        "GDPR",
        "devise",
        "géolocalisation",
        "systèmes éducatifs",
        "structures organisationnelles",
        "exigences de marque blanche"
      ],
      noteTitle: "Ce n'étaient pas simplement des écrans supplémentaires.",
      noteText: "Ils remettaient en question des hypothèses ancrées dans le produit d'origine.",
      conclusion:
        "L'architecture a donc dû évoluer d'un modèle business et d'un marché spécifiques vers le soutien de différents clients et contextes.",
      diagramTitle: "HYPOTHÈSES INITIALES",
      diagram: [
        "Colombie",
        "Clients réels",
        "Nouveau marché",
        "Espagne",
        "Nouvelles exigences",
        "Architecture produit adaptable"
      ],
      asset: { id: "ASSET 12", label: "Diagramme d'expansion / adaptation" }
    },

    whatChanged: {
      title: "Ce qui a changé",
      columns: ["De", "Vers"],
      rows: [
        ["Idée business", "Stratégie + architecture produit"],
        ["Produit de référence", "Produit spécifique au business"],
        ["Dépendance opérationnelle interne", "Libre-service client"],
        ["Émission un par un", "Assignation en masse"],
        ["Credentials uniques", "Modèles réutilisables"],
        ["Modèle de rôles plat", "Modèle organisationnel hiérarchique"],
        ["Rapports fixes", "Rapports basés sur la visibilité"],
        ["Hypothèses Colombie", "Colombie + Espagne"],
        ["Lancement initial", "4 organisations"]
      ],
      metrics: [
        { value: "2 ans", label: "Évolution du produit" },
        { value: "4", label: "Organisations · Colombie + Espagne" },
        { value: "20–50", label: "Utilisateurs dans une assignation en masse typique" },
        { value: "~2 min", label: "Parcours d'assignation en masse" }
      ]
    },

    outcome: {
      title: "Résultat",
      paragraphs: [
        "Le produit est passé d'une idée business initiale à une plateforme de credentials multi-tenant en production.",
        "Les organisations pouvaient gérer leur propre structure et leurs membres. Les équipes credentials pouvaient créer des modèles réutilisables et assigner des credentials en masse. Les rôles et permissions ont évolué avec des structures organisationnelles de plus en plus sophistiquées. Le reporting s'est aligné sur la visibilité organisationnelle.",
        "L'architecture n'était plus liée au produit de référence d'origine."
      ],
      closing: "Il était devenu un système capable de s'adapter.",
      montageTitle: "Un système conçu pour évoluer.",
      montage: [
        "Dashboard",
        "Gestion de l'organisation",
        "Constructeur de credentials",
        "Assignation en masse",
        "Rapports",
        "Profil utilisateur"
      ],
      asset: { id: "ASSET 14", label: "Montage du produit final" }
    },

    lessons: {
      title: "Ce que j'ai appris",
      heading: "Concevoir le système, pas seulement l'écran",
      paragraphs: [
        "La partie la plus difficile n'était pas de concevoir des écrans individuels.",
        "C'était de prendre des décisions produit alors que le business lui-même prenait encore forme.",
        "Les exigences étaient incomplètes. Les structures organisationnelles évoluaient. De vrais clients remettaient en question les hypothèses.",
        "Mon rôle était de créer suffisamment de structure pour soutenir le business aujourd'hui sans rendre inutilement coûteux les changements de demain."
      ],
      quote:
        "Un bon design produit ne résout pas seulement le parcours d'aujourd'hui. Il crée suffisamment de structure pour que le produit évolue sans se casser."
    }
  },

  b2bCommercePlatform: {
    hero: {
      tag: "COMMERCE B2B · FOURNITURES SCIENTIFIQUES",
      title: "Des achats assistés par la vente au libre-service.",
      description:
        "Transformation de flux d'achat fragmentés en une expérience numérique centralisée pour des clients enterprise en Espagne et au Portugal.",
      role: "Product Designer",
      timeline: "2 ans",
      team:
        "Product Designer, UX/UI Designer, Développeurs, QA, PM, Équipe de développement client, Parties prenantes métier",
      ndaText:
        "En raison d'un accord de confidentialité (NDA), certains détails métier et éléments visuels du produit ont été généralisés, tout en préservant le processus de design, les défis et les résultats.",
    },

    challenge: {
      title: "Le défi",

      before: {
        label: "Avant",
        image: `${import.meta.env.BASE_URL}images/case-studies/b2b-commerce-platform/before.png`,
        items: [
          "Téléphone",
          "Email",
          "Catalogues imprimés",
          "Devis",
          "Suivi manuel",
          "Départements fragmentés"
        ]
      },

      after: {
        label: "Après",
        image: `${import.meta.env.BASE_URL}images/case-studies/b2b-commerce-platform/after.png`,
        items: [
          "Libre-service",
          "Recherche",
          "Devis",
          "Commandes",
          "Suivi",
          "Historique d'achat"
        ]
      },

      goal: {
      label: "Objectif",
      description:
        "Transformer des opérations commerciales fragmentées en une expérience unifiée de libre-service où les clients enterprise peuvent rechercher des produits, demander des devis, suivre des commandes et gérer leurs activités d'achat depuis une plateforme unique."
      },
    },

    contribution: {
      eyebrow: "Ma contribution",

      title: "Façonner le produit de l'intérieur",

      description:
        "Tout au long du projet, j'ai piloté le discovery produit et l'analyse des exigences lors des grandes versions, en traduisant les besoins métier et la complexité opérationnelle en exigences produit prêtes pour l'implémentation.",

      items: [
        "Animation d'ateliers de discovery transversaux avec les parties prenantes métier",

        "Pilotage de l'analyse des exigences et traduction des besoins métier en exigences produit",

        "Définition des parcours utilisateurs, cas d'utilisation, architecture de l'information, navigation et logique fonctionnelle",

        "Conception du comportement de recherche et des interactions clés du produit",

        "Co-conception des interfaces clés lors de la version initiale et définition de patterns pour les versions suivantes",

        "Rédaction des spécifications fonctionnelles et collaboration étroite avec l'ingénierie pendant l'implémentation",

        "Référence design produit pendant l'implémentation, validation de la logique d'interaction, des cas limites, de la navigation et de la cohérence du design entre l'ingénierie et le QA",

        "Soutien au QA et revue des designs successifs pour garantir l'alignement avec les règles métier, les flux de travail, les contraintes techniques et l'évolution du produit"
      ],

      note:
        "Bien que les intégrations techniques avec l'ERP aient été implémentées par l'équipe d'ingénierie du client, j'ai travaillé en étroite collaboration avec les parties prenantes et les développeurs pour définir comment les données enterprise devaient se traduire en expériences utilisateur significatives."
    },

    businessDiscovery: {
      title: "Discovery métier",
      departments: [
        "Vente",
        "Marketing",
        "Achats",
        "Comptabilité",
        "Développement"
      ],
      workshops: "Ateliers de discovery",
      sharedUnderstanding: "Compréhension commune",
      note: "Les différents départements décrivaient le même flux de travail de manière différente."
    },

    constraints: {
      title: "Contraintes",

      items: [
        {
          number: "01",
          title: "Processus métier hérités",

          decisionLabel: "Décision",
          decision:
            "Utilisation de l'expérience du concurrent comme référence tout en l'adaptant aux règles métier du client, en affinant et automatisant les processus existants lorsque c'était possible.",

          tradeoffLabel: "Compromis",
          tradeoff:
            "Plus de discovery et d'analyse de processus en amont, mais une expérience familière qui reflétait toujours la réalité opérationnelle du métier."
        },

        {
          number: "02",
          title: "Silos organisationnels",

          decisionLabel: "Décision",
          decision:
            "Cartographie de la manière dont les différents départements comprenaient et interagissaient avec les mêmes processus commerciaux pour identifier les écarts, les dépendances et les hypothèses contradictoires.",

          tradeoffLabel: "Compromis",
          tradeoff:
            "Plus de travail d'alignement en amont, mais moins d'hypothèses reportées sur le produit."
        },

        {
          number: "03",
          title: "Données pilotées par l'ERP",

          decisionLabel: "Décision",
          decision:
            "Conception de la plateforme autour de l'ERP comme source de vérité, permettant à la structure de données d'évoluer sans modifier répétitivement l'expérience utilisateur.",

          tradeoffLabel: "Compromis",
          tradeoff:
            "Plus de dépendance à l'ERP et un travail d'architecture initial plus important, mais une expérience produit plus cohérente à mesure que les données métier évoluaient."
        },

        {
          number: "04",
          title: "Informations produit en constante évolution",

          decisionLabel: "Décision",
          decision:
            "Conception d'une hiérarchie visuelle compacte pour les catégories de produits, en équilibrant les images, la densité et la facilité de parcours dans un catalogue large et en constante évolution.",

          tradeoffLabel: "Compromis",
          tradeoff:
            "Moins de place pour chaque catégorie pour se démarquer visuellement, mais un moyen plus rapide de parcourir et naviguer dans une large gamme de produits."
        },

        {
          number: "05",
          title: "Règles d'achat complexes",

          decisionLabel: "Décision",
          decision:
            "Traduction des tarifs spécifiques au client, comptes, devis, stock et conditions d'achat en des flux compréhensibles et gérables depuis la plateforme.",

          tradeoffLabel: "Compromis",
          tradeoff:
            "Plus de logique conditionnelle, mais une expérience de libre-service plus précise pour les acheteurs professionnels."
        },

        {
          number: "06",
          title: "Implémentation incrémentale sur plusieurs versions",

          decisionLabel: "Décision",
          decision:
            "Conception de fondations capables d'évoluer sur plusieurs versions, plutôt que de traiter chaque version comme un produit indépendant.",

          tradeoffLabel: "Compromis",
          tradeoff:
            "Certaines améliorations ont dû être échelonnées dans le temps, mais l'expérience a pu évoluer sans reconstruire constamment ses fondations."
        }
      ]
    },

    impact: {
      title: "Impact",
    
        impactSections: [
          {
            title: "Libre-service client",
            items: [
              "Devis initiés via la plateforme",
              "Adoption du suivi de commandes",
              "Utilisation de l'historique d'achat et du réapprovisionnement",
              "Adoption des listes d'achat"
            ]
          },

          {
            title: "Efficacité opérationnelle",
            items: [
              "Demandes de disponibilité de produits",
              "Demandes de statut de commande",
              "Demandes de statut de devis",
              "Achats basés sur des catalogs obsolètes"
            ]
          },

          {
            title: "Découverte de produits",
            items: [
              "Taux de réussite des recherches",
              "Engagement sur les fiches produit",
              "Taux d'affinement de recherche",
              "Identification réussie du produit avant la demande de devis"
            ]
          }
        ],
    
        reflection: {
          title: "Réflexion",
    
          items: [
            "La transformation numérique commence par comprendre comment une entreprise opère, où l'information se perd et comment concevoir des systèmes qui rétablissent la clarté et l'autonomie.",

            "Ce projet a renforcé ma capacité à naviguer dans l'ambiguïté, à faciliter les conversations transversales et à transformer des flux opérationnels complexes en expériences numériques évolutives.",

            "La leçon la plus précieuse a été de comprendre que le libre-service ne consiste pas simplement à déplacer les transactions en ligne. Il s'agit de donner aux clients l'information et la visibilité dont ils ont besoin pour agir en toute confiance."
          ]
        }
    },
  }

};

export default fr;
