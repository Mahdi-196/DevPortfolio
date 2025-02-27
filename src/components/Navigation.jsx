import { NavLink } from "react-router-dom";
import "../styles/tailwind.css"; 

const Navigation = () => {
  return (
    <nav>
      <ul className="flex gap-6 text-lg font-medium">
        {["About Me", "Portfolio", "Contact", "Resume"].map((item, index) => (
          <li key={index}>
            <NavLink
              to={item === "About Me" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `relative transition duration-300 ease-in-out ${
                  isActive ? "text-blue-400" : "text-gray-300 hover:text-white"
                }`
              }
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-400 scale-x-0 transition-transform transform origin-left hover:scale-x-100"></span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
