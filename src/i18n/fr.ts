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
          link: `${import.meta.env.BASE_URL}fr/work/credential-platform/`,
          image: `${import.meta.env.BASE_URL}images/case-studies/credential-platform/asset-01.png`
        },

        {
          title: "Des achats assistés vers le libre-service",
          category: "Commerce B2B · Plateforme entreprise",
          description:
            "Transformation d'un processus commercial traditionnel en une expérience d'achat en libre-service pour les acheteurs professionnels.",
          tags: ["Product Discovery", "Complex UX", "Self-Service", "Business Systems"],
          link: `${import.meta.env.BASE_URL}fr/work/b2b-commerce/`,
          image: `${import.meta.env.BASE_URL}images/case-studies/b2b-commerce/cover.png`
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
      "Une demande de fonctionnalité peut être un problème métier.",
      "Un écran confus peut être un problème de permissions.",
      "Une « limitation technique » peut être une décision que personne n'a revisitée.",
      "C'est pourquoi je suis le fil : je parle à celles et ceux qui connaissent le métier, je demande comment ça fonctionne aujourd'hui, où ça casse et pourquoi on en est arrivé là. Je cartographie les dépendances, je questionne les hypothèses et j'entre dans le détail quand il compte.",
      "Parfois cela mène à un nouveau parcours.",
      "Parfois cela change la structure du produit.",
      "Parfois cela signifie dire non.",
      "<strong>Je n'ai pas besoin de décider de tout. Juste comprendre assez pour aider à prendre les bonnes décisions.</strong>"
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
      tag: "PLATEFORME DE CERTIFICATS · SECTEUR ÉDUCATION ET ENTREPRISE",
      title: "D'une institution linéaire à un système multi-organisation",
      description: [
        "Une plateforme B2B où les établissements scolaires, les entreprises et les organismes certificateurs émettent, gèrent et vérifient des certificats numériques —diplômes, certificats, badges et micro-certifications— en s'appuyant sur des standards internationaux tels que Blockchain, Open Badges et les Certificats Vérifiables du W3C.",
        "Le projet partait de zéro. J'ai conçu le modèle organisationnel, le système de rôles et de permissions, la logique de crédits et les parcours qui permettent d'émettre des certificats à grande échelle sans que l'opération ne s'effondre."
      ],
      role: "Product Designer (leadership de facto sur l'UI/UX et l'équipe technique)",
      timeline: "2 ans · 3 livraisons de fonctionnalités (2 produit + 1 technique) · 4e itération en planification",
      team: "PM (manager direct) · 1 UI/UX Designer · 2 développeurs · 1 QA",
      focus: "2 fondatrices (ingénieures système) avec le mandat de répliquer un concurrent du secteur",
      ndaText:
        "Les détails ont été généralisés afin de protéger la confidentialité du client."
    },

    challenge: {
      eyebrow: "Le Défi",
      title: "Émettre des certificats à grande échelle était manuel, lent et non traçable",
      paragraphs: [
        "Une entreprise de solutions technologiques pour le secteur éducatif voulait construire de zéro une plateforme B2B permettant aux établissements scolaires, aux entreprises et aux organismes certificateurs d'émettre, gérer et vérifier des certificats numériques —diplômes, certificats, badges et micro-certifications— en s'appuyant sur des standards internationaux tels que Blockchain, Open Badges et les Certificats Vérifiables du W3C.",
        "Le projet partait de zéro. Il n'y avait aucune plateforme antérieure. Les établissements émettent manuellement : les données dans des tableurs, les designs dans des outils externes, envoyés un par un par e-mail ou en impression physique."
      ],
      painsTitle: "Trois douleurs concrètes",
      pains: [
        {
          title: "Émission manuelle et lente",
          text: "Saisir les données une par une dans les certificats, avec des designs externes et un envoi manuel."
        },
        {
          title: "Absence de traçabilité",
          text: "Personne ne savait avec certitude qui avait reçu quoi, qui l'avait attribué, quand, ni dans quel état. L'information existait, mais il fallait demander à des collègues ou écrire à la personne certifiée."
        },
        {
          title: "Pas d'auto-gestion pour l'établissement",
          text: "Les établissements dépendaient de processus manuels pour émettre, attribuer et suivre."
        }
      ],
      latentTitle: "Douleurs latentes",
      latent: [
        {
          title: "Fraude",
          text: "Aucun moyen de vérifier un certificat, sinon d'appeler l'établissement."
        },
        {
          title: "Impossibilité de passer à l'échelle",
          text: "Vers d'autres types d'établissements, reconnu dans les versions futures."
        }
      ],
      contextTitle: "Contexte business",
      context: [
        {
          label: "Modèle de facturation",
          value: "Par certificat attribué (non émis — créer des certificats est gratuit), par personne certifiée (peu importe le nombre de certificats obtenus), avec une version d'essai gratuite."
        },
        {
          label: "Marché initial",
          value: "Colombie. Pilote avec 2 entreprises de 20 à 50 personnes certifiées chacune."
        },
        {
          label: "Expansion future",
          value: "Europe, avec les exigences Europass et ELM."
        }
      ],
      pivotLabel: "Le défi de conception n'était pas…",
      pivot:
        "De faire une plateforme de certificats. Il s'agissait de concevoir le système d'organisations, de rôles, de permissions et de plans qui rendrait possible l'émission de certificats à grande échelle sans que l'opération ne s'effondre.",
      mandateLabel: "Mandat initial des parties prenantes",
      mandate:
        "Répliquer le modèle d'un concurrent du secteur. Mon travail consistait à traduire cette ambition en un système propriétaire, scalable et aligné sur les standards internationaux.",
      screenshot: {
        id: "SHOT 01",
        label: "Hero du projet — écran principal ou collage des vues clés",
        note: "Remplacer par une capture réelle. Suggestion : la liste des certificats avec ses filtres, l'expression la plus claire du produit."
      }
    },

    vision: {
      number: "01",
      title: "Vision Produit : D'une Institution Linéaire à un Système Multi-Organisation",
      paragraphs: [
        "Au départ, il n'y avait pas de multi-organisations. Le modèle était une institution linéaire : une seule chaîne de rôles, de la personne qui gérait la plateforme à l'échelle globale jusqu'à la personne certifiée.",
        "À mesure que le produit évoluait, le modèle a muté en organisation + multi-organisation."
      ],
      beforeTitle: "Institution linéaire",
      beforeRoles: [
        "Responsable plateforme",
        "Administrateur principal",
        "Administrateur secondaire",
        "Opérateur",
        "Personne certifiée"
      ],
      afterTitle: "Organisation simple",
      afterRoles: [
        "Administrateur principal",
        "Administrateur secondaire",
        "Personne certifiée"
      ],
      multiTitle: "Multi-organisation",
      multiIntro:
        "Lorsqu'une organisation principale doit gérer un réseau d'entités avec leurs propres administrateurs et certifications :",
      orgAdmin:
        "Administrateur d'organisation — crée et gère les sous-organisations, demande des plans et redistribue les crédits",
      subLabel: "Sous-organisation",
      subRoles: [
        "Administrateur principal",
        "Administrateur secondaire",
        "Personne certifiée"
      ],
      decisionTitle: "La décision stratégique",
      decisionText:
        "J'ai proposé tous les rôles et toutes les hiérarchies, en m'appuyant sur le benchmark du concurrent et sur ce que les parties prenantes exprimaient comme un besoin (« je veux pouvoir voir cela », « cette personne a besoin de savoir tel ou tel chose »). Je n'ai pas reçu de modèle de rôles ; je l'ai conçu.",
      futureTitle: "Vision future",
      future: [
        "Portail de recherche de personnes certifiées",
        "Extension en marque blanche",
        "Adaptation à d'autres pays"
      ],
      screenshot: {
        id: "SHOT 02",
        label: "Diagramme du modèle de rôles — institution linéaire vs. multi-organisation",
        note: "Remplacer par le vrai diagramme. C'est le visuel le plus important de l'étude de cas."
      }
    },

    sharedCatalog: {
      number: "02",
      title: "Décision Clé 1 : Certificats Partagés, Attributions Spécifiques",
      questionLabel: "La première question",
      question:
        "Lors de la conception de la multi-organisation, chaque sous-organisation a-t-elle ses propres certificats, ou partagent-elles le catalogue ?",
      rejectedLabel: "Alternative écartée",
      rejected: "Chaque sous-organisation avec ses propres certificats.",
      decisionLabel: "Décision retenue",
      decision:
        "Tous les certificats créés sont mis à disposition de toutes les sous-organisations, mais les attributions appartiennent à la sous-organisation spécifique qui les a effectuées.",
      whyTitle: "Pourquoi",
      why: [
        "Évite la duplication de certificats : un même badge peut être utilisé par plusieurs sous-organisations.",
        "Maintient la traçabilité : chaque attribution appartient à une sous-organisation et les historiques ne se mélangent jamais.",
        "Permet à une sous-organisation de voir tous les certificats disponibles tout en ne gérant que ses propres attributions."
      ],
      uiTitle: "Comment cela s'est reflété dans l'UI/UX",
      ui: [
        "Les sous-organisations voient tous les certificats.",
        "À l'entrée, seules leurs attributions sont affichées ; celles qui ne leur appartiennent pas apparaissent comme non attribuées.",
        "L'historique d'activité enregistre quel administrateur a fait l'attribution, et à qui (individuel ou lot)."
      ],
      typesTitle: "Types de certificat",
      types: [
        "Certificat ou badge.",
        "Ils peuvent porter une attestation.",
        "Ils peuvent appartenir à une collection : lorsque le système détecte qu'une personne certifiée a validé un cours (via Global Certifica, Moodle ou une API intégrée), il attribue automatiquement le certificat suivant de la collection."
      ],
      screenshot: {
        id: "SHOT 03",
        label: "Liste des certificats avec état d'attribution par sous-organisation",
        note: "Remplacer par une capture réelle. L'état non attribué à côté des attributions propres est ce qui rend la décision lisible."
      }
    },

    creditDistribution: {
      number: "03",
      title: "Décision Clé 2 : Crédits Distribués vs. Consommation en Temps Réel",
      questionLabel: "La question imposée par le modèle de facturation",
      question:
        "Le modèle de facturation par crédits (certificat attribué, personne certifiée) a obligé à décider comment les crédits sont gérés entre l'organisation principale et ses sous-organisations.",
      rejectedLabel: "Alternative écartée",
      rejected: "Consommation en temps réel partagée entre toutes les sous-organisations.",
      decisionLabel: "Décision retenue",
      decision:
        "Les crédits sont attribués à l'organisation principale, qui les redistribue ensuite entre ses sous-organisations.",
      whyTitle: "Pourquoi",
      why: [
        "Historique clair : si la consommation est globale, l'historique mélange les sous-organisations. Si elle est spécifique par sous-organisation, l'historique est filtrable et compréhensible.",
        "Réutilisation de composants : cela a permis de réutiliser la modale d'historique d'activité existante, en évitant d'ajouter des filtres qui auraient aussi affecté la génération de rapports.",
        "Opération maîtrisée : la consommation en temps réel entre sous-organisations était chaotique à suivre."
      ],
      uiTitle: "Comment cela s'est reflété dans l'UI/UX",
      ui: [
        "L'organisation principale dispose d'une modale pour distribuer les crédits.",
        "Elle voit combien elle a de sous-organisations, si elles ont des crédits ou non, et combien elles en ont consommés.",
        "Elle voit comment la consommation du plan total évolue dans le temps.",
        "Les administrateurs principaux peuvent demander des crédits à leur administrateur d'organisation (si multi-organisation) ou des plans à Global Certifica."
      ],
      align:
        "Alignement avec les parties prenantes : j'ai présenté les deux options et les deux parties ont convenu que la distribution des crédits était préférable à la consommation en temps réel.",
      screenshots: [
        {
          id: "SHOT 04",
          label: "Modale de distribution des crédits",
          note: "Remplacer par une capture réelle."
        },
        {
          id: "SHOT 05",
          label: "Panneau de consommation du plan",
          note: "Remplacer par une capture réelle."
        }
      ]
    },

    historyModal: {
      number: "04",
      title: "Décision Clé 3 : Réutiliser la Modale d'Historique vs. Ajouter des Filtres",
      questionLabel: "Directement liée à la décision précédente",
      question:
        "Cette décision découle directement du modèle de distribution des crédits.",
      rejectedLabel: "Alternative écartée",
      rejected:
        "Ajouter des filtres à la modale d'historique afin de gérer une consommation globale.",
      decisionLabel: "Décision retenue",
      decision:
        "Conserver la modale existante et rendre l'historique spécifique à chaque sous-organisation.",
      whyTitle: "Pourquoi",
      why: [
        "Ajouter des filtres aurait aussi affecté la génération de rapports.",
        "La modale existante couvrait déjà le cas d'usage si la consommation était gérée par sous-organisation.",
        "Moins de complexité technique, plus de clarté pour l'utilisateur."
      ],
      uiTitle: "Comment cela s'est reflété dans l'UI/UX",
      ui: [
        "La modale d'historique d'activité n'a pas été modifiée : le même composant sert désormais un périmètre plus restreint, par sous-organisation.",
        "La génération de rapports a hérité de la spécificité sans nouveaux états de filtre à concevoir, tester et traduire."
      ],
      closing:
        "C'est de la pensée systémique : une décision UX (clarté de l'historique) plus une décision technique (réutilisation d'un composant) plus une décision produit (les rapports ne se complexifient pas). Trois couches, un seul choix."
    },

    systems: {
      number: "05",
      title: "Pensée Systémique : Rôles, Permissions, Visibilité et Audit",
      paragraphs: [
        "Le cœur du produit n'est pas le certificat. C'est qui peut voir quoi, qui peut faire quoi, et comment tout cela est enregistré.",
        "Tout ce qui suit a été conçu par moi et documenté comme le contrat avec lequel l'équipe technique a construit."
      ],
      matrixTitle: "Matrice de visibilité de l'historique par rôle",
      matrixColumns: [
        "Rôle",
        "Voit sa propre activité",
        "Voit celle des autres",
        "Peut demander des crédits"
      ],
      matrixRows: [
        [
          "Administrateur principal",
          "Oui",
          "Oui",
          "À son administrateur d'organisation (multi) ou à Global Certifica"
        ],
        ["Administrateur secondaire", "Oui", "Non", "Non"],
        [
          "Administrateur d'organisation",
          "Oui",
          "Oui (ses sous-organisations)",
          "À Global Certifica"
        ],
        ["Responsable plateforme", "Oui", "Oui (global)", "S.O."]
      ],
      statesTitle: "États d'une attribution",
      statesIntro:
        "Tous les rôles d'organisation peuvent voir l'état d'une attribution à une personne certifiée :",
      states: [
        "En attente",
        "Acceptée",
        "Refusée",
        "Expirée",
        "Partagée",
        "Téléchargée",
        "Révoquée (exécutée par un administrateur)"
      ],
      eventsTitle: "Événements enregistrés dans l'historique (tous avec heure et date)",
      events: [
        "Attribution du certificat à la personne certifiée X par l'administrateur Y.",
        "Attribution du certificat au lot X par l'administrateur Y.",
        "Création du certificat Z par l'administrateur Y.",
        "Distribution de N crédits à la sous-organisation A.",
        "Certificat modifié par l'administrateur Y."
      ],
      eventsNote:
        "Événements automatiques : rappels de paiement de plan, rappels de certificat en attente, rappels de certificat expiré.",
      docsTitle: "La documentation comme contrat d'implémentation",
      docs: [
        {
          title: "Diagrammes de flux",
          text: "Pour montrer les flux parallèles et la façon dont les actions d'un rôle affectent un autre."
        },
        {
          title: "Tableaux de visibilité",
          text: "De l'historique et des événements, déclinés par rôle."
        },
        {
          title: "Cas d'usage",
          text: "Avec un enregistrement de tous les événements et permissions impliquées."
        }
      ],
      docsClosing:
        "Ce n'était pas seulement de la communication : c'était le contrat d'implémentation que l'équipe technique a utilisé pour construire.",
      screenshots: [
        {
          id: "SHOT 06",
          label: "Diagramme de flux des rôles",
          note: "Remplacer par le vrai diagramme."
        },
        {
          id: "SHOT 07",
          label: "Tableau de visibilité par rôle",
          note: "Remplacer par une capture réelle du tableau utilisé en implémentation."
        }
      ]
    },

    leadership: {
      number: "06",
      title: "Leadership : Gérer des Parties Prenantes Résistantes et S'aligner sur des Preuves",
      contextTitle: "Contexte",
      context: [
        "Les parties prenantes étaient deux fondatrices, ingénieures système, avec le mandat de répliquer un concurrent. Elles n'avaient aucune règle métier définie : elles envoyaient des vidéos du concurrent en disant « ça devrait fonctionner comme ça ».",
        "Mon travail consistait à déterminer ce qui pouvait être ajusté, ce qui ne pouvait pas l'être, et à proposer le modèle."
      ],
      resistanceTitle: "Résistance",
      resistance: [
        {
          title: "Constante",
          text: "Les décisions étaient remises en question sans contexte technique."
        },
        {
          title: "Difficile à expliquer",
          text: "Comment les actions d'un rôle affectaient les rôles en dessous, ou comment gérer les cas hors du chemin nominal."
        },
        {
          title: "Des frictions aux pire moments",
          text: "Mon manager gérait l'essentiel, mais lorsqu'il était en congé, je prenais le relais."
        }
      ],
      approachTitle: "Comment je l'ai géré",
      approach: [
        {
          title: "Diagrammes de flux",
          text: "Pour qu'ils comprennent les flux parallèles et les effets croisés entre rôles."
        },
        {
          title: "Tableaux de visibilité",
          text: "De l'historique et des événements, déclinés par rôle."
        },
        {
          title: "Cas d'usage",
          text: "Avec un enregistrement des événements et des permissions."
        },
        {
          title: "Alignement par les preuves",
          text: "Sur la décision des crédits, j'ai présenté les deux options et les deux parties ont convenu de la distribution."
        }
      ],
      processTitle: "Processus de validation",
      process:
        "Environ 90% des revalidations ont eu lieu en réunion, puis je les renvoyais par e-mail pour en garder une trace — parce que quand quelque chose ne se passait pas comme prévu, la réponse était que ce n'avait pas été correctement expliqué.",
      debtTitle: "La dette produit que personne ne possédait",
      debt:
        "Durant une période où j'étais absente, des fonctionnalités ont été ajoutées sans vision systémique. Cela a généré une dette produit qui a affecté la scalabilité. Je l'ai détectée à mon retour et je l'ai documentée comme dette technique. Elle n'a pas été entièrement résolue à l'époque, mais elle est devenue visible sur la liste des améliorations.",
      closing:
        "Gérer ce contexte ne consistait pas à parler plus fort. Il consistait à rendre le système suffisamment lisible pour que les décisions puissent être évaluées sur des preuves et non sur des préférences."
    },

    tradeoffs: {
      number: "07",
      title: "Arbitrages : Ce que Nous avons Sacrifié",
      intro:
        "Chaque décision de ce cas avait un coût. Voici celles que nous avons acceptées en connaissance de cause.",
      columns: ["Dimension", "Priorité", "Coût"],
      rows: [
        [
          "Flexibilité des rôles",
          "Au-dessus de la simplicité",
          "Complexité des permissions et de la visibilité"
        ],
        [
          "Rigueur de l'audit",
          "Au-dessus de la simplicité",
          "Un enchevêtrement d'interactions entre rôles"
        ],
        [
          "Vitesse de livraison",
          "Au-dessus de la scalabilité",
          "Dette produit"
        ],
        [
          "Absence de vision complète",
          "Les parties prenantes itéraient au fil de l'eau",
          "Difficulté à planifier l'architecture"
        ],
        [
          "Notifications en temps réel",
          "Écartées",
          "Uniquement des notifications par lots et des rappels"
        ]
      ],
      closing:
        "Ces arbitrages sont réalistes et honnêtes. Reconnaître le coût d'une décision vaut davantage que de présenter un projet sans faille."
    },

    impact: {
      number: "08",
      title: "Impact : Ce que Nous Savons (Sans Métriques Formelles)",
      limitationTitle: "Limitation honnête",
      limitation:
        "L'entreprise n'a jamais défini de métriques formelles. La mesure reposait sur la satisfaction des parties prenantes — ce qui était demandé versus ce qui a été livré — et non sur le comportement des utilisateurs finaux.",
      columns: ["Domaine", "Avant", "Après", "Preuve"],
      rows: [
        [
          "Émission de certificats",
          "Manuelle, un par un",
          "Attribution individuelle ou par lot",
          "Fonctionnalité livrée"
        ],
        [
          "Traçabilité",
          "En demandant à des collègues ou par e-mail",
          "Historique d'activité par rôle, avec événements, heure et date",
          "Fonctionnalité livrée"
        ],
        [
          "Auto-gestion de l'établissement",
          "Dépendance à des processus manuels",
          "Les organisations et sous-organisations gèrent leurs propres attributions et crédits",
          "Fonctionnalité livrée"
        ],
        [
          "Vérification",
          "En appelant l'établissement",
          "Vérification par blockchain et standards W3C",
          "Fonctionnalité livrée"
        ],
        [
          "Scalabilité",
          "Institution linéaire",
          "Multi-organisation avec rôles et permissions",
          "Fonctionnalité livrée"
        ],
        [
          "Dette produit",
          "—",
          "Fonctionnalités ajoutées sans vision systémique",
          "Documentée, en attente de remédiation"
        ]
      ],
      tableNote:
        "La colonne Preuve indique volontairement « Fonctionnalité livrée ». Quand je n'ai pas de métrique, je le dis au lieu d'en inventer une.",
      evolutionTitle: "Évolution",
      evolution: [
        "2 ans de développement.",
        "3 livraisons de fonctionnalités : 2 produit + 1 technique.",
        "4e itération en planification."
      ],
      pendingTitle: "En attente",
      pending: [
        "Analytique produit formelle",
        "Portail des personnes certifiées",
        "Marque blanche",
        "Adaptation à d'autres pays",
        "Exigences Europass et ELM"
      ],
      quoteLabel: "Phrase d'impact",
      quote:
        "J'ai conçu de zéro une plateforme B2B d'émission de certificats numériques pour des établissements scolaires et des entreprises, en définissant le modèle d'organisations, de rôles, de permissions, d'historique d'activité et de plans de crédits qui soutient l'opération actuelle du produit."
    },

    reflections: {
      number: "09",
      title: "Réflexions et Vision Future",
      intro:
        "Ce projet n'était pas qu'une refonte d'UI/UX. C'était la conception du système métier qui rend possible l'émission de certificats à grande échelle.",
      contributionTitle: "Ma plus grande contribution en tant que designer",
      contribution: [
        "Définir les rôles, hiérarchies et permissions à partir de zéro : ils ne venaient pas du brief.",
        "Concevoir le modèle multi-organisation avec certificats partagés et attributions spécifiques.",
        "Définir la logique des plans, des crédits et de la distribution entre sous-organisations.",
        "Documenter le système avec diagrammes, tableaux et cas d'usage qui ont servi de contrat d'implémentation.",
        "Tenir les décisions produit avec des preuves dans un contexte de forte friction avec les parties prenantes.",
        "Détecter et documenter la dette produit générée par des fonctionnalités ajoutées sans vision systémique."
      ],
      roadmapTitle: "Feuille de route",
      roadmap: [
        "Portail de recherche de personnes certifiées",
        "Extension en marque blanche",
        "Adaptation à d'autres pays (Europass, ELM)",
        "Analytique produit formelle",
        "Remédiation de la dette produit"
      ]
    },
  },
  b2bCommerce: {
    hero: {
      tag: "B2B COMMERCE · DISTRIBUTION DE FOURNITURES DE LABORATOIRE",
      title: "De la vente assistée à l'auto-service",
      description: [
        "Un distributeur leader de matériel, réactifs et équipements pour laboratoires du Pays Basque fonctionnait avec un processus entièrement manuel : commandes par téléphone et e-mail, catalogues en PDF, devis par e-mail et gestion des incidents sans plateforme. L'ERP était interne ; le client final n'y touchait jamais.",
        "Mon travail consistait à traduire un modèle d'affaires fragmenté et manuel en un système d'auto-service fiable, scalable, et qui ne cannibalise pas la relation client."
      ],
      role: "Product Designer (encadrant 1 UI/UX Designer et supervisant 3 développeurs)",
      timeline: "2 ans · 3 versions livrées · 4e en planification",
      team: "PM (manager direct) · PO client · Équipe technique · Marketing · Ventes · Opérations",
      focus: "Référence constante : Fisher Scientific, le concurrent principal",
      ndaText:
        "Les détails ont été généralisés afin de protéger la confidentialité du client."
    },

    challenge: {
      eyebrow: "Le Défi",
      title: "Un modèle d'affaires 100% manuel",
      paragraphs: [
        "Un distributeur leader de matériel, réactifs et équipements pour laboratoires du Pays Basque fonctionnait avec un processus entièrement manuel : commandes par téléphone et e-mail, catalogues en PDF, devis par e-mail et gestion des incidents sans plateforme. L'ERP était interne ; le client final n'y touchait jamais.",
        "Le premier problème était le coût opérationnel : chaque commande, réclamation, retour ou devis exigeait une intervention humaine. L'auto-service n'existait pas.",
        "La pression stratégique : le PDG voulait répliquer Fisher Scientific, son principal concurrent. Cela a posé une contrainte permanente — chaque décision produit était comparée à cette référence."
      ],
      objectivesTitle: "Objectifs business",
      objectiveGroups: [
        {
          version: "V1",
          items: [
            "Le client voit prix, descriptions et spécifications en temps réel.",
            "Le client peut commander sans assistance.",
            "Le client comprend les familles de produits, variantes et conditions.",
            "Le client sait quand demander un devis."
          ]
        },
        {
          version: "V2",
          items: [
            "Améliorer la recherche de produits.",
            "Permettre de générer des devis.",
            "Visualiser son propre historique d'achats et celui de ses contacts.",
            "Afficher les promotions et les appliquer.",
            "Connaître les délais de livraison et les statuts de commande."
          ]
        },
        {
          version: "V3",
          items: [
            "Améliorer le support technique et orienter chaque demande vers le bon département."
          ]
        }
      ],
      risksTitle: "Risques identifiés",
      risks: [
        {
          title: "Courbe d'adoption",
          text: "Les clients étaient habitués au processus manuel."
        },
        {
          title: "Données produit incomplètes",
          text: "Une information incomplète entraîne des achats erronés et des retours."
        },
        {
          title: "Trouver un produit",
          text: "Difficulté à trouver un produit ou des alternatives similaires."
        }
      ],
      pivotLabel: "Le défi de conception n'était pas…",
      pivot:
        "Mettre un catalogue en ligne. Il s'agissait de traduire un modèle d'affaires fragmenté et manuel en un système d'auto-service fiable, scalable, et qui ne cannibalise pas la relation client."
    },

    vision: {
      number: "01",
      title: "Vision Produit : De la Digitalisation d'un Catalogue à un Système de Commerce",
      paragraphs: [
        "Ma première décision a été de définir la vision produit. Nous ne pouvions ni répliquer le catalogue PDF ni copier Fisher Scientific sans comprendre d'abord notre propre activité."
      ],
      discoveryTitle: "Découverte",
      discoveryStats: [
        { value: "28", label: "réunions en un mois" },
        { value: "6", label: "départements impliqués" },
        { value: "1", label: "jeu de critères unifié" }
      ],
      discoveryText:
        "J'ai animé 28 réunions en un mois avec 6 départements — Ventes, Opérations, Marketing et l'équipe qui structurait les catégories du catalogue — pour cartographier le processus réel et unifier les critères. Chaque département avait sa propre compréhension et ses propres incohérences.",
      insightLabel: "L'insight clé",
      insight:
        "L'activité ne vendait pas des produits. Elle vendait l'accès aux produits, avec des règles de prix et des conditions propres à chaque client. La complexité n'était pas dans le catalogue, elle était dans les règles métier.",
      decisionLabel: "La décision stratégique",
      decision:
        "Au lieu de construire un e-commerce traditionnel, nous avons conçu un Système de Commerce avec un modèle produit unifié. L'utilisateur peut chercher un produit, l'acheter si le système le permet, ou demander un devis sinon.",
      flowTitle: "Le parcours que cela a ouvert",
      flow: [
        { step: "CHERCHER", text: "Trouver un produit par nom, référence, marque ou catégorie." },
        { step: "ACHETER OU DEVISER", text: "Le système décide quel chemin est ouvert pour ce client et ce produit." },
        { step: "HISTORIQUE", text: "Chaque devis et chaque commande alimentent l'historique du client." },
        { step: "RECOMMANDER", text: "Une commande complète peut être repassée, ou marquée comme favorite." }
      ],
      enablesTitle: "Ce que cela a laissé ouvert",
      enables: [
        "Flux d'approbation automatisés.",
        "Historique d'activité au-dessus d'un devis.",
        "Repasser une commande complète.",
        "Marquer des commandes comme favorites."
      ],
      futureTitle: "Vision future",
      future:
        "Un système qui gère en auto-service les permissions des contacts qui supervisent d'autres contacts.",
      screenshot: {
        id: "SHOT 01",
        label: "Diagramme du Système de Commerce — chercher → acheter ou deviser → historique → recommander",
        note: "Remplacer par le vrai diagramme. C'est celui qui explique tout le produit en une image."
      }
    },

    systems: {
      number: "02",
      title: "Pensée Systémique : Concevoir pour une Complexité Réelle",
      paragraphs: [
        "Les règles métier étaient plus complexes que l'interface. Chaque partie de cette section est une décision visant à rendre cette complexité lisible plutôt qu'à la cacher."
      ],
      model: {
        title: "Le modèle client / contact",
        text:
          "Nous avons découvert qu'un client se comporte comme une organisation avec plusieurs membres qui partagent les mêmes avantages. Chaque client a un code ; les contacts (employés) commandent avec ce code et en héritent des remises. Le client voit toute l'activité de ses contacts.",
        chain: ["ORGANISATION", "CONTACTS", "ACTIVITÉ"],
        outcomesTitle: "Modéliser ainsi a permis :",
        outcomes: [
          "Un historique d'achats par contact et consolidé.",
          "Une base pour les permissions futures.",
          "Un tunnel de commande pré-rempli, car plus de 85% des créateurs de commandes sont des employés, pas des propriétaires."
        ]
      },
      pdp: {
        title: "La page détail produit (PDP)",
        text:
          "Il n'existe pas de chemin nominal unique. Il y a des branches selon le type de produit : variantes, conditions, matières dangereuses, glace sèche. L'objectif reste toujours le même : chercher → sélectionner → ajouter au panier → acheter.",
        branchesTitle: "Branches sur la PDP :",
        branches: [
          "Les variantes dépendent du produit, pas du client.",
          "Ce qui concerne le client est de savoir s'il a une remise par défaut sur ce produit.",
          "Et s'il peut demander un devis sur la commande complète pour obtenir un meilleur prix."
        ],
        affectsTitle: "Ce qui varie réellement par client :",
        affects: [
          {
            label: "Remise par défaut",
            text: "Si le client a déjà une remise automatique sur ce produit."
          },
          {
            label: "Devis sur la commande complète",
            text: "Si le client peut demander un devis sur la commande complète pour obtenir un meilleur prix."
          }
        ],
        tradeoffLabel: "L'arbitrage",
        tradeoff:
          "Nous avons réconcilié des règles métier qui entraient en conflit — remise automatique contre devis manuel — en privilégiant que chaque commande soit valide dès la première tentative. Cela a réduit les erreurs et les retours, au prix de ne pas proposer d'achat en un clic."
      },
      orders: {
        title: "La complexité opérationnelle : bons de livraison",
        stat: {
          value: "65%",
          label: "des commandes étaient réparties sur plusieurs bons de livraison tout en appartenant à une seule commande"
        },
        text:
          "Le détail de commande ne pouvait pas être une liste plate. La hiérarchie devait montrer ce qui appartenait à quelle livraison sans perdre la vue d'ensemble.",
        chain: ["COMMANDE", "BON DE LIVRAISON", "LIGNE"]
      },
      search: {
        title: "La recherche comme outil de travail",
        text:
          "La recherche n'est pas une barre de recherche. Pour un acheteur professionnel, c'est un outil de découverte — et c'est comme cela que je l'ai conçue.",
        capabilities: [
          "Recherche par nom, référence, marque et catégorie.",
          "Suggestion de produits similaires (demandée par le Marketing)."
        ]
      },
      screenshots: [
        {
          id: "SHOT 02",
          label: "Arbre de décision de la PDP — variantes, conditions, remise contre devis",
          note: "Remplacer par une capture réelle. La branche où remise et devis s'affrontent est celle à montrer."
        },
        {
          id: "SHOT 03",
          label: "Détail de commande hiérarchique — commande → bon de livraison → ligne",
          note: "Remplacer par une capture réelle. L'imbrication doit être visible d'un coup d'œil."
        },
        {
          id: "SHOT 04",
          label: "Recherche unifiée — référence, marque, catégorie, produits similaires",
          note: "Remplacer par une capture réelle."
        }
      ]
    },

    execution: {
      number: "03",
      title: "Exécution et Leadership : Aligner l'Organisation",
      paragraphs: [
        "Le succès dépendait de deux choses à la fois : que ce soit techniquement possible, et que les départements l'adoptent."
      ],
      feasibilityTitle: "Ce qui rendait la chose techniquement difficile",
      feasibility: [
        "Limites de stockage des données.",
        "Stock mis à jour tous les quinze jours via Excel.",
        "Déconnexion entre les images et les produits."
      ],
      resistanceTitle: "Gérer la résistance",
      resistanceIntro:
        "Trois groupes ont poussé en sens contraire, chacun pour une raison différente. Chacun avait besoin d'une réponse différente.",
      resistance: [
        {
          stakeholder: "Ventes",
          resisted: "Résistaient parce que « les processus ne pouvaient pas être réalisés à 100% dans la plateforme ».",
          action:
            "Mon rôle a été de cartographier quelles parties du processus pouvaient être intégrées et lesquelles non, et de proposer un modèle hybride."
        },
        {
          stakeholder: "Marketing",
          resisted: "Résistaient parce qu'ils voulaient des métriques Google Analytics spécifiques.",
          action:
            "J'ai suggéré d'implémenter d'abord les plus pertinentes et d'expliquer lesquelles étaient prioritaires. Cela reste en attente."
        },
        {
          stakeholder: "PDG",
          resisted: "Voulait copier Fisher Scientific.",
          action:
            "Mon travail a été d'utiliser la référence comme repère et non comme copie, et de trouver le juste milieu entre ce que le Marketing voulait, ce que l'équipe technique approuvait et ce que le PDG exigeait."
        }
      ],
      validationTitle: "Comment nous avons validé",
      validation: [
        { label: "Analyse", text: "Ateliers avec les départements." },
        { label: "Design", text: "Revues avec les parties prenantes." },
        {
          label: "Interaction",
          text: "Prototypes pour évaluer la réponse du système, les processus de fond et les changements en temps réel."
        },
        {
          label: "A/B testing",
          text: "Avec les employés de l'entreprise elle-même — tester avec de vrais utilisateurs n'était pas autorisé."
        },
        { label: "Après lancement", text: "Retours d'utilisateurs réels après chaque déploiement." }
      ],
      supervisionTitle: "Supervision technique",
      supervision:
        "J'ai supervisé une équipe de 3 développeurs pour que ce qui est livré corresponde aux cas d'usage, aux designs et aux règles métier. J'ai également fait les tests QA aux côtés de la personne QA."
    },

    impact: {
      number: "04",
      title: "Impact : Ce que Nous Savons (Sans Métriques Formelles)",
      limitationTitle: "Limitation honnête",
      limitation:
        "L'entreprise n'a jamais défini de métriques formelles. La mesure reposait sur la satisfaction des parties prenantes — ce qui était demandé versus ce qui a été livré — et non sur le comportement des utilisateurs finaux.",
      columns: ["Domaine", "Avant", "Après", "Preuve"],
      rows: [
        [
          "Gestion des commandes",
          "100% par téléphone et e-mail",
          "Auto-service sur le portail",
          "Moins d'appels pour la gestion des commandes"
        ],
        [
          "Support technique",
          "E-mails directs sans traçabilité",
          "Tickets centralisés sur la plateforme et l'ERP",
          "Les départements reçoivent les tickets depuis la plateforme"
        ],
        [
          "Mise à jour des produits",
          "Processus lent et désorganisé",
          "Quasi immédiate pour le client",
          "Retours internes des Opérations"
        ],
        [
          "Devis",
          "Manuels, par e-mail",
          "Générables sur la plateforme",
          "Livré en V2"
        ],
        [
          "Historique d'achats",
          "Inexistant pour le client",
          "Son propre historique et celui de ses contacts visibles",
          "Livré en V2"
        ],
        [
          "Commande récurrente",
          "Manuelle",
          "Commande complète repassable et marquable comme favorite",
          "Livré en V2"
        ]
      ],
      tableNote:
        "Là où j'ai un signal qualitatif je le dis ; là où je n'ai pas de métrique je laisse la cellule telle quelle plutôt que d'en inventer une.",
      evolutionTitle: "Évolution du produit",
      evolution: [
        "3 versions livrées en 2 ans.",
        "4e version en planification."
      ],
      pendingTitle: "En attente",
      pending: [
        "Analytique",
        "Gestion avancée client / contact",
        "Retours",
        "Incidents",
        "Devis avec flux d'approbation automatisés"
      ],
      quoteLabel: "Phrase d'impact",
      quote:
        "J'ai numérisé un processus 100% manuel — téléphone, e-mail, PDF — en une plateforme d'auto-service qui gère aujourd'hui commandes, devis et support technique, réduisant les appels opérationnels et centralisant l'activité client dans l'ERP."
    },

    reflections: {
      number: "05",
      title: "Réflexions et Vision Future",
      intro:
        "Ce projet n'était pas qu'une refonte d'UI/UX. C'était la re-architecture du modèle d'affaires numérique de l'entreprise, sous de fortes contraintes techniques et une culture organisationnelle résistante au changement.",
      contributionTitle: "Ma plus grande contribution en tant que designer",
      contribution: [
        "Définir la vision produit depuis le métier, pas depuis l'UI.",
        "Unifier des départements qui fonctionnaient avec des logiques différentes.",
        "Concevoir un système qui soutient le présent et ouvre le futur — permissions, approbations, analytique.",
        "Superviser l'implémentation pour que la logique métier ne se perde pas dans le code."
      ],
      roadmapTitle: "Feuille de route — 12 prochains mois",
      roadmap: [
        "Instrumenter l'analytique produit (Google Analytics ou autre).",
        "Gestion avancée des permissions pour les contacts.",
        "Flux de retours et d'incidents.",
        "Devis avec flux d'approbation automatisés."
      ]
    },
  },

};


export default fr;
