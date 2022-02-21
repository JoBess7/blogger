import { useContext } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { setCSSVariables } from "../../utils/theme/themeManagement";
import { ThemeContext } from '../themeProvider/ThemeProvider';

export default function ThemeToggler() {
    const { colorMode, setColorMode } = useContext(ThemeContext);

    const themeChangeEvent = () => {
        let newTheme = colorMode === "light" ? "dark" : "light";
        setCSSVariables(newTheme);
        setColorMode(newTheme);
    };

    return (
        <div>
            <DarkModeSwitch
                checked={colorMode === "light" ? false : true}
                onChange={themeChangeEvent}
                size={20}
            />
        </div>
    )
};