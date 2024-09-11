import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import myImage from "../assets/Raju_pass.jpg";
import ecomImg from "../assets/ecom-i.png";
import paydude from "../assets/paydude.png";
import technest from "../assets/Technest.jpg";
import { motion } from "framer-motion";
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

const App: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const textDivRef = useRef<HTMLDivElement | null>(null);
  const scrollInstanceRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    const scrollInstance = new LocomotiveScroll({
      el: scrollRef.current!,
      smooth: true,
    });
    scrollInstanceRef.current = scrollInstance;

    return () => {
      scrollInstance.destroy();
    };
  }, []);

  useEffect(() => {
    if (textDivRef.current) {
      gsap.fromTo(
        textDivRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textDivRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
            onEnter: () => console.log("Entered"),
          },
        }
      );
    }
  }, []);

  const handleNavigation = (targetId: string) => {
    if (scrollInstanceRef.current) {
      scrollInstanceRef.current.scrollTo(targetId);
    }
  };

  return (
    <div className="bg-black">
      <div ref={scrollRef} data-scroll-container>
        <section className="min-h-screen bg-black">
          <div className="container px-6 mx-auto md:px-10">
            <div className="flex items-center justify-between py-8 font-bold">
              <h4 className="text-2xl text-white md:text-xl">Hello</h4>
              <div className="flex gap-10">
                <button onClick={() => handleNavigation("#project")}>
                  <h4 className="text-2xl text-white md:text-xl">Project</h4>
                </button>
                <a href="https://www.linkedin.com/in/therajusah/">
                  <h4 className="text-2xl text-white md:text-xl">Contact</h4>
                </a>
              </div>
            </div>
          </div>
          <div className="container px-4 mx-auto md:px-10">
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
              <div
                className="px-4 mt-8 md:w-1/2 md:px-10 md:mt-0"
                ref={textDivRef}
              >
                <h3 className="text-3xl text-white md:text-5xl">Hey,</h3>
                <h3 className="text-3xl text-white md:text-5xl">
                  I am Raju Kumar
                </h3>
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
        </section>
        {/* About Me Section */}
        <section className="bg-black page-2">
          <div className="container py-8 mx-auto">
            <div className="text-center">
              <div className="mb-8 text-4xl font-medium text-white">
                About me
              </div>
              <div className="text-2xl text-white">
                <p className="mb-5 text-2xl font-medium sm:text-1xl">
                  I am a MERN stack developer skilled in Tailwind CSS and
                  TypeScript, with hands-on experience across various projects.
                  I'm eager to connect and collaborate on exciting projects that
                  can make a meaningful impact.
                </p>
                <p className="mb-5 text-2xl font-medium">
                  Let&apos;s craft something remarkable together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Languages & Frameworks Section */}
        <section className="page-3 h-[30vh] w-[100%] mb-10 bg-black flex flex-col justify-center items-center">
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
        </section>

        {/* Projects Section */}
        <section
          className="flex flex-col items-center justify-center w-full h-auto bg-black page-4"
          id="project"
        >
          <div className="container mx-auto text-center">
            <h2 className="mb-4 text-4xl font-bold text-white">Projects</h2>
          </div>
          <div className="container py-8 mx-auto">
            <div className="flex flex-wrap justify-center">
              {/* 1st Card */}
              <div className="w-full max-w-sm p-2 m-2 mb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sm:w-1/2 md:w-1/3 lg:w-1/4 ">
                <a
                  href="https://ecom-fakestore.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="rounded-t-lg"
                    src={ecomImg}
                    alt="Ecommerce Store"
                  />
                </a>
                <div className="p-5">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Ecommerce store using Fakestore API
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Built an Ecommerce store using HTML, CSS, Bootstrap,
                    JavaScript & Fakestore API to get data.
                  </p>
                  <a
                    href="https://ecom-fakestore.vercel.app/"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    target="_blank"
                    rel="noopener noreferrer"
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
                </div>
              </div>

              {/* 2nd Card */}
              <div className="w-full max-w-sm p-2 mb-4 m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sm:w-1/2 md:w-1/3 lg:w-1/4">
                <a
                  href="https://paydude.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="rounded-t-lg"
                    src={paydude}
                    alt="Weather App"
                  />
                </a>
                <div className="p-5">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    PayDude App
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    This is a P2P Wallet Payment app, Where users can Signup and
                    Send money to the other users
                  </p>
                  <a
                    href="https://paydude.onrender.com"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    target="_blank"
                    rel="noopener noreferrer"
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
                </div>
              </div>
              {/* 3rd card */}
              <div className="w-full max-w-sm p-2 mb-4 m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sm:w-1/2 md:w-1/3 lg:w-1/4">
                <a
                  href="https://technest-yuon.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="rounded-t-lg"
                    src={technest}
                    alt="Hackathon participation website"
                  />
                </a>
                <div className="p-5">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Hackathon participation website
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    This is a Hackathon participation website where users can
                    see the upcoming event and other details and participate in
                    the events and an admin panel to manage everything
                  </p>
                  <a
                    href="https://technest-yuon.onrender.com"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    target="_blank"
                    rel="noopener noreferrer"
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
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-black page-5 h-[30vh]">
          <div className="container mx-auto text-center">
            <h2 className="mb-4 text-4xl font-bold text-white">Contact</h2>
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
                  className="text-3xl text-white"
                >
                  <RiInstagramFill />
                </a>
                <a
                  href="https://github.com/therajusah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-white"
                >
                  <RiGithubFill />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
