import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  python,
  html,
  css,
  sql,
  django,
  sklearn,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  bceii,
  ecn,
  um6p,
  bycode,
  traffic,
  smarthome,
  ecomm,
  threejs,
  este,
  aia,
} from "../assets";

export const navLinks = [
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
    title: "Data Scientist",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "Avaloq Developer",
    icon: backend,
  },
  {
    title: "Software Engineer",
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
    name: "python",
    icon: python,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "SKlearn",
    icon: sklearn,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "AVALOQ Developer",
    company_name: "ECN Consulting",
    icon: ecn,
    iconBg: "#383E56",
    date: "October 2022 - April 2024",
    points: [
      "Professional consultant in banking technology and information systems (CORE BANKING) using Avaloq language.",
      "Developing a predictive model based on AI with the aim of detecting high-risk fraudulent claims for SLBP bank using data science technologies.",
      "Our only client was SLBP Bank located in france.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "ENSET - PFE Internship in data science",
    company_name: "UM6P Bengurir",
    icon: um6p,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Jul 2022",
    points: [
      "Forecasting Streamflow in the Rheraya Sub-basin (Marrakech - Tensift) using Artificial Intelligence Methods: Research and Deployment.",
      "Tools: Python , Django , Bokeh , GeoPandas, arcPy , Panel , HvPlot , Scikit-learn , Numpy , Pandas;",
    ],
  },
  {
    title: "ENSET - Engineering Internship in Ai",
    company_name: "BYCODE",
    icon: bycode,
    iconBg: "#383E56",
    date: "Jul 2021 - Sep 2021",
    points: [
      "Development of a Facial Recognition-Based Attendance System.",
      "Tools: Python , Django , OpenCv , Dlib , Matplotlib , Seaborn , Numpy , Pandas;",
    ],
  },
  {
    title: "ENSET - Initiation Internship",
    company_name: "BCEII",
    icon: bceii,
    iconBg: "#E6DEDD",
    date: "Jul 2020 - Sep 2020",
    points: [
      "Development of a Mobile Application for Managing Staff Transportation",
      "Tools: Java , NodeJs;",
    ],
  },
  {
    title: "ESTE -  End of Studies Internship",
    company_name: "the Higher School of Technology of Essaouira",
    icon: este,
    iconBg: "#E6DEDD",
    date: "Apr 2019 - Jul 2019",
    points: [
      "Development of an e-learning website for the school.",
      "Tools: AngularJs ,NodeJs ,Mongodb ,ExpressJs;",
    ],
  },
  {
    title: "ESTE - Technical Internship",
    company_name: "AIA Expert",
    icon: aia,
    iconBg: "#E6DEDD",
    date: "Aug 2018 - Sep 2018",
    points: [
      "Development of a stock management website.",
      "Tools: AngularJs ,NodeJs ,Mongodb ,ExpressJs;",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Sohaib proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a software developper who truly cares about their clients' success like Sohaib does.",
    name: "Verhile Sylvain",
    designation: "It Manager",
    company: "SLBP",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Sohaib optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Traffic Sign AI",
    description:
      "TrafficSignAI is an innovative project aimed at developing a robust and accurate system for the detection and recognition of traffic signs. Leveraging advanced computer vision techniques and machine learning algorithms, this system is designed to enhance road safety by accurately identifying and classifying traffic signs in real-time.",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "internet of things",
        color: "green-text-gradient",
      },
      {
        name: "Protocole MQTT",
        color: "pink-text-gradient",
      },
    ],
    image: traffic,
    source_code_link: "https://github.com/",
  },
  {
    name: "SmartHome Prototype",
    description:
      "The SmartHome Prototype project is dedicated to developing a state-of-the-art prototype of a smart home system. This system aims to revolutionize modern living by integrating advanced IoT (Internet of Things) technologies, artificial intelligence, and automation to create a seamless, efficient, and user-friendly home environment.",
    tags: [
      {
        name: "Ml,internet of things",
        color: "blue-text-gradient",
      },
      {
        name: "carte arduino, esp32",
        color: "green-text-gradient",
      },
      {
        name: "MIT app",
        color: "pink-text-gradient",
      },
    ],
    image: smarthome,
    source_code_link: "https://github.com/",
  },
  {
    name: "E-Commerce Solutions",
    description:
      "As a skilled freelancer, the E-Commerce Solutions project focuses on creating custom e-commerce websites tailored to meet the unique needs of multiple clients. By leveraging the latest web development technologies, this projects aims to deliver high-performance, user-friendly, and visually appealing online stores that drive sales and enhance customer experience.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "NextJs",
        color: "green-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Payloadcms",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJs(3D)",
        color: "pink-text-gradient",
      },
    ],
    image: ecomm,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
