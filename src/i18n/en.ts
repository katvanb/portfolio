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
          link: `${import.meta.env.BASE_URL}/work/credential-platform-v2/`,
          image: `${import.meta.env.BASE_URL}images/case-studies/credential-platform-v2/asset-01.png`
        },

        {
          title: "From sales-assisted to self-service",
          category: "B2B Commerce · Enterprise Platform",
          description:
            "Transforming a traditional sales process into a self-service commerce experience for professional buyers.",
          tags: ["Product Discovery", "Complex UX", "Self-Service", "Business Systems"],
          link: `${import.meta.env.BASE_URL}/work/b2b-commerce-v2/`,
          image: `${import.meta.env.BASE_URL}images/case-studies/b2b-commerce-platform/cover.png`
        }

      ],

      action: "View case study"

    },


    options: {

      fun: {
        title: "Fun",
        link: `${import.meta.env.BASE_URL}/fun/`
      },

      experiments: {
        title: "Experiments",
        link: `${import.meta.env.BASE_URL}/experiments/`
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
      fun: "Fun",
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
      tag: "ENTERPRISE SaaS · EDTECH · DIGITAL CREDENTIALS",
      title: "Creating structure for a growing credentialing ecosystem.",
      description:
        "Designing a multi-tenant credentialing system with layered role hierarchies, reporting requirements, and scalable organization structures.",
      role: "Product Designer",
      timeline: "2 years",
      team:
        "Product Designer, UX/UI Designer, Developers, QA, PM, Product Stakeholders",
    },

    challenge: {
      eyebrow: "THE CHALLENGE",
      title: "Turning business requirements into a scalable product structure.",
  
      business: {
        title: "BUSINESS PROBLEM",
        items: [
          "No scalable structure for managing digital credentials.",
          "Lack of clarity in organizational hierarchies.",
          "No unified system for multi-organization management.",
          "Reporting requirements were undefined and inconsistent."
        ]
      },
  
      product: {
        title: "PRODUCT PROBLEM",
        items: [
          "System was initially built by replicating competitor functionality.",
          "High complexity due to interconnected workflows.",
          "Lack of clarity between platform-level vs organization-level logic.",
          "Undefined user roles and permissions structure."
        ]
      },
  
      role: {
        title: "MY FOCUS",
        items: [
          "Product discovery",
          "System architecture",
          "Role & permissions",
          "Information architecture",
          "Workflows & edge cases"
        ]
      }
    },
    
    contribution: {
      eyebrow: "MY CONTRIBUTION",
      title: "From product discovery to implementation.",
    
      items: [
        "Led product discovery and requirement analysis with business stakeholders.",
        "Defined RBAC, multi-tenant architecture, and credential lifecycle logic.",
        "Designed user flows, information architecture, and functional specifications.",
        "Co-designed the initial product release and reviewed subsequent UI implementations.",
        "Collaborated with engineering and QA to validate workflows, edge cases, and implementation consistency."
      ]
    },

    understandingSystem: {
      title: "Understanding the system",
      description:
        "The platform was designed around two complementary systems: platform governance and organization management. Role-based permissions determined how users interacted with each layer."
    },

    multiTenantArchitecture: {
      title: "Multi-tenant Architecture"
    },

    roleHierarchy: {
      title: "Role Hierarchy (RBAC)",
    
      roles: [
        {
          role: "Global Sys Admin",
          platform: "✔️",
          organization: "✔️",
          credential: "—",
          reports: "Platform-wide",
          experience: "—"
        },
        {
          role: "Multi-Organization Admin",
          platform: "✔️",
          organization: "✔️",
          credential: "—",
          reports: "Multi-org",
          experience: "—"
        },
        {
          role: "Organization Admin",
          platform: "—",
          organization: "✔️",
          credential: "✔️",
          reports: "Organization",
          experience: "—"
        },
        {
          role: "Secondary Admin",
          platform: "—",
          organization: "Limited",
          credential: "✔️",
          reports: "Limited",
          experience: "—"
        },
        {
          role: "Accredited",
          platform: "—",
          organization: "—",
          credential: "—",
          reports: "Own Activity",
          experience: "✔️"
        },
        {
          role: "Guest",
          platform: "—",
          organization: "—",
          credential: "—",
          reports: "—",
          experience: "View Shared Credentials"
        }
      ],
    
      insight: {
        title: "Turning business rules into a scalable access model.",
        description:
          "I translated fragmented business rules into a clear role and permission model, separating platform governance from organizational operations and user-facing experiences. This gave the product a consistent foundation for defining workflows, permissions, and future roles."
      }
    },

    credentialLifecycle: {
      title: "Credential Lifecycle",
      alt: "Credential lifecycle flow showing the main stages and interactions of the credentialing process."
    },

    informationArchitecture: {
      title: "Information Architecture (High Level)",
    
      description:
        "The platform exposes a different navigation structure depending on the user's organizational context, ensuring each role accesses only the modules relevant to its responsibilities.",
    
      principleTitle: "Design Principle",
    
      principleHeadline: "Context-aware navigation.",
    
      principleDescription:
        "Instead of exposing every module to every user, the platform adapts its information architecture according to organizational scope and responsibilities. This reduced navigation complexity while supporting a scalable multi-tenant architecture."
    },

    reportingComplexity: {
      title: "Reporting Complexity",
    
      columns: {
        report: "Report / Insight",
        globalPlatform: "Global Platform",
        holding: "Holding (Multi-org)",
        organization: "Organization",
        accredited: "Accredited"
      },
    
      rows: [
        {
          name: "Organizational Overview",
          values: ["✔️", "Assigned Organizations", "➖", "➖"]
        },
        {
          name: "Plan & Subscription Status",
          values: ["✔️", "✔️", "Current Plan", "➖"]
        },
        {
          name: "Plan Consumption",
          values: ["✔️", "✔️", "Own Usage", "➖"]
        },
        {
          name: "Organizational Members",
          values: ["✔️", "✔️", "✔️", "➖"]
        },
        {
          name: "Credential Inventory",
          values: ["✔️", "Shared Database", "✔️", "Own Credentials"]
        },
        {
          name: "Credential Assignments",
          values: ["✔️", "✔️", "✔️", "Own Assignments"]
        },
        {
          name: "Assignment Status",
          values: ["✔️", "✔️", "✔️", "Own Status"]
        },
        {
          name: "Credential Sharing Analytics",
          values: ["✔️", "✔️", "✔️", "Personal Activity"]
        },
        {
          name: "Administrator Activity",
          values: ["✔️", "✔️", "✔️", "➖"]
        },
        {
          name: "System Activity Logs",
          values: ["✔️", "✔️", "Organization Logs", "➖"]
        },
        {
          name: "Export Reports",
          values: ["✔️", "✔️", "✔️", "➖"]
        }
      ],

      insight:
        "Reporting was designed using progressive visibility rather than creating different reporting modules for each role. Every user accessed the same reporting ecosystem, but the available data was filtered according to their level of responsibility, reducing interface complexity while maintaining a consistent reporting experience across the platform."
    },

    constraints: {
      title: "Constraints & Design Decisions",
    
      items: [
        {
          number: "01",
          title: "Aligning Features with Business Architecture",
    
          decisionLabel: "Decision",
          decision:
            "Designed workflows around the client's business model instead of replicating competitor features.",
    
          tradeoffLabel: "Trade-off",
          tradeoff:
            "More discovery upfront, but a product that could evolve beyond feature parity."
        },
    
        {
          number: "02",
          title: "Separating Governance from Operations",
    
          decisionLabel: "Decision",
          decision:
            "Separated platform governance, organization management, and credential ownership into independent layers.",
    
          tradeoffLabel: "Trade-off",
          tradeoff:
            "Higher implementation complexity in exchange for long-term scalability."
        },
    
        {
          number: "03",
          title: "Designing Around Responsibilities",
    
          decisionLabel: "Decision",
          decision:
            "Grouped permissions by responsibilities instead of individual actions to simplify access management.",
    
          tradeoffLabel: "Trade-off",
          tradeoff:
            "More analysis upfront, significantly lower maintenance as the platform grew."
        },
    
        {
          number: "04",
          title: "Optimizing for Bulk Operations",
    
          decisionLabel: "Decision",
          decision:
            "Prioritized batch credential issuance with CSV validation over individual workflows.",
    
          tradeoffLabel: "Trade-off",
          tradeoff:
            "A more complex flow that dramatically improved administrative efficiency."
        },
    
        {
          number: "05",
          title: "Designing Reporting for Growth",
    
          decisionLabel: "Decision",
          decision:
            "Structured reporting by visibility level rather than fixed dashboards.",
    
          tradeoffLabel: "Trade-off",
          tradeoff:
            "More flexible reporting architecture despite evolving business requirements."
        }
      ]
    },

    quote:
      "Great product design is about designing architectures that keep complexity manageable as products evolve.",

    impact: {
        title: "Impact",
    
        impact: [
          "Successfully adopted by multiple organizations in Colombia.",
          "Established a scalable multi-tenant architecture for different organizational models.",
          "Standardized credential issuance through reusable workflows and role-based permissions.",
          "Improved administrative efficiency through bulk operations and self-service."
        ],
    
        highlights: [
          "6 Roles",
          "2 System Layers",
          "5 Credential States",
          "Multi-tenant Architecture",
          "Live Enterprise Product"
        ],
    
        reflection: {
          title: "Reflection",
    
          items: [
            "This project reinforced that enterprise products are rarely limited by interface complexity—they're limited by business complexity.",
            "Translating evolving business rules into a scalable architecture required balancing flexibility, governance, and usability. It strengthened my ability to transform ambiguous business requirements into scalable product architectures that balance governance, usability, and long-term growth."
          ]
        }
      },
  },

  credentialPlatformV2: {
    hero: {
      tag: "CASE STUDY",
      title: "From an idea to a scalable credentialing platform",
      description: [
        "A business concept became a live multi-tenant credentialing platform supporting four organizations across Colombia and Spain.",
        "I defined the product structure, organizational model, roles and permissions, information architecture, core workflows, and interaction patterns — working closely with product, engineering and QA as the platform evolved."
      ],
      role: "Product Designer",
      timeline: "2 years",
      team: "Product · UX/UI · Engineering · QA · Stakeholders",
      focus: "Product strategy · Product architecture · UX/UI · IA · Roles & permissions · Workflows · Edge cases",
      ndaText:
        "Details have been generalized to protect client confidentiality."
    },

    productMap: {
      id: "ASSET 01",
      label: "Product map",
      platformLabel: "CREDENTIAL PLATFORM",
      levels: [
        { number: "01", title: "Platform", chips: ["Organizations", "Roles", "Reporting"] },
        { number: "02", title: "Organization", chips: ["Members", "Credentials", "Settings"] }
      ],
      lifecycleTitle: "Credential lifecycle",
      lifecycleSteps: ["Create", "Assign", "Issue", "Report"],
      footer: "Multi-tenant · Role-based · Self-service"
    },

    roleMatrix: {
      id: "ASSET 03",
      label: "Role & permission model",
      heading: "WHO IS RESPONSIBLE FOR WHAT?",
      roles: [
        { title: "PLATFORM ADMIN", items: ["Organizations", "Members", "Credentials", "Reports"] },
        { title: "ORG ADMIN", items: ["Organizations", "Members", "Credentials", "Reports"] },
        { title: "SECONDARY ADMIN", items: ["Members", "Credentials", "Limited reporting"] },
        { title: "ACCREDITED", items: ["Own credentials", "Own information"] }
      ],
      hierarchyLabel: "THE HIERARCHY",
      hierarchyRoot: "PLATFORM",
      hierarchyBranches: [
        { name: "Organization A", children: ["Org Admin", "Secondary Admin", "Accredited"] },
        { name: "Organization B", children: ["Org Admin", "Accredited"] }
      ],
      footer: "Permissions followed organizational responsibility, not individual actions."
    },

    challenge: {
      eyebrow: "THE CHALLENGE",
      title: "There was a business model, but no product yet.",
      paragraphs: [
        "The founders knew what they wanted to sell and had a reference for the type of platform they wanted to build.",
        "What was missing was the system behind it."
      ],
      listTitle: "I needed to define:",
      items: [
        "who the different actors were",
        "how organizations related to each other",
        "what each role could see and manage",
        "how credentials moved through their lifecycle",
        "how multiple organizations could coexist",
        "how the product could evolve as the business changed"
      ],
      closing:
        "The challenge wasn't reproducing the reference product. It was turning an idea into a product architecture that could actually work.",
      asset: { id: "ASSET 02", label: "Product architecture diagram" }
    },

    businessModel: {
      number: "01",
      title: "Turn the business model into a product",
      paragraphs: [
        "I started by mapping the business rules, organizational relationships, responsibilities and operational workflows with stakeholders.",
        "Rather than reproducing the reference product, I translated the business model into a structure that could support the platform we were actually building."
      ],
      layersTitle: "Two layers emerged",
      layers: [
        {
          title: "Platform governance",
          description: "Managing the platform and its organizations."
        },
        {
          title: "Organization management",
          description:
            "Managing people, credentials and day-to-day operations within each organization."
        }
      ],
      layersNote:
        "This separation became the foundation for the platform's multi-tenant model.",
      roleTitle: "The role model evolved",
      roleIntro: "The initial model was simple:",
      roleFrom: ["Platform", "Organization", "Administrator", "Operator"],
      roleParagraphs: [
        "As the product became real, that structure was no longer enough.",
        "I reworked it into a hierarchy supporting parent organizations, sub-organizations and different levels of responsibility."
      ],
      roleGoal:
        "The goal wasn't to create more roles. It was to make responsibility explicit.",
      asset: { id: "ASSET 03", label: "Role & permission model" }
    },

    evolution: {
      number: "02",
      title: "The first launch revealed the real product",
      paragraphs: [
        "The first organization changed the project.",
        "Until then, many decisions were based on requirements and assumptions. Once real organizations started using the platform, those assumptions were tested against actual workflows."
      ],
      gapsTitle: "New customers exposed gaps around:",
      gaps: [
        "self-service",
        "permissions",
        "assignment workflows",
        "reporting",
        "organizational structure"
      ],
      closing: "The product had to evolve with them.",
      shift:
        "This shifted my role from defining the initial product to continuously shaping the system as real use cases emerged.",
      timeline: [
        "Business idea",
        "Initial product",
        "First organization",
        "Real workflows",
        "New edge cases",
        "Product evolution",
        "4 organizations"
      ],
      asset: { id: "ASSET 04", label: "Product evolution" }
    },

    selfService: {
      number: "03",
      title: "Replace operational work with self-service",
      paragraphs: [
        "Initially, clients depended on the internal team for operational changes.",
        "They needed the team to:"
      ],
      items: [
        "create organizations",
        "add members",
        "change roles",
        "modify plan credits",
        "manage consumption"
      ],
      transition: ["That worked at a small scale.", "It wouldn't scale."],
      resultTitle: "I moved those operations into the product.",
      resultText:
        "Clients could create organizations, add members and manage roles themselves.",
      beforeTitle: "Before",
      beforeFlow: ["Client request", "Internal team", "Manual change"],
      afterTitle: "After",
      afterFlow: ["Client", "Organization settings", "Change completed"],
      contributionTitle: "Design contribution",
      contribution: [
        "Self-service architecture",
        "Permission logic",
        "UI flow",
        "Edge cases",
        "Validation states"
      ],
      mgmtUi: {
        id: "ASSET 06",
        label: "Organization & member management UI",
        title: "Organizations",
        newMember: "+ New member",
        orgName: "Acme Organization",
        orgMeta: "48 members · 3 admins",
        membersTitle: "Members",
        searchPlaceholder: "Search members…",
        filterLabel: "Filter ▾",
        columns: ["Name", "Role", "Status"],
        rows: [
          { name: "Ana Torres", role: "Org Admin", status: "Active" },
          { name: "Luis Pérez", role: "Secondary Admin", status: "Active" },
          { name: "Marta Ruiz", role: "Accredited", status: "Pending" },
          { name: "Carlos Díaz", role: "Accredited", status: "Active" }
        ],
        detailLabel: "MEMBER",
        detailName: "Marta Ruiz",
        roleLabel: "Role",
        roleValue: "Accredited ▾",
        orgLabel: "Organization",
        orgValue: "Acme Organization",
        credsLabel: "Credentials",
        credsValue: "12 issued · 2 pending",
        cancel: "Cancel",
        save: "Save",
        callouts: [
          { number: "01", title: "Role visibility", text: "Users only see actions their responsibility allows." },
          { number: "02", title: "Self-service", text: "Organizations manage members without internal intervention." },
          { number: "03", title: "Validation", text: "Role changes respect organizational constraints." }
        ]
      }
    },

    workflow: {
      number: "04",
      title: "Turn credential issuance into a scalable workflow",
      paragraphs: [
        "A typical course could have 20–50 accredited users.",
        "The original workflow required entering information through an extensive form, one person at a time.",
        "That meant effort increased directly with the number of recipients."
      ],
      approachTitle: "I changed the unit of work.",
      approachText: "Instead of creating every credential from scratch:",
      approachSteps: ["Define once", "Reuse", "Assign in bulk"],
      templateTitle: "Reusable credential templates",
      templateText:
        "Organizations could create a credential once and reuse or duplicate it.",
      bulkTitle: "Bulk assignment",
      bulkText:
        "Organizations could prepare recipient information and upload it through CSV. With the data ready, a multiple assignment could take approximately 2 minutes.",
      beforeTitle: "BEFORE",
      beforeFlow: [
        "Recipient 1 → Form",
        "Recipient 2 → Form",
        "Recipient 3 → Form",
        "…",
        "Recipient 50 → Form"
      ],
      afterTitle: "AFTER",
      afterFlow: [
        "Credential template",
        "Prepare CSV",
        "Upload",
        "Review",
        "Assign to 20–50 users"
      ],
      stat: { value: "~2 min", label: "for a bulk assignment" },
      uiTitle: "UI sequence",
      ui: [
        "Credential template",
        "Upload CSV",
        "Data validation",
        "Review recipients",
        "Assignment confirmation"
      ],
      assetA: { id: "ASSET 07", label: "Workflow transformation" },
      assetB: { id: "ASSET 08", label: "UI sequence" }
    },

    accreditedUX: {
      number: "05",
      title: "Make the experience clearer for accredited users",
      paragraphs: [
        "Scaling the administrative side revealed another issue: some workflows were technically correct but difficult to understand.",
        "Users struggled with:"
      ],
      issues: ["unfamiliar labels", "long registration", "information required too early"],
      mentalTitle:
        "I redesigned the entry experience around a simpler mental model:",
      mentalBold: "Get into the product → Complete your profile",
      mentalText:
        "Instead of requiring everything during account creation, users could access their account through a dedicated link and complete or edit their profile afterward.",
      beforeTitle: "Before",
      beforeFlow: ["Invitation", "Long registration", "Account"],
      afterTitle: "After",
      afterFlow: ["Invitation", "Account", "Complete profile"],
      annotations: [
        "Reduced initial cognitive load",
        "Deferred non-essential information",
        "Clearer separation of tasks"
      ],
      asset: { id: "ASSET 09", label: "UX before / after" }
    },

    permissions: {
      number: "06",
      title: "Design permissions around responsibility",
      paragraphs: [
        "As organizations became more autonomous, permissions became a core product problem."
      ],
      wrongQIntro: "The question wasn't:",
      wrongQuestion: "What can this user click?",
      rightQIntro: "It was:",
      rightQuestion:
        "What information and actions should this person be responsible for?",
      modelText:
        "I structured permissions around organizational responsibility rather than treating every action as an isolated permission.",
      modelTitle: "The model accounted for:",
      model: [
        "platform governance",
        "parent organizations",
        "sub-organizations",
        "primary and secondary administrators",
        "credential management",
        "reporting",
        "accredited users"
      ],
      navTitle: "Context-aware navigation",
      navParagraphs: [
        "The same principle shaped the information architecture.",
        "Users didn't need every module available in the platform."
      ],
      navFormulaText: "Navigation adapted to:",
      navFormula: "Role + organization + responsibility",
      navExampleTitle: "ORG ADMIN",
      navExample: ["Dashboard", "Organizations", "Members", "Credentials", "Reports"],
      navCaptionBefore: "Admin navigation",
      navCaptionAfter: "Accredited navigation",
      asset: { id: "ASSET 10", label: "IA + navigation" }
    },

    reporting: {
      number: "07",
      title: "Make reporting reflect the organization",
      paragraphs: [
        "The problem wasn't simply a lack of reports.",
        "The business hadn't yet fully defined what each organizational level needed to understand. That created duplicated information and reports that didn't answer the right questions."
      ],
      approachTitle:
        "I restructured reporting around visibility levels rather than creating completely separate reporting experiences for every role.",
      approachText:
        "The same reporting ecosystem could serve different users while information was filtered according to organizational responsibility.",
      modelTitle: "One reporting system",
      modelSubtitle: "Different visibility",
      screens: [
        "Platform-level report",
        "Organization-level report",
        "Filtered view"
      ],
      annotation: "Same reporting foundation, different visibility.",
      asset: { id: "ASSET 11", label: "Reporting model + UI" }
    },

    expansion: {
      number: "08",
      title: "Expand the product beyond its original market",
      paragraphs: [
        "As more organizations joined, the product eventually supported four organizations across Colombia and Spain.",
        "The Spanish opportunity introduced new considerations:"
      ],
      considerations: [
        "GDPR",
        "currency",
        "geolocation",
        "education systems",
        "organizational structures",
        "white-label requirements"
      ],
      noteTitle: "These weren't simply additional screens.",
      noteText: "They challenged assumptions embedded in the original product.",
      conclusion:
        "The architecture therefore had to evolve from supporting a specific business model and market into supporting different customers and contexts.",
      diagramTitle: "INITIAL ASSUMPTIONS",
      diagram: [
        "Colombia",
        "Real customers",
        "New market",
        "Spain",
        "New requirements",
        "Adaptable product architecture"
      ],
      asset: { id: "ASSET 12", label: "Expansion / adaptation diagram" }
    },

    whatChanged: {
      title: "What changed",
      columns: ["From", "To"],
      rows: [
        ["Business idea", "Product strategy + architecture"],
        ["Reference product", "Business-specific product"],
        ["Internal operational dependency", "Client self-service"],
        ["One-by-one issuance", "Bulk assignment"],
        ["One-off credentials", "Reusable templates"],
        ["Flat role model", "Hierarchical organization model"],
        ["Fixed reporting", "Visibility-based reporting"],
        ["Colombia assumptions", "Colombia + Spain"],
        ["Initial launch", "4 organizations"]
      ],
      metrics: [
        { value: "2 years", label: "Product evolution" },
        { value: "4", label: "Organizations · Colombia + Spain" },
        { value: "20–50", label: "Users in a typical bulk assignment" },
        { value: "~2 min", label: "Bulk assignment workflow" }
      ]
    },

    outcome: {
      title: "Outcome",
      paragraphs: [
        "The product moved from an initial business idea to a live multi-tenant credentialing platform.",
        "Organizations could manage their own structure and members. Credential teams could create reusable templates and assign credentials in bulk. Roles and permissions evolved with increasingly sophisticated organizational structures. Reporting became aligned with organizational visibility.",
        "The architecture was no longer tied to the original reference product."
      ],
      closing: "It had become a system that could adapt.",
      montageTitle: "A system designed to evolve.",
      montage: [
        "Dashboard",
        "Organization management",
        "Credential builder",
        "Bulk assignment",
        "Reports",
        "User profile"
      ],
      asset: { id: "ASSET 14", label: "Final product montage" }
    },

    lessons: {
      title: "What I learned",
      heading: "Designing the system, not just the screen",
      paragraphs: [
        "The hardest part wasn't designing individual screens.",
        "It was making product decisions while the business itself was still taking shape.",
        "Requirements were incomplete. Organizational structures evolved. Real customers challenged assumptions.",
        "My role was to create enough structure to support the business today without making tomorrow's changes unnecessarily expensive."
      ],
      quote:
        "Good product design doesn't just solve today's workflow. It creates enough structure for the product to evolve without breaking."
    }
  },

  b2bCommercePlatform: {
    hero: {
      tag: "B2B COMMERCE · SCIENTIFIC SUPPLIES",
      title: "From sales-assisted purchasing to self-service.",
      description:
        "Transforming fragmented purchasing workflows into a centralized digital experience for enterprise customers across Spain and Portugal.",
      role: "Product Designer",
      timeline: "2 years",
      team:
        "Product Designer, UX/UI Designer, Developers, QA, PM, Client Development Team, Business Stakeholders",
      ndaText:
        "Due to a Non-Disclosure Agreement (NDA), some business details and product visuals have been generalized while preserving the design process, challenges, and outcomes.",
    },

    challenge: {
      title: "The Challenge",

      before: {
        label: "Before",
        image: `${import.meta.env.BASE_URL}images/case-studies/b2b-commerce-platform/before.png`,
        items: [
          "Phone",
          "Email",
          "Printed Catalogs",
          "Quotes",
          "Manual tracking",
          "Fragmented departments"
        ]
      },

      after: {
        label: "After",
        image: `${import.meta.env.BASE_URL}images/case-studies/b2b-commerce-platform/after.png`,
        items: [
          "Self-service",
          "Search",
          "Quotes",
          "Orders",
          "Tracking",
          "Purchase history"
        ]
      },

      goal: {
      label: "Goal",
      description:
        "Transform fragmented commercial operations into a unified self-service experience where enterprise customers could independently search products, request quotations, monitor orders, and manage purchasing activities from a single platform."
      },
    },

    contribution: {
      eyebrow: "My Contribution",

      title: "Shaping the product from the inside out",

      description:
        "Throughout the project, I led product discovery and requirements analysis across major releases, translating business needs and operational complexity into implementation-ready product requirements.",

      items: [
        "Facilitating cross-functional discovery workshops with business stakeholders",

        "Leading requirement analysis and translating business needs into product requirements",

        "Defining user flows, use cases, information architecture, navigation, and functional logic",

        "Designing search behavior and key product interactions",

        "Co-designing key product interfaces during the initial release and establishing patterns that guided subsequent releases",

        "Producing functional specifications and collaborating closely with engineering throughout implementation",

        "Serving as the product design reference during implementation, validating interaction logic, edge cases, navigation, and design consistency across engineering and QA",

        "Supporting QA and reviewing subsequent UI designs to ensure alignment with business rules, workflows, technical constraints, and the evolving product"
      ],

      note:
        "Although technical ERP integrations were implemented by the client's engineering team, I worked closely with stakeholders and developers to define how enterprise data should translate into meaningful user experiences."
    },

    businessDiscovery: {
      title: "Business Discovery",
      departments: [
        "Sales",
        "Marketing",
        "Procurement",
        "Accounting",
        "Development"
      ],
      workshops: "Discovery Workshops",
      sharedUnderstanding: "Shared Understanding",
      note: "Different departments described the same workflow differently."
    },

    constraints: {
      title: "Constraints",

      items: [
        {
          number: "01",
          title: "Legacy business processes",

          decisionLabel: "Decision",
          decision:
            "Used the competitor experience as a reference while adapting it to the client's business rules, refining and automating existing processes where possible.",

          tradeoffLabel: "Trade-off",
          tradeoff:
            "More discovery and process analysis upfront, but a familiar experience that still reflected how the business actually operated."
        },

        {
          number: "02",
          title: "Organizational silos",

          decisionLabel: "Decision",
          decision:
            "Mapped how different departments understood and interacted with the same commercial processes to identify gaps, dependencies, and conflicting assumptions.",

          tradeoffLabel: "Trade-off",
          tradeoff:
            "More alignment work upfront, but fewer assumptions carried into the product."
        },

        {
          number: "03",
          title: "ERP-driven data",

          decisionLabel: "Decision",
          decision:
            "Designed the platform around the ERP as the source of truth, allowing the underlying data structure to evolve without repeatedly changing the user-facing experience.",

          tradeoffLabel: "Trade-off",
          tradeoff:
            "More dependency on the ERP and more upfront architectural work, but a more consistent product experience as the business data evolved."
        },

        {
          number: "04",
          title: "Constantly evolving product information",

          decisionLabel: "Decision",
          decision:
            "Designed a compact visual hierarchy for product categories, balancing imagery, density, and scanability across a large and constantly changing catalog.",

          tradeoffLabel: "Trade-off",
          tradeoff:
            "Less room for each category to be visually prominent, but a faster way to scan and navigate a broad product range."
        },

        {
          number: "05",
          title: "Complex purchasing rules",

          decisionLabel: "Decision",
          decision:
            "Translated customer-specific pricing, accounts, quotes, inventory, and purchasing conditions into flows that could be understood and managed through the platform.",

          tradeoffLabel: "Trade-off",
          tradeoff:
            "More conditional logic, but a more accurate self-service experience for professional buyers."
        },

        {
          number: "06",
          title: "Incremental implementation across multiple releases",

          decisionLabel: "Decision",
          decision:
            "Designed foundations that could evolve across multiple releases instead of treating each release as a separate product.",

          tradeoffLabel: "Trade-off",
          tradeoff:
            "Some improvements had to be phased over time, but the experience could evolve without repeatedly rebuilding its foundations."
        }
      ]
    },

    impact: {
      title: "Impact",
    
        impactSections: [
          {
            title: "Customer Self-Service",
            items: [
              "Quotations initiated through the platform",
              "Order tracking adoption",
              "Purchase history and reorder usage",
              "Shopping list adoption"
            ]
          },

          {
            title: "Operational Efficiency",
            items: [
              "Product availability inquiries",
              "Order status inquiries",
              "Quotation status inquiries",
              "Purchases based on outdated catalogs"
            ]
          },

          {
            title: "Product Discovery",
            items: [
              "Search success rate",
              "Product detail engagement",
              "Search refinement rate",
              "Successful product identification before quotation"
            ]
          }
        ],
    
        reflection: {
          title: "Reflection",
    
          items: [
            "Digital transformation starts with understanding how a business operates, where information breaks down, and how systems can restore clarity and autonomy.",
            "This project strengthened my ability to navigate ambiguity, facilitate cross-functional conversations, and translate complex operational workflows into scalable digital experiences.",
            "The most valuable lesson was that self-service is not simply about moving transactions online. It is about giving customers the information and visibility they need to act with confidence."
          ]
        }
    },
  },

  b2bCommerceV2: {
    hero: {
      tag: "B2B COMMERCE · SCIENTIFIC SUPPLIES",
      title: "From sales-assisted purchasing to self-service",
      description: [
        "Designing a B2B commerce platform for scientific supplies, where products, customers, markets, and purchasing rules all came with their own conditions.",
      ],
      role: "Product Designer",
      timeline: "2 years",
      team: "Product · UX/UI · Engineering · QA · Client Development · Business Stakeholders",
      focus: "Product strategy · Discovery · B2B commerce · UX/UI · Search · Product architecture · Self-service",
      ndaText:
        "Due to an NDA, some business details and product visuals have been generalized while preserving the design process and design decisions.",
    },

    challenge: {
      title: "The Brief",
      paragraphs: [
        "Build a B2B commerce experience similar to Fisher Scientific.",
        "The business already had customers, products and established sales processes. What it didn't have was a digital experience that brought those pieces together.",
        "Customers were used to purchasing through sales teams, while departments operated with different processes and rules.",
      ],
      pivotLabel: "The challenge",
      pivot:
        "The challenge wasn't putting a catalog online.",
      pivotAfter:
        "It was turning a complex purchasing operation into a self-service experience customers could actually use.",
      summaryLabel: "The 30-second summary",
      before: {
        label: "BEFORE",
        sublabel: "Sales-assisted purchasing",
        items: [
          "Phone",
          "Email",
          "Printed catalogs",
          "Quotes",
          "Manual tracking",
          "Fragmented departments"
        ]
      },
      after: {
        label: "AFTER",
        sublabel: "Self-service commerce",
        items: [
          "Search",
          "Product discovery",
          "Quotes",
          "Orders",
          "Account management",
          "Tracking",
          "Support"
        ]
      }
    },

    productModel: {
      number: "01",
      title: "Turn fragmented business processes into one product model",
      paragraphs: [
        "Before designing the interface, I needed to understand how the business actually worked.",
        "Sales, marketing, procurement, accounting and development each had a different perspective on the same commercial process. I facilitated discovery workshops and mapped those perspectives into a shared product model.",
      ],
      departmentsTitle: "Different departments. Different versions of the same process.",
      departments: [
        { name: "Sales", note: "Customer relationships · Commercial processes" },
        { name: "Marketing", note: "Products · Promotions · Content" },
        { name: "Procurement", note: "Availability · Purchasing" },
        { name: "Accounting", note: "Customer conditions · Commercial rules" },
        { name: "Development", note: "Systems · Data · Technical constraints" }
      ],
      synthesisLabel: "Synthesis",
      outputsTitle: "One shared product model",
      outputsNote: "The output wasn't a screen. It was a shared understanding of the business that could guide product decisions across teams.",
      outputs: [
        "Business rules",
        "User roles",
        "Product logic",
        "System constraints"
      ]
    },

    productDetail: {
      number: "02",
      title: "Design a product detail experience around purchasing decisions",
      paragraphs: [
        "The product detail page became one of the hardest problems in the platform. This wasn't a conventional catalog.",
      ],
      variantsTitle: "Products could have:",
      variants: [
        "no variants",
        "multiple variants",
        "product families",
        "quotation-based purchasing",
        "purchase restrictions",
        "special handling requirements"
      ],
      variantsClosing:
        "For some scientific products, customers might need authorization to purchase them. Others required special handling because of hazardous materials or dry ice.",
      questionsTitle: "So the product page needed to answer more than:",
      questions: [
        "What is this product?",
        "Can I buy it?",
        "Which version do I need?",
        "What conditions apply?",
        "Do I need a quotation?"
      ],
      pathsTitle: "One product experience, multiple purchasing paths",
      paths: [
        "Direct purchase",
        "Variant selection",
        "Product family",
        "Request quotation",
        "Purchase restriction"
      ],
      closing:
        "The challenge was exposing the right information at the right moment without turning the product page into a wall of business rules.",
      ui: {
        label: "Conceptual product detail — anonymized",
        brand: "SCIENTIFIC SUPPLIES",
        name: "Cell Culture Medium X",
        sku: "SKU 4521-900ML",
        priceLabel: "Price",
        priceValue: "On request",
        quoteLabel: "OR",
        availability: "In stock · Ships in 48h",
        variantLabel: "Select size",
        variants: ["500 ml", "1 L", "2 L"],
        conditionLabel: "Purchase conditions",
        condition: "Authorization required",
        conditionNote: "Hazardous material — restricted purchase",
        handlingLabel: "Special handling",
        handling: "Dry ice shipping",
        handlingNote: "Packaged with dry ice — expedited delivery",
        buyButton: "Add to cart",
        quoteButton: "Request quotation",
        infoLabel: "Eligible for order",
        quoteInfo: "Price must be confirmed by sales"
      },
      callouts: [
        { number: "01", title: "Product configuration", text: "Variants / families" },
        { number: "02", title: "Purchasing path", text: "Buy vs. request quotation" },
        { number: "03", title: "Eligibility", text: "Authorization requirements" },
        { number: "04", title: "Special handling", text: "Hazardous materials / dry ice" }
      ],
      takeaway:
        "I understand business rules and know how to translate them into UI."
    },

    searchEcosystem: {
      number: "03",
      title: "Make a large scientific catalog searchable",
      paragraphs: [
        "Search became one of the main ways customers navigated the catalog. Professional buyers could arrive with a precise query — product name, brand, SKU or characteristics — while others needed to explore.",
        "I designed search to support both behaviors.",
      ],
      systemTitle: "Search wasn't a field. It was a discovery system.",
      system: [
        "Autocomplete",
        "Suggestions",
        "Recent searches",
        "Popular searches",
        "Categories",
        "Brands",
        "Products",
        "Filters",
        "Similar products",
        "Promotions"
      ],
      flowTitle: "From search to product decision",
      flow: ["Search", "Suggestions", "Results", "Filters", "Product", "Decision"],
      flowNote: "The goal was to help customers move from intent to the right product without requiring them to understand the underlying catalog structure.",
      ui: {
        label: "Search ecosystem — conceptual",
        inputPlaceholder: "Search products, brands, SKUs…",
        recentTitle: "Recent searches",
        recent: ["DNA extraction", "Pipettes", "Serum"],
        popularTitle: "Popular searches",
        popular: ["Cell culture", "Microplates", "Buffers"],
        suggestedTitle: "Suggested",
        categoriesLabel: "Categories",
        categories: ["Molecular Biology"],
        productsLabel: "Products",
        products: ["Agarose LE"],
        resultsTitle: "Results",
        filtersTitle: "Filters",
        filters: ["Brand", "Category", "Availability"],
        activeFilter: "In stock",
        resultItems: [
          { name: "Agarose LE", brand: "SciBrand", sku: "SKU 2214" },
          { name: "Agarose SEAKEM", brand: "SciBrand", sku: "SKU 2218" },
          { name: "Tris-Acetate", brand: "BioLab", sku: "SKU 8810" },
          { name: "SYBR Safe", brand: "BioLab", sku: "SKU 9004" }
        ],
        discoveryTitle: "Product discovery",
        relatedTitle: "Related products",
        related: ["Agarose LM", "Loading buffer", "Ladder 1kb"],
        promoTitle: "Promotions",
        promos: ["20% on buffers", "Free shipping on cold-chain"]
      }
    },

    twoMarkets: {
      number: "04",
      title: "Design one platform for two markets",
      paragraphs: [
        "The platform served customers in Spain and Portugal. The experience needed to remain consistent while allowing market-specific behavior around language, products, stock, promotions, content and commercial conditions.",
      ],
      closing: "The goal was not to create two separate storefronts.",
      closing2: "It was to create one system with different contexts.",
      platformLabel: "ONE PLATFORM",
      spain: { label: "SPAIN", items: ["Spanish", "Catalog", "Stock", "Promotions", "Content"] },
      portugal: { label: "PORTUGAL", items: ["Portuguese", "Catalog", "Stock", "Promotions", "Content"] },
      sharedNote: "Shared experience + market-specific behavior"
    },

    organization: {
      number: "05",
      title: "Design self-service around the organization",
      paragraphs: [
        "B2B purchasing isn't always an individual activity. The product needed to represent the organization behind the buyer: authorized buyers, permissions, shipping addresses, individual activity, team activity and order history.",
      ],
      questionsIntro: "The experience had to answer not only",
      questions: [
        "What can I buy?",
        "What can I do on behalf of my organization?"
      ],
      goal: "The goal was to reduce the need for customers to contact sales for routine account and purchasing tasks.",
      quote: "The customer wasn't just a buyer. They were an organization.",
      ui: {
        label: "Conceptual account screens — anonymized",
        orgTab: "Organization",
        orgItems: ["Members", "Roles & permissions", "Addresses", "Activity"],
        ordersTab: "Orders",
        ordersItems: ["History", "Status", "Details"],
        memberName: "M. García",
        memberRole: "Buyer",
        memberStatus: "Authorized",
        addressLabel: "Shipping address",
        address: "Madrid — Lab 3, Av. Principal 12",
        activityLabel: "Last activity",
        activity: "Order #4821 · 2 days ago",
        orderRow: [
          { id: "#4817", status: "Delivered", date: "Sep 02" },
          { id: "#4821", status: "In transit", date: "Sep 09" },
          { id: "#4830", status: "Processing", date: "Sep 12" }
        ]
      }
    },

    postPurchase: {
      number: "06",
      title: "Connect purchasing with what happens after checkout",
      paragraphs: [
        "The digital experience didn't stop at checkout. I worked with developers and stakeholders to translate logistics information into a customer-facing experience, including packaging, shipment progress and delivery documentation.",
      ],
      needsTitle: "The experience also needed to handle what happened when something went wrong.",
      needs: ["Returns", "Incidents", "Technical support", "Customer requests"],
      principleTitle: "The customer shouldn't have to understand the company's internal structure to get help.",
      orderTitle: "Order",
      orderFlow: ["Order", "Packaging", "Shipment", "Delivery"],
      problemTitle: "Problem",
      problemFlow: ["Issue", "Support / Return", "Internal routing", "Resolution"],
      principleA: "Customer describes the problem.",
      principleB: "The system routes it to the right place."
    },

    adoption: {
      title: "Designing for adoption",
      paragraphs: [
        "Existing customers already knew how to buy. They knew who to call, who to email, how to request a quotation and who to contact when something went wrong.",
        "Moving them to self-service couldn't mean forcing them to learn a completely different business process. The product preserved familiar commercial concepts while removing unnecessary friction.",
      ],
      wrongTitle: "The goal wasn't",
      wrong: "Make customers use the website.",
      rightTitle: "It was",
      right: "Make the website easier than calling."
    },

    transformation: {
      title: "The transformation",
      before: {
        label: "BEFORE · Sales-assisted",
        items: [
          "Phone",
          "Email",
          "Printed catalogs",
          "Manual quotations",
          "Manual order follow-up",
          "Fragmented processes"
        ]
      },
      after: {
        label: "AFTER · Self-service",
        items: [
          "Search",
          "Product discovery",
          "Quotes",
          "Orders",
          "Account management",
          "Tracking",
          "Support",
          "Returns"
        ]
      }
    },

    outcome: {
      title: "The outcome",
      intro:
        "The product brought commercial and operational processes into one B2B commerce experience serving customers across Spain and Portugal.",
      sections: [
        {
          title: "Product discovery",
          items: [
            "Customers could search a large scientific catalog through search, categories, brands, filters, suggestions and related products."
          ]
        },
        {
          title: "Purchasing",
          items: [
            "Different purchasing conditions could coexist within one experience — from direct purchases and variants to product families and quotation-based products."
          ]
        },
        {
          title: "Customer autonomy",
          items: [
            "Organizations could manage buyers, permissions, addresses and purchasing activity through the platform."
          ]
        },
        {
          title: "Beyond the purchase",
          items: [
            "Logistics, support, returns and incidents became part of the customer experience rather than disconnected processes."
          ]
        }
      ],
      glanceTitle: "Outcome at a glance",
      glance: [
        { value: "2 years", label: "Product evolution" },
        { value: "Spain + Portugal", label: "Multi-market experience" },
        { value: "500k+ products", label: "Large catalog" },
        { value: "Buy · Configure · Quote · Restricted", label: "Multiple purchasing paths" }
      ],
      reflectionTitle: "Reflection",
      reflectionLead: "B2B commerce is not just e-commerce.",
      reflectionItems: [
        "Behind every product is a set of business rules.",
        "Behind every buyer is an organization.",
        "Behind every order is an operational process.",
        "My role was to connect those layers and turn them into an experience that felt coherent to the customer."
      ],
      reflectionClose:
        "The best self-service experiences don't make the business simpler. They make its complexity easier for customers to navigate."
    }
  }
};

export default en;