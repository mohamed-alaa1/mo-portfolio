import {
  backend,
  creator,
  git,
  goAcademy,
  java,
  mobile,
  mysql,
  node,
  photoshop,
  postgresql,
  postman,
  premiere,
  profile,
  SpringBoot,
  web,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Developer",
    icon: web,
  },
  {
    title: "Monteur",
    icon: mobile,
  },
  {
    title: "Database Expert",
    icon: backend,
  },
  {
    title: "Social Media Manager",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "SpringBoot",
    icon: SpringBoot,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "node",
    icon: node,
  },
  {
    name: "postman",
    icon: postman,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "photoshop",
    icon: photoshop,
  },
  {
    name: "premiere",
    icon: premiere,
  },
];

const experiences = [
  {
    title: "Backend Developer",
    company_name: "Freelancer",
    icon: profile,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Developing and maintaining web applications using JAVA (SpringBoot) and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    ],
  },
];

const projects = [
  {
    name: "Go Academy | Online Academy",
    description:
      "Explore our online academy where students purchase courses and display them on a beautiful profile page, all backed by top-tier security for a safe learning experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Next.JS",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
    ],
    image: goAcademy,
    progress: true,
  },
];

export { experiences, projects, services, technologies };
