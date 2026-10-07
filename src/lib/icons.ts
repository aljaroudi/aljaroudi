import type { SvgComponent } from "astro/types"
import AppStoreIcon from "../assets/icons/app-store.svg"
import AppleIntelligenceIcon from "../assets/icons/apple-intelligence.png"
import JetpackComposeIcon from "../assets/icons/jetpackcompose.svg"
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
import ConvexIcon from "../assets/icons/convex.svg"
import TanStackIcon from "../assets/icons/tanstack.svg"
import TailwindIcon from "../assets/icons/tailwind.svg"
import RoutingIcon from "../assets/icons/routing.svg"

export const SKILLS = {
  "App Store": AppStoreIcon,
  Web: undefined,
  Mobile: undefined,
  Cloud: undefined,
  AI: undefined,
  Postgres: PostgresIcon,
  Svelte: SvelteIcon,
  SwiftUI: SwiftIcon,
  Firebase: FirebaseIcon,
  "Objective-C": ObjectiveCIcon,
  LLMs: GeminiIcon,
  Agents: GeminiIcon,
  PWA: PWAIcon,
  "Bipedal Locomotion": FootprintIcon,
  Python: PythonIcon,
  TypeScript: TypeScriptIcon,
  "Computer Vision": GeminiIcon,
  "Swift Data": SwiftIcon,
  Swift: SwiftIcon,
  "Next.js": NextIcon,
  tRPC: TRPCIcon,
  Go: GoIcon,
  Convex: ConvexIcon,
  TanStack: TanStackIcon,
  Tailwind: TailwindIcon,
  "Apple Intelligence": AppleIntelligenceIcon,
  "Route Optimization": RoutingIcon,
  Kotlin: JetpackComposeIcon,
} as const satisfies Record<
  string,
  (SvgComponent & ImageMetadata) | ImageMetadata | undefined
>
