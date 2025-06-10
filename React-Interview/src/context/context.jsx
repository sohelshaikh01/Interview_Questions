import { createContext, useState, useEffect } from "react";

 const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [isDarkMode, SetIsDarkMode] = useState(false);

    const toggleTheme = () => SetIsDarkMode((prev) => !prev);

    useEffect(() => {
        document.documentElement.setAttribute(
            'data-theme',
            isDarkMode ? "light" : "dark"
        )
    })

    // Wrap <App /> in ThemeProvider

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}> 
            {children} 
        </ThemeContext.Provider> )
}

export default ThemeContext;