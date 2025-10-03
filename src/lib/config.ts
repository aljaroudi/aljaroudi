import type { SKILLS } from "./icons"

export const PERSONAL = {
  name: "Mohammed",
  title: "Full Snack Developer 😋",
  skills: ["Web", "Mobile", "AI"],
  links: {
    github: "https://github.com/aljaroudi",
    linkedin: "https://www.linkedin.com/in/aljaroudi/",
  },
} as const satisfies PersonalDef

export const PROJECTS = [
  {
    about: {
      title: "WasteAID",
      description: "Automated AI waste monitoring platform",
      year: "2021–Present",
      skills: ["Next.js", "Python", "Go", "Computer Vision", "Postgres"],
    },
    links: {
      site: "https://ecorithms.com",
      repo: undefined,
      appStore: undefined,
    },
    role: {
      title: "Co-Founder & CTO",
      org: "Ecorithms Inc.",
    },
  },
  {
    about: {
      title: "Nouvi",
      description: "AI food diary app",
      year: "2025",
      skills: ["SwiftUI", "Swift Data", "LLMs"],
    },
    links: {
      site: undefined,
      repo: undefined,
      appStore: "https://apps.apple.com/app/nouvi/id6737724740",
    },
    role: {
      title: "iOS Developer",
      org: undefined,
    },
  },
  {
    about: {
      title: "T3lepathy",
      description: "Subscription-free AI chats with multiple AI models. BYOL.",
      year: "2025",
      skills: ["Svelte", "LLMs", "PWA"],
    },
    links: {
      site: "https://t3lepathy.vercel.app",
      repo: "https://github.com/aljaroudi/t3lepathy",
      appStore: undefined,
    },
    role: {
      title: "Frontend Developer",
      org: undefined,
    },
  },
  {
    about: {
      title: "iTotal",
      description: "Helped 1M students apply for college",
      year: "2014",
      skills: ["Objective-C", "Swift", "Firebase"],
    },
    links: {
      site: undefined,
      repo: undefined,
      appStore: undefined,
    },
    role: {
      title: "Full Stack Developer",
      org: undefined,
    },
  },
  {
    about: {
      title: "Locomotion",
      description:
        "Transitioned from quad- to bipedal locomotion, significantly improving balance, agility, and cost",
      year: new Date("1970-01-01").toLocaleDateString(),
      skills: ["Bipedal Locomotion"],
    },
    links: {
      site: undefined,
      repo: undefined,
      appStore: undefined,
    },
    role: {
      title: "Trainee",
      org: undefined,
    },
  },
] as const satisfies ProjectDef[]

/* Types */
type PersonalDef = {
  name: string
  title: string
  skills: string[]
  links: {
    github: `https://github.com/${string}`
    linkedin: `https://www.linkedin.com/in/${string}`
  }
}

type ProjectDef = {
  about: {
    title: string
    description: string
    year: string
    skills: ((typeof SKILLS)[number]["name"] | (string & {}))[]
  }
  links: {
    site: string | undefined
    repo: string | undefined
    appStore: `https://apps.apple.com/app/${string}/id${string}` | undefined
  }
  role: {
    title: string | undefined
    org: string | undefined
  }
}

export type Personal = typeof PERSONAL
export type Project = (typeof PROJECTS)[number]
export type Skill = Project["about"]["skills"][number]
