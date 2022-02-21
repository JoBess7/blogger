import "../styles/globals.css";
import "../layouts/mdx.css";
import "../styles/blog.css";
import "../components/header/styles.css";
import "../styles/variables.css";
import "../components/blogCard/styles.css";

import { ThemeProvider } from "../components/themeProvider/ThemeProvider";

function MyApp({ Component, pageProps }) {
	return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
	)
}

export default MyApp
