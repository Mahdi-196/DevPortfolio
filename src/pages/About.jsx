import "../styles/tailwind.css";
import profileImg from "../assets/profile.jpg";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-100 to-gray-200 px-6 py-12">
      <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-3xl w-full transform transition-all duration-500 ease-in-out hover:scale-105">
        <h2 className="text-5xl font-extrabold text-gray-900 tracking-wide mb-6 animate-fadeIn">About Me</h2>
        
        <div className="mt-4">
          <img 
            src={profileImg} 
            alt="Profile" 
            className="w-40 h-40 mx-auto rounded-full border-4 border-blue-500 shadow-lg transform transition duration-300 hover:scale-110"
          />
        </div>

        <p className="mt-6 text-gray-800 text-lg leading-relaxed">
          I’m a passionate <strong>full-stack developer</strong> with a strong foundation in <strong>React, JavaScript, and backend technologies</strong>.  
          My expertise lies in crafting <span className="text-blue-500 font-semibold">scalable, efficient, and visually compelling</span> applications that deliver seamless user experiences.  
        </p>

        <p className="mt-4 text-gray-700">
          My journey in development is fueled by a deep love for <span className="italic">problem-solving, innovation, and continuous learning</span>.  
          I thrive in dynamic environments where I push the limits of technology and craft meaningful digital solutions.  
        </p>

        <p className="mt-4 text-gray-900 font-semibold text-xl">
          Let’s build something amazing together! 🚀
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-gray-600 text-sm">
        <p>© 2025 Mahdi Ghaleb | All Rights Reserved</p>
      </footer>
    </section>
  );
};

export default About;
