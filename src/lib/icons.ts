import type { SvgComponent } from "astro/types"
import AppStoreIcon from "../assets/icons/app-store.svg"
import GoIcon from "../assets/icons/go.svg"
import PostgresIcon from "../assets/icons/postgres.svg"
import SwiftIcon from "../assets/icons/swift.svg"
import SvelteIcon from "../assets/icons/svelte.svg"
import FirebaseIcon from "../assets/icons/firebase.svg"
import GeminiIcon from "../assets/icons/gemini.svg"
import PWAIcon from "../assets/icons/pwa.svg"
import FootprintIcon from "../assets/icons/footprints.svg"
import PythonIcon from "../assets/icons/python.svg"
import TypeScriptIcon from "../assets/icons/typescript.svg"
import NextIcon from "../assets/icons/nextjs.svg"
import TRPCIcon from "../assets/icons/trpc.svg"
import ObjectiveCIcon from "../assets/icons/objective-c.svg"

export type SkillDef = {
  name: string
  icon: (SvgComponent & ImageMetadata) | undefined
}

export const SKILLS = [
  {
    name: "App Store",
    icon: AppStoreIcon,
  },
  {
    name: "Web",
    icon: undefined,
  },
  {
    name: "Mobile",
    icon: undefined,
  },
  {
    name: "Cloud",
    icon: undefined,
  },
  {
    name: "AI",
    icon: undefined,
  },
  {
    name: "Postgres",
    icon: PostgresIcon,
  },
  {
    name: "Svelte",
    icon: SvelteIcon,
  },
  {
    name: "SwiftUI",
    icon: SwiftIcon,
  },
  {
    name: "Firebase",
    icon: FirebaseIcon,
  },
  {
    name: "Objective-C",
    icon: ObjectiveCIcon,
  },
  {
    name: "LLMs",
    icon: GeminiIcon,
  },
  {
    name: "PWA",
    icon: PWAIcon,
  },
  {
    name: "Bipedal Locomotion",
    icon: FootprintIcon,
  },
  {
    name: "Python",
    icon: PythonIcon,
  },
  {
    name: "TypeScript",
    icon: TypeScriptIcon,
  },
  {
    name: "Computer Vision",
    icon: GeminiIcon,
  },
  {
    name: "Swift Data",
    icon: SwiftIcon,
  },
  {
    name: "Swift",
    icon: SwiftIcon,
  },
  {
    name: "Next.js",
    icon: NextIcon,
  },
  {
    name: "tRPC",
    icon: TRPCIcon,
  },
  {
    name: "Go",
    icon: GoIcon,
  },
] as const satisfies SkillDef[]
