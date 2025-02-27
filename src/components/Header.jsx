import Navigation from "./Navigation";
import "../styles/tailwind.css"; 

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-700 text-white p-6 shadow-lg flex justify-between items-center">
      <h1 className="text-3xl font-extrabold tracking-wide hover:text-gray-300 transition duration-300">
        My Portfolio
      </h1>
      <Navigation />
    </header>
  );
};

export default Header;
