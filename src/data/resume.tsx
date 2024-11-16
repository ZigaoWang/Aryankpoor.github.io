import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aryan Kapoor",
  initials: "AK",
  url: "https://www.aryankap.com",
  location: "India",
  locationLink: "https://maps.app.goo.gl/cNqeNrNybD93k8Uv9",
  description:
    "College freshman from India who loves integrating and automating things. Currently working at Hack Club",
  summary:
    "My journey started 7 years ago, when I started learning basic html and css. I have learned a lot of things and met a lot of cool people in my time in the developer world. I am [currently pursuing Computer Science as my major in college](#education). In the past, I worked on an AI-assistant website called [Metamorpheus](https://metamorpheus.vercel.app) and I am currently working on a financial-resources web app called [Welp](https://welp-wiki.vercel.app) which allows you to create invoices and integrate your business all in one place.",
  avatarUrl: "/image.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Javascript",
    "HTML",
    "CSS",
    "Software Development",
    "Web Development",
    "Problem Solving",
    "Python",
    "Git",
    "Github",
    "Material UI",
    "Electronics",
    "PCB",
    "Raspberry PI",
    "Automations",
    "Airtable",
    "TailwindCSS",
    "SCSS",
    
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "aryan@hackclub.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Aryankpoor",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aryan-kapoor-4b0894207/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,

        navbar: false,
      },
      Codepen: {
        name: "Codepen",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:aryan@hackclub.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Hack Club HCB",
      href: "https://hackclub.com/hcb",
      badges: [],
      location: "Remote",
      title: "Junior Onboarder",
      logoUrl: "/hcb-light.svg",
      start: "Sept 2024",
      end: "Now",
      description:
        "Helped organizations get onboarded to Hack Club Bank and help them with their financial needs. Also handled other financial areas. ",
    },
    {
      company: "Hack Club",
      badges: [],
      href: "https://hackclub.com",
      location: "Remote",
      title: "Volunteer",
      logoUrl: "/icon-progress-rounded.svg",
      start: "July 2024",
      end: "September 2024",
      description:
        "Created various Airtable automations that integrated with slack and created workflows which connected airtable databases to slack. Also Reviewed the Amazing projects and submissions made by participants of Arcade organised by Hack Club and was part of the Fraud Investigation team.",
    },
    
  ],
  education: [
    {
      school: "Vellore Institute of Technology",
      href: "https://vit.ac.in/",
      degree: "B.tech in Computer Science and Engineering",
      logoUrl: "/vit.png",
      start: "2024",
      end: "2028",
    },
    {
      school: "Amity Online School",
      href: "https://www.amity.edu/",
      degree: "High School",
      logoUrl: "https://i.ibb.co/J28Q6JJ/amity.jpg",
      start: "2024",
      end: "2020",
    },
    {
      school: "Apeejay School",
      href: "https://uwaterloo.ca",
      degree: "Primary-Middle School",
      logoUrl: "https://i.ibb.co/GxN4SXB/apj.jpg",
      start: "2020",
      end: "2010",
    }
    
  ],
  projects: [
    {
      title: "Welp",
      href: "https://welp.it.com",
      dates: "September 2024 - Present",
      active: true,
      description:
        "A web application which allows users to create and send invoices from within the website with built-in email interface and manage their business with added payment capabilities.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Clerk",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Neon",
        "Firebase",
        "Google Cloud Console",
        "MagicUI",
        "Vercel"
      ],
      links: [
        {
          type: "Website",
          href: "https://welp-wiki.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Aryankpoor/welp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "MetaMorpheus",
      href: "",
      dates: "June 2024 - August 2024",
      active: true,
      description:
        "",
      technologies: [
        "React",
        "Dotenv",
        "Vercel",
        "Gemini",
        "Vite",
      ],
      links: [
        {
          type: "Website",
          href: "https://metamorpheus.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Aryankpoor/metamorpheus",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Screen Wrec",
      href: "",
      dates: "September 2024",
      active: true,
      description:
        "A lightweight desktop screen recorder applications developed in electron.",
      technologies: [
        "Electron",
        "Desktop",
        "Javascript"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Aryankpoor/screen-wrec",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",

    },
    {
      title: "Ordel",  
      href: "https://order-trackerr.netlify.app/",
      dates: "April 2023 - March 2024 ",
      active: true,
      description:
        "A shipping company and tracking website made entirely out of static HTML, CSS and JS.",
      technologies: [
        "HTML",
        "CSS",
        "JS",
        "Github Pages",
        "Bootstrap",
        "Netlify"
      ],
      links: [
        {
          type: "Website",
          href: "https://order-trackerr.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Aryankpoor/ordel",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "",
      video:"https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",

    },
  ],
  hackathons: [
    {
      title: "Hacktoberfest 2024",
      dates: "0ctober 1st - 31st, 2024",
      location: "Online",
      description:
        "Contributed to open source projects",
      image:
        "https://i.ibb.co/SdvvZ44/hacktoberfest.jpg",
     
      links: [
        
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://hacktoberfest.digitalocean.com/",
        },
        {
          title: "Digitalocean",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.digitalocean.com/blog/hactoberfest-2024-how-to-participate",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=-T8ssjybfKo",
        }
      ],
    },
    {
      title: "Code & Conquer",
      dates: "September 16-18, 2024",
      location: "Chennai, India",
      description:
        "Solved various competitive programming questions and CTFs.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "BitWars",
      dates: "September 14th - 16th, 2018",
      location: "Chennai, India",
      description:
        "Solved various competitive programming problems and engaged in timed competitive programming battles with other teams.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
     
      links: [],
    },
    
    
    {
      title: "Hacktoberfest 2023",
      dates: "0ctober 1st - 31st, 2023",
      location: "Online",
      description:
        "Contributed to open source projects",
      image:
        "https://i.ibb.co/SdvvZ44/hacktoberfest.jpg",
     
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Aryankpoor/Ordel",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://order-trackerr.netlify.app/",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=0KB0PQ8qzks",
        }
      ],
    },
    
    {
      title: "Hacktoberfest 2022",
      dates: "0ctober 1st - 31st, 2022",
      location: "Online",
      win: "Swag | Sticker pack by github + Tee",
      description:
        "Contributed to open-source projects",
      image:
        "https://i.ibb.co/SdvvZ44/hacktoberfest.jpg",
     
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Aryankpoor/Ordel",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://order-trackerr.netlify.app/",
        },
        {
          title: "Recap",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.digitalocean.com/blog/hacktoberfest-2022-your-mission-for-open-source",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=vSdSFxIKy5w",
        }
      ],
    },
    {
      title: "Hacktoberfest 2021",
      dates: "October 1st - 31st, 2021",
      location: "Online",
      description: "Contributed to open source projects",
      image:
        "https://i.ibb.co/SdvvZ44/hacktoberfest.jpg",
      win: "Swag | Sticker pack by github + Tee",
      links: [
        {
          title: "Recap",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.digitalocean.com/blog/hacktoberfest-2021-recap",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=vSdSFxIKy5w",
        }
      ],
    },
    {
      title: "Hacktoberfest 2020",
      dates: "October 1st - 31st, 2020",
      location: "Online",
      description: "Contributed to open source projects",
      image:
        "https://i.ibb.co/SdvvZ44/hacktoberfest.jpg",
      win: "Swag | Sticker pack by github + Tee",
      links: [
        {
          title: "Recap",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.digitalocean.com/blog/hacktoberfest-recap2020",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=vSdSFxIKy5w",
        }
      ],
    },
   
    {
      title: "Corona Code Zone",
      dates: "May 19th, 2020",
      location: "Online",
      description:
        "Developed a healthcare management app in python, in view of the COVID-19 pandemic.",
        win: "Swag | Sticker pack by github + Tee",
      image:
        "https://i.ibb.co/J28Q6JJ/amity.jpg",
      links: [],
    },
  ],
} as const;
