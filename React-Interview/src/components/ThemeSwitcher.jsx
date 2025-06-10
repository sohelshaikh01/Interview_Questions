import { useContext } from "react";
import ThemeContext from "../context/context";


const ThemeSwitcher = () => {

    const {isDarkMode, toggleTheme} = useContext(ThemeContext);

  return  <button onClick={toggleTheme} className="py-1 px-4 bg-blue-300"> Switch to {isDarkMode ? "Light" : "Dark"} Mode</button>
}

export default ThemeSwitcher;
