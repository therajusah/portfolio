import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import myImage from "../assets/Raju_pass.jpg";
import ecomImg from "../assets/ecom-i.png";
import wheatherApp from '../assets/wheatherapp.png';

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

// Define types for the references
const App: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const textDivRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollInstance = new LocomotiveScroll({
      el: scrollRef.current!,
      smooth: true,
    });
    return () => {
      scrollInstance.destroy();
    };
  }, []);

  useEffect(() => {
    if (textDivRef.current) {
      gsap.from(textDivRef.current.children, {
        y: "100%",
        opacity: 1,
        duration: 2,
        stagger: 0.25,
      });
    }
  }, []);

  return (
    <div>
      <div ref={scrollRef} data-scroll-container>
        <div className="min-h-screen bg-black">
          <div className="container px-6 mx-auto md:px-10">
            <div className="flex items-center justify-between py-8">
              <h4 className="text-2xl text-white md:text-1xl">Hello</h4>
              <div className="flex gap-10">
                <h4 className="text-2xl text-white md:text-1xl">Project</h4>
                <h4 className="text-2xl text-white md:text-1xl">Contact</h4>
              </div>
            </div>
          </div>
          <div className="container px-4 mx-auto md:px-10">
            <div className="flex flex-col items-center justify-center md:flex-row">
              <div className="md:w-1/2 md:ml-10">
                <img
                  src={myImage}
                  alt="Raju Kumar"
                  className="w-full rounded-lg"
                  style={{
                    marginTop: "2.2rem",
                    borderRadius: "20px",
                    maxHeight: "450px",
                    maxWidth: "380px",
                  }}
                />
              </div>
              <div
                className="px-4 mt-8 md:w-1/2 md:px-10 md:mt-0"
                ref={textDivRef}
              >
                <h3 className="text-3xl text-white md:text-5xl">Hey,</h3>
                <h3 className="text-3xl text-white md:text-5xl">
                  I am Raju Kumar
                </h3>
                <p className="mt-5 text-2xl text-white md:text-2xl sm:mt-0">
                  A Frontend developer
                </p>
                <a
                  href="#contact"
                  className="inline-block mt-2 text-xl text-white border-b border-white"
                >
                  Get In Touch!
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black page-2">
          <div className="container py-24 mx-auto">
            <div className="text-center">
              <div className="mb-8 text-4xl font-medium text-white">
                About me
              </div>
              <p className="text-xl text-white">
                <>
                  <h4 className="mb-5 text-2xl font-medium text-white">
                    HTML, CSS, and JavaScript
                  </h4>

                  <h4 className="mb-5 text-2xl font-medium text-white">
                    React, Redux, and GSAP
                  </h4>

                  <h4 className="mb-5 text-2xl font-medium text-white">
                    Tailwind CSS styles,
                  </h4>

                  <h4 className="mb-5 text-2xl font-medium text-white">
                    NodeJS,
                  </h4>

                  <h4 className="mb-5 text-2xl font-medium text-white">
                    MongoDB,
                  </h4>

                  <h4 className="mb-5 text-2xl font-medium text-white">Git,</h4>

                  <h4 className="mb-5 text-2xl font-medium text-white">
                    Let&apos;s craft something remarkable together.
                  </h4>
                </>
              </p>
            </div>
          </div>
        </div>
        
        <div className="page-3 h-[50vh] w-[100%] bg-black flex flex-col justify-center items-center">
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

        <div className="flex flex-col items-center justify-center w-full h-auto bg-black page-4">
          <div className="container py-24 mx-auto">
            <div className="flex flex-wrap justify-center">
              {/* 1st card */}
              <div className="w-full max-w-sm p-2 mb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sm:w-1/2 md:w-1/3 lg:w-1/4">
                <a href="https://ecom-fakestore.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <img className="rounded-t-lg" src={ecomImg} alt="Ecommerce Store" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Ecommerce store using Fakestore API
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Built an Ecommerce store using Html, CSS, Bootstrap, JavaScript & Fakestore API to get data.
                  </p>
                  <a
                    href="https://ecom-fakestore.vercel.app/"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Github Link
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* 2nd card */}
              <div className="w-full max-w-sm p-2 mb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sm:w-1/2 md:w-1/3 lg:w-1/4">
                <a href="https://weather-app-react-one-mauve.vercel.app/">
                  <img className="rounded-t-lg" src={wheatherApp} alt="Weather App" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Weather App
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    This is a weather app built on React, CSS, and Weather API in the backend to get the data.
                  </p>
                  <a
                    href="https://github.com/therajusah/Weather-App-React"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Github Link
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* 3rd card */}
              <div className="w-full max-w-sm p-2 mb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sm:w-1/2 md:w-1/3 lg:w-1/4">
                <a href="#">
                  <img className="rounded-t-lg" src={myImage} alt="Noteworthy Technology Acquisitions" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Live Link
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 ml-16 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Github
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* 4th Card */}
              <div className="w-full max-w-sm p-2 mb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sm:w-1/2 md:w-1/3 lg:w-1/4">
                <a href="#">
                  <img className="rounded-t-lg" src={myImage} alt="Noteworthy Technology Acquisitions" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Live Link
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 ml-16 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Github
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div> 
            <div className="flex justify-center mt-16">
              <div className="text-4xl font-medium text-white">
                Let&apos;s Connect
              </div>
            </div>
            <div className="flex justify-center mt-3 mb-4">
              <div className="flex gap-6">
                <a
                  href="https://www.linkedin.com/in/therajusah"
                  className="text-4xl text-white"
                >
                  <RiLinkedinFill />
                </a>
                <a
                  href="https://twitter.com/therajusah"
                  className="text-4xl text-white"
                >
                  <RiTwitterFill />
                </a>
                <a
                  href="https://www.facebook.com/therajusah"
                  className="text-4xl text-white"
                >
                  <RiFacebookFill />
                </a>
                <a
                  href="https://www.instagram.com/therajusah"
                  className="text-4xl text-white"
                >
                  <RiInstagramFill />
                </a>
                <a
                  href="https://github.com/therajusah"
                  className="text-4xl text-white"
                >
                  <RiGithubFill />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
