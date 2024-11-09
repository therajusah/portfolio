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
  SiAwslambda,
} from "react-icons/si";
import Contact from "./Contact";

const App = () => {
  const scrollRef = useRef(null);
  const textDivRef = useRef(null);

  const productItems = [
    {
      title: "Ecommerce Store",
      link: "https://ecom-fakestore.vercel.app",
      thumbnail: ecomImg,
    },
    {
      title: "PayDude",
      link: "https://paydude.onrender.com",
      thumbnail: paydude,
    },
    {
      title: "TechNest",
      link: "https://technest-yuon.onrender.com",
      thumbnail: technest,
    }, // COPIED MULTIPLE TIMES 
    {
      title: "Ecommerce Store",
      link: "https://ecom-fakestore.vercel.app",
      thumbnail: ecomImg,
    },
    {
      title: "PayDude",
      link: "https://paydude.onrender.com",
      thumbnail: paydude,
    },
    {
      title: "TechNest",
      link: "https://technest-yuon.onrender.com",
      thumbnail: technest,
    },{
      title: "Ecommerce Store",
      link: "https://ecom-fakestore.vercel.app",
      thumbnail: ecomImg,
    },
    {
      title: "PayDude",
      link: "https://paydude.onrender.com",
      thumbnail: paydude,
    },
    {
      title: "TechNest",
      link: "https://technest-yuon.onrender.com",
      thumbnail: technest,
    },{
      title: "Ecommerce Store",
      link: "https://ecom-fakestore.vercel.app",
      thumbnail: ecomImg,
    },
    {
      title: "PayDude",
      link: "https://paydude.onrender.com",
      thumbnail: paydude,
    },
    {
      title: "TechNest",
      link: "https://technest-yuon.onrender.com",
      thumbnail: technest,
    },{
      title: "Ecommerce Store",
      link: "https://ecom-fakestore.vercel.app",
      thumbnail: ecomImg,
    },
    {
      title: "PayDude",
      link: "https://paydude.onrender.com",
      thumbnail: paydude,
    },
    {
      title: "TechNest",
      link: "https://technest-yuon.onrender.com",
      thumbnail: technest,
    },{
      title: "Ecommerce Store",
      link: "https://ecom-fakestore.vercel.app",
      thumbnail: ecomImg,
    },
    {
      title: "PayDude",
      link: "https://paydude.onrender.com",
      thumbnail: paydude,
    },
    {
      title: "TechNest",
      link: "https://technest-yuon.onrender.com",
      thumbnail: technest,
    },{
      title: "Ecommerce Store",
      link: "https://ecom-fakestore.vercel.app",
      thumbnail: ecomImg,
    },
    {
      title: "PayDude",
      link: "https://paydude.onrender.com",
      thumbnail: paydude,
    },
    {
      title: "TechNest",
      link: "https://technest-yuon.onrender.com",
      thumbnail: technest,
    },{
      title: "Ecommerce Store",
      link: "https://ecom-fakestore.vercel.app",
      thumbnail: ecomImg,
    },
    {
      title: "PayDude",
      link: "https://paydude.onrender.com",
      thumbnail: paydude,
    },
    {
      title: "TechNest",
      link: "https://technest-yuon.onrender.com",
      thumbnail: technest,
    },{
      title: "Ecommerce Store",
      link: "https://ecom-fakestore.vercel.app",
      thumbnail: ecomImg,
    },
    {
      title: "PayDude",
      link: "https://paydude.onrender.com",
      thumbnail: paydude,
    },
    {
      title: "TechNest",
      link: "https://technest-yuon.onrender.com",
      thumbnail: technest,
    }
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
        <div className="h-[80vh]" id="home">
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
              <div className="px-4 mt-8 md:w-1/2 md:px-10 md:mt-0 font-poppins sm:text-center" ref={textDivRef}>
                <h3 className="text-3xl md:text-5xl font-semibold">Hey,</h3>
                <h3 className="text-3xl md:text-5xl font-semibold">I am Raju Kumar</h3>
                <p className="mt-2 text-2xl font-semibold">A FullStack developer</p>
                <a
                  href="https://www.linkedin.com/in/therajusah"
                  className="inline-block mt-4 text-xl py-2 px-6 bg-gray-200 dark:bg-gray-800 font-semibold rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none"
                >
                  Get In Touch!
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ABOUT ME */}
        <div className="py-8" id="about">
          <div className="container text-center mx-auto font-poppins w-[65%]">
            <h2 className="mb-8 text-4xl font-semibold">About me</h2>
            <p className="text-2xl sm:text-lg">
              I am a MERN stack developer skilled in Tailwind CSS and TypeScript, with hands-on experience across various projects. I'm eager to connect and collaborate on exciting projects that can make a meaningful impact. Let's craft something remarkable together.
            </p>
          </div>
        </div>
        {/* LANGUAGES AND FRAMEWORK */}
        <div id="skills" className="flex flex-col items-center justify-center py-10">
          <h2 className="mb-8 text-4xl font-bold mx-auto text-center sm:text-xl">Languages & Frameworks</h2>
          <div className="flex flex-wrap justify-center gap-6 w-[60%] pt-6 sm:w-full sm:gap-4">
            <SiHtml5 className="text-2xl md:text-6xl icon html mb-4" />
            <SiCss3 className="text-2xl md:text-6xl icon css mb-4" />
            <SiJavascript className="text-2xl md:text-6xl icon javascript mb-4" />
            <SiReact className="text-2xl md:text-6xl icon react mb-4" />
            <SiTypescript className="text-3xl md:text-6xl icon typescript mb-4" />
            <SiTailwindcss className="text-3xl md:text-6xl icon tailwind mb-4" />
            <SiMongodb className="text-2xl md:text-6xl icon mongodb mb-4" />
            <SiGit className="text-2xl md:text-6xl icon git mb-4" />
            <SiDocker className="text-2xl md:text-6xl icon docker mb-4" />
            <SiNextdotjs className="text-2xl md:text-6xl icon nextjs mb-4" />
            <SiAwslambda className="text-2xl md:text-6xl icon aws mb-4" />
            <SiPostgresql className="text-2xl md:text-6xl icon postgresql mb-4" />
            <SiReact className="text-2xl md:text-6xl icon reactnative mb-4" />
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
