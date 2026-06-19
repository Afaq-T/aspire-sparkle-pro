import portrait from "@/assets/portrait.jpg.asset.json";
import resume from "@/assets/resume.pdf.asset.json";
import certCEH from "@/assets/cert-ECC-CEH-Certificate.pdf.asset.json";
import certCCNA from "@/assets/cert-CCNA_Simplilearn.pdf.asset.json";
import certNetFund from "@/assets/cert-cybrary-cert-ccna-network-fundamentals.pdf.asset.json";
import certIntroAI from "@/assets/cert-Intro-to-AI.pdf.asset.json";
import certAIAhead from "@/assets/cert-AI_Ahead.pdf.asset.json";
import certAIResp from "@/assets/cert-AI_Responsibly.pdf.asset.json";
import certPrompt from "@/assets/cert-Art_Of_Prompting.pdf.asset.json";
import certProd from "@/assets/cert-max_productivity_AI.pdf.asset.json";

export const profile = {
  name: "Afaq Tahir",
  alias: "afaq.tahir",
  role: "Networking & Cybersecurity Engineer",
  trajectory: "Networking → Cloud → Cloud Security",
  location: "Sadiqabad, Rawalpindi · Pakistan",
  email: "afaqpk2024@gmail.com",
  phone: "+92 334 5831169",
  linkedin: "https://www.linkedin.com/in/afaq-tahir-436495371",
  github: "https://github.com/Afaq-T",
  resumeUrl: resume.url,
  portraitUrl: portrait.url,
  tagline:
    "Entry-level network & systems engineer building toward cloud networking and cloud security.",
  objective:
    "Motivated IT undergraduate looking for an entry-level role in network or system monitoring. Using my knowledge of networking, troubleshooting, cloud concepts, and cybersecurity to support smooth, reliable IT operations — and steadily growing into cloud networking and cloud network security.",
} as const;

export const stats = [
  { label: "Certifications", value: "08+" },
  { label: "Lab Projects", value: "06" },
  { label: "Years Learning", value: "03" },
  { label: "Focus Domains", value: "03" },
];

export const skillGroups = [
  {
    title: "Networking",
    icon: "network",
    items: [
      "TCP / IP & OSI Model",
      "Subnetting & VLSM",
      "VLANs & Trunking",
      "Static & Dynamic Routing",
      "Switching Fundamentals",
      "Cisco Packet Tracer",
    ],
  },
  {
    title: "Cybersecurity",
    icon: "shield",
    items: [
      "Wireshark traffic analysis",
      "Nmap reconnaissance",
      "Kali Linux toolchain",
      "Burp Suite (web)",
      "Vulnerability scanning",
      "Pen-testing fundamentals",
    ],
  },
  {
    title: "Cloud Foundations",
    icon: "cloud",
    items: [
      "IaaS / PaaS / SaaS models",
      "Public / Private / Hybrid",
      "Virtualization concepts",
      "Scalability & elasticity",
      "Shared responsibility model",
      "Cloud networking primitives",
    ],
  },
  {
    title: "Systems & Tooling",
    icon: "terminal",
    items: [
      "Linux (Kali, Ubuntu)",
      "Windows administration",
      "VirtualBox / VMware",
      "Bash scripting basics",
      "Git & GitHub",
      "Documentation",
    ],
  },
];

