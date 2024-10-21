import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import myImage from "../assets/Raju_pass.jpg";
import ecomImg from "../assets/ecom-i.png";
import paydude from "../assets/paydude.png";
import technest from "../assets/Technest.jpg";
import { FloatingNav } from "./FloatingNav";
import { Header, HeroParallax } from "../components/HeroParallax";

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
} from "react-icons/si";

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
  ];

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div className="bg-black">
      <div ref={scrollRef} data-scroll-container>
        <div className="min-h-screen bg-black" id="home">
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
                <h3 className="text-3xl text-white md:text-5xl">Hey,</h3>
                <h3 className="text-3xl text-white md:text-5xl">I am Raju Kumar</h3>
                <p className="mt-2 text-2xl text-white md:text-2xl sm:mt-2">
                  A FullStack developer
                </p>
                <a
                  href="https://www.linkedin.com/in/therajusah"
                  className="inline-block mt-2 text-xl text-white border-b border-white"
                >
                  Get In Touch!
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="bg-black page-2">
          <div className="container py-8 mx-auto">
            <div className="text-center">
              <div className="mb-8 text-4xl font-medium text-white">About me</div>
              <div className="text-2xl text-white">
                <p className="mb-5 text-2xl font-medium sm:text-1xl">
                  I am a MERN stack developer skilled in Tailwind CSS and
                  TypeScript, with hands-on experience across various projects.
                  I'm eager to connect and collaborate on exciting projects that
                  can make a meaningful impact.
                </p>
                <p className="mb-5 text-2xl font-medium">
                  Let's craft something remarkable together.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Languages & Frameworks Section */}
        <div id="skills" className="page-3 h-[30vh] w-[100%] mb-10 bg-black flex flex-col justify-center items-center">
          <h2 className="mb-8 text-4xl font-bold text-white">
            Languages & Frameworks
          </h2>
          <div className="flex flex-wrap items-center justify-center space-x-6">
            <SiHtml5 className="text-3xl md:text-6xl icon html" />
            <SiCss3 className="text-3xl md:text-6xl icon css" />
            <SiJavascript className="text-3xl md:text-6xl icon javascript" />
            <SiReact className="text-3xl md:text-6xl icon react" />
            <SiTypescript className="text-3xl md:text-6xl icon typescript" />
            <SiTailwindcss className="text-3xl md:text-6xl icon tailwind" />
            <SiMongodb className="text-3xl md:text-6xl icon mongodb" />
            <SiGit className="text-3xl md:text-6xl icon git" />
          </div>
        </div>

        {/* Projects Section */}
        <div id="projects">
      
          <div>
            <div className="mb-8 text-4xl font-bold text-center text-white">
              <h2>My Projects</h2>
            </div>
            <HeroParallax products={productItems} />
          </div>


        </div>
      </div>
      <div className="bg-black page-5">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-4xl font-bold text-white" id="contact">Contact</h2>
          <div className="text-2xl text-white">
            <p className="mb-5">Feel free to reach out to me via:</p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/therajusah/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-white"
              >
                <RiLinkedinFill />
              </a>
              <a
                href="https://twitter.com/therajusah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-white"
              >
                <RiTwitterFill />
              </a>
              <a
                href="https://www.facebook.com/therajusah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-white"
              >
                <RiFacebookFill />
              </a>
              <a
                href="https://www.instagram.com/therajusah/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiInstagramFill size={24} />
              </a>
              <a href="https://www.github.com/therajusah" target="_blank" rel="noopener noreferrer">
                <RiGithubFill size={24} />
              </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
