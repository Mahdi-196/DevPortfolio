import React, { useEffect } from "react";
import Project from "../components/Project";
import { motion } from "framer-motion";
import projectData from "../data/projects";
import "../styles/tailwind.css";

const Portfolio = () => {
  useEffect(() => {
    console.log("Portfolio component is rendering!");
  }, []);

  return (
    <section className="p-10 min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 relative">
      {/* Background Texture for Depth */}
      <div className="absolute inset-0 bg-[url('/assets/noise-texture.png')] opacity-10 pointer-events-none"></div>

      {/* Page Title with Animation */}
      <motion.h1
        className="text-5xl font-extrabold text-center text-gray-800 mb-10 tracking-wide"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        My Work
      </motion.h1>

      {/* Portfolio Grid */}
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
              transition={{ duration: 0.3 }}            >
              <Project project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
