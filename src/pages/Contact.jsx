import { useState } from "react";
import "../styles/tailwind.css"; 

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate());
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-100 to-gray-200 px-6 py-12">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-lg w-full transform transition-all duration-500 ease-in-out hover:scale-105">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 tracking-wide mb-6 animate-fadeIn">
          Contact Me
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div>
            <input 
              type="text" 
              placeholder="Mahdi Ghaleb" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-md transition-all duration-300"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email Input */}
          <div>
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-md transition-all duration-300"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Message Input */}
          <div>
            <textarea 
              placeholder="Your Message" 
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-md transition-all duration-300"
              onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-gray-600 text-sm">
        <p>© 2025 Mahdi Ghaleb | All Rights Reserved</p>
      </footer>
    </section>
  );
};

export default Contact;
