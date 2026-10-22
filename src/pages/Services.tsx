import { motion } from "framer-motion";
import {
  ArrowRight,
  Eye,
  Zap,
  RefreshCcw,
  Cpu,
  BarChart3,
  Check,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { BRAND, MARKETS } from "@/lib/marketConfig";
import { marketFromPath, marketPath } from "@/lib/marketRoutes";
import type { MarketKey } from "@/lib/marketConfig";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55 },
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const GROUPS = [
  {
    id: "visibility",
    icon: <Eye className="w-7 h-7" />,
    number: "01",
    title: "Visibility & Opportunity Creation",
    description:
      "Revenue depends on being found. Blue Oak assesses how effectively a business creates visibility, attracts attention, and generates the conditions for inbound opportunity.",
    capabilities: [
      "Search visibility and local presence",
      "Social media content and engagement systems",
      "Social inquiry capture and lead routing",
      "Google Business Profile optimization",
      "Online reputation and review management",
      "Inquiry pathway clarity",
      "Demand generation infrastructure",
      "Lead generation systems where appropriate",
      "Content and educational positioning",
    ],
  },
  {
    id: "capture",
    icon: <Zap className="w-7 h-7" />,
    number: "02",
    title: "Capture, Response & Conversion",
    description:
      "Generating interest has little value if that interest is lost before it converts. Blue Oak strengthens the systems that capture inquiries, respond promptly, qualify prospects, and move them toward a decision.",
    capabilities: [
      "Missed call recovery and text-back systems",
      "AI voice response (Maya), where available",
      "Multi-channel inquiry capture",
      "Speed-to-lead response infrastructure",
      "Lead qualification and routing",
      "Appointment scheduling and confirmation",
      "Sales follow-up sequences",
      "Conversion infrastructure",
      "Social inquiry response and follow-up",
    ],
  },
  {
    id: "retention",
    icon: <RefreshCcw className="w-7 h-7" />,
    number: "03",
    title: "Retention, Recovery & Growth",
    description:
      "The highest-probability revenue opportunity is often with people who already know the business. Blue Oak builds systems that retain customers, recover lost opportunities, and generate ongoing value from existing relationships.",
    capabilities: [
      "Customer retention systems",
      "Lapsed customer reactivation",
      "No-show and cancellation recovery",
      "Post-service follow-up",
      "Review and reputation development",
      "Referral infrastructure",
      "Repeat business facilitation",
    ],
  },
  {
    id: "systems",
    icon: <Cpu className="w-7 h-7" />,
    number: "04",
    title: "Systems, AI & Automation",
    description:
      "Revenue Infrastructure™ depends on connected, reliable systems. Blue Oak designs and implements the technology, automation, and AI capabilities that make revenue operations consistent and scalable. AI handles routine work while people retain control over consequential decisions.",
    capabilities: [
      "CRM implementation and management",
      "Lead tracking and pipeline visibility",
      "Workflow automation",
      "AI voice and conversational systems",
      "Communications infrastructure",
      "System integrations",
      "Process design and improvement",
      "Human approval and AI governance controls",
    ],
  },
  {
    id: "measurement",
    icon: <BarChart3 className="w-7 h-7" />,
    number: "05",
    title: "Measurement & Continuous Optimization",
    description:
      "Revenue Infrastructure™ that cannot be measured cannot be improved. Blue Oak installs the tracking, reporting, and intelligence capabilities that allow businesses to understand performance and improve continuously.",
    capabilities: [
      "Revenue performance tracking",
      "Lead source attribution",
      "Conversion measurement",
      "Pipeline reporting dashboards",
      "Revenue Intelligence infrastructure",
      "Performance benchmarking",
      "Continuous optimization programs",
    ],
  },
];

const SYSTEMS = [
  {
    name: "Foundation System™",
    description:
      "Establish the essential infrastructure for business visibility, inquiry capture, response, and follow-up.",
    features: [
      "Visibility and inquiry pathway review",
      "Lead capture and response foundations",
      "Social revenue capture",
      "Essential follow-up workflows",
      "Basic performance visibility",
    ],
  },
  {
    name: "Recovery System™",
    description:
      "Identify and recover opportunities lost through missed inquiries, delayed responses, inconsistent follow-up, and dormant relationships.",
    features: [
      "Missed inquiry recovery",
      "Lead qualification and routing",
      "Automated follow-up workflows",
      "Social inquiry capture and recovery",
      "Customer reactivation opportunities",
      "Revenue recovery measurement",
    ],
  },
  {
    name: "Engine System™",
    description:
      "Connect visibility, lead management, opportunity intelligence, automation, and measurement into a coordinated Revenue
