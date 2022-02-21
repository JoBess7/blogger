import { CSSColors } from "./colors";

// check in user storage
const getLocalStorageTheme = () => {
	if(localStorage.getItem("theme") === "light")
		return "light";
        
	else return "dark";
};

// update storage
const setLocalStorageTheme = (theme) => {
    localStorage.setItem("theme", theme);
};

// theme switches w/ this function
const setCSSVariables = (theme) => {
    CSSColors.forEach((value) => {
        document.documentElement.style.setProperty(
            Object.keys(value)[0],
            theme === 'light'
            ? Object.values(value)[0][0]
            : Object.values(value)[0][1]
        );
    });
};

export {getLocalStorageTheme, setLocalStorageTheme, setCSSVariables};