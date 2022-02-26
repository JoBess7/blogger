import { createContext, useState } from 'react';

const getInitialColorMode = () => {
    return "light";
}

const ThemeContext = createContext("light");
const ThemeProvider = ({ children }) => {
    // initial theme
    const [colorMode, rawSetColorMode] = useState(getInitialColorMode);
    const setColorMode = (value) => {
        rawSetColorMode(value);
        // Persist it on update
        window.localStorage.setItem('color-mode', value);
    };

    return (
        <ThemeContext.Provider value={{ colorMode, setColorMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export {ThemeProvider, ThemeContext};