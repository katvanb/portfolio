const en = {

  home: {

    hero: {
      eyebrow: "PRODUCT DESIGNER",
      title: "Turning complexity into clarity.",
      description:
        "I help teams transform complex systems and business challenges into intuitive, scalable experiences.",

      workButton: "View my work",
      aboutButton: "About me",
      aboutLink: `${import.meta.env.BASE_URL}/about/`,
    },


    buttons: {
      work: "View my work",
      about: "About me"
    },

    work: {

      title: "Projects I've worked on",

      projects: [

        {
          title: "Structure for a credentialing ecosystem",
          category: "Enterprise SaaS · Digital Credentials",
          description:
            "Designing a scalable credential management platform for multiple organizations and complex user roles.",
          link: `${import.meta.env.BASE_URL}/work/credential-platform/`
        },

        {
          title: "From sales-assisted to self-service",
          category: "B2B Commerce · Enterprise Platform",
          description:
            "Transforming a traditional sales process into a self-service commerce experience for professional buyers.",
          link: `${import.meta.env.BASE_URL}/work/b2b-commerce-platform/`
        }

      ],

      action: "View case study"

    },


    aboutPreview: {

      eyebrow: "ABOUT ME",

      title:
        "I bridge business goals, user needs, and technical constraints.",

      description:
        "With a background in Systems Engineering and Product Design, I help teams transform complex requirements into scalable, user-centered digital products.",

      link: `${import.meta.env.BASE_URL}/about/`,

      action: "More about me"

    }

  },


  about: {

    hero: {
      eyebrow: "ABOUT ME",

      title:
        "Designing products begins long before pixels.",

      paragraphs: [
        "I believe great digital experiences are built by understanding systems, people, and business goals.",

        "My role is to transform complexity into clear, scalable, and meaningful product experiences."
      ]
    },


    background: {
      eyebrow: "BACKGROUND",

      title:
        "From systems to experiences.",

      paragraphs: [
        "My background in Systems Engineering shaped the way I approach design.",

        "It taught me to think in terms of architecture, dependencies, scalability, and how different parts of a system interact.",

        "When I transitioned into Product Design, I discovered that these same skills helped me solve a different challenge: making complex products easier for people to understand and use.",

        "Today, I work at the intersection of business strategy, user experience, and technical feasibility."
      ]
    },


    process: {

      eyebrow: "APPROACH",

      title:
        "How I turn complexity into clarity.",

      intro:
        "Every product has its own challenges. My process starts by understanding the problem behind the interface and creating solutions that balance user needs, business goals, and technical constraints.",


      steps: [

        {
          number: "01",
          title: "Understand",
          description:
            "I explore the ecosystem around the product: users, workflows, business objectives, and technical limitations to understand the real problem behind the request."
        },

        {
          number: "02",
          title: "Structure",
          description:
            "I create information architectures, user flows, and systems that transform complexity into clear and scalable foundations."
        },

        {
          number: "03",
          title: "Design",
          description:
            "I translate insights into intuitive interfaces, design systems, and interactions that make complex processes easier to use."
        },

        {
          number: "04",
          title: "Collaborate",
          description:
            "I work closely with stakeholders and development teams to align vision, feasibility, and product impact."
        }

      ]

    },


    principles: {

      eyebrow: "PRINCIPLES",

      title:
        "What guides my work.",


      items: [

        {
          title: "Clarity over complexity",

          description:
            "The best solutions are not always the most complex ones. They are the ones people can understand and use with confidence."
        },

        {
          title: "Systems thinking",

          description:
            "I look beyond individual screens to understand how products, users, and business processes connect."
        },

        {
          title: "Continuous learning",

          description:
            "Design is constantly evolving. I stay curious, experiment, and use new tools—including AI—to improve the way I work."
        }

      ]

    },


    beyond: {

      eyebrow: "BEYOND DESIGN",

      title:
        "Curiosity fuels my work.",


      paragraphs: [

        "Outside of product design, I'm constantly exploring new ways to learn, create, and understand the world around me.",

        "I enjoy studying languages, reading about psychology and technology, painting, and experimenting with new tools that expand the way I think.",

        "I believe curiosity is one of the most valuable skills a designer can develop."

      ]

    }

  },

  footer: {

    title: "Have a complex product challenge?",

    description:
      "If you're building products with complex systems, enterprise workflows, or AI-powered experiences, I'd love to help make them easier to understand and use.",

    email: "Email",

    linkedin: "LinkedIn",

    copyright:
      "© 2026 Katherine Gaspare",

    credits: [
      "Designed in Figma.",
      "Built with Astro.",
      "Crafted by me, with AI as a creative partner."
    ]

  },

  sidebar: {
    navigation: {
      work: "Work",
      about: "About",
      experiments: "Experiments",
      writing: "Writing",
    },

    actions: {
      downloadCV: "Download CV",
      linkedin: "LinkedIn",
      email: "Email",
    },
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
        image: "/images/case-studies/b2b-commerce-platform/before.png",
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
        image: "/images/case-studies/b2b-commerce-platform/after.png",
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