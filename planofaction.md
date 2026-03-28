# Edstellar SIP Prototype — Plan of Action

## Complete build plan for demonstrating the Skills Intelligence Platform

**Last updated:** 28 March 2026
**Current state:** 22 pages built — Sprint 1A complete (5 new assessment & development screens)
**Target:** Full demo-ready prototype covering L1–L5, 3 portals, marketplace, and SaaS admin

---

## What's Built Today

| # | Page | Portal | File | Level |
|---|------|--------|------|-------|
| 1 | Portal Home | — | `index.html` | — |
| 2 | Guided Demo Walkthrough | — | `demo-walkthrough.html` | — |
| 3 | Level Journey Map | — | `level-journey.html` | — |
| 4 | All Screens Navigation | — | `nav-menus.html` | — |
| 5 | OrgSetup | Admin | `admin/org-setup.html` | L1 |
| 6 | DataPort | Admin | `admin/dataport.html` | L1 |
| 7 | SkillForge | Admin | `admin/skillforge.html` | L1 |
| 8 | ApprovalHub | Admin | `admin/approvalhub.html` | L1 |
| 9 | AssessEngine | Admin | `admin/assess-engine.html` | L2 |
| 10 | CHRO Dashboard | Manager | `manager/chro-dashboard.html` | L1+ |
| 11 | CLO Dashboard | Manager | `manager/clo-dashboard.html` | L2+ |
| 12 | Skills Matrix | Manager | `manager/skills-matrix.html` | L2 |
| 13 | LNA/TNA Report | Manager | `manager/lna-report.html` | L2 |
| 14 | Succession Planning | Manager | `manager/succession.html` | L2 |
| 15 | Skill Passport | Employee | `employee/skill-passport.html` | L1+ |
| 16 | Learning Path | Employee | `employee/learning-path.html` | L2+ |
| 17 | Certificates | Employee | `employee/certificates.html` | L3 |
| 18 | **Assessment Results** | Manager | `manager/assessment-results.html` | L2 |
| 19 | **Skills & Competency Assessment** | Employee | `employee/skill-assessment.html` | L2 |
| 20 | **My Assessments** | Employee | `employee/my-assessments.html` | L2 |
| 21 | **My IDP** | Employee | `employee/my-idp.html` | L2 |
| 22 | **My Training** | Employee | `employee/my-training.html` | L3 |

---

## Build Phases

### Phase 1: L2 Core Completion (12 screens)
**Goal:** Zero dead-end links in L1–L2 flow. Complete assessment-to-analysis pipeline.
**Demo story unlocked:** "The full assessment lifecycle — from setup to results to gap analysis"

#### Sprint 1A: Assessment Experience (5 screens) ✅ COMPLETE — 28 March 2026

| # | Screen | File | What it shows | Status |
|---|--------|------|---------------|--------|
| 18 | **Assessment Results** | `manager/assessment-results.html` | Cycle selector (Q1/Q4/Q3), score distribution chart, BU completion bars, per-employee drill-down with filters, skill category heatmap | ✅ Built |
| 19 | **Skills & Competency Assessment** | `employee/skill-assessment.html` | Interactive 8-skill dual-rating UI, self-rating pills, manager ratings, live progress ring, final score calculation | ✅ Built |
| 20 | **My Assessments** | `employee/my-assessments.html` | 6 assessment cards (active/completed/upcoming tabs), skill breakdowns, score summaries, continue/download actions | ✅ Built |
| 21 | **My IDP** | `employee/my-idp.html` | 3 development goals with clickable milestone tracking, progress ring, review schedule, manager sign-offs, linked outcomes | ✅ Built |
| 22 | **My Training** | `employee/my-training.html` | 3 enrolled programmes, session schedules, calendar view, pre-work checklists with toggle completion | ✅ Built |

**Sprint 1A complete.** Full employee assessment + development experience is clickable end-to-end.

#### Sprint 1B: Analysis & Reporting (4 screens)

| # | Screen | File | What it shows | Data dependency |
|---|--------|------|---------------|-----------------|
| 23 | **Gap Analysis** | `manager/gap-analysis.html` | 4 views: individual employee, role-level, department, org-wide heatmaps. Strategic risk flagging. Talent mobility signals | Extends Skills Matrix with deeper drill-down |
| 24 | **LNI — Individual Brief** | `manager/lni-brief.html` | Per-employee 8-component learning needs brief: weighted gaps, intervention types, timeline, budget, wellbeing adjustment | Reads from LNA/TNA Engine |
| 25 | **ReportGen — L2 Reports** | `manager/reports-l2.html` | LNA report, TNA report, Skills Matrix report, Wellbeing report — all with AI executive summary and persona-adaptive rendering | Reads from all L2 screens |
| 26 | **Assessment Results** (admin view) | (shared with #18) | Same page, admin-scoped: can view cross-department results | — |

**After Sprint 1B:** Complete analysis layer — every gap has a report.

#### Sprint 1C: Training Execution Foundation (3 screens)

| # | Screen | File | What it shows | Data dependency |
|---|--------|------|---------------|-----------------|
| 27 | **Org-Wide Execution Plan** | `admin/execution-plan.html` | AI-suggested org-wide training plan from TNA: budget allocation by dept, programme sequencing, dependency map, approval workflow | Reads from LNA/TNA Engine |
| 28 | **Course Marketplace** | `manager/course-marketplace.html` | Browse training by skill, level, format. AI-matched recommendations. Enrolment flow. Provider details | Reads from LNA gaps for AI matching |
| 29 | **Kirkpatrick Measurement** | `manager/kirkpatrick.html` | L1 Reaction, L2 Knowledge (pre/post delta), L3 Behaviour, L4 Business Impact. Training effectiveness dashboard | Reads from training completion + assessment data |

**After Sprint 1C:** L3 training lifecycle complete — marketplace → enrol → measure → report.

**Phase 1 total: 12 new screens → 29 screens total**
**Demo coverage: L1 complete, L2 complete, L3 core complete**

---

### Phase 2: Employee Portal Depth (8 screens)
**Goal:** Rich employee experience — every employee-facing feature clickable.
**Demo story unlocked:** "The platform works FOR the employee, not against them"

| # | Screen | File | What it shows |
|---|--------|------|---------------|
| 30 | **My Deep Profile** | `employee/deep-profile.html` | Career history, education, certifications, work preferences, aspirations, declared career goals |
| 31 | **My Wellbeing Check-in** | `employee/wellbeing.html` | Anonymous pulse survey: 5-question check-in, burnout risk indicators, capacity signals |
| 32 | **My 30-60-90 Plan** | `employee/onboarding-plan.html` | AI-generated onboarding plan for new hires: milestones, check-ins, skill ramp targets |
| 33 | **Passport Sharing** | `employee/passport-sharing.html` | Share verified passport with hiring orgs, LinkedIn, external parties. Consent controls |
| 34 | **Badges & Achievements** | `employee/badges.html` | Skill badges, development milestones, mentor badge, streak achievements |
| 35 | **Peer Learning** | `employee/peer-learning.html` | Internal expert directory, communities of practice, ask-an-expert, cohort spaces |
| 36 | **Recognition** | `employee/recognition.html` | Manager recognition wall, org spotlight, tenure milestones, peer endorsements |
| 37 | **Knowledge Capture** | `employee/knowledge-capture.html` | Exit interviews, project retrospectives, AI-curated knowledge base |

**Phase 2 total: 8 new screens → 37 screens total**

---

### Phase 3: Manager Portal Expansion (8 screens)
**Goal:** All 5 persona dashboards live + complete reporting + people strategy.
**Demo story unlocked:** "Same data, 5 different views — every leader sees what matters to them"

| # | Screen | File | What it shows |
|---|--------|------|---------------|
| 38 | **HR Manager Dashboard** | `manager/hr-dashboard.html` | Team-scoped: gaps, assessment status, passport coverage for their department |
| 39 | **HRBP Dashboard** | `manager/hrbp-dashboard.html` | Department-level: skills, IDP status, wellbeing signals, succession for their scope |
| 40 | **Workforce View** | `manager/workforce-view.html` | All 812 employees: search, filter by dept/skill/gap, bulk actions, passport status |
| 41 | **ReportGen — L3 Reports** | `manager/reports-l3.html` | Training effectiveness, compliance status, certificate registry, programme ROI |
| 42 | **Wellbeing Dashboard** | `manager/wellbeing-dashboard.html` | Team/dept burnout risk, pulse trends, capacity adjustment visibility |
| 43 | **Coaching & Mentoring** | `manager/coaching.html` | AI-matched coach list, programme tracking, session milestones, content outline |
| 44 | **L&D Project Engine** | `admin/ld-projects.html` | 8 project types: certification, training, assessment, culture, OD. Milestones, budget |
| 45 | **AI Content Outline** | `admin/content-outline.html` | Gap brief → AI generates full programme structure: audience, outcomes, modules, measurement |

**Phase 3 total: 8 new screens → 45 screens total**

---

### Phase 4: L4/L5 Strategic Intelligence (10 screens)
**Goal:** Show the future vision — predictive intelligence, transformation planning, board dashboards.
**Demo story unlocked:** "From reactive to predictive — the platform tells you what's coming"

| # | Screen | File | What it shows |
|---|--------|------|---------------|
| 46 | **PulseStrategy — Real-time** | `manager/pulse-strategy.html` | Live skill signals from Jira, Workday, GitHub. Micro-proficiency updates in real-time |
| 47 | **Predictive Engine** | `manager/predictive-engine.html` | 3–12 month gap forecasting. Early warning alerts. Auto-trigger conditions |
| 48 | **Transformation Dial** | `admin/transformation-dial.html` | -5 to +5 per skill. Impact preview. Staged rollout. Change governance workflow |
| 49 | **Transformation Meter** | `manager/transformation-meter.html` | Current vs target culture profile. Year 1 progress. Dial impact visualisation |
| 50 | **Scenario Modelling** | `manager/scenario-modelling.html` | What-if analysis: M&A due diligence, team restructure, skill supply/demand simulation |
| 51 | **Board Dashboard** | `manager/board-dashboard.html` | Executive-ready visuals: workforce transformation roadmap, strategic KPIs, AI narrative |
| 52 | **Workforce Planning** | `manager/workforce-planning.html` | Headcount planning, hiring gap analysis, skill supply vs demand projections |
| 53 | **Cross-Org Benchmarking** | `manager/benchmarking.html` | 6 dimensions: industry, role, L&D investment, velocity, emerging skills, quality |
| 54 | **Skill Passport Verification** | `admin/passport-verification.html` | Hiring company verification portal: QR scan, 4 tiers, employee consent tracking |
| 55 | **Public API Portal** | `admin/api-portal.html` | REST API documentation, sandbox, rate limits, SDK downloads, partner certification |

**Phase 4 total: 10 new screens → 55 screens total**

---

### Phase 5: Admin Deep Modules (8 screens)
**Goal:** Complete the admin portal — every configuration and governance screen.
**Demo story unlocked:** "Full platform control — governance, notifications, compliance, data retention"

| # | Screen | File | What it shows |
|---|--------|------|---------------|
| 56 | **FrameworkBible** | `admin/framework-bible.html` | Published skill framework: taxonomy browser, version history, PDF export, lock status |
| 57 | **DataPort — Manual Entry** | `admin/manual-entry.html` | Add/edit individual employee records without file upload. Inline editing, duplicate detection |
| 58 | **DataPort — HRIS Sync** | `admin/hris-sync.html` | Connect Workday/BambooHR/SAP. Field mapping. Delta review (new/changed/removed). Commit |
| 59 | **Employee Scope Management** | `admin/scope-management.html` | Scope rules, employment type auto-assignment, exclusion overrides, audit trail |
| 60 | **NotifyEngine** | `admin/notify-engine.html` | Email notification configuration: 30+ trigger types, templates, branding, delivery tracking |
| 61 | **Assessment Governance** | `admin/assessment-governance.html` | Integrity controls, access rules, cycle governance, proctoring config, audit trail |
| 62 | **Audit Intelligence Layer** | `admin/audit-layer.html` | Auditor role access, compliance evidence builder, 8 pre-built packages, continuous readiness |
| 63 | **Onboarding Flow** | `admin/onboarding-flow.html` | New hire setup: AI 30-60-90 plan config, milestone templates, manager check-in scheduling |

**Phase 5 total: 8 new screens → 63 screens total**

---

### Phase 6: Marketplace Ecosystem (8 screens)
**Goal:** Show the 4-platform ecosystem — trainer platform, vendor platform, marketplace.
**Demo story unlocked:** "Not just a platform — an ecosystem with 6 revenue streams"

| # | Screen | File | What it shows |
|---|--------|------|---------------|
| 64 | **TrainConnect Marketplace** | `admin/trainconnect.html` | Browse training providers, AI-match to gaps, enrolment flow, LMS integration |
| 65 | **Trainer & Coach Platform** | `marketplace/trainer-platform.html` | Public trainer profile, credit system, booking flow, earnings dashboard |
| 66 | **Training Vendor Platform** | `marketplace/vendor-platform.html` | Vendor profile, RFP workflow, gap brief distribution, 3-proposal compliance |
| 67 | **Referral Programme** | `marketplace/referrals.html` | 4 referral types, pipeline tracking, commission tiers, partner dashboard |
| 68 | **Assessment Content Market** | `marketplace/assessment-content.html` | Buy/publish/rate assessment content, revenue share, quality ratings |
| 69 | **Freemium Engine** | `admin/freemium.html` | Lite tier scope, conversion triggers, ROI calculator, upgrade flow |
| 70 | **Localisation** | `admin/localisation.html` | 8 markets, language config, GDPR/DPDP compliance, cultural calibration |
| 71 | **Course Marketplace (Employee)** | `employee/course-browse.html` | Employee-facing: browse, AI-recommended, self-enrol, reviews |

**Phase 6 total: 8 new screens → 71 screens total**

---

### Phase 7: Edstellar Internal + SaaS Admin (12 screens)
**Goal:** Internal commercial tools and platform operations — the business behind the product.
**Demo story unlocked:** "How Edstellar operates the platform as a SaaS business"

#### Internal Portal (4 screens)

| # | Screen | File | What it shows |
|---|--------|------|---------------|
| 72 | **Opportunity Dashboard** | `internal/opportunities.html` | Client gap pipeline, AI-scored opportunity signals, account manager queue |
| 73 | **AI Proposal Engine** | `internal/proposals.html` | 7-component auto-generated proposal, review/edit, one-click send, won/lost tracking |
| 74 | **Client Master Switches** | `internal/client-config.html` | 10 feature toggles per client, credit tier, module enablement |
| 75 | **Quality Governance** | `internal/quality.html` | Trainer verification, suspicious review detection, dispute management |

#### SaaS Admin (8 screens)

| # | Screen | File | What it shows |
|---|--------|------|---------------|
| 76 | **Tenant Provisioning** | `saas/tenant-provisioning.html` | Create tenant, schema, tier assignment, activation, welcome email |
| 77 | **Tenant Dashboard** | `saas/tenant-dashboard.html` | All tenants: level, tier, churn risk, last activity, CSM assignment |
| 78 | **Subscription & Billing** | `saas/billing.html` | Invoices, upgrades, downgrades, overdue, payment tracking |
| 79 | **Onboarding Pipeline** | `saas/onboarding-pipeline.html` | 7-stage tracker per new tenant, stall alerts, CSM actions |
| 80 | **Platform Config** | `saas/platform-config.html` | Feature flags, AI prompt versioning, maintenance mode, rate limits |
| 81 | **Platform Health** | `saas/platform-health.html` | Uptime, AI pipeline latency, error rates, component status |
| 82 | **User Management** | `saas/user-management.html` | Cross-tenant user search, password resets, MFA unlocks, support tools |
| 83 | **Incident Management** | `saas/incidents.html` | P1/P2/P3 log, root cause, resolution time, status page, tenant comms |

**Phase 7 total: 12 new screens → 83 screens total**

---

## Summary

| Phase | Screens | Running Total | What it Unlocks |
|-------|---------|---------------|-----------------|
| **Done** | 22 | 22 | Core flow + Sprint 1A: assessment experience + development loop |
| **Phase 1** | 7 remaining | 29 | L2 complete + L3 training lifecycle |
| **Phase 2** | 8 | 37 | Rich employee portal |
| **Phase 3** | 8 | 45 | All 5 persona dashboards + full reporting |
| **Phase 4** | 10 | 55 | L4/L5 predictive + strategic intelligence |
| **Phase 5** | 8 | 63 | Admin governance + deep configuration |
| **Phase 6** | 8 | 71 | Marketplace ecosystem |
| **Phase 7** | 12 | 83 | Internal tools + SaaS operations |

---

## Priority Recommendation

**For a sales demo:** Phases 1–3 (37 total screens) cover everything a prospect needs to see.

**For an investor pitch:** Phases 1–4 (55 screens) show the full L1–L5 vision with predictive intelligence.

**For a complete product prototype:** All 7 phases (83 screens) demonstrate the entire platform including marketplace and SaaS operations.

---

## Build Rules

1. Every page matches the existing design system (Syne + DM Sans fonts, dark theme, CSS variables)
2. Every page has: sidebar navigation, topbar with journey link, level banner strip, confidence statement
3. Every new page gets wired into sidebar navigation of related pages
4. Every new page gets marked as `badge: 'built'` in nav-menus.html
5. Demo walkthrough gets updated with new steps as phases complete
6. Data comes from `demo-data.js` — extend it as needed for new screens
7. Commit and push after each sprint within a phase
