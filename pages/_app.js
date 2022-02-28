// layouts components
import "../layouts/post/mdx.css";
import "../layouts/category/styles.css";

// static and containers
import "../styles/globals.css";
import "../styles/blog.css";
import "../styles/variables.css";

// components
import "../components/header/styles.css";
import "../components/blogCard/styles.css";
import "../components/footer/styles.css";
import "../components/categoryCard/styles.css";

import "../styles/_queries.css";

import { ThemeProvider } from "../components/themeProvider/ThemeProvider";

function MyApp({ Component, pageProps }) {
	return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
	)
}

export default MyApp
