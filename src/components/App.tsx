import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import myImage from "../assets/Raju_pass.jpg";
import ecomImg from "../assets/ecom-i.png";
import paydude from "../assets/paydude.png";
import technest from "../assets/Technest.jpg";
import { FloatingNav } from "./FloatingNav";
import { HeroParallax } from "../components/HeroParallax";

import {
  RiLinkedinFill,
  RiTwitterFill,
  RiFacebookFill,
  RiInstagramFill,
  RiGithubFill,
} from "react-icons/ri";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiGit,
  SiDocker,
  SiNextdotjs,
  SiPostgresql,
  SiAwslambda
} from "react-icons/si";

import Contact from "./Contact";

const App = () => {
  const scrollRef = useRef(null);
  const textDivRef = useRef(null);

  const productItems = [
    {
      title: "Ecommerce Store",
      link: "https://ecom-fakestore.vercel.app/",
      thumbnail: ecomImg,
    },
    {
      title: "PayDude",
      link: "https://paydude.netlify.app/",
      thumbnail: paydude,
    },
    {
      title: "TechNest",
      link: "https://technest.netlify.app/",
      thumbnail: technest,
    },
    // COPIED MULTIPLE TIMES
    {
      title: "Ecommerce Store",
      link: "https://ecom-fakestore.vercel.app/",
      thumbnail: ecomImg,
    },
    {
      title: "PayDude",
      link: "https://paydude.netlify.app/",
      thumbnail: paydude,
    },
    {
      title: "TechNest",
      link: "https://technest.netlify.app/",
      thumbnail: technest,
    },//
    {
      title: "Ecommerce Store",
      link: "https://ecom-fakestore.vercel.app/",
      thumbnail: ecomImg,
    },
    {
      title: "PayDude",
      link: "https://paydude.netlify.app/",
      thumbnail: paydude,
    },
    {
      title: "TechNest",
      link: "https://technest.netlify.app/",
      thumbnail: technest,
    },//
    {
      title: "Ecommerce Store",
      link: "https://ecom-fakestore.vercel.app/",
      thumbnail: ecomImg,
    },
    {
      title: "PayDude",
      link: "https://paydude.netlify.app/",
      thumbnail: paydude,
    },
    {
      title: "TechNest",
      link: "https://technest.netlify.app/",
      thumbnail: technest,
    },//
    {
      title: "Ecommerce Store",
      link: "https://ecom-fakestore.vercel.app/",
      thumbnail: ecomImg,
    },
    {
      title: "PayDude",
      link: "https://paydude.netlify.app/",
      thumbnail: paydude,
    },
    {
      title: "TechNest",
      link: "https://technest.netlify.app/",
      thumbnail: technest,
    },
    //
    {
      title: "Ecommerce Store",
      link: "https://ecom-fakestore.vercel.app/",
      thumbnail: ecomImg,
    },
    {
      title: "PayDude",
      link: "https://paydude.netlify.app/",
      thumbnail: paydude,
    },
    {
      title: "TechNest",
      link: "https://technest.netlify.app/",
      thumbnail: technest,
    },

  ];

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      <div ref={scrollRef} data-scroll-container>
        <div className="min-h-screen" id="home">
          <div className="container px-6 mx-auto md:px-10">
            <FloatingNav navItems={navItems} />
          </div>
          <div className="container px-4 pt-16 mx-auto md:px-10">
            <div className="flex flex-col items-center justify-center md:flex-row">
              <div className="md:w-1/2 md:ml-10">
                <motion.img
                  src={myImage}
                  alt="Raju Kumar"
                  className="w-full rounded-lg"
                  style={{
                    marginTop: "2.2rem",
                    borderRadius: "20px",
                    maxHeight: "450px",
                    maxWidth: "380px",
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              </div>
              <div className="px-4 mt-8 md:w-1/2 md:px-10 md:mt-0" ref={textDivRef}>
                <h3 className="text-3xl md:text-5xl">Hey,</h3>
                <h3 className="text-3xl md:text-5xl">I am Raju Kumar</h3>
                <p className="mt-2 text-2xl">A FullStack developer</p>
                <a
                  href="https://www.linkedin.com/in/therajusah"
                  className="inline-block mt-2 text-xl py-2 px-6 bg-gray-200 dark:bg-gray-800 font-semibold rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none"
                >
                  Get In Touch!
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ABOUT ME */}
        <div className="py-8" id="about">
          <div className="container text-center mx-auto">
            <h2 className="mb-8 text-4xl font-medium">About me</h2>
            <p className="text-2xl">
              I am a MERN stack developer skilled in Tailwind CSS and TypeScript, with hands-on experience across various projects.
              I'm eager to connect and collaborate on exciting projects that can make a meaningful impact. Let's craft something remarkable together.
            </p>
          </div>
        </div>
        {/* LANGUAGES AND FRAMEWORK*/}
        <div id="skills" className="flex flex-col items-center justify-center py-10">
          <h2 className="mb-8 text-4xl font-bold">Languages & Frameworks</h2>
          <div className="flex flex-wrap justify-center space-x-6">
            <SiHtml5 className="text-3xl md:text-6xl icon html" />
            <SiCss3 className="text-3xl md:text-6xl icon css" />
            <SiJavascript className="text-3xl md:text-6xl icon javascript" />
            <SiReact className="text-3xl md:text-6xl icon react" />
            <SiTypescript className="text-3xl md:text-6xl icon typescript" />
            <SiTailwindcss className="text-3xl md:text-6xl icon tailwind" />
            <SiMongodb className="text-3xl md:text-6xl icon mongodb" />
            <SiGit className="text-3xl md:text-6xl icon git" />
            <SiDocker className="text-3xl md:text-6xl icon docker" />
            <SiNextdotjs className="text-3xl md:text-6xl icon nextjs" />
            <SiAwslambda className="text-3xl md:text-6xl icon aws" />
            <SiPostgresql className="text-3xl md:text-6xl icon postgresql" />
            <SiReact className="text-3xl md:text-6xl icon reactnative" />
          </div>
        </div>
        {/* PROJECTS */}
        <div id="projects" className="py-10">
          <div className="text-center">
            <h2 className="mb-8 text-4xl font-bold">My Projects</h2>
            <HeroParallax products={productItems} />
          </div>
        </div>
        {/* CONTACT */}
        <Contact />
      </div>
    </div>
  );
};

export default App;
