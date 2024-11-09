import { useState } from "react";
import { FiCopy } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const email = "devraju0808@gmail.com";
  const [showToast, setShowToast] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setShowToast(true); 
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[50vh] bg-gradient-to-r from-purple-700 to-blue-500 text-white px-4 py-8 rounded-t-3xl mt-15 overflow-hidden">
      <div className="absolute inset-0 animate-glow bg-gradient-radial from-purple-900/30 via-purple-700/20 to-transparent opacity-50 blur-3xl" />

      <h2 className="text-4xl font-bold mb-4 z-10 font-poppins">Contact Me</h2>
      <p className="text-center max-w-md mb-6 z-10 font-poppins">
        I'm eager to explore new opportunities! If you have any questions,
        collaboration ideas, proposals, or simply want to connect, don't
        hesitate to reach out. Let's work together and create something
        extraordinary!
      </p>
      <div className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-md mb-6 z-10">
        <span className="font-medium">email:</span>
        <span>{email}</span>
        <button onClick={handleCopyToClipboard}>
          <FiCopy className="text-gray-600 hover:text-gray-800" />
        </button>
      </div>
      <div className="flex space-x-4 z-10">
        <a href="https://github.com/therajusah" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-5xl hover:text-gray-300" />
        </a>
        <a href="https://linkedin.com/in/therajusah" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-5xl hover:text-gray-300" />
        </a>
        <a href="https://twitter.com/therajusah" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-5xl hover:text-gray-300" />
        </a>
      </div>
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg z-50 animate-fade-in font-poppins">
          Email copied Let's Connect!
        </div>
      )}
    </section>
  );
};

export default Contact;
