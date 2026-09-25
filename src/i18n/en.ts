const en = {

  home: {

    hero: {

      title: "Hi, I'm Katherine.",

      paragraphs: [

        "I'm a <strong>Product Design Lead</strong> who likes figuring out how things actually work.",

        "I move between <strong class=\"hero-typewriter\" data-words=\"product direction|systems|UX|implementation\"><span class=\"tw-text\">product direction</span><span class=\"hero-caret\" aria-hidden=\"true\"></span></strong>",

        "Getting as close to the problem as I need to make a good decision.",

      ],

    },


    buttons: {
      work: "View my work"
    },

    work: {

      title: "Projects I've worked on",

      projects: [

        {
          title: "From an idea to a scalable credentialing platform",
          category: "Enterprise SaaS · Digital Credentials",
          description:
            "Designing a scalable credential management platform for multiple organizations and complex user roles.",
          tags: ["Product Strategy", "Systems Design", "Architecture", "Enterprise UX"],
          link: `${import.meta.env.BASE_URL}work/credential-platform/`,
          image: `${import.meta.env.BASE_URL}images/case-studies/credential-platform/asset-01.png`
        },

        {
          title: "From sales-assisted to self-service",
          category: "B2B Commerce · Enterprise Platform",
          description:
            "Transforming a traditional sales process into a self-service commerce experience for professional buyers.",
          tags: ["Product Discovery", "Complex UX", "Self-Service", "Business Systems"],
          link: `${import.meta.env.BASE_URL}work/b2b-commerce/`,
          image: `${import.meta.env.BASE_URL}images/case-studies/b2b-commerce/cover.png`
        }

      ],

      action: "View case study"

    },


    options: {

      fun: {
        title: "Writings",
        link: `${import.meta.env.BASE_URL}writings/`
      },

      experiments: {
        title: "Experiments",
        link: `${import.meta.env.BASE_URL}experiments/`
      }

    },


    pointOfView: {

      title: "I tend to go one layer deeper.",

      paragraphs: [

        "A product rarely starts where the brief says it does.",

        "A request for a new feature might actually be a business problem.",

        "A confusing screen might actually be a permissions problem.",

        "A “technical limitation” might be a decision nobody has revisited yet.",

        "So I like to follow the thread.",

        "I talk to the people who know the business. I ask how things work today, where they break, and why they've ended up that way. I map what depends on what, challenge assumptions, and get into the details when the details matter.",

        "Sometimes that leads to a new flow.",

        "Sometimes it changes the product structure.",

        "Sometimes it means saying no.",

        "<strong>I don't need to own every decision. I do want to understand enough to help make the right ones.</strong>"

      ]

    },


    beyond: {

      title: "Beyond the screen.",

      paragraphs: [

        "I like having a life that doesn't look like work.",

        "I move, explore, learn, make things, disappear into nature for a while, go out, stay in, read, experiment, and spend an unreasonable amount of time with my cats.",

        "Work is important to me.",

        "It just isn't the whole picture."

      ]

    },


    closing: {

      quote: "Bring me the situation.",

      sub: "Let's understand what's actually going on, figure out what matters, and decide what to do next.",

      workWithMe: "Work with me",

      copied: "Email copied",

    }

  },

  footer: {

    email: "Email",

    linkedin: "LinkedIn",

  },

  sidebar: {
    navigation: {
      work: "Work",
      experiments: "Experiments",
      fun: "Writings",
    },

    actions: {
      downloadCV: "Download CV",
      linkedin: "LinkedIn",
      email: "Email",
    },

    preferences: {
      typography: "Text size",
      typographyLarge: "Large",
      typographyMedium: "Medium",
      typographySmall: "Small",
    },
  },

  underConstruction: {
    badge: "Coming soon",
    title: "This page is under construction",
    description: "I'm working on something here. Check back soon.",
    backLabel: "View my work",
  },
  credentialPlatform: {
    hero: {
      tag: "CREDENTIAL PLATFORM · EDUCATION AND CORPORATE SECTOR",
      title: "From a linear institution to a multi-organization system",
      description: [
        "A B2B platform where educational institutions, corporations and certifying bodies issue, manage and verify digital credentials —degrees, certificates, badges and micro-credentials— using international standards such as Blockchain, Open Badges and W3C Verifiable Credentials.",
        "The project was 0 → 1. I designed the organizational model, the role and permission system, the credit logic and the workflows that make issuing credentials at scale possible without the operation collapsing."
      ],
      role: "Product Designer (de facto lead on UI/UX and the technical team)",
      timeline: "2 years · 3 feature releases (2 product + 1 technical) · 4th iteration in planning",
      team: "PM (direct manager) · 1 UI/UX Designer · 2 engineers · 1 QA",
      focus: "2 founders (systems engineers) with a mandate to replicate a sector competitor",
      ndaText:
        "Details have been generalized to protect client confidentiality."
    },

    challenge: {
      eyebrow: "The Challenge",
      title: "Issuing credentials at scale was manual, slow and untraceable",
      paragraphs: [
        "A technology company in the education sector wanted to build from scratch a B2B platform so that educational institutions, corporations and certifying bodies could issue, manage and verify digital credentials —degrees, certificates, badges and micro-credentials— using international standards such as Blockchain, Open Badges and W3C Verifiable Credentials.",
        "The project was 0 → 1. There was no prior platform. Institutions issued credentials manually: data in spreadsheets, designs in external tools, sent one by one by email or in physical print."
      ],
      painsTitle: "Three concrete pains",
      pains: [
        {
          title: "Manual, slow issuance",
          text: "Moving data into certificates one by one, with external designs and manual sending."
        },
        {
          title: "No traceability",
          text: "Nobody knew with certainty who received what, who assigned it, when, or in which state. The information existed, but you had to ask colleagues or email the accredited."
        },
        {
          title: "No institutional self-service",
          text: "Institutions depended on manual processes to issue, assign and follow up."
        }
      ],
      latentTitle: "Latent pains",
      latent: [
        {
          title: "Fraud",
          text: "There was no way to verify a credential except calling the institution."
        },
        {
          title: "Impossible to scale",
          text: "To other types of institution, recognized in future versions."
        }
      ],
      contextTitle: "Business context",
      context: [
        {
          label: "Billing model",
          value: "Per assigned credential (not issued — creating credentials is free), per accredited (no matter how many credentials they obtain), with a free trial version."
        },
        {
          label: "Initial market",
          value: "Colombia. Pilot with 2 companies of 20–50 accredited each."
        },
        {
          label: "Future expansion",
          value: "Europe, with Europass and ELM requirements."
        }
      ],
      pivotLabel: "The design challenge was not…",
      pivot:
        "Building a certificate platform. It was designing the system of organizations, roles, permissions and plans that would make it possible to issue credentials at scale without the operation collapsing.",
      mandateLabel: "Initial stakeholder mandate",
      mandate:
        "Replicate the model of a sector competitor. My work was to translate that ambition into a proprietary, scalable system aligned with international standards.",
      screenshot: {
        id: "SHOT 01",
        label: "Platform hero — main screen or collage of the key views",
        note: "Replace with a real capture. Suggested: the credential list with its filters, the clearest expression of the product."
      }
    },

    vision: {
      number: "01",
      title: "Product Vision: From Linear Institution to Multi-Organization System",
      paragraphs: [
        "At the beginning there were no multi-organizations. The model was a linear institution: a single chain of roles from the person who managed the platform globally down to the accredited.",
        "As the product evolved, the model mutated into organization plus multi-organization."
      ],
      beforeTitle: "Linear institution",
      beforeRoles: [
        "Platform owner",
        "Main administrator",
        "Secondary administrator",
        "Operator",
        "Accredited"
      ],
      afterTitle: "Simple organization",
      afterRoles: [
        "Main administrator",
        "Secondary administrator",
        "Accredited"
      ],
      multiTitle: "Multi-organization",
      multiIntro:
        "When a main organization needs to manage a network of entities with their own administrators and accreditations:",
      orgAdmin:
        "Organization administrator — creates and manages sub-organizations, requests plans and redistributes credits",
      subLabel: "Sub-organization",
      subRoles: [
        "Main administrator",
        "Secondary administrator",
        "Accredited"
      ],
      decisionTitle: "The strategic decision",
      decisionText:
        "I proposed every role and hierarchy, based on benchmarking the competitor and on what stakeholders expressed as a need (\"I want to be able to see this\", \"this person needs to know such and such\"). I did not receive a role model — I designed it.",
      futureTitle: "Future vision",
      future: [
        "Accredited search portal",
        "White-label expansion",
        "Adaptation to other countries"
      ],
      screenshot: {
        id: "SHOT 02",
        label: "Role model diagram — linear institution vs. multi-organization",
        note: "Replace with the real diagram. This is the single most important visual in the case study."
      }
    },

    sharedCatalog: {
      number: "02",
      title: "Key Decision 1: Shared Credentials, Specific Assignments",
      questionLabel: "The first question",
      question:
        "When designing multi-organization, does each sub-organization have its own credentials, or do they share the catalog?",
      rejectedLabel: "Rejected alternative",
      rejected: "Each sub-organization with its own credentials.",
      decisionLabel: "Decision taken",
      decision:
        "All created credentials are available to every sub-organization, but assignments belong to the specific sub-organization that made them.",
      whyTitle: "Why",
      why: [
        "Avoids credential duplication — the same badge can be used by several sub-organizations.",
        "Maintains traceability: each assignment belongs to one sub-organization, and histories never mix.",
        "Lets a sub-organization see every available credential while only managing its own assignments."
      ],
      uiTitle: "How it showed in the UI/UX",
      ui: [
        "Sub-organizations see all credentials.",
        "On entry, only their own assignments are shown; the ones that do not belong to them appear as unassigned.",
        "The activity history records which administrator made the assignment, and to whom (individual or batch)."
      ],
      typesTitle: "Credential types",
      types: [
        "Certificate or badge.",
        "May carry a record of achievement (constancia).",
        "May belong to a collection: when the system detects that an accredited passed a course (via Global Certifica, Moodle or an integrated API), it automatically assigns the next credential in the collection."
      ],
      screenshot: {
        id: "SHOT 03",
        label: "Credential list with assignment state per sub-organization",
        note: "Replace with a real capture. The unassigned state next to owned assignments is what makes the decision legible."
      }
    },

    creditDistribution: {
      number: "03",
      title: "Key Decision 2: Distributed Credits vs. Real-Time Consumption",
      questionLabel: "The question the billing model forced",
      question:
        "The per-credit billing model (assigned credential, accredited) forced a decision on how credits are managed between the main organization and its sub-organizations.",
      rejectedLabel: "Rejected alternative",
      rejected: "Real-time consumption shared across all sub-organizations.",
      decisionLabel: "Decision taken",
      decision:
        "Credits are assigned to the main organization, which redistributes them among its sub-organizations.",
      whyTitle: "Why",
      why: [
        "Clear history: if consumption is global, the history mixes sub-organizations. If it is specific per sub-organization, the history is filterable and understandable.",
        "Component reuse: it allowed reusing the existing activity history modal, avoiding filters that would also affect report generation.",
        "Controlled operation: real-time consumption across sub-organizations was chaotic to follow."
      ],
      uiTitle: "How it showed in the UI/UX",
      ui: [
        "The main organization has a modal to distribute credits.",
        "It sees how many sub-organizations it has, whether they have credits or not, and how many they have consumed.",
        "It sees how the consumption of the total plan changes over time.",
        "Main administrators can request credits from their organization administrator (if multi-organization) or plans from Global Certifica."
      ],
      align:
        "How it aligned with stakeholders: I presented both options and both sides agreed that distributing credits was better than real-time consumption.",
      screenshots: [
        {
          id: "SHOT 04",
          label: "Credit distribution modal",
          note: "Replace with a real capture."
        },
        {
          id: "SHOT 05",
          label: "Plan consumption panel",
          note: "Replace with a real capture."
        }
      ]
    },

    historyModal: {
      number: "04",
      title: "Key Decision 3: Reuse the History Modal vs. Add Filters",
      questionLabel: "Connected to the previous decision",
      question:
        "This decision follows directly from the credit distribution model.",
      rejectedLabel: "Rejected alternative",
      rejected:
        "Add filters to the history modal in order to support global consumption.",
      decisionLabel: "Decision taken",
      decision:
        "Keep the existing modal and make the history specific to each sub-organization.",
      whyTitle: "Why",
      why: [
        "Adding filters would also have affected report generation.",
        "The existing modal already covered the use case if consumption were handled per sub-organization.",
        "Lower technical complexity, greater clarity for the user."
      ],
      uiTitle: "How it showed in the UI/UX",
      ui: [
        "The activity history modal was not modified: the same component now serves a narrower, per-sub-organization scope.",
        "Report generation inherited the specificity without new filter states to design, test and translate."
      ],
      closing:
        "This is systems thinking: a UX decision (history clarity) plus a technical decision (component reuse) plus a product decision (reports do not get more complicated). Three layers, one choice."
    },

    systems: {
      number: "05",
      title: "Systems Thinking: Roles, Permissions, Visibility and Audit",
      paragraphs: [
        "The heart of the product is not the credentials. It is who can see what, who can do what, and how it is all recorded.",
        "Everything below was designed by me and documented as the contract the engineering team built from."
      ],
      matrixTitle: "History visibility matrix by role",
      matrixColumns: [
        "Role",
        "Sees own activity",
        "Sees others' activity",
        "Can request credits"
      ],
      matrixRows: [
        [
          "Main administrator",
          "Yes",
          "Yes",
          "From its organization administrator (multi) or from Global Certifica"
        ],
        ["Secondary administrator", "Yes", "No", "No"],
        [
          "Organization administrator",
          "Yes",
          "Yes (its sub-organizations)",
          "From Global Certifica"
        ],
        ["Platform owner", "Yes", "Yes (global)", "N/A"]
      ],
      statesTitle: "Assignment states",
      statesIntro:
        "All organization roles can see the state of an assignment to an accredited:",
      states: [
        "Pending",
        "Accepted",
        "Rejected",
        "Expired",
        "Shared",
        "Downloaded",
        "Revoked (executed by an administrator)"
      ],
      eventsTitle: "Events recorded in the history (all with time and date)",
      events: [
        "Assignment of a credential to accredited X by administrator Y.",
        "Assignment of a credential to batch X by administrator Y.",
        "Creation of credential Z by administrator Y.",
        "Distribution of N credits to sub-organization A.",
        "Credential edited by administrator Y."
      ],
      eventsNote:
        "Automatic events: plan payment reminders, pending credential reminders, expired credential reminders.",
      docsTitle: "Documentation as an implementation contract",
      docs: [
        {
          title: "Flow diagrams",
          text: "To show parallel flows and how one role's actions affect another."
        },
        {
          title: "Visibility tables",
          text: "Of history and events, broken down by role."
        },
        {
          title: "Use cases",
          text: "With a full record of every event and permission involved."
        }
      ],
      docsClosing:
        "This was not only communication: it was the implementation contract the engineering team used to build.",
      screenshots: [
        {
          id: "SHOT 06",
          label: "Role flow diagram",
          note: "Replace with the real diagram."
        },
        {
          id: "SHOT 07",
          label: "Visibility table by role",
          note: "Replace with a real capture of the table used in implementation."
        }
      ]
    },

    leadership: {
      number: "06",
      title: "Leadership: Managing Resistant Stakeholders and Aligning on Evidence",
      contextTitle: "Context",
      context: [
        "The stakeholders were two founders, systems engineers, with a mandate to replicate a competitor. They had no defined business rules: they would send videos of the competitor saying \"this is how it should work\".",
        "My work was to work out what could be adjusted, what could not, and to propose the model."
      ],
      resistanceTitle: "Resistance",
      resistance: [
        {
          title: "Constant",
          text: "Decisions were questioned without technical context."
        },
        {
          title: "Hard to explain",
          text: "How one role's actions affected the roles below it, and how to handle cases outside the happy path."
        },
        {
          title: "Friction at the worst moments",
          text: "My manager handled most of it, but when he was on vacation I stepped in."
        }
      ],
      approachTitle: "How I managed it",
      approach: [
        {
          title: "Flow diagrams",
          text: "So they could understand parallel flows and cross-role effects."
        },
        {
          title: "Visibility tables",
          text: "Of history and events, broken down by role."
        },
        {
          title: "Use cases",
          text: "With a record of events and permissions."
        },
        {
          title: "Alignment by evidence",
          text: "On the credit decision I presented both options and both sides agreed on distribution."
        }
      ],
      processTitle: "Validation process",
      process:
        "About 90% of reviews happened in the meeting, then I re-sent them by email to have a record —because when something did not turn out as expected, the claim was that it had not been explained properly.",
      debtTitle: "The product debt nobody owned",
      debt:
        "During a period I was not present, features were added without systemic vision. That generated product debt which affected scalability. I detected it when I returned and documented it as technical debt. It was not fully remediated at the time, but it became visible on the improvements list.",
      closing:
        "Managing this context was not about being louder. It was about making the system legible enough that decisions could be reviewed on evidence instead of on preference."
    },

    tradeoffs: {
      number: "07",
      title: "Trade-offs: What We Sacrificed",
      intro:
        "Every decision in this case had a cost. These are the ones we accepted knowingly.",
      columns: ["Dimension", "Priority", "Cost"],
      rows: [
        [
          "Role flexibility",
          "Above simplicity",
          "Complexity in permissions and visibility"
        ],
        [
          "Audit rigor",
          "Above simplicity",
          "A thicket of interactions between roles"
        ],
        [
          "Delivery speed",
          "Above scalability",
          "Product debt"
        ],
        [
          "Lack of a complete vision",
          "Stakeholders iterated as we went",
          "Difficulty planning the architecture"
        ],
        [
          "Real-time notifications",
          "Discarded",
          "Only batch notifications and reminders"
        ]
      ],
      closing:
        "These trade-offs are realistic and honest. Acknowledging the cost of a decision is more valuable than presenting a flawless project."
    },

    impact: {
      number: "08",
      title: "Impact: What We Know (Without Formal Metrics)",
      limitationTitle: "Honest limitation",
      limitation:
        "The company never defined formal metrics. Measurement relied on stakeholder satisfaction —what was requested versus what was delivered— not on end-user behavior.",
      columns: ["Area", "Before", "After", "Evidence"],
      rows: [
        [
          "Credential issuance",
          "Manual, one by one",
          "Individual or batch assignment",
          "Shipped functionality"
        ],
        [
          "Traceability",
          "Asking colleagues or by email",
          "Activity history by role, with events, time and date",
          "Shipped functionality"
        ],
        [
          "Institutional self-service",
          "Dependence on manual processes",
          "Organizations and sub-organizations manage their own assignments and credits",
          "Shipped functionality"
        ],
        [
          "Verification",
          "Calling the institution",
          "Verification via blockchain and W3C standards",
          "Shipped functionality"
        ],
        [
          "Scalability",
          "Linear institution",
          "Multi-organization with roles and permissions",
          "Shipped functionality"
        ],
        [
          "Product debt",
          "—",
          "Features added without systemic vision",
          "Documented, still pending remediation"
        ]
      ],
      tableNote:
        "The evidence column reads \"shipped functionality\" on purpose. Where I do not have a metric, I say so instead of inventing one.",
      evolutionTitle: "Evolution",
      evolution: [
        "2 years of development.",
        "3 feature releases: 2 product + 1 technical.",
        "4th iteration in planning."
      ],
      pendingTitle: "Still pending",
      pending: [
        "Formal product analytics",
        "Accredited portal",
        "White label",
        "Adaptation to other countries",
        "Europass and ELM requirements"
      ],
      quoteLabel: "Impact statement",
      quote:
        "I designed from scratch a B2B digital credential platform for educational institutions and corporations, defining the model of organizations, roles, permissions, activity history and credit plans that supports the product's current operation."
    },

    reflections: {
      number: "09",
      title: "Reflections and Future Vision",
      intro:
        "This project was not only a UI/UX redesign. It was the design of the business system that makes issuing credentials at scale possible.",
      contributionTitle: "My greatest contribution as a designer",
      contribution: [
        "Defining roles, hierarchies and permissions from scratch —they did not come in the brief.",
        "Designing the multi-organization model with shared credentials and specific assignments.",
        "Defining the logic of plans, credits and distribution between sub-organizations.",
        "Documenting the system with diagrams, tables and use cases that served as the implementation contract.",
        "Holding product decisions with evidence in a high-friction stakeholder context.",
        "Detecting and documenting the product debt generated by features added without systemic vision."
      ],
      roadmapTitle: "Roadmap",
      roadmap: [
        "Accredited search portal",
        "White-label expansion",
        "Adaptation to other countries (Europass, ELM)",
        "Formal product analytics",
        "Remediation of product debt"
      ]
    },
  },
  b2bCommerce: {
    hero: {
      tag: "B2B COMMERCE · LABORATORY SUPPLY DISTRIBUTION",
      title: "From assisted selling to self-service",
      description: [
        "A leading distributor of materials, reagents and equipment for laboratories in the Basque Country ran on a completely manual process: orders by phone and email, catalogs in PDF, quotes by email and incident management with no platform. The ERP was internal; the end customer never touched it.",
        "My work was to translate a fragmented, manual business model into a self-service system that was reliable, scalable, and would not cannibalize the customer relationship."
      ],
      role: "Product Designer (leading 1 UI/UX Designer and supervising 3 developers)",
      timeline: "2 years · 3 versions shipped · 4th in planning",
      team: "PM (direct manager) · Client PO · Engineering · Marketing · Sales · Operations",
      focus: "Constant benchmark: Fisher Scientific, the main competitor",
      ndaText:
        "Details have been generalized to protect client confidentiality."
    },

    challenge: {
      eyebrow: "The Challenge",
      title: "A 100% manual business model",
      paragraphs: [
        "A leading distributor of laboratory materials, reagents and equipment in the Basque Country operated a completely manual process: orders by phone and email, catalogs in PDF, quotes by email, and incident management with no platform. The ERP was internal; the end customer never touched it.",
        "Problem number one was operational cost: every order, complaint, return or quote required human intervention. Self-service did not exist.",
        "The strategic pressure: the CEO wanted to replicate Fisher Scientific, the main competitor. That set a constant constraint — every product decision was compared against that benchmark."
      ],
      objectivesTitle: "Business objectives",
      objectiveGroups: [
        {
          version: "V1",
          items: [
            "The customer sees prices, descriptions and specifications in real time.",
            "The customer can place orders without assistance.",
            "The customer understands product families, variants and conditions.",
            "The customer knows when to request a quote."
          ]
        },
        {
          version: "V2",
          items: [
            "Improve product search.",
            "Allow generating quotes.",
            "Visualize own purchase history and that of contacts.",
            "Show promotions and apply them.",
            "Know delivery times and order statuses."
          ]
        },
        {
          version: "V3",
          items: [
            "Improve technical support and route every request to the right department."
          ]
        }
      ],
      risksTitle: "Identified risks",
      risks: [
        {
          title: "Adoption curve",
          text: "Customers were accustomed to the manual process."
        },
        {
          title: "Incomplete product data",
          text: "Incomplete information leads to wrong purchases and returns."
        },
        {
          title: "Findability",
          text: "Difficulty finding products or similar alternatives."
        }
      ],
      pivotLabel: "The design challenge was not…",
      pivot:
        "Putting a catalog online. It was translating a fragmented, manual business model into a self-service system that was reliable, scalable, and would not cannibalize the customer relationship."
    },

    vision: {
      number: "01",
      title: "Product Vision: From Digitizing a Catalog to Building a Commerce System",
      paragraphs: [
        "My first decision was to define the product vision. We could not replicate the PDF catalog or copy Fisher Scientific without first understanding our own business."
      ],
      discoveryTitle: "Discovery",
      discoveryStats: [
        { value: "28", label: "meetings in one month" },
        { value: "6", label: "departments involved" },
        { value: "1", label: "shared set of criteria" }
      ],
      discoveryText:
        "I led 28 meetings in one month with 6 departments — Sales, Operations, Marketing, and the team that structured the catalog categories — to map the real process and unify criteria. Every department had its own understanding and its own inconsistencies.",
      insightLabel: "The key insight",
      insight:
        "The business did not sell products. It sold access to products, with pricing rules and conditions specific to each customer. The complexity was not in the catalog, it was in the business rules.",
      decisionLabel: "The strategic decision",
      decision:
        "Instead of building a traditional e-commerce, we designed a Commerce System with a unified product model. The user can search for a product, buy it if the system allows it, or request a quote if it does not.",
      flowTitle: "The flow this opened up",
      flow: [
        { step: "SEARCH", text: "Find a product by name, SKU, brand or category." },
        { step: "BUY OR QUOTE", text: "The system decides which path is available for this customer and this product." },
        { step: "HISTORY", text: "Every quote and order accumulates activity on the customer record." },
        { step: "REORDER", text: "A whole order can be reordered, or marked as a favorite." }
      ],
      enablesTitle: "What this left open for",
      enables: [
        "Automated approval flows.",
        "Activity history on top of a quote.",
        "Reordering a complete order.",
        "Marking orders as favorites."
      ],
      futureTitle: "Future vision",
      future:
        "A system that supports self-managed permissions for contacts who supervise other contacts.",
      screenshot: {
        id: "SHOT 01",
        label: "Commerce System diagram — search → buy or quote → history → reorder",
        note: "Replace with the real diagram. This is the diagram that explains the whole product in one image."
      }
    },

    systems: {
      number: "02",
      title: "Systems Thinking: Designing for Real Complexity",
      paragraphs: [
        "The business rules were more complex than the interface. Every part of this section is a decision to make that complexity legible instead of hiding it."
      ],
      model: {
        title: "The customer / contact model",
        text:
          "We discovered that a customer behaves like an organization with multiple members who share benefits. Each customer has a code; contacts (employees) purchase with that code and inherit its discounts. The customer sees all activity from their contacts.",
        chain: ["ORGANIZATION", "CONTACTS", "ACTIVITY"],
        outcomesTitle: "Modeling it this way allowed:",
        outcomes: [
          "Purchase history per contact and consolidated.",
          "A foundation for future permissions.",
          "Pre-filled checkout — because more than 85% of order creators are employees, not owners."
        ]
      },
      pdp: {
        title: "The product detail page (PDP)",
        text:
          "There is no single happy path. There are branches depending on the product type: variants, conditions, hazardous materials, dry ice. The goal is always the same: search → select → add to cart → buy.",
        branchesTitle: "Branches on the PDP:",
        branches: [
          "Variants depend on the product, not on the customer.",
          "What affects the customer is whether they have a default discount on that product.",
          "And whether they can request a quote for the whole order to get a better price."
        ],
        affectsTitle: "What actually varies per customer:",
        affects: [
          {
            label: "Default discount",
            text: "Whether the customer already has an automatic discount on that product."
          },
          {
            label: "Quote on the full order",
            text: "Whether the customer can request a quote for the complete order to obtain a better price."
          }
        ],
        tradeoffLabel: "The trade-off",
        tradeoff:
          "We reconciled business rules that collided (automatic discount vs. manual quote) by prioritizing that every order be valid on the first attempt. This reduced errors and returns, at the cost of not offering one-click purchasing."
      },
      orders: {
        title: "Operational complexity: delivery notes",
        stat: {
          value: "65%",
          label: "of orders were split across several delivery notes while belonging to a single order"
        },
        text:
          "The order detail could not be a flat list. So the hierarchy had to show what belongs to which delivery without losing the overall view.",
        chain: ["ORDER", "DELIVERY NOTE", "LINE"]
      },
      search: {
        title: "Search as a work tool",
        text:
          "Search is not a search box. For professional buyers it is a discovery tool, so I designed it as one.",
        capabilities: [
          "Search by name, SKU, brand and category.",
          "Suggest similar products (requested by Marketing)."
        ]
      },
      screenshots: [
        {
          id: "SHOT 02",
          label: "PDP decision tree — variants, conditions, discount vs. quote",
          note: "Replace with a real capture. The branch where discount and quote compete is the one to show."
        },
        {
          id: "SHOT 03",
          label: "Hierarchical order detail — order → delivery note → line",
          note: "Replace with a real capture. The nesting has to be visible at a glance."
        },
        {
          id: "SHOT 04",
          label: "Unified search — SKU, brand, category, similar products",
          note: "Replace with a real capture."
        }
      ]
    },

    execution: {
      number: "03",
      title: "Execution and Leadership: Aligning the Organization",
      paragraphs: [
        "Success depended on two things at once: that it was technically possible, and that the departments adopted it."
      ],
      feasibilityTitle: "What made it technically hard",
      feasibility: [
        "Data storage limits.",
        "Inventory updated biweekly via Excel.",
        "Disconnection between product images and products."
      ],
      resistanceTitle: "Managing resistance",
      resistanceIntro:
        "Three groups pushed back, each for a different reason. Each one needed a different answer.",
      resistance: [
        {
          stakeholder: "Sales",
          resisted: "Resisted because \"the processes could not be done 100% in the platform\".",
          action:
            "My role was to map which areas of the process could be integrated and which could not, and to propose a hybrid model."
        },
        {
          stakeholder: "Marketing",
          resisted: "Resisted because they wanted specific Google Analytics metrics.",
          action:
            "I suggested implementing the most relevant ones first and explaining which were the priority. It remains pending."
        },
        {
          stakeholder: "CEO",
          resisted: "Wanted to copy Fisher Scientific.",
          action:
            "My work was to use the benchmark as a reference rather than a copy, and to find the middle ground between what Marketing wanted, what engineering approved, and what the CEO demanded."
        }
      ],
      validationTitle: "How we validated",
      validation: [
        { label: "Analysis", text: "Workshops with the departments." },
        { label: "Design", text: "Reviews with stakeholders." },
        {
          label: "Interaction",
          text: "Prototypes to evaluate system response, background processes and real-time changes."
        },
        {
          label: "A/B testing",
          text: "With the company's own employees — testing with real users was not permitted."
        },
        { label: "After launch", text: "Feedback from real users after every deployment." }
      ],
      supervisionTitle: "Technical supervision",
      supervision:
        "I supervised a team of 3 developers so that what shipped matched the use cases, the designs and the business rules. I also ran QA testing alongside the QA person."
    },

    impact: {
      number: "04",
      title: "Impact: What We Know (Without Formal Metrics)",
      limitationTitle: "Honest limitation",
      limitation:
        "The company never defined formal metrics. Measurement relied on stakeholder satisfaction — what was requested versus what was delivered — not on end-user behavior.",
      columns: ["Area", "Before", "After", "Evidence"],
      rows: [
        [
          "Order management",
          "100% by phone and email",
          "Self-service in the portal",
          "Fewer calls for order management"
        ],
        [
          "Technical support",
          "Direct emails with no record",
          "Tickets centralized in the platform and the ERP",
          "Departments receive tickets from the platform"
        ],
        [
          "Product updates",
          "Slow, uncoordinated process",
          "Almost immediate for the customer",
          "Internal feedback from Operations"
        ],
        [
          "Quotes",
          "Manual, by email",
          "Generable in the platform",
          "Shipped in V2"
        ],
        [
          "Purchase history",
          "Did not exist for the customer",
          "Own history and contacts' history visible",
          "Shipped in V2"
        ],
        [
          "Reorder",
          "Manual",
          "Complete order reorderable and markable as favorite",
          "Shipped in V2"
        ]
      ],
      tableNote:
        "Where I have a qualitative signal I say so; where I do not have a metric I leave the cell as it is rather than inventing one.",
      evolutionTitle: "Product evolution",
      evolution: [
        "3 versions shipped in 2 years.",
        "4th version in planning."
      ],
      pendingTitle: "Still pending",
      pending: [
        "Analytics",
        "Advanced customer / contact management",
        "Returns",
        "Incidents",
        "Quotes with automated approval flows"
      ],
      quoteLabel: "Impact statement",
      quote:
        "I digitalized a 100% manual process (phone, email, PDFs) into a self-service platform that today manages orders, quotes and technical support, reducing operational calls and centralizing customer activity in the ERP."
    },

    reflections: {
      number: "05",
      title: "Reflections and Future Vision",
      intro:
        "This project was not only a UI/UX redesign. It was the re-architecture of the company's digital business model, under strong technical constraints and an organizational culture resistant to change.",
      contributionTitle: "My greatest contribution as a designer",
      contribution: [
        "Defining the product vision from the business, not from the UI.",
        "Unifying departments that were operating with different logics.",
        "Designing a system that supports the present and enables the future — permissions, approvals, analytics.",
        "Supervising the implementation so the business logic did not get lost in the code."
      ],
      roadmapTitle: "Roadmap — next 12 months",
      roadmap: [
        "Instrument product analytics (Google Analytics or otherwise).",
        "Advanced permission management for contacts.",
        "Returns and incident flows.",
        "Quotes with automated approval flows."
      ]
    },
  },
};

export default en;
