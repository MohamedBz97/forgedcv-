import type { ResumeData, ResumeSettings } from "./types";

export const defaultResumeData: ResumeData = {
  personal: {
    fullName: "Alex Morgan",
    jobTitle: "Senior Product Designer",
    email: "alex.morgan@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    website: "alexmorgan.design",
    linkedin: "linkedin.com/in/alexmorgan",
    github: "github.com/alexmorgan",
    photo: "",
    summary:
      "Senior Product Designer with 8+ years crafting intuitive digital experiences for B2B and consumer products. Passionate about design systems, accessibility, and translating complex problems into elegant solutions. Led design for products serving 10M+ users.",
  },
  experience: [
    {
      id: "exp1",
      company: "Lumina Labs",
      position: "Senior Product Designer",
      location: "San Francisco, CA",
      startDate: "Mar 2022",
      endDate: "Present",
      current: true,
      description:
        "Led end-to-end design for the flagship analytics platform used by 500+ enterprise customers.\nEstablished a cross-functional design system adopted by 4 product teams, reducing UI inconsistencies by 60%.\nDrove a redesign that increased user activation by 34% and reduced support tickets by 22%.\nMentored 3 junior designers and ran weekly design critique sessions.",
    },
    {
      id: "exp2",
      company: "Northwind Studio",
      position: "Product Designer",
      location: "Remote",
      startDate: "Jun 2019",
      endDate: "Feb 2022",
      current: false,
      description:
        "Designed mobile-first features for a fintech app with 2M+ monthly active users.\nConducted 60+ user interviews and usability tests to validate design decisions.\nCollaborated with engineering to ship 20+ features with a 98% on-time delivery rate.\nCreated interactive prototypes that secured $5M in Series B funding.",
    },
    {
      id: "exp3",
      company: "Bright Pixel Agency",
      position: "UX Designer",
      location: "New York, NY",
      startDate: "Aug 2016",
      endDate: "May 2019",
      current: false,
      description:
        "Delivered design work for 15+ client projects across e-commerce, healthcare, and SaaS.\nBuilt reusable component libraries in Figma that cut design turnaround time by 40%.\nPartnered with clients to define product strategy and roadmap.",
    },
  ],
  education: [
    {
      id: "edu1",
      institution: "Rhode Island School of Design",
      degree: "BFA",
      field: "Graphic Design",
      location: "Providence, RI",
      startDate: "2012",
      endDate: "2016",
      current: false,
      description: "Graduated with honors. Focus on interaction design and typography.",
    },
  ],
  skillCategories: [
    {
      id: "sk1",
      name: "Design",
      skills: [
        { id: "s1", name: "Figma", level: 5 },
        { id: "s2", name: "Design Systems", level: 5 },
        { id: "s3", name: "Prototyping", level: 4 },
        { id: "s4", name: "User Research", level: 4 },
      ],
    },
    {
      id: "sk2",
      name: "Tools",
      skills: [
        { id: "s5", name: "Sketch", level: 4 },
        { id: "s6", name: "Framer", level: 3 },
        { id: "s7", name: "Adobe CC", level: 4 },
        { id: "s8", name: "Webflow", level: 3 },
      ],
    },
  ],
  projects: [
    {
      id: "pr1",
      name: "OpenDesign Kit",
      description:
        "An open-source design system starter kit with 80+ accessible components, 2.4k GitHub stars.",
      url: "github.com/alexmorgan/opendesign-kit",
      technologies: "Figma, React, Storybook",
    },
    {
      id: "pr2",
      name: "FocusFlow",
      description:
        "A productivity app concept exploring ambient computing, featured on Product Hunt.",
      url: "focusflow.app",
      technologies: "Figma, Principle",
    },
  ],
  certifications: [
    {
      id: "c1",
      name: "Nielsen Norman UX Certification",
      issuer: "NN/g",
      date: "2021",
      url: "",
    },
  ],
  languages: [
    { id: "l1", name: "English", level: "Native" },
    { id: "l2", name: "Spanish", level: "Fluent" },
    { id: "l3", name: "French", level: "Intermediate" },
  ],
  courses: [
    {
      id: "co1",
      name: "Advanced Design Systems",
      institution: "Interaction Design Foundation",
      date: "2022",
    },
  ],
};

export const defaultSettings: ResumeSettings = {
  templateId: "modern",
  accentColor: "#0f766e",
  fontFamily: "Inter",
  fontSize: "base",
  spacing: "normal",
  showPhoto: false,
  sectionOrder: [
    "experience",
    "education",
    "skills",
    "projects",
    "certifications",
    "languages",
    "courses",
  ],
};

export function createEmptyResumeData(): ResumeData {
  return {
    personal: {
      fullName: "",
      jobTitle: "",
      email: "",
      phone: "",
      location: "",
      website: "",
      linkedin: "",
      github: "",
      photo: "",
      summary: "",
    },
    experience: [],
    education: [],
    skillCategories: [],
    projects: [],
    certifications: [],
    languages: [],
    courses: [],
  };
}
