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
          link: `${import.meta.env.BASE_URL}fr/work/credential-platform-v2/`,
          image: `${import.meta.env.BASE_URL}images/case-studies/credential-platform-v2/asset-01.png`
        },

        {
          title: "Des achats assistés vers le libre-service",
          category: "Commerce B2B · Plateforme entreprise",
          description:
            "Transformation d'un processus commercial traditionnel en une expérience d'achat en libre-service pour les acheteurs professionnels.",
          tags: ["Product Discovery", "Complex UX", "Self-Service", "Business Systems"],
          link: `${import.meta.env.BASE_URL}fr/work/b2b-commerce-platform/`,
          image: `${import.meta.env.BASE_URL}images/case-studies/b2b-commerce-platform/cover.png`
        }

      ],

      action: "Voir l'étude de cas"

    },


    options: {

      fun: {
        title: "Écrits",
        link: `${import.meta.env.BASE_URL}fr/writings/`
      },

      experiments: {
        title: "Expérimentations",
        link: `${import.meta.env.BASE_URL}fr/experiments/`
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
      fun: "Écrits",
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

    roleMatrix: {
      id: "ASSET 03",
      label: "Modèle de rôles et permissions",
      heading: "Qui est responsable de quoi ?",
      roles: [
        { title: "ADMIN PLATEFORME", items: ["Organisations", "Membres", "Crédentials", "Rapports"] },
        { title: "ADMIN ORG", items: ["Organisations", "Membres", "Crédentials", "Rapports"] },
        { title: "ADMIN SECONDAIRE", items: ["Membres", "Crédentials", "Rapports limités"] },
        { title: "ACCRÉDITÉ", items: ["Ses credentials", "Ses informations"] }
      ],
      hierarchyLabel: "LA HIÉRARCHIE",
      hierarchyRoot: "PLATEFORME",
      hierarchyBranches: [
        { name: "Organisation A", children: ["Admin Org", "Admin Secondaire", "Accrédité"] },
        { name: "Organisation B", children: ["Admin Org", "Accrédité"] }
      ],
      footer: "Les permissions suivaient la responsabilité organisationnelle, pas les actions individuelles."
    },

    challenge: {
      eyebrow: "LE DÉFI",
      title: "Il y avait un modèle business, mais pas de produit.",
      paragraphs: [
        "Les fondateurs disposaient d'une plateforme de référence, mais il manquait l'architecture pour la faire fonctionner."
      ],
      listTitle: "Je devais définir :",
      items: [
        "qui étaient les différents acteurs",
        "comment les organisations étaient liées entre elles",
        "ce que chaque rôle pouvait voir et gérer",
        "comment les credentials traversaient leur cycle de vie",
        "comment plusieurs organisations pouvaient coexister"
      ],
      closing:
        "Le défi n'était pas de copier la référence. C'était de transformer une idée en un produit capable d'opérer réellement."
    },

    businessModel: {
      number: "01",
      title: "Transformer le modèle business en produit",
      paragraphs: [
        "J'ai cartographié les règles business, les relations entre organisations et les parcours opérationnels avec les parties prenantes."
      ],
      layersTitle: "Deux couches ont émergé",
      layers: [
        {
          title: "Gouvernance de la plateforme",
          description: "Gérer la plateforme et ses organisations."
        },
        {
          title: "Gestion de l'organisation",
          description: "Gérer les personnes, les credentials et les opérations quotidiennes."
        }
      ],
      layersNote:
        "Cette séparation était la fondation du modèle multi-tenant de la plateforme.",
      roleTitle: "Évolution du modèle de rôles",
      roleIntro: "Initial :",
      roleFrom: ["Plateforme", "Organisation", "Administrateur", "Opérateur"],
      roleParagraphs: [
        "À mesure que le produit grandissait, cela ne suffisait plus.",
        "Je l'ai retravaillé pour prendre en charge les organisations parentes, les sous-organisations et les niveaux de responsabilité. L'objectif n'était pas plus de rôles — c'était de rendre la responsabilité explicite."
      ],
      asset: { id: "ASSET 03", label: "Évolution de la hiérarchie de rôles" }
    },

    evolution: {
      number: "02",
      title: "Laisser les cas d'usage réels façonner le produit",
      paragraphs: [
        "La première organisation a tout changé.",
        "Les hypothèses ont été confrontées à des parcours réels."
      ],
      gapsTitle: "Les nouveaux clients ont exposé des lacunes autour de :",
      gaps: [
        "libre-service",
        "permissions",
        "parcours d'assignation",
        "rapports",
        "structure organisationnelle"
      ],
      shift:
        "Mon rôle est passé de la définition du produit initial au façonnage continu du système à mesure que des cas d'usage réels apparaissaient."
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
      mgmtUi: {
        id: "ASSET 06",
        label: "UI de gestion d'organisation et de membres",
        title: "Organisations",
        newMember: "+ Nouveau membre",
        orgName: "Organisation Acme",
        orgMeta: "48 membres · 3 admins",
        membersTitle: "Membres",
        searchPlaceholder: "Rechercher des membres…",
        filterLabel: "Filtrer ▾",
        columns: ["Nom", "Rôle", "Statut"],
        rows: [
          { name: "Ana Torres", role: "Admin Org", status: "Actif" },
          { name: "Luis Pérez", role: "Admin Secondaire", status: "Actif" },
          { name: "Marta Ruiz", role: "Accréditée", status: "En attente" },
          { name: "Carlos Díaz", role: "Accrédité", status: "Actif" }
        ],
        detailLabel: "MEMBRE",
        detailName: "Marta Ruiz",
        roleLabel: "Rôle",
        roleValue: "Accréditée ▾",
        orgLabel: "Organisation",
        orgValue: "Organisation Acme",
        credsLabel: "Crédentials",
        credsValue: "12 délivrées · 2 en attente",
        cancel: "Annuler",
        save: "Enregistrer",
        callouts: [
          { number: "01", title: "Visibilité du rôle", text: "Les utilisateurs ne voient que les actions que leur responsabilité autorise." },
          { number: "02", title: "Libre-service", text: "Les organisations gèrent leurs membres sans intervention interne." },
          { number: "03", title: "Validation", text: "Les changements de rôle respectent les contraintes organisationnelles." }
        ]
      }
    },

    workflow: {
      number: "04",
      title: "Faire de l'émission de credentials un parcours scalable",
      paragraphs: [
        "Un cours typique comptait entre 20 et 50 utilisateurs accrédités.",
        "Le parcours initial imposait un formulaire long, une personne à la fois.",
        "L'effort augmentait avec les destinataires."
      ],
      approachTitle: "J'ai changé l'unité de travail.",
      approachSteps: ["Définir une fois", "Réutiliser", "Assigner en masse"],
      templateTitle: "Modèles de credentials réutilisables",
      templateText:
        "Créer une fois, réutiliser ou dupliquer.",
      bulkTitle: "Assignation en masse",
      bulkText:
        "Préparer les données des destinataires et les télécharger via CSV. Une assignation en masse prenait environ 2 minutes.",
      stat: { value: "~2 min", label: "pour une assignation en masse" }
    },

    accreditedUX: {
      number: "05",
      title: "Rendre l'expérience plus claire pour les utilisateurs accrédités",
      paragraphs: [
        "Certains parcours étaient techniquement corrects mais difficiles à comprendre.",
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
        "La navigation contextuelle s'adaptait au niveau de responsabilité de l'utilisateur."
      ],
      navFormulaText: "La navigation suit :",
      navFormula: "Rôle + organisation + responsabilité",
      navExampleTitle: "ADMIN D'ORG",
      navExample: ["Dashboard", "Organisations", "Membres", "Credentials", "Rapports"],
      navCaptionBefore: "Navigation admin",
      navCaptionAfter: "Navigation accrédité"
    },

    reporting: {
      number: "07",
      title: "Faire refléter l'organisation dans les rapports",
      paragraphs: [
        "Le problème n'était pas un manque de rapports — c'était que le business n'avait pas défini ce que chaque niveau organisationnel devait comprendre. Cela créait des informations dupliquées."
      ],
      approachTitle: "J'ai restructuré les rapports autour de niveaux de visibilité.",
      approachText:
        "Un système de rapports, une visibilité différente.",
      modelTitle: "Un système de rapports",
      modelSubtitle: "Visibilité différente",
      screens: [
        "Rapport au niveau plateforme",
        "Rapport au niveau organisation",
        "Vue filtrée"
      ],
      annotation: "Même base de rapports, visibilité différente."
    },

    expansion: {
      number: "08",
      title: "S'étendre au-delà du marché d'origine",
      paragraphs: [
        "La plateforme a grandi pour soutenir quatre organisations en Colombie et en Espagne.",
        "L'Espagne a introduit de nouvelles considérations :"
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
        "L'architecture a évolué d'un modèle business spécifique vers le soutien de différents clients et contextes.",
      diagramTitle: "EXPANSION DU MARCHÉ",
      diagram: [
        "Colombie",
        "Clients réels",
        "Nouveau marché",
        "Espagne",
        "Nouvelles exigences",
        "Architecture produit adaptable"
      ]
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
      montageTitle: "Écrans",
      montage: [
        "Dashboard",
        "Gestion de l'organisation",
        "Constructeur de credentials",
        "Assignation en masse",
        "Rapports",
        "Profil utilisateur"
      ]
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
},

  b2bCommerceV2: {
    hero: {
      tag: "COMMERCE B2B · FOURNITURES SCIENTIFIQUES",
      title: "D'achats assistés par la vente à un commerce B2B en libre-service",
      description: [
        "Une entreprise de fournitures scientifiques avait des clients, des produits et des processus de vente établis, mais aucune expérience numérique pour les relier.",
        "Les clients achetaient par l'intermédiaire des équipes commerciales, par téléphone et par catalogues imprimés. Les départements fonctionnaient avec des règles et des processus différents.",
      ],
      role: "Product Designer (de bout en bout)",
      timeline: "2 ans",
      team: "Ventes · Marketing · Achats · Comptabilité · Ingénierie",
      focus: "Stratégie produit · Discovery · Commerce B2B · UX/UI · Recherche · Architecture produit · Libre-service",
      ndaText:
        "En raison d'un accord de confidentialité (NDA), les détails commerciaux et certains visuels produits ont été généralisés, tout en préservant le processus de conception et les décisions de conception.",
    },

    challenge: {
      title: "Le défi",
      paragraphs: [
        "La demande était de construire une expérience de commerce B2B similaire à celle de Fisher Scientific.",
      ],
      pivotLabel: "Le défi",
      pivot: "Le défi n'était pas de mettre un catalogue en ligne.",
      pivotAfter:
        "C'était de transformer une opération d'achat complexe et fragmentée en une expérience en libre-service réellement utilisable par les clients.",
      summaryLabel: "Avant / Après",
      before: {
        label: "AVANT",
        sublabel: "Assisté par la vente",
        items: [
          "Téléphone",
          "Catalogues imprimés",
          "Devis",
          "Suivi manuel",
          "Départements fragmentés"
        ]
      },
      after: {
        label: "APRÈS",
        sublabel: "Libre-service",
        items: [
          "Recherche",
          "Découverte produit",
          "Devis",
          "Commandes",
          "Gestion du compte",
          "Suivi",
          "Support"
        ]
      }
    },

    productModel: {
      number: "01",
      title: "Transformer des processus métier fragmentés en un modèle produit unique",
      paragraphs: [
        "Avant de concevoir quoi que ce soit, je devais comprendre comment l'entreprise fonctionnait réellement.",
        "Les ventes, le marketing, les achats, la comptabilité et le développement avaient chacun une perspective différente du même processus commercial. J'ai animé des ateliers de discovery et cartographié ces perspectives dans un modèle produit partagé.",
      ],
      departmentsTitle: "Des départements différents. Des vues différentes du même processus.",
      departments: [
        { name: "Ventes", note: "Relations clients · Processus commerciaux" },
        { name: "Marketing", note: "Produits · Promotions · Contenu" },
        { name: "Achats", note: "Disponibilité · Approvisionnement" },
        { name: "Comptabilité", note: "Conditions clients · Règles commerciales" },
        { name: "Développement", note: "Systèmes · Données · Contraintes techniques" }
      ],
      synthesisLabel: "Synthèse",
      outputsTitle: "Un modèle produit partagé",
      outputsNote: "Le résultat n'était pas un écran. C'était une compréhension partagée qui pouvait guider les décisions produit entre les équipes.",
      outputs: [
        "Règles métier",
        "Rôles utilisateur",
        "Logique produit",
        "Contraintes système"
      ]
    },

    productDetail: {
      number: "02",
      title: "Concevoir une fiche produit autour des décisions d'achat",
      paragraphs: [
        "C'était le problème le plus difficile. Ce n'était pas un catalogue classique.",
      ],
      variantsTitle: "Les produits pouvaient avoir :",
      variants: [
        "Aucune variante, plusieurs variantes ou familles de produits",
        "Achat basé sur devis",
        "Restrictions d'achat (autorisation requise)",
        "Manipulation spéciale (matières dangereuses, glace carbonique)"
      ],
      variantsClosing:
        "Pour certains produits scientifiques, les clients pouvaient avoir besoin d'une autorisation pour les acheter. D'autres exigeaient une manipulation spéciale en raison de matières dangereuses ou de la glace carbonique.",
      questionsTitle: "La fiche produit devait donc répondre à :",
      questions: [
        "Qu'est-ce que ce produit ?",
        "Puis-je l'acheter ?",
        "Quelle version me faut-il ?",
        "Quelles conditions s'appliquent ?",
        "Ai-je besoin d'un devis ?"
      ],
      pathsTitle: "Une expérience produit, plusieurs parcours d'achat",
      paths: [
        "Achat direct",
        "Sélection de variante",
        "Famille de produits",
        "Demander un devis",
        "Restriction d'achat"
      ],
      closing:
        "Le défi était d'exposer la bonne information au bon moment sans transformer la page en un mur de règles métier.",
      ui: {
        label: "Fiche produit conceptuelle — anonymisée",
        imageLabel: "IMAGE DU PRODUIT",
        brand: "FOURNITURES SCIENTIFIQUES",
        name: "Milieu de culture cellulaire X",
        sku: "SKU 4521-900ML",
        priceLabel: "Prix",
        priceValue: "Sur demande",
        quoteLabel: "OU",
        availability: "En stock · Expédition sous 48 h",
        variantLabel: "Choisir la taille",
        variants: ["500 ml", "1 L", "2 L"],
        conditionLabel: "Conditions d'achat",
        condition: "Autorisation requise",
        conditionNote: "Matière dangereuse — achat restreint",
        handlingLabel: "Manipulation spéciale",
        handling: "Expédition avec glace carbonique",
        handlingNote: "Conditionné avec glace carbonique — livraison express",
        buyButton: "Ajouter au panier",
        quoteButton: "Demander un devis",
        infoLabel: "Éligible à la commande",
        quoteInfo: "Le prix doit être confirmé par les ventes"
      },
      callouts: [
        { number: "01", title: "Configuration du produit", text: "Variantes / familles" },
        { number: "02", title: "Parcours d'achat", text: "Acheter vs. demander un devis" },
        { number: "03", title: "Éligibilité", text: "Exigences d'autorisation" },
        { number: "04", title: "Manipulation spéciale", text: "Matières dangereuses / glace carbonique" }
      ]
    },

    searchEcosystem: {
      number: "03",
      title: "Rendre un vaste catalogue scientifique recherchable",
      paragraphs: [
        "La recherche est devenue une méthode de navigation primaire. Les acheteurs professionnels arrivaient avec des requêtes précises — nom du produit, marque, SKU — tandis que d'autres avaient besoin d'explorer.",
        "J'ai conçu la recherche comme un système de découverte, pas comme un champ.",
      ],
      systemTitle: "La recherche n'était pas un champ. C'était un système de découverte.",
      system: [
        "Autocomplétion",
        "Suggestions",
        "Recherches récentes",
        "Recherches populaires",
        "Catégories",
        "Marques",
        "Filtres",
        "Produits similaires",
        "Promotions"
      ],
      flowTitle: "De la recherche à la décision produit",
      flow: ["Recherche", "Suggestions", "Résultats", "Filtres", "Produit", "Décision"],
      flowNote: "L'objectif était d'aider les clients à passer de l'intention au bon produit sans leur demander de comprendre la structure sous-jacente du catalogue.",
      ui: {
        label: "Écosystème de recherche — conceptuel",
        tabs: ["Saisie de recherche", "Résultats", "Découverte produit"],
        inStock: "En stock",
        onDemand: "Sur demande",
        inputPlaceholder: "Rechercher produits, marques, SKU…",
        recentTitle: "Recherches récentes",
        recent: ["Extraction d'ADN", "Pipettes", "Sérum"],
        popularTitle: "Recherches populaires",
        popular: ["Culture cellulaire", "Microplaques", "Tampons"],
        suggestedTitle: "Suggéré",
        categoriesLabel: "Catégories",
        categories: ["Biologie moléculaire"],
        productsLabel: "Produits",
        products: ["Agarose LE"],
        resultsTitle: "Résultats",
        filtersTitle: "Filtres",
        filters: ["Marque", "Catégorie", "Disponibilité"],
        activeFilter: "En stock",
        resultItems: [
          { name: "Agarose LE", brand: "SciBrand", sku: "SKU 2214" },
          { name: "Agarose SEAKEM", brand: "SciBrand", sku: "SKU 2218" },
          { name: "Tris-acétate", brand: "BioLab", sku: "SKU 8810" },
          { name: "SYBR Safe", brand: "BioLab", sku: "SKU 9004" }
        ],
        discoveryTitle: "Découverte produit",
        relatedTitle: "Produits associés",
        related: ["Agarose LM", "Tampon de charge", "Ladder 1 kb"],
        promoTitle: "Promotions",
        promos: ["-20 % sur les tampons", "Livraison offerte en chaîne du froid"]
      }
    },

    twoMarkets: {
      number: "04",
      title: "Concevoir une seule plateforme pour deux marchés",
      paragraphs: [
        "La plateforme servait des clients en Espagne et au Portugal. La langue, les produits, le stock, les promotions, le contenu et les conditions commerciales différaient — mais l'objectif n'était pas deux boutiques.",
      ],
      closing: "L'objectif n'était pas deux boutiques.",
      closing2: "C'était un seul système avec des contextes différents : une expérience cohérente, un comportement propre à chaque marché.",
      platformLabel: "UNE PLATEFORME",
      spain: { label: "ESPAGNE", items: ["Espagnol", "Catalogue", "Stock", "Promotions", "Contenu", "Conditions commerciales"] },
      portugal: { label: "PORTUGAL", items: ["Portugais", "Catalogue", "Stock", "Promotions", "Contenu", "Conditions commerciales"] },
      sharedNote: "Expérience partagée + comportement propre au marché"
    },

    organization: {
      number: "05",
      title: "Concevoir le libre-service autour de l'organisation",
      paragraphs: [
        "L'achat B2B n'est pas une activité individuelle. Le produit devait représenter l'organisation derrière l'acheteur : acheteurs autorisés, permissions, adresses de livraison, activité individuelle, activité d'équipe et historique de commandes.",
      ],
      questionsIntro: "L'expérience devait répondre non seulement à",
      questions: [
        "Que puis-je acheter ?",
        "Que puis-je faire au nom de mon organisation ?"
      ],
      goal: "L'objectif était de réduire le besoin des clients de contacter les ventes pour des tâches routinières.",
      quote: "Le client n'était pas seulement un acheteur. C'était une organisation.",
      ui: {
        label: "Écrans de compte conceptuels — anonymisés",
        orgTab: "Organisation",
        orgItems: ["Membres", "Rôles et permissions", "Adresses", "Activité"],
        ordersTab: "Commandes",
        ordersItems: ["Historique", "Statut", "Détails"],
        memberName: "M. García",
        memberRole: "Acheteur",
        memberStatus: "Autorisé",
        addressLabel: "Adresse de livraison",
        address: "Madrid — Lab 3, Av. Principal 12",
        activityLabel: "Dernière activité",
        activity: "Commande #4821 · il y a 2 jours",
        orderRow: [
          { id: "#4817", status: "Livré", date: "02 sept." },
          { id: "#4821", status: "En transit", date: "09 sept." },
          { id: "#4830", status: "En cours", date: "12 sept." }
        ]
      }
    },

    postPurchase: {
      number: "06",
      title: "Relier l'achat à ce qui se passe après le checkout",
      paragraphs: [
        "L'expérience ne s'arrêtait pas au checkout. J'ai travaillé avec les développeurs et les parties prenantes pour traduire la logistique en expérience orientée client : emballage, progression de l'expédition et documentation de livraison.",
      ],
      needsTitle: "Elle devait aussi gérer ce qui se passe quand quelque chose tourne mal :",
      needs: ["Retours", "Incidents", "Support technique", "Demandes clients"],
      principleTitle: "Le client ne devrait pas avoir à comprendre la structure interne de l'entreprise pour obtenir de l'aide.",
      orderTitle: "Commande",
      orderFlow: ["Commande", "Emballage", "Expédition", "Livraison"],
      problemTitle: "Problème",
      problemFlow: ["Incident", "Support / Retour", "Acheminement interne", "Résolution"],
      principleA: "Le client décrit le problème.",
      principleB: "Le système l'achemine au bon endroit."
    },

    adoption: {
      number: "07",
      title: "Concevoir pour l'adoption, pas seulement pour le lancement",
      paragraphs: [
        "Les clients existants savaient déjà acheter. Ils savaient qui appeler, à qui écrire, comment demander un devis.",
        "Les amener au libre-service ne pouvait pas signifier les obliger à apprendre un processus complètement différent. Le produit préservait les concepts commerciaux connus tout en supprimant les frictions inutiles.",
      ],
      wrongTitle: "L'objectif n'était pas",
      wrong: "Faire que les clients utilisent le site web.",
      rightTitle: "C'était",
      right: "Rendre le site web plus facile que d'appeler."
    },

    transformation: {
      title: "Ce qui a changé",
      before: {
        label: "AVANT · Assisté par la vente",
        items: [
          "Téléphone",
          "E-mail",
          "Catalogues imprimés",
          "Devis manuels",
          "Suivi manuel des commandes",
          "Processus fragmentés"
        ]
      },
      after: {
        label: "APRÈS · Libre-service",
        items: [
          "Recherche",
          "Découverte produit",
          "Devis",
          "Commandes",
          "Gestion du compte",
          "Suivi",
          "Support",
          "Retours"
        ]
      }
    },

    outcome: {
      title: "Résultat",
      intro:
        "Le produit a réuni les processus commerciaux et opérationnels dans une expérience de commerce B2B unique au service des clients en Espagne et au Portugal.",
      sections: [
        {
          title: "Découverte produit",
          items: [
            "Recherche, catégories, marques, filtres, suggestions et produits associés."
          ]
        },
        {
          title: "Achat",
          items: [
            "Achats directs, variantes, familles de produits et produits basés sur devis coexistant dans une seule expérience."
          ]
        },
        {
          title: "Autonomie du client",
          items: [
            "Les organisations gèrent les acheteurs, les permissions, les adresses et l'activité d'achat."
          ]
        },
        {
          title: "Au-delà de l'achat",
          items: [
            "La logistique, le support, les retours et les incidents ont fait partie de l'expérience client."
          ]
        }
      ],
      glanceTitle: "Indicateurs en un coup d'œil",
      glance: [
        { value: "2 ans", label: "Évolution produit" },
        { value: "Espagne + Portugal", label: "Marchés" },
        { value: "500k+ produits", label: "Vaste catalogue" },
        { value: "Acheter · Configurer · Devis · Restreint", label: "Parcours d'achat" }
      ],
      reflectionTitle: "Réflexion",
      reflectionLead: "Le commerce B2B n'est pas qu'un simple e-commerce.",
      reflectionItems: [
        "Derrière chaque produit se cache un ensemble de règles métier.",
        "Derrière chaque acheteur se cache une organisation.",
        "Derrière chaque commande se cache un processus opérationnel.",
        "Mon rôle était de relier ces couches et d'en faire une expérience cohérente pour le client."
      ],
      reflectionClose:
        "Les meilleures expériences en libre-service ne rendent pas l'entreprise plus simple. Elles rendent sa complexité plus facile à naviguer pour les clients."
    }
  },

};


export default fr;