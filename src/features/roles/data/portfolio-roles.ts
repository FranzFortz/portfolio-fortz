import type { PortfolioRole } from "../types";

/** Centralized lenses: strengths + work per role. Use `isSample` for honest labeling. */
export const PORTFOLIO_ROLES: PortfolioRole[] = [
  {
    id: "virtual-assistant",
    label: "Virtual Assistant",
    strengthsIntro:
      "Back-office support and communication — organized, proactive, and discreet.",
    projectsIntro:
      "Sample scenarios illustrating how I would support executives and small teams.",
    strengths: [
      {
        id: "va-ops",
        headline: "Inbox and calendar that stay under control",
        detail:
          "Triage, draft replies, scheduling, and follow-ups so nothing important slips while you focus on decisions.",
      },
      {
        id: "va-docs",
        headline: "Clean documentation and data hygiene",
        detail:
          "CRMs, spreadsheets, SOPs, and light research packaged so the team can reuse them without rework.",
      },
      {
        id: "va-comms",
        headline: "Professional, on-brand communication",
        detail:
          "Stakeholder updates, meeting notes, and client-facing touchpoints with consistent tone and clarity.",
      },
    ],
    projects: [
      {
        id: "va-sample-exec",
        title: "Executive inbox reset (sample)",
        problem:
          "Leadership was losing billable hours to email threads, duplicate meetings, and missing attachments.",
        solution:
          "Defined triage rules, built a lightweight weekly digest format, and cleared backlog in two focused passes.",
        tags: ["Inbox", "Scheduling", "SOPs"],
        isSample: true,
      },
      {
        id: "va-sample-crm",
        title: "CRM cleanup sprint (sample)",
        problem:
          "Pipeline data was inconsistent; reporting was unreliable for weekly leadership reviews.",
        solution:
          "Normalized fields, deduplicated contacts, and documented a 10-minute weekly maintenance routine.",
        tags: ["CRM", "Data hygiene", "Reporting"],
        isSample: true,
      },
    ],
  },
  {
    id: "web-developer",
    label: "Web Developer",
    strengthsIntro:
      "What I bring day to day — outcomes first, without the noise.",
    projectsIntro:
      "A few recent problems — short, scan-friendly, with links when available.",
    strengths: [
      {
        id: "product-thinking",
        headline: "Product thinking end-to-end",
        detail:
          "I connect goals, users, and constraints so screens and flows earn their complexity—clear IA before polish.",
      },
      {
        id: "implementation",
        headline: "Reliable implementation",
        detail:
          "TypeScript-first Next.js stacks, predictable component patterns, and performance that holds up in production.",
      },
      {
        id: "collaboration",
        headline: "Low-friction collaboration",
        detail:
          "Readable handoffs, proactive communication, and documentation that helps the next person move fast.",
      },
      {
        id: "accessibility",
        headline: "Accessible, resilient UI",
        detail:
          "Keyboard paths, focus states, and semantic structure so experiences work for more people and more devices.",
      },
    ],
    projects: [
      {
        id: "client-dashboard",
        title: "Operations dashboard",
        problem:
          "Operations relied on spreadsheets; status was hard to see and mistakes were expensive.",
        solution:
          "Designed and built a role-aware dashboard with clear states, exports, and audit-friendly history.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        href: "https://example.com",
        repositoryUrl: "https://github.com/FranzFortz",
        isSample: true,
      },
      {
        id: "marketing-site",
        title: "Marketing site rebuild",
        problem:
          "The old marketing site was slow, hard to edit, and inconsistent on mobile.",
        solution:
          "Rebuilt on a component system with strict performance budgets and a CMS-friendly content model.",
        tags: ["Next.js", "Content", "Performance"],
        href: "https://example.com",
        isSample: true,
      },
      {
        id: "onboarding-flow",
        title: "Self-serve onboarding",
        problem:
          "New users dropped off during setup because steps felt opaque and support load was high.",
        solution:
          "Mapped the journey, tightened copy, and shipped a guided flow with validation and recovery paths.",
        tags: ["UX", "React", "Forms"],
        repositoryUrl: "https://github.com/FranzFortz",
        isSample: true,
      },
    ],
  },
  {
    id: "ui-ux-designer",
    label: "UI/UX Designer",
    strengthsIntro:
      "Research-informed UI — systems, not one-offs — with engineering in mind.",
    projectsIntro:
      "Sample case studies (clearly labeled) showing problem framing through shipped UX.",
    strengths: [
      {
        id: "ux-discovery",
        headline: "Structured discovery, fewer surprises",
        detail:
          "Lightweight research scripts, journey maps, and success metrics so the team agrees on the problem before pixels.",
      },
      {
        id: "ux-systems",
        headline: "Tokens, patterns, and states",
        detail:
          "Layouts, components, and edge cases documented for developers — fewer gaps at handoff.",
      },
      {
        id: "ux-motion-content",
        headline: "Content and hierarchy first",
        detail:
          "Copy, spacing, and progressive disclosure tuned for scanning on real devices, not just artboards.",
      },
    ],
    projects: [
      {
        id: "design-sample-mobile",
        title: "Mobile conversion pass (sample)",
        problem:
          "Checkout felt cramped; error states were easy to miss; trust signals were below the fold.",
        solution:
          "Restacked hierarchy, unified form feedback, and validated the flow with five usability sessions.",
        tags: ["Mobile UX", "Forms", "Research"],
        isSample: true,
      },
      {
        id: "design-sample-dashboard",
        title: "Dense dashboard legibility (sample)",
        problem:
          "Operators could not scan alerts quickly; status colors failed contrast and accessibility rules.",
        solution:
          "Introduced a calmer density system, iconography + text pairs, and WCAG-aligned palette checkpoints.",
        tags: ["Design systems", "Accessibility", "B2B"],
        isSample: true,
      },
    ],
  },
  {
    id: "photographer",
    label: "Photographer",
    strengthsIntro:
      "Consistent, deliverable-forward shoots — from brief to final assets.",
    projectsIntro:
      "Representative sample work — ask for a tailored portfolio if you need more context.",
    strengths: [
      {
        id: "photo-product",
        headline: "Product and brand stills",
        detail:
          "Controlled lighting, color-matched sets, and export specs ready for web, print, or marketplaces.",
      },
      {
        id: "photo-events",
        headline: "Events and people",
        detail:
          "Low-profile coverage during keynotes and mixers with fast turnaround for social and PR.",
      },
      {
        id: "photo-post",
        headline: "Selective, honest editing",
        detail:
          "Batch culling, tonal consistency, and asset organization so clients can self-serve downloads.",
      },
    ],
    projects: [
      {
        id: "photo-sample-brand",
        title: "E-commerce product line (sample)",
        problem:
          "A small brand needed a cohesive look across SKUs without a multi-day studio budget.",
        solution:
          "Single-day tabletop setup, shared modifiers, and a repeatable shot list for future drops.",
        tags: ["Product", "Lighting", "Color"],
        isSample: true,
      },
      {
        id: "photo-sample-event",
        title: "Community launch event (sample)",
        problem:
          "Organizers needed social-ready moments within 24 hours while respecting attendee privacy.",
        solution:
          "Shot priority list, on-site selects, and a capped set of hero edits delivered overnight.",
        tags: ["Events", "Editorial", "Fast turnaround"],
        isSample: true,
      },
    ],
  },
];

export const DEFAULT_PORTFOLIO_ROLE_ID = "web-developer" as const;
