import React, { useEffect, useState } from "react";
// import {
//   FaCss3Alt,
//   FaGit,
//   FaGithub,
//   FaNode,
//   FaReact,
//   FaNpm,
//   FaBootstrap,
//   FaSlack,
//   FaMdb,
// } from "react-icons/fa";
import slack from "../images/svg/slack-svgrepo-com.svg";
import github from "../images/svg/github-svgrepo-com.svg";
import css from "../images/svg/css-svgrepo-com.svg";
import git from "../images/svg/git-svgrepo-com.svg";
import html from "../images/svg/html-svgrepo-com.svg";
import js from "../images/svg/js-svgrepo-com.svg";
import material from "../images/svg/material-ui-svgrepo-com.svg";
import npm from "../images/svg/npm-svgrepo-com.svg";
import react from "../images/svg/react-svgrepo-com.svg";
import tailwind from "../images/svg/tailwindcss-icon-svgrepo-com.svg";

const listado = [
  {
    id: 1,
    logo: html,
    titulo: "HTML5",
    parrafo: "El metodo de comunicacion que utilizo es Slack.",
  },
  {
    id: 2,
    logo: css,
    titulo: "CSS 3",
    parrafo: "Para darle animaciones a los componentes utilizo Css.",
  },
  {
    id: 3,
    logo: js,
    titulo: "Javascript",
    parrafo: "El metodo de comunicacion que utilizo es Slack.",
  },
  {
    id: 4,
    logo: react,
    titulo: "React JS",
    parrafo: "Para las interfaces de usuario lo hago con React JS.",
  },
  {
    id: 5,
    logo: tailwind,
    titulo: "Tailwind CSS",
    parrafo: "en mi mayoria de proyectos utilizo el framework Tailwind.",
  },
  {
    id: 6,
    logo: material,
    titulo: "Material UI",
    parrafo: "El metodo de comunicacion que utilizo es Slack.",
  },
  {
    id: 7,
    logo: git,
    titulo: "Git",
    parrafo: "Para el manejo de versiones utilizo Git.",
  },
  {
    id: 8,
    logo: github,
    titulo: "Github",
    parrafo: "Plataforma en donde alojo mis repositorios.",
  },
  // {
  //   id: 4,
  //   logo: <FaNode />,
  //   titulo: "Node JS",
  //   parrafo: "Para el backend uso Node JS con Express.",
  // },
  {
    id: 9,
    logo: npm,
    titulo: "Npm",
    parrafo: "El instalador de paquetes que mas empleo es NPM.",
  },
  // {
  //   id: 8,
  //   logo: <FaBootstrap />,
  //   titulo: "Bootstrap",
  //   parrafo: "En algunas ocasiones dispongo de Boostrap.",
  // },
  {
    id: 10,
    logo: slack,
    titulo: "Slack",
    parrafo: "El metodo de comunicacion que utilizo es Slack.",
  },

  // {
  //   id: 10,
  //   logo: <FaMdb />,
  //   titulo: "Mongo DB",
  //   parrafo: "En bases de datos manejo Mongo DB ",
  // },
];

const Skills = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    setDatos(listado);
  }, []);

  return (
    <section
      id="Skills"
      className="flex flex-col w-full pt-20 pb-20 pl-6 overflow-x-hidden md:pb-40"
    >
      <div className="flex flex-row gap-10 pl-3">
        <p className="text-2xl text-modelo-150"> 01. </p>
        <h2 className="text-2xl text-gray-400 "> Skills </h2>
      </div>
      <div>
        <p className="p-4 pl-3 text-xl text-slate-500">
          Éstas son algunas tecnologias, librerias y/o habilidades que utilizo
          en mi dia a dia.
        </p>
      </div>
      <div className="flex flex-col items-center w-full">
      <div className="grid items-center w-full gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {datos.map((item) => {
          return <div 
          className="flex flex-col items-center object-cover w-48 m-auto transition-all rounded-lg shadow-lg shadow-modelo-100 hover:translate-y-2"
          key={item.id}>
            <img 
            className="w-full h-48 rounded-t-md"
            src={item.logo} alt={item.titulo} />
            <h1 className="text-2xl text-modelo-150"> {item.titulo} </h1>
          </div>
        })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
