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
          link: `${import.meta.env.BASE_URL}/work/credential-platform/`,
          image: `${import.meta.env.BASE_URL}images/case-studies/credential-platform/cover.png`
        },

        {
          title: "From sales-assisted to self-service",
          category: "B2B Commerce · Enterprise Platform",
          description:
            "Transforming a traditional sales process into a self-service commerce experience for professional buyers.",
          tags: ["Product Discovery", "Complex UX", "Self-Service", "Business Systems"],
          link: `${import.meta.env.BASE_URL}/work/b2b-commerce-platform/`,
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
  }
};

export default en;