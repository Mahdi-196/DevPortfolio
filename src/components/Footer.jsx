import { FaLinkedin, FaStackOverflow, FaGithub } from "react-icons/fa";
import "../styles/tailwind.css"; 

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6 text-center border-t border-gray-700">
        <p className="mb-3 text-lg font-medium">Connect with me:</p>
        
        <div className="flex justify-center gap-6">
          <a 
            href="https://www.linkedin.com/users/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-gray-100 transition"
          >
            <FaLinkedin size={20} /> LinkedIn
          </a>  
          
          <a 
            href="https://stackoverflow.com/users/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-gray-100 transition"
          >
            <FaStackOverflow size={20} /> Stack Overflow
          </a>

          <a 
            href="https://github.com/Mahdi070707" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-gray-100 transition"
          >
            <FaGithub size={20} /> GitHub
          </a>   
        </div>
      </footer>
    );
};

export default Footer;
