const Project = ({ project }) => {
  return (
    <div className="bg-white shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 rounded-lg overflow-hidden">
      <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded-t-lg" />
      
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 tracking-wide">{project.name}</h3>
        <p className="text-gray-600 mt-2">{project.description}</p>

        <div className="mt-4 flex gap-3">
          <a 
            href={project.deployedLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-grow text-center bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Live Demo
          </a>
          <a 
            href={project.repoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-grow text-center bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
