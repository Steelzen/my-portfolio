// assets import
import reactLogo from "./assets/images/React-logo.png";
import djangoLogo from "./assets/images/django-logo.jpg";
import sqlLogo from "./assets/images/SQL-logo.png";
import themeImg from "./assets/images/theme.webp";

const imageUrls = [reactLogo, djangoLogo, sqlLogo];

const logotext = "SteelZen";
const meta = {
  title: "Taehyung, Kwon",
  description: "I’m Taehyung, software devloper",
};

const introdata = {
  title: "Hi, I’m Taehyung",
  animated: {
    first: "I love tech",
    second: "I love to learn new tech stacks",
    third: "I develop cool applications",
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum",
  your_img_url: themeImg,
};

const dataabout = {
  title: "About me",
  aboutme:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
};

const worktimeline = [
  {
    jobtitle: "Web Developer Intern",
    where: "Parrotias",
    date: "2023",
  },
];

const educations = [
  {
    course: "Master of Science in Computing",
    where: "Griffith College Dublin",
    date: "2022 - 2023",
  },
  {
    course: "Higher Diploma in Science in Computing",
    where: "Griffith College Dublin",
    date: "2021 - 2022",
  },
];

const skills = [
  {
    name: "Javascript",
    value: 90,
  },
  {
    name: "Java",
    value: 90,
  },
  {
    name: "Python",
    value: 80,
  },
  {
    name: "React",
    value: 80,
  },
  {
    name: "C++",
    value: 60,
  },
];

const services = [
  {
    title: "Full Stack Web Applications",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
  {
    title: "Server side applications",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
  {
    title: "Mobile Applications",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
];

const contactConfig = {
  YOUR_EMAIL: "katalogin88@gmail.com",
  YOUR_FONE: "+353 (086) 457-4710",
  description:
    "Feel free to contact me at any time, I will reply shortly. Thank you!",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_pm3gng3",
  YOUR_TEMPLATE_ID: "template_9f2o618",
  YOUR_USER_ID: "NETcqXlKoBtJNOguh",
};

const socialprofiles = {
  github: "https://github.com/Steelzen",
  linkedin: "https://linkedin.com/in/taehyung-kwon/",
};

export {
  meta,
  dataabout,
  worktimeline,
  educations,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofiles,
  logotext,
  imageUrls,
};
