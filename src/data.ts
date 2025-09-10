import type { Project } from "./components/ProjectCard";

export const CONTACT = {
  name: "Rumeth Wijethunge",
  title: "Programmer / Graphic Designer",
  phone: "+94 77 997 0832",
  email: "rumethwijethunge456@gmail.com",
  address: "17/1, Pitiyegedara Junction, Wattegama, Kandy",
  cv: "/Rumeth_Wijethunge_CV.pdf",
};

export const EXPERIENCE = [
  {
    role: "PR Coordinator",
    org: "AWS Cloud Club - University of Kelaniya",
    time: "2024 – Present",
    points: [
      "Managed communications and promotions for club events and initiatives.",
      "Created engaging content, coordinated with sponsors, and maintained brand image.",
      "Strengthened communication, content creation, and teamwork skills.",
    ],
  },
  {
    role: "Volunteer Social Media Post Designer",
    org: "Rotaract Club of University of Kelaniya",
    time: "2023 – 2024",
    points: [
      "Designed posts for Facebook, Instagram, and WhatsApp; maintained brand consistency.",
      "Boosted engagement and promoted sponsors.",
    ],
  },
  {
    role: "Independent Graphic Designer",
    org: "Freelance",
    time: "2022 – 2023",
    points: [
      "Delivered vector logos and portraits with Adobe Illustrator and Canva.",
      "Strengthened creativity and client communication.",
    ],
  },
  {
    role: "Tutor (Science / Mathematics / ICT)",
    org: "Independent",
    time: "2021 – Present",
    points: [
      "Helped GCE O/L students build fundamentals and improve exam performance.",
    ],
  },
];

export const EDUCATION = [
  {
    school: "University of Kelaniya",
    program: "Bachelor in Physical Science",
    time: "2023 – Present",
  },
  {
    school: "SIBA Campus Sri Lanka",
    program: "Diploma in ICT — Grade A+",
    time: "2017",
  },
  {
    school: "St. Sylvester’s College, Kandy",
    program: "Student",
    time: "2012 – 2022",
  },
];

export const CORE_SKILLS = [
  "Java OOP",
  "C",
  "C#",
  "Python",
  "R",
  "Arduino",
  "JavaScript",
  "HTML",
  "CSS",
  "Spring Boot",
  "REST API",
  "Postman",
  "Oracle SQL / MSSQL",
  "MySQL",
  "Visual Programming (C#)",
  "After Effects / Premiere Pro (video editing)",
  "Canva / Photoshop / Illustrator (flyer & vector design)",
  "Data & Model Analysis (Minitab, R, Python)",
  "Basic Frontend (HTML/CSS/JS)",
];

export const PROJECTS: Project[] = [
  {
    title: "Shop Productivity System",
    desc: "Windows desktop app for small/mid shops: income/expense tracking and analytics with real-time reporting.",
    role: "Team Leader & Lead Programmer",
    time: "2 weeks",
    tech: ["C#", ".NET (WinForms)", "MSSQL", "RDLC", "ADO.NET"],
    img: "/thumbs/shop.jpg",
    url: "#",
  },
  {
    title: "Freelancer Marketplace (Backend)",
    desc: "Connects clients & freelancers: jobs, proposals, contracts, milestones, and messaging.",
    role: "Team Leader & Lead Programmer",
    time: "1 week",
    tech: ["Java", "Spring Boot", "MySQL", "REST API", "Postman"],
    img: "/thumbs/marketplace.jpg",
    url: "#",
  },
  {
    title: "Predictive Analytics in Digital Marketing",
    desc: "Logistic regression to predict conversion from engagement metrics (real-world dataset).",
    role: "Team Leader & Presenter",
    time: "10 weeks",
    tech: ["R", "Logistic Regression", "ROC/AUC"],
    img: "/thumbs/analytics.jpg",
    url: "#",
  },
  {
    title: "Expense Manager",
    desc: "Group-expense manager: categorize spending and split costs among members.",
    role: "Team Leader & Lead Programmer",
    time: "3 months",
    tech: ["Java", "C"],
    img: "/thumbs/expense.jpg",
    url: "#",
  },
  {
    title: "Sonar Distance Indicator",
    desc: "Arduino UNO device to display distance using ultrasound sensors & LEDs.",
    role: "Builder",
    time: "1 month",
    tech: ["Arduino", "C"],
    img: "/thumbs/sonar.jpg",
    url: "#",
  },
];

export const ACHIEVEMENTS = [
  "National boxing player (University of Kelaniya Boxing Team).",
  "Winner (70–75 kg) — Dual Boxing Meet: UoK vs UoP.",
  "2nd runner-up — BASL National Novices 2024 (70–75 kg).",
  "Former St. Sylvester’s College Kandy Boxing Team player.",
  "Former Wushu player & coach — led team to victories in 2019 & 2020; silver medal (2018, U18, 60 kg).",
];

export const CLUB_PROJECTS = [
  {
    name: "Merge 2023 (Rotaract Club of University of Kelaniya)",
    role: "Project Chair",
    time: "4 months",
    desc: "Hybrid conference uniting Rotaract clubs worldwide to share ideas and build partnerships.",
  },
  {
    name: "Arogya 2024 (Rotaract Club of University of Kelaniya)",
    role: "Project Chair",
    time: "4 months",
    desc: "Provided essential health equipment to rural communities under project RotaTomorrow.",
  },
];

export const LANGUAGES = ["English", "Sinhala"];

export const REFERENCES = [
  {
    name: "Shantha Premakumara",
    title: "Combined Maths Teacher, St. Sylvester’s College",
    phone: "+94 77 794 8999",
  },
  {
    name: "Chamalka Dharmasiri",
    title: "Research Assistant, University of Kelaniya",
    phone: "+94 76 859 9950",
    email: "chamalka.dharmasiri@gmail.com",
  },
];

export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/rux-xy" },
  {
    label: "LinkedIn",
    href: "www.linkedin.com/in/rumeth-wijethunge-09632315a",
  },
  { label: "Email", href: `mailto:${CONTACT.email}` },
];