export const projects = [
  {
    slug: "enterprise-network-sim",
    title: "Enterprise Network Simulation",
    stack: ["Cisco Packet Tracer", "VLANs", "Static Routing", "Subnetting"],
    summary:
      "Designed and configured a small-to-medium enterprise topology with segmented VLANs, inter-VLAN routing and a clean IP plan.",
    bullets: [
      "Built multi-switch topology with trunk links and VLAN segmentation",
      "Configured static routes across three subnets with consistent VLSM plan",
      "Verified end-to-end reachability with ping/traceroute and CLI sweeps",
    ],
    repo: "https://github.com/Afaq-T",
  },
  {
    slug: "pentest-lab",
    title: "Ethical Hacking Lab",
    stack: ["Kali Linux", "Nmap", "Wireshark", "Burp Suite"],
    summary:
      "Controlled lab environment to practice reconnaissance, vulnerability scanning and packet analysis on intentionally vulnerable targets.",
    bullets: [
      "Fingerprinted hosts and services with Nmap NSE scripts",
      "Captured and dissected protocol flows in Wireshark",
      "Documented findings in a structured pentest report format",
    ],
    repo: "https://github.com/Afaq-T",
  },
  {
    slug: "subnet-planner",
    title: "Subnetting Practice Set",
    stack: ["IPv4", "VLSM", "CIDR", "Documentation"],
    summary:
      "A worked set of subnetting scenarios — VLSM, CIDR summarization and address planning for branch-style networks.",
    bullets: [
      "10+ scenarios from /24 splits to /16 enterprise plans",
      "Hand-drawn topology + address tables for each",
      "Verified in Packet Tracer to confirm reachability",
    ],
    repo: "https://github.com/Afaq-T",
  },
  {
    slug: "wireshark-analysis",
    title: "Traffic Analysis Notebook",
    stack: ["Wireshark", "TCP/IP", "HTTP", "DNS"],
    summary:
      "Notebook of annotated packet captures: TCP handshakes, DNS resolution chains, HTTP requests and suspicious traffic patterns.",
    bullets: [
      "Walks through TCP 3-way handshake at packet level",
      "Highlights DNS tunneling and unusual port behavior",
      "Reusable filter cheatsheet for future captures",
    ],
    repo: "https://github.com/Afaq-T",
  },
];

export const certifications = [
  {
    name: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council · via Corvit Systems",
    year: "2025",
    tag: "Cybersecurity",
    url: certCEH.url,
  },
  {
    name: "CCNA — Cisco Certified Network Associate",
    issuer: "Simplilearn",
    year: "2025",
    tag: "Networking",
    url: certCCNA.url,
  },
  {
    name: "CCNA Network Fundamentals",
    issuer: "Cybrary",
    year: "2025",
    tag: "Networking",
    url: certNetFund.url,
  },
  {
    name: "Introduction to Artificial Intelligence",
    issuer: "Google · Coursera",
    year: "2025",
    tag: "AI",
    url: certIntroAI.url,
  },
  {
    name: "Staying Ahead with AI",
    issuer: "Google",
    year: "2025",
    tag: "AI",
    url: certAIAhead.url,
  },
  {
    name: "Using AI Responsibly",
    issuer: "Google",
    year: "2025",
    tag: "AI",
    url: certAIResp.url,
  },
  {
    name: "The Art of Prompting",
    issuer: "Google",
    year: "2025",
    tag: "AI",
    url: certPrompt.url,
  },
  {
    name: "Maximizing Productivity with AI",
    issuer: "Google",
    year: "2025",
    tag: "AI",
    url: certProd.url,
  },
];

export const timeline = [
  {
    year: "2025",
    title: "Certified Ethical Hacker (CEH)",
    detail: "Hands-on training at Corvit Systems, Rawalpindi — pen-testing fundamentals, recon & vulnerability scanning.",
    tag: "Certification",
  },
  {
    year: "2025",
    title: "CCNA — Networking Track",
    detail: "Completed CCNA via Simplilearn + Cybrary network fundamentals. Routing, switching, OSI, IP plans.",
    tag: "Certification",
  },
  {
    year: "2024 → now",
    title: "BS Information Technology",
    detail: "University Of Gujrat — building the academic foundation in networks, systems and security.",
    tag: "Education",
  },
  {
    year: "2021",
    title: "F.Sc Computer Science",
    detail: "Shaheen International School & College, Abbottabad.",
    tag: "Education",
  },
];
