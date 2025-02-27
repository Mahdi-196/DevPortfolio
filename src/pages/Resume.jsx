import "../styles/tailwind.css"; 
import resume from "../assets/resume.pdf";

const Resume = () => {
    return (
      <section className="p-8 bg-gray-100 min-h-screen text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Resume</h2>
        
        <a 
          href={resume} 
          download 
          className="inline-block bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          📄 Download My Resume
        </a>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8">My Full-Stack Development Skills</h3>
        
        <div className="mt-6 max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          <p>
            I have built a strong foundation in full-stack development, mastering both frontend and backend technologies.  
            My expertise in HTML, CSS, and Git enables me to create well-structured, responsive, and visually appealing web pages,  
            while Advanced CSS techniques help me craft modern UI components.
          </p>

          <p className="mt-4">
            With JavaScript and Web APIs, I develop interactive applications that communicate with backend services efficiently.  
            On the server side, I am skilled in Node.js, TypeScript, and Object-Oriented Programming, allowing me to write scalable and maintainable code.
          </p>

          <p className="mt-4">
            My experience with SQL databases and robust API design ensures efficient data management.  
            Additionally, my expertise in React and Full-Stack React allows me to build high-performance applications  
            that integrate frontend and backend seamlessly.
          </p>

          <p className="mt-4">
            Combining technical knowledge, problem-solving skills, and a collaborative mindset,  
            I am a well-rounded full-stack developer ready to tackle real-world challenges.
          </p>
        </div>
      </section>
    );
};

export default Resume;
