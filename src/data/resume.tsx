import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Zigao Wang",
  initials: "ZW",
  url: "https://zigao.wang",
  location: "Shanghai, China",
  locationLink: "https://maps.app.goo.gl/shanghai",
  description:
    "A passionate student developer and tech enthusiast from China",
  summary:
    "I'm a middle school student with a strong interest in programming and technology. Currently working on iOS development and AI projects, I enjoy building tools that make a difference.",
  avatarUrl: "https://img.zigao.wang/zigao.webp",
  skills: [
    "Swift",
    "SwiftUI",
    "Python",
    "JavaScript",
    "Next.js",
    "HTML",
    "CSS",
    "C++",
    "Node.js",
    "PHP",
    "Arduino",
    "Blender",
    "Bootstrap",
    "Figma",
    "Hexo"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://zigao.cc", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    title: "Get in Touch",
    description: "Feel free to reach out to me via email at a@zigao.wang. I'll get back to you as soon as I can!",
    email: "a@zigao.wang",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ZigaoWang",
        icon: Icons.github,
        navbar: true,
      },
      Twitter: {
        name: "Twitter",
        url: "https://twitter.com/zigaow",
        icon: Icons.twitter,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:a@zigao.wang",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "FTC Team 23687 Pi",
      href: "https://github.com/23687pi",
      badges: ["Robotics"],
      location: "Shanghai, China",
      title: "Team Captain",
      start: "September 2023",
      end: "May 2024",
      description:
        "Former member of FTC robotics team Pi, participated in competitions and robot development.",
      logoUrl: "/ftc-23687-logo.svg"
    },
    {
      company: "Pacer Club",
      href: "https://pacer.org.cn",
      badges: ["Founder"],
      location: "China",
      title: "Founder",
      start: "May 2024",
      end: "Present",
      description:
        "Founded and leading Pacer Club, developing innovative solutions and fostering a community of tech enthusiasts.",
      logoUrl: "/pacer-logo.png"
    },
    {
      company: "FTC Team 21959 Dreamers",
      href: "https://21959.com.cn",
      badges: ["Robotics"],
      location: "Shanghai, China",
      title: "Outreach Captain",
      start: "September 2024",
      end: "Present",
      description:
        "Outreach Captain of FTC robotics team, responsible for leading the outreach department and spreading STEM education.",
      logoUrl: "/ftc-21959-logo.svg"
    }
  ],

  projects: [
    {
      title: "Zap iOS App",
      href: "https://github.com/ZapNotesApp/Zap",
      dates: "2024",
      description: "An innovative iOS note-taking application built with SwiftUI, focusing on user experience and productivity.",
      active: true,
      technologies: ["Swift", "SwiftUI", "iOS Development"],
      links: [
        {
          type: "Source",
          href: "https://github.com/ZapNotesApp/Zap",
          icon: <Icons.github className="size-4" />
        }
      ],
      image: "",
      video: ""
    },
    {
      title: "Claude Assistant",
      href: "https://github.com/pacerclub/claude-assistant",
      dates: "2023",
      description: "AI assistant integration project developed under Pacer Club, leveraging Claude's capabilities.",
      technologies: ["Python", "AI", "API Integration"],
      links: [
        {
          type: "Source",
          href: "https://github.com/pacerclub/claude-assistant",
          icon: <Icons.github className="size-4" />
        }
      ],
      image: "",
      video: ""
    },
    {
      title: "DazTab",
      href: "https://github.com/ZigaoWang/daztab",
      dates: "2023",
      description: "A modern browser tab enhancement project focusing on productivity and user experience.",
      technologies: ["JavaScript", "Browser Extension", "UI/UX"],
      links: [
        {
          type: "Source",
          href: "https://github.com/ZigaoWang/daztab",
          icon: <Icons.github className="size-4" />
        }
      ],
      image: "",
      video: ""
    },
    {
      title: "Cleo AI",
      href: "https://github.com/pacerclub/cleoai",
      dates: "2023",
      description: "AI project developed at Pacer Club, focusing on natural language processing and user interaction.",
      technologies: ["Python", "AI", "NLP"],
      links: [
        {
          type: "Source",
          href: "https://github.com/pacerclub/cleoai",
          icon: <Icons.github className="size-4" />
        }
      ],
      image: "",
      video: ""
    }
  ],

  funFacts: [
    "I prefer tabs over spaces",
    "I like pizzas with pineapple on it",
    `I've been alive for 5003 days (as of Dec 22, 2024)`
  ],

  certifications: [],
  hackathons: [
    {
      title: "Hack Shanghai",
      description: "Building innovative solutions for local communities at Shanghai's premier high school hackathon.",
      location: "Shanghai, China",
      dates: "2024",
      image: "",
      links: []
    }
  ]
} as const;
