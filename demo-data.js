// ============================================================
// EDSTELLAR SIP — DEMO SHELL DATA FILE
// Company: Arcova Infrastructure Pte. Ltd.
// Industry: Infrastructure & Construction
// Size: ~800 employees
// HQ: Singapore | Offices: India, UAE, Malaysia
// SIP Level: L3 Active (L1 + L2 complete, L3 in progress)
// Last updated: March 2026
// ============================================================

const DEMO = {

  // ----------------------------------------------------------
  // 1. COMPANY PROFILE
  // ----------------------------------------------------------
  company: {
    name: "Arcova Infrastructure Pte. Ltd.",
    shortName: "Arcova",
    logo: "ARCOVA",
    industry: "Infrastructure & Construction",
    founded: 2009,
    hq: "Singapore",
    offices: ["Singapore", "Mumbai", "Dubai", "Kuala Lumpur"],
    employeeCount: 812,
    activeSIPLevel: 3,
    sipStartDate: "September 2025",
    strategicGoals: [
      "Expand digital delivery capability across all project sites by Q4 2026",
      "Achieve ISO 45001 & ISO 9001 compliance across all regional offices by Q3 2026",
      "Build internal BIM and smart infrastructure competency to reduce third-party dependency by 40%",
      "Develop a succession-ready leadership pipeline for 12 critical roles by end of FY2026"
    ],
    products: [
      "Civil & Structural Engineering",
      "Smart Building Solutions",
      "Infrastructure Asset Management",
      "Environmental & Sustainability Consulting"
    ],
    clients: ["Changi Airport Group", "NHAI (India)", "Dubai Roads Authority", "Gamuda (Malaysia)"],
    hrisConnected: "Workday",
    lmsConnected: "Cornerstone OnDemand"
  },

  // ----------------------------------------------------------
  // 2. ORG HIERARCHY
  // ----------------------------------------------------------
  orgStructure: {
    businessUnits: [
      { id: "BU01", name: "Engineering & Delivery", headcount: 324 },
      { id: "BU02", name: "Digital & Technology", headcount: 118 },
      { id: "BU03", name: "Corporate Functions", headcount: 198 },
      { id: "BU04", name: "Sustainability & EHS", headcount: 172 }
    ],
    departments: [
      { id: "D01", bu: "BU01", name: "Structural Engineering",   headcount: 112 },
      { id: "D02", bu: "BU01", name: "Civil & Geotechnical",     headcount: 98  },
      { id: "D03", bu: "BU01", name: "Project Delivery",         headcount: 114 },
      { id: "D04", bu: "BU02", name: "BIM & Digital Delivery",   headcount: 54  },
      { id: "D05", bu: "BU02", name: "IT Infrastructure",        headcount: 64  },
      { id: "D06", bu: "BU03", name: "Finance & Procurement",    headcount: 76  },
      { id: "D07", bu: "BU03", name: "Human Resources",          headcount: 48  },
      { id: "D08", bu: "BU03", name: "Legal & Compliance",       headcount: 74  },
      { id: "D09", bu: "BU04", name: "EHS & Risk",               headcount: 96  },
      { id: "D10", bu: "BU04", name: "Sustainability Advisory",  headcount: 76  }
    ],
    jobRoles: [
      "Chief Executive Officer", "Chief Human Resources Officer", "Chief Digital Officer",
      "VP Engineering", "VP Finance", "VP Sustainability",
      "Senior Project Manager", "Project Manager", "Assistant Project Manager",
      "Principal Structural Engineer", "Senior Structural Engineer", "Structural Engineer",
      "BIM Manager", "BIM Coordinator", "BIM Modeller",
      "Site Engineer", "Site Supervisor", "Safety Officer",
      "HR Business Partner", "L&D Manager", "Talent Acquisition Specialist",
      "Finance Controller", "Procurement Manager", "Contract Administrator",
      "Sustainability Consultant", "EHS Auditor", "Environmental Engineer",
      "IT Systems Administrator", "Cybersecurity Analyst", "Data Analyst",
      "Legal Counsel", "Compliance Officer"
    ]
  },

  // ----------------------------------------------------------
  // 3. SKILL FRAMEWORK (SkillForge Output — AI Generated)
  // ----------------------------------------------------------
  skillFramework: {
    generatedOn: "14 October 2025",
    approvedOn: "28 October 2025",
    approvedBy: "Tier 3 — CHRO",
    totalDomains: 6,
    totalSkills: 48,
    totalCompetencies: 8,
    domains: [
      {
        id: "SK01", name: "Engineering & Technical",
        skills: [
          { id: "SK0101", name: "Structural Analysis & Design",       criticality: "Critical" },
          { id: "SK0102", name: "Civil Engineering Fundamentals",     criticality: "Critical" },
          { id: "SK0103", name: "Geotechnical Engineering",           criticality: "High"     },
          { id: "SK0104", name: "Building Information Modelling (BIM)",criticality: "Critical" },
          { id: "SK0105", name: "Construction Materials Science",     criticality: "High"     },
          { id: "SK0106", name: "MEP Coordination",                   criticality: "Medium"   },
          { id: "SK0107", name: "Value Engineering",                  criticality: "High"     },
          { id: "SK0108", name: "Infrastructure Asset Management",    criticality: "High"     }
        ]
      },
      {
        id: "SK02", name: "Project & Programme Management",
        skills: [
          { id: "SK0201", name: "Project Planning & Scheduling",      criticality: "Critical" },
          { id: "SK0202", name: "Risk Management",                    criticality: "Critical" },
          { id: "SK0203", name: "Contract & Claims Management",       criticality: "High"     },
          { id: "SK0204", name: "Budget Control & Cost Management",   criticality: "Critical" },
          { id: "SK0205", name: "Stakeholder Management",             criticality: "High"     },
          { id: "SK0206", name: "Resource Planning",                  criticality: "High"     },
          { id: "SK0207", name: "Programme Governance",               criticality: "Medium"   }
        ]
      },
      {
        id: "SK03", name: "Digital & Technology",
        skills: [
          { id: "SK0301", name: "Digital Project Delivery",           criticality: "Critical" },
          { id: "SK0302", name: "Data Analytics & Visualisation",     criticality: "High"     },
          { id: "SK0303", name: "Cybersecurity Fundamentals",         criticality: "High"     },
          { id: "SK0304", name: "Cloud Infrastructure",               criticality: "Medium"   },
          { id: "SK0305", name: "AI & Machine Learning Literacy",     criticality: "High"     },
          { id: "SK0306", name: "ERP & Enterprise Systems",           criticality: "Medium"   },
          { id: "SK0307", name: "IoT & Smart Infrastructure",         criticality: "High"     }
        ]
      },
      {
        id: "SK04", name: "EHS & Sustainability",
        skills: [
          { id: "SK0401", name: "ISO 45001 — OHS Management",        criticality: "Critical" },
          { id: "SK0402", name: "Site Safety Management",             criticality: "Critical" },
          { id: "SK0403", name: "Environmental Impact Assessment",    criticality: "High"     },
          { id: "SK0404", name: "ESG Reporting & Compliance",         criticality: "High"     },
          { id: "SK0405", name: "Carbon Footprint & Net Zero",        criticality: "High"     },
          { id: "SK0406", name: "Regulatory & Legal Compliance",      criticality: "Critical" }
        ]
      },
      {
        id: "SK05", name: "Finance & Commercial",
        skills: [
          { id: "SK0501", name: "Financial Modelling & Analysis",     criticality: "High"     },
          { id: "SK0502", name: "Procurement & Tendering",            criticality: "High"     },
          { id: "SK0503", name: "Contract Law & Dispute Resolution",  criticality: "High"     },
          { id: "SK0504", name: "Commercial Risk Assessment",         criticality: "High"     },
          { id: "SK0505", name: "Internal Audit & Controls",          criticality: "Medium"   }
        ]
      },
      {
        id: "SK06", name: "Leadership & People",
        skills: [
          { id: "SK0601", name: "Strategic Leadership",               criticality: "Critical" },
          { id: "SK0602", name: "Team Leadership & Development",      criticality: "High"     },
          { id: "SK0603", name: "Cross-Cultural Communication",       criticality: "High"     },
          { id: "SK0604", name: "Change Management",                  criticality: "High"     },
          { id: "SK0605", name: "Coaching & Mentoring",               criticality: "Medium"   },
          { id: "SK0606", name: "Conflict Resolution",                criticality: "Medium"   }
        ]
      }
    ],
    competencies: [
      { id: "C01", name: "Execution Excellence",     type: "Behavioural" },
      { id: "C02", name: "Safety Mindset",            type: "Behavioural" },
      { id: "C03", name: "Innovation & Adaptability", type: "Behavioural" },
      { id: "C04", name: "Collaboration",             type: "Behavioural" },
      { id: "C05", name: "Commercial Acumen",         type: "Functional"  },
      { id: "C06", name: "Client Focus",              type: "Functional"  },
      { id: "C07", name: "Data-Driven Decision Making",type: "Functional" },
      { id: "C08", name: "Ethical Leadership",        type: "Leadership"  }
    ],
    proficiencyScale: [
      { level: 1, label: "Awareness",     desc: "Understands the concept; requires guidance to apply" },
      { level: 2, label: "Working",       desc: "Applies independently in standard situations"         },
      { level: 3, label: "Practitioner",  desc: "Applies in complex situations; guides others"         },
      { level: 4, label: "Expert",        desc: "Defines standards; recognised internal authority"     }
    ]
  },

  // ----------------------------------------------------------
  // 4. PLATFORM METRICS (Dashboard Numbers)
  // ----------------------------------------------------------
  platformMetrics: {
    // Workforce
    totalEmployees: 812,
    employeesWithPassport: 748,
    passportCoverage: 92,
    assessedEmployees: 681,
    assessmentCoverage: 84,

    // Skill Intelligence
    avgProficiencyScore: 2.3,
    maxProficiencyScore: 4.0,
    criticalGapsIdentified: 14,
    highGapsIdentified: 22,
    skillsAboveTarget: 38,
    skillsBelowTarget: 62,
    orgReadinessScore: 61,       // out of 100
    gapClosureSinceL1: 27,       // percent

    // Assessment
    totalAssessmentsRun: 9,
    assessmentCyclesCompleted: 2,
    avgCompletionRate: 87,
    avgAssessmentScore: 68,      // percent

    // Training (L3)
    activeProgrammes: 7,
    employeesEnrolled: 284,
    programmesCompleted: 3,
    avgKirkpatrickL1: 4.2,       // out of 5
    avgKirkpatrickL2: 74,        // percent knowledge gain
    certIssuedThisCycle: 186,

    // Platform health
    dataQualityScore: 91,
    aiConfidenceScore: 88,
    activeUsers30Days: 634,

    // By region
    byRegion: [
      { region: "Singapore", employees: 198, avgProficiency: 2.6, readiness: 71 },
      { region: "Mumbai",    employees: 312, avgProficiency: 2.2, readiness: 58 },
      { region: "Dubai",     employees: 187, avgProficiency: 2.4, readiness: 64 },
      { region: "Kuala Lumpur", employees: 115, avgProficiency: 2.1, readiness: 54 }
    ],

    // By department — gap scores
    byDepartment: [
      { dept: "BIM & Digital Delivery",   avgGap: 1.4, readiness: 44, criticalGaps: 4, trend: "improving" },
      { dept: "Project Delivery",         avgGap: 1.1, readiness: 52, criticalGaps: 3, trend: "improving" },
      { dept: "Structural Engineering",   avgGap: 0.7, readiness: 68, criticalGaps: 1, trend: "stable"    },
      { dept: "EHS & Risk",               avgGap: 0.6, readiness: 72, criticalGaps: 2, trend: "improving" },
      { dept: "Civil & Geotechnical",     avgGap: 0.8, readiness: 65, criticalGaps: 1, trend: "stable"    },
      { dept: "IT Infrastructure",        avgGap: 1.2, readiness: 49, criticalGaps: 2, trend: "at risk"   },
      { dept: "Finance & Procurement",    avgGap: 0.5, readiness: 74, criticalGaps: 0, trend: "stable"    },
      { dept: "HR",                       avgGap: 0.4, readiness: 78, criticalGaps: 0, trend: "stable"    },
      { dept: "Legal & Compliance",       avgGap: 0.6, readiness: 71, criticalGaps: 1, trend: "stable"    },
      { dept: "Sustainability Advisory",  avgGap: 0.9, readiness: 63, criticalGaps: 0, trend: "improving" }
    ],

    // Skill gap heatmap (top critical skills × departments — gap score 0–4)
    gapHeatmap: {
      skills: ["BIM", "Digital Delivery", "Risk Mgmt", "AI Literacy", "ISO 45001", "Data Analytics"],
      departments: ["BIM & Digital", "Project Delivery", "Structural Eng", "EHS & Risk", "IT Infra"],
      values: [
        [1.8, 1.4, 0.6, 0.4, 1.1],   // BIM
        [1.6, 1.3, 0.8, 0.3, 1.4],   // Digital Delivery
        [0.9, 1.1, 0.7, 1.2, 0.6],   // Risk Mgmt
        [2.1, 1.8, 1.4, 1.0, 1.6],   // AI Literacy
        [0.4, 0.6, 0.3, 0.2, 0.5],   // ISO 45001
        [1.7, 1.2, 0.9, 0.8, 1.3]    // Data Analytics
      ]
    },

    // Proficiency distribution (% of employees at each level)
    proficiencyDistribution: {
      labels: ["Awareness (L1)", "Working (L2)", "Practitioner (L3)", "Expert (L4)"],
      values: [28, 42, 24, 6]
    },

    // Gap closure trend (monthly — Oct 25 to Mar 26)
    gapClosureTrend: {
      months: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
      gapScore: [1.62, 1.54, 1.41, 1.28, 1.19, 1.08],
      readiness: [44, 48, 52, 56, 59, 61]
    },

    // L3 training progress
    trainingProgress: {
      programmes: [
        { name: "BIM Fundamentals & Revit",         enrolled: 54, completed: 48, score: 76, status: "Completed"   },
        { name: "Digital Project Delivery",          enrolled: 62, completed: 57, score: 72, status: "Completed"   },
        { name: "ISO 45001 Lead Implementer",        enrolled: 38, completed: 34, score: 81, status: "Completed"   },
        { name: "AI & Data Literacy for Engineers",  enrolled: 72, completed: 41, score: 68, status: "In Progress" },
        { name: "Advanced Risk & Contract Mgmt",     enrolled: 44, completed: 18, score: 71, status: "In Progress" },
        { name: "Strategic Leadership Programme",    enrolled: 28, completed: 8,  score: 74, status: "In Progress" },
        { name: "ESG & Carbon Reporting",            enrolled: 46, completed: 0,  score: 0,  status: "Upcoming"   }
      ]
    }
  },

  // ----------------------------------------------------------
  // 5. EMPLOYEE PROFILES (8 fictional employees)
  // ----------------------------------------------------------
  employees: [
    {
      id: "EMP001",
      name: "Priya Menon",
      role: "Senior Project Manager",
      dept: "Project Delivery",
      bu: "Engineering & Delivery",
      location: "Singapore",
      yearsAtCompany: 6,
      employmentType: "Full-time",
      manager: "Rahul Kapoor (VP Engineering)",
      passportStatus: "Verified",
      overallProficiency: 2.9,
      readinessScore: 74,
      persona: "high_performer",
      skills: [
        { skill: "Project Planning & Scheduling",  target: 3, current: 3, source: "Assessment" },
        { skill: "Risk Management",                target: 3, current: 2, source: "Assessment" },
        { skill: "Stakeholder Management",         target: 3, current: 3, source: "Assessment" },
        { skill: "Digital Project Delivery",       target: 3, current: 2, source: "Assessment" },
        { skill: "Budget Control & Cost Mgmt",     target: 3, current: 3, source: "Assessment" },
        { skill: "BIM",                            target: 2, current: 1, source: "Self-declared" },
        { skill: "AI & ML Literacy",               target: 2, current: 1, source: "Assessment" }
      ],
      gaps: [
        { skill: "Digital Project Delivery", gapScore: 1.0, priority: "High"     },
        { skill: "Risk Management",          gapScore: 0.8, priority: "High"     },
        { skill: "AI & ML Literacy",         gapScore: 1.2, priority: "Critical" },
        { skill: "BIM",                      gapScore: 0.6, priority: "Medium"   }
      ],
      learningPath: [
        { programme: "AI & Data Literacy for Engineers", status: "In Progress", progress: 64, dueDate: "Apr 2026" },
        { programme: "Digital Project Delivery",         status: "Completed",   progress: 100,dueDate: "Dec 2025" },
        { programme: "Advanced Risk & Contract Mgmt",    status: "Not Started", progress: 0,  dueDate: "Jun 2026" }
      ],
      idp: {
        goals: [
          { goal: "Achieve BIM Coordinator proficiency by Q3 2026", status: "On Track"  },
          { goal: "Complete PMP recertification by Q2 2026",         status: "On Track"  },
          { goal: "Lead one digital delivery project end-to-end",    status: "In Progress"}
        ],
        nextReview: "June 2026"
      },
      assessments: [
        { name: "L2 Skills Assessment — PM Track", date: "Nov 2025", score: 74, status: "Completed" },
        { name: "360 Feedback — Leadership",       date: "Dec 2025", score: 78, status: "Completed" }
      ],
      certificates: [
        { name: "Project Management Professional (PMP)", issuer: "PMI",       date: "2022", verified: true  },
        { name: "Digital Project Delivery — L2",         issuer: "Edstellar", date: "Dec 2025", verified: true }
      ]
    },
    {
      id: "EMP002",
      name: "Tariq Al-Rashidi",
      role: "BIM Manager",
      dept: "BIM & Digital Delivery",
      bu: "Digital & Technology",
      location: "Dubai",
      yearsAtCompany: 3,
      employmentType: "Full-time",
      manager: "Mei Lin Chua (Chief Digital Officer)",
      passportStatus: "Verified",
      overallProficiency: 2.1,
      readinessScore: 48,
      persona: "critical_gap",
      skills: [
        { skill: "Building Information Modelling", target: 4, current: 2, source: "Assessment" },
        { skill: "Digital Project Delivery",       target: 3, current: 2, source: "Assessment" },
        { skill: "IoT & Smart Infrastructure",     target: 3, current: 1, source: "Assessment" },
        { skill: "Data Analytics & Visualisation", target: 3, current: 1, source: "Assessment" },
        { skill: "AI & ML Literacy",               target: 3, current: 1, source: "Assessment" },
        { skill: "Project Planning",               target: 2, current: 2, source: "Assessment" }
      ],
      gaps: [
        { skill: "BIM (Advanced)",         gapScore: 2.1, priority: "Critical" },
        { skill: "AI & ML Literacy",       gapScore: 2.0, priority: "Critical" },
        { skill: "IoT & Smart Infra",      gapScore: 1.8, priority: "Critical" },
        { skill: "Data Analytics",         gapScore: 1.6, priority: "High"     }
      ],
      learningPath: [
        { programme: "BIM Fundamentals & Revit",        status: "Completed",   progress: 100,dueDate: "Nov 2025" },
        { programme: "AI & Data Literacy for Engineers", status: "In Progress", progress: 32, dueDate: "Apr 2026" },
        { programme: "IoT & Smart Infrastructure",       status: "Not Started", progress: 0,  dueDate: "Jul 2026" }
      ],
      idp: {
        goals: [
          { goal: "Reach BIM Expert (L4) by end of FY2026",        status: "At Risk"    },
          { goal: "Lead BIM rollout for Dubai Metro Phase 2 project",status: "In Progress"},
          { goal: "Complete Autodesk BIM Professional certification",status: "Not Started"}
        ],
        nextReview: "April 2026"
      },
      assessments: [
        { name: "L2 Skills Assessment — Digital Track", date: "Nov 2025", score: 54, status: "Completed" }
      ],
      certificates: [
        { name: "BIM Fundamentals", issuer: "Edstellar", date: "Nov 2025", verified: true }
      ]
    },
    {
      id: "EMP003",
      name: "Ananya Krishnaswamy",
      role: "EHS Auditor",
      dept: "EHS & Risk",
      bu: "Sustainability & EHS",
      location: "Mumbai",
      yearsAtCompany: 8,
      employmentType: "Full-time",
      manager: "Ravi Sundaram (VP Sustainability)",
      passportStatus: "Verified",
      overallProficiency: 3.2,
      readinessScore: 82,
      persona: "strong_performer",
      skills: [
        { skill: "ISO 45001 — OHS Management",    target: 4, current: 3, source: "Assessment" },
        { skill: "Site Safety Management",         target: 4, current: 4, source: "Assessment" },
        { skill: "Environmental Impact Assessment",target: 3, current: 3, source: "Assessment" },
        { skill: "Regulatory & Legal Compliance",  target: 3, current: 3, source: "Assessment" },
        { skill: "ESG Reporting & Compliance",     target: 3, current: 2, source: "Assessment" },
        { skill: "Carbon Footprint & Net Zero",    target: 3, current: 2, source: "Assessment" }
      ],
      gaps: [
        { skill: "ESG Reporting",       gapScore: 0.8, priority: "High"   },
        { skill: "Carbon & Net Zero",   gapScore: 0.9, priority: "High"   },
        { skill: "ISO 45001 (Expert)",  gapScore: 0.6, priority: "Medium" }
      ],
      learningPath: [
        { programme: "ISO 45001 Lead Implementer", status: "Completed",   progress: 100, dueDate: "Jan 2026" },
        { programme: "ESG & Carbon Reporting",     status: "Upcoming",    progress: 0,   dueDate: "May 2026" }
      ],
      idp: {
        goals: [
          { goal: "Achieve ISO 45001 Lead Auditor certification by Q2 2026", status: "On Track"   },
          { goal: "Lead ESG disclosure for Mumbai office FY2026",             status: "On Track"   },
          { goal: "Mentor 3 junior EHS officers",                             status: "Completed"  }
        ],
        nextReview: "July 2026"
      },
      assessments: [
        { name: "L2 Skills Assessment — EHS Track",  date: "Oct 2025", score: 82, status: "Completed" },
        { name: "ISO 45001 Competency Assessment",    date: "Jan 2026", score: 79, status: "Completed" }
      ],
      certificates: [
        { name: "NEBOSH IGC",                   issuer: "NEBOSH",     date: "2019", verified: true },
        { name: "ISO 45001 Lead Implementer",   issuer: "Edstellar",  date: "Jan 2026", verified: true }
      ]
    },
    {
      id: "EMP004",
      name: "Darren Loh",
      role: "Data Analyst",
      dept: "IT Infrastructure",
      bu: "Digital & Technology",
      location: "Singapore",
      yearsAtCompany: 2,
      employmentType: "Full-time",
      manager: "Mei Lin Chua (Chief Digital Officer)",
      passportStatus: "Verified",
      overallProficiency: 2.4,
      readinessScore: 57,
      persona: "developing",
      skills: [
        { skill: "Data Analytics & Visualisation", target: 3, current: 2, source: "Assessment" },
        { skill: "AI & ML Literacy",               target: 3, current: 2, source: "Assessment" },
        { skill: "Cloud Infrastructure",           target: 2, current: 2, source: "Assessment" },
        { skill: "Cybersecurity Fundamentals",     target: 2, current: 1, source: "Self-declared" },
        { skill: "ERP & Enterprise Systems",       target: 2, current: 2, source: "Assessment" },
        { skill: "Digital Project Delivery",       target: 2, current: 1, source: "Assessment" }
      ],
      gaps: [
        { skill: "Data Analytics (Advanced)", gapScore: 1.2, priority: "High"   },
        { skill: "AI & ML Literacy",          gapScore: 1.1, priority: "High"   },
        { skill: "Cybersecurity",             gapScore: 0.9, priority: "High"   },
        { skill: "Digital Delivery",          gapScore: 0.8, priority: "Medium" }
      ],
      learningPath: [
        { programme: "AI & Data Literacy for Engineers", status: "In Progress", progress: 71, dueDate: "Apr 2026" }
      ],
      idp: {
        goals: [
          { goal: "Earn Google Data Analytics Professional Certificate by Q3 2026", status: "On Track" },
          { goal: "Lead internal dashboard project for EHS KPIs",                   status: "In Progress"}
        ],
        nextReview: "May 2026"
      },
      assessments: [
        { name: "L2 Skills Assessment — Digital Track", date: "Nov 2025", score: 61, status: "Completed" }
      ],
      certificates: []
    },
    {
      id: "EMP005",
      name: "Kavitha Ramachandran",
      role: "L&D Manager",
      dept: "Human Resources",
      bu: "Corporate Functions",
      location: "Singapore",
      yearsAtCompany: 5,
      employmentType: "Full-time",
      manager: "Sunita Nair (CHRO)",
      passportStatus: "Verified",
      overallProficiency: 3.0,
      readinessScore: 76,
      persona: "admin_user",
      skills: [
        { skill: "Coaching & Mentoring",       target: 3, current: 3, source: "Assessment" },
        { skill: "Change Management",          target: 3, current: 3, source: "Assessment" },
        { skill: "Data-Driven Decision Making",target: 3, current: 2, source: "Assessment" },
        { skill: "Strategic Leadership",       target: 2, current: 2, source: "Assessment" },
        { skill: "Digital Project Delivery",   target: 2, current: 2, source: "Assessment" }
      ],
      gaps: [
        { skill: "Data-Driven Decision Making", gapScore: 0.7, priority: "Medium" }
      ],
      learningPath: [
        { programme: "Strategic Leadership Programme", status: "In Progress", progress: 45, dueDate: "May 2026" }
      ],
      idp: {
        goals: [
          { goal: "CIPD Level 7 qualification by Q4 2026",  status: "In Progress" },
          { goal: "Design and launch SIP-linked IDP process", status: "Completed" }
        ],
        nextReview: "June 2026"
      },
      assessments: [
        { name: "L2 Skills Assessment — HR & L&D Track", date: "Oct 2025", score: 76, status: "Completed" }
      ],
      certificates: [
        { name: "CIPD Level 5",                         issuer: "CIPD",       date: "2021", verified: true },
        { name: "Digital Project Delivery — L2",        issuer: "Edstellar",  date: "Dec 2025", verified: true }
      ]
    },
    {
      id: "EMP006",
      name: "Amir Hassan",
      role: "Senior Structural Engineer",
      dept: "Structural Engineering",
      bu: "Engineering & Delivery",
      location: "Kuala Lumpur",
      yearsAtCompany: 9,
      employmentType: "Full-time",
      manager: "Priya Menon (Sr Project Manager)",
      passportStatus: "Verified",
      overallProficiency: 3.4,
      readinessScore: 86,
      persona: "succession_candidate",
      skills: [
        { skill: "Structural Analysis & Design",   target: 4, current: 4, source: "Assessment" },
        { skill: "Value Engineering",              target: 3, current: 3, source: "Assessment" },
        { skill: "Construction Materials Science", target: 3, current: 3, source: "Assessment" },
        { skill: "Project Planning & Scheduling",  target: 3, current: 3, source: "Assessment" },
        { skill: "BIM",                            target: 3, current: 2, source: "Assessment" },
        { skill: "Team Leadership",                target: 3, current: 3, source: "Assessment" }
      ],
      gaps: [
        { skill: "BIM (Intermediate)", gapScore: 0.8, priority: "Medium" }
      ],
      learningPath: [
        { programme: "BIM Fundamentals & Revit",      status: "Completed",   progress: 100, dueDate: "Nov 2025" },
        { programme: "Strategic Leadership Programme", status: "In Progress", progress: 58,  dueDate: "May 2026" }
      ],
      idp: {
        goals: [
          { goal: "Ready for Principal Engineer role by Q2 2027",   status: "On Track" },
          { goal: "Complete BIM Coordinator certification",          status: "On Track" },
          { goal: "Shadow VP Engineering for 2 quarters",           status: "In Progress"}
        ],
        nextReview: "June 2026"
      },
      assessments: [
        { name: "L2 Skills Assessment — Engineering Track", date: "Nov 2025", score: 86, status: "Completed" },
        { name: "360 Feedback — Leadership",                date: "Dec 2025", score: 82, status: "Completed" }
      ],
      certificates: [
        { name: "PE — Professional Engineer (Malaysia)",    issuer: "BEM",       date: "2018", verified: true },
        { name: "BIM Fundamentals",                        issuer: "Edstellar",  date: "Nov 2025", verified: true }
      ],
      successionTag: "Identified for Principal Structural Engineer pipeline"
    },
    {
      id: "EMP007",
      name: "Sunita Nair",
      role: "Chief Human Resources Officer",
      dept: "Human Resources",
      bu: "Corporate Functions",
      location: "Singapore",
      yearsAtCompany: 4,
      employmentType: "Full-time",
      manager: "Rohan D'Souza (CEO)",
      passportStatus: "Verified",
      overallProficiency: 3.6,
      readinessScore: 91,
      persona: "chro",
      skills: [
        { skill: "Strategic Leadership",      target: 4, current: 4, source: "Assessment" },
        { skill: "Change Management",         target: 4, current: 3, source: "Assessment" },
        { skill: "Coaching & Mentoring",      target: 3, current: 3, source: "Assessment" },
        { skill: "Data-Driven Decision Making",target: 3, current: 3, source: "Assessment" },
        { skill: "Commercial Acumen",         target: 3, current: 3, source: "Assessment" }
      ],
      gaps: [
        { skill: "Change Management (Expert)", gapScore: 0.6, priority: "Medium" }
      ],
      learningPath: [],
      idp: { goals: [], nextReview: "Annual — Q4 2026" },
      assessments: [
        { name: "360 Feedback — Executive Leadership", date: "Dec 2025", score: 91, status: "Completed" }
      ],
      certificates: [
        { name: "SHRM-SCP",               issuer: "SHRM",        date: "2020", verified: true },
        { name: "Executive Leadership",   issuer: "Edstellar",   date: "Jan 2026", verified: true }
      ]
    },
    {
      id: "EMP008",
      name: "Mei Lin Chua",
      role: "Chief Digital Officer",
      dept: "BIM & Digital Delivery",
      bu: "Digital & Technology",
      location: "Singapore",
      yearsAtCompany: 2,
      employmentType: "Full-time",
      manager: "Rohan D'Souza (CEO)",
      passportStatus: "Verified",
      overallProficiency: 3.8,
      readinessScore: 88,
      persona: "cdo",
      skills: [
        { skill: "Digital Project Delivery",       target: 4, current: 4, source: "Assessment" },
        { skill: "AI & ML Literacy",               target: 4, current: 4, source: "Assessment" },
        { skill: "Data Analytics & Visualisation", target: 4, current: 3, source: "Assessment" },
        { skill: "Strategic Leadership",           target: 4, current: 4, source: "Assessment" },
        { skill: "IoT & Smart Infrastructure",     target: 3, current: 3, source: "Assessment" },
        { skill: "Change Management",              target: 3, current: 3, source: "Assessment" }
      ],
      gaps: [
        { skill: "Data Analytics (Expert)", gapScore: 0.7, priority: "Medium" }
      ],
      learningPath: [],
      idp: { goals: [], nextReview: "Annual — Q4 2026" },
      assessments: [
        { name: "360 Feedback — Executive Leadership", date: "Dec 2025", score: 88, status: "Completed" }
      ],
      certificates: [
        { name: "AWS Solutions Architect",  issuer: "Amazon",    date: "2022", verified: true },
        { name: "AI Strategy for Leaders",  issuer: "Edstellar", date: "Jan 2026", verified: true }
      ]
    }
  ],

  // ----------------------------------------------------------
  // 6. LNA / TNA OUTPUT (AI-generated narratives)
  // ----------------------------------------------------------
  lnaOutput: {
    generatedOn: "18 November 2025",
    department: "BIM & Digital Delivery",
    employeeCount: 54,
    assessedCount: 49,
    aiNarrative: `The BIM & Digital Delivery department represents Arcova's highest-priority skills gap cluster. Across 49 assessed employees, the weighted gap score averages 1.4 — the widest gap in the organisation. Four skills have been flagged as critical: Building Information Modelling (Advanced), AI & Machine Learning Literacy, IoT & Smart Infrastructure, and Digital Project Delivery. These gaps directly compromise Arcova's stated strategic goal of reducing third-party BIM dependency by 40% by end of FY2026.

The root cause is not talent deficit — it is skill vintage. 68% of department employees joined Arcova with BIM skills calibrated to 2018–2021 industry standards. The platform's tools and client expectations have advanced significantly. The gap is a velocity problem, not a capability problem.

Recommended intervention sequence: (1) Accelerate the AI & Data Literacy programme currently in progress — current completion rate of 57% is below the 75% target for this stage. (2) Commission an advanced BIM programme for the Dubai cluster specifically, where the gap score is 2.1 versus the department average of 1.8. (3) Fast-track IoT & Smart Infrastructure as a Q3 2026 intervention — no programme is currently scheduled and this skill is linked to 3 of Arcova's top 5 client deliverables.`,
    topInterventions: [
      { rank: 1, skill: "AI & ML Literacy",       type: "Training Programme", urgency: "Immediate", cost: "SGD 28,400", employees: 72  },
      { rank: 2, skill: "BIM Advanced",            type: "Certification Track", urgency: "High",    cost: "SGD 34,200", employees: 41  },
      { rank: 3, skill: "IoT & Smart Infra",       type: "Training Programme", urgency: "High",    cost: "SGD 18,600", employees: 38  },
      { rank: 4, skill: "Data Analytics",          type: "Coaching Programme", urgency: "Medium",  cost: "SGD 12,000", employees: 29  }
    ]
  },

  // ----------------------------------------------------------
  // 7. APPROVAL HUB (3-tier workflow state)
  // ----------------------------------------------------------
  approvalHub: {
    currentCycle: "Skill Framework — Cycle 2 (FY2026 Update)",
    tier1: {
      reviewer: "Kavitha Ramachandran (L&D Manager)",
      status: "Approved",
      date: "22 October 2025",
      edits: 14,
      flaggedForTier2: 6
    },
    tier2: {
      reviewer: "Ravi Sundaram (VP Sustainability) + Rahul Kapoor (VP Engineering)",
      status: "Approved",
      date: "25 October 2025",
      edits: 3,
      flaggedForTier3: 1
    },
    tier3: {
      reviewer: "Sunita Nair (CHRO)",
      status: "Approved",
      date: "28 October 2025",
      finalEdits: 1,
      notes: "Approved with minor adjustment to Digital Delivery proficiency target for Project Managers — revised from L3 to L2 for this cycle."
    }
  },

  // ----------------------------------------------------------
  // 8. SUCCESSION PLANNING
  // ----------------------------------------------------------
  successionPipeline: [
    { role: "VP Engineering",             incumbent: "Rahul Kapoor",    readiness: 72, candidates: 2, urgency: "Medium" },
    { role: "Chief Digital Officer",      incumbent: "Mei Lin Chua",    readiness: 88, candidates: 1, urgency: "Low"    },
    { role: "Principal Structural Eng",   incumbent: "Vacant",          readiness: 0,  candidates: 3, urgency: "High"   },
    { role: "BIM Director",               incumbent: "Tariq Al-Rashidi",readiness: 48, candidates: 1, urgency: "High"   },
    { role: "VP Sustainability",          incumbent: "Ravi Sundaram",   readiness: 81, candidates: 2, urgency: "Low"    }
  ],

  // ----------------------------------------------------------
  // 9. SKILLFORGE AI PIPELINE (for animated demo)
  // ----------------------------------------------------------
  skillforgeSteps: [
    { step: 1, label: "Context Extraction",           duration: 1800, desc: "Reading OrgSetup: strategy, goals, products, client profile, tools, standards"         },
    { step: 2, label: "Deep Context Synthesis",       duration: 2200, desc: "Synthesising industry context with Arcova's strategic priorities and market positioning" },
    { step: 3, label: "Role Architecture Analysis",   duration: 2600, desc: "Mapping 32 job roles across 4 business units — identifying role clusters and criticality"},
    { step: 4, label: "Skill Generation",             duration: 3100, desc: "Generating 48 skills across 6 domains with proficiency descriptors at all 4 levels"      },
    { step: 5, label: "Competency Generation",        duration: 2400, desc: "Generating 8 behavioural and functional competencies with observable indicators"          },
    { step: 6, label: "Role–Skill Mapping",           duration: 2800, desc: "Mapping required proficiency targets per skill per role — 32 roles × 48 skills"          },
    { step: 7, label: "Employee Skill Baselines",     duration: 3400, desc: "Setting baseline proficiency estimates for 812 employees from DataPort import data"      }
  ],

  // ----------------------------------------------------------
  // 10. UI / DEMO METADATA
  // ----------------------------------------------------------
  ui: {
    accentColor: "#0F4C81",
    secondaryColor: "#E8F1FA",
    dangerColor: "#C0392B",
    warningColor: "#E67E22",
    successColor: "#1A7A4A",
    currentUser: {
      name: "Sunita Nair",
      role: "Chief Human Resources Officer",
      portal: "Manager",
      avatar: "SN"
    },
    demoDate: "25 March 2026",
    notificationCount: 3
  }

};

// Export for use across all demo shell pages
if (typeof module !== "undefined") module.exports = DEMO;
