import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  amazon,
  investas,
  paymentGateway,
  greenapex,
  udemy,
  greeksoft,
  vector,
  mantra,
  bootstrap,
  nextjs,
  express,
  firebase,
  graphql,
  github,
  materialUI,
} from "../assets/images";
import {
  FaBriefcase,
  FaGithub,
  FaLinkedin,
  FaSchool,
  FaStar,
} from "react-icons/fa6";
import { BsFillPersonLinesFill } from "react-icons/bs";
import resume from "../assets/docs/Parth_Dangroshiya.pdf";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Professional Coder",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "Graphql",
    icon: graphql,
  },
];

export const techs = [
  {
    src: html,
    title: "HTML",
    link: "https://html.com/document/",
    style: "hover:shadow-orange-500",
  },
  {
    src: css,
    title: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    style: "hover:shadow-blue-500",
  },
  {
    src: javascript,
    title: "Javascript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    style: "hover:shadow-yellow-500",
  },
  {
    src: bootstrap,
    title: "Bootstrap",
    link: "https://getbootstrap.com/docs/4.1/getting-started/introduction/",
    style: "hover:shadow-violet-800",
  },
  {
    src: reactjs,
    title: "ReactJS",
    link: "https://legacy.reactjs.org/docs/getting-started.html",
    style: "hover:shadow-cyan-500",
  },
  {
    src: redux,
    title: "ReduxToolkit",
    link: "https://redux-toolkit.js.org/",
    style: "hover:shadow-violet-500",
  },
  {
    src: nextjs,
    title: "NextJS",
    link: "https://nextjs.org/",
    style: "hover:shadow-slate-500",
  },
  {
    src: tailwind,
    title: "Tailwind CSS",
    link: "https://tailwindcss.com/docs/installation",
    style: "hover:shadow-cyan-500",
  },
  {
    src: nodejs,
    title: "NodeJS",
    link: "https://nodejs.org/en/docs",
    style: "hover:shadow-green-500",
  },
  {
    src: express,
    title: "Express",
    link: "https://expressjs.com/",
    style: "hover:shadow-slate-50",
  },
  {
    src: mongodb,
    title: "MongoDB",
    link: "https://www.w3schools.com/mongodb/",
    style: "hover:shadow-green-500",
  },
  {
    src: firebase,
    title: "Firebase",
    link: "https://firebase.google.com/",
    style: "hover:shadow-yellow-500",
  },
  {
    src: typescript,
    title: "Typescript",
    link: "https://www.typescriptlang.org/docs/",
    style: "hover:shadow-sky-500",
  },
  {
    src: github,
    title: "Git&Github",
    link: "https://github.com/",
    style: "hover:shadow-slate-50",
  },
  {
    src: materialUI,
    title: "MaterialUI",
    link: "https://mui.com/",
    style: "hover:shadow-sky-500",
  },
  {
    src: graphql,
    title: "graphQL",
    link: "https://graphql.org/",
    style: "hover:shadow-pink-500",
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Green Apex Technolabs LLB, Ahmedabad, Gujrat",
    icon: greenapex,
    iconBg: "#383E56",
    date: "Aug 2021 - present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developement",
    company_name: "Udemy",
    icon: udemy,
    iconBg: "#E6DEDD",
    date: "Spt 2020 - Aug 2021",
    points: [
      "learning of HTML, CSS, Javascript, Bootstrap, tailwidCSS, ReactJS, MongoDB, ExpressJS and NodeJS.",
    ],
  },
  {
    title: "C++ Developer",
    company_name: "Greeksoft Technologies Private Limited, Mumbai, Maharashtra",
    icon: greeksoft,
    iconBg: "#383E56",
    date: "Oct 2019 - Aug 2020",
    points: [
      "I have developed Trading Software Create Tool Bar, Menu Bar, context Menu, property Sheet, combo Box, Edit Control, Grid Control, Tree Control, List Control, List Box and Docking control, etc. using third party Software Also Apply validation and Property in Dialog Base, Multi-Document and Single Document Application.",
    ],
  },
  {
    title: "Embedded System",
    company_name: "vector institute, Bengaluru, Karnataka",
    icon: vector,
    iconBg: "#E6DEDD",
    date: "Jul 2018 - Oct 2019",
    points: [
      "I trained as Embedded system (Embedded C programming, Linux/ Unix, OS concept, DS concept,8051 assemblies, and Embedded C programming AVR controllers, basic of ARM, basic RTOS, TCP-IP Network programming, Electronics hardware, and software) as well as Lab Assistant at vector institute.",
    ],
  },
  {
    title: "Assembly Engineer",
    company_name: "Mantra softech pvt.Ltd, Ahmedabad, Gujrat",
    icon: mantra,
    iconBg: "#383E56",
    date: "May 2017 - Jan 2018",
    points: [
      "the undisputed leader in the Biometric & RFID industry in India. Fingerprint scanner and IRIS sensors are the primary product of Mantra softech Pvt Ltd.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Amazon Clone Next",
    description:
      " The Amazon Clone, built with Next.js, React.js, and Tailwind CSS, mirrors the renowned e-commerce platform. It reproduces Amazon's UI, product catalog, and checkout process. Next.js enables fast, server-rendered pages, while Tailwind CSS ensures a sleek design. React.js powers dynamic content, providing an immersive shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: amazon,
    source_code_link: "https://amazonclones.vercel.app/",
  },
  {
    name: "Investa",
    description:
      "Investa project leverages React.js for dynamic UI, SCSS for enhanced styling, and RESTful API for seamless data management. It empowers users to explore investments through an intuitive interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: investas,
    source_code_link: "https://investas.vercel.app/",
  },
  {
    name: "Payment Gateway",
    description:
      "The Payment Gateway integrates Next.js for dynamic UI, Supabase for secure database transactions, and CSS for seamless styling. This powerful combination enables safe and efficient online payments, ensuring a user-friendly experience.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: paymentGateway,
    source_code_link: "https://paymentgetway.vercel.app/",
  },
];

const sideLinks = [
  {
    id: 2001,
    child: (
      <>
        Linkedin <FaLinkedin size={30} />
      </>
    ),
    href: "https://www.linkedin.com/in/parth-dangroshiya-669a86141",
    style: "rounded-tr-md",
  },
  {
    id: 2002,
    child: (
      <>
        GitHub <FaGithub size={30} />
      </>
    ),
    href: "https://github.com/Parth731?tab=repositories",
    style: "rounded-tr-md",
  },
  {
    id: 2003,
    child: (
      <>
        Resume <BsFillPersonLinesFill size={30} />
      </>
    ),
    href: resume,
    style: "rounded-br-md",
    // download: true,
    download: false,
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  sideLinks,
};
