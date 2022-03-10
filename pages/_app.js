// layouts
import "../layouts/post/styles.css";
import "../layouts/category/styles.css";
import "../layouts/goody/styles.css";

// static and containers
import "../styles/globals.css";
import "../styles/blog.css";
import "../styles/variables.css";
import "../styles/404.css";
import "../styles/goodies.css";

// components
import "../components/MDX/styles.css";
import "../components/prism/prism.css";
import "../components/header/styles.css";
import "../components/blogCard/styles.css";
import "../components/footer/styles.css";
import "../components/categoryCard/styles.css";
import "../components/tableOfContents/styles.css";

import "../styles/_queries.css";

import { ThemeProvider } from "../components/themeProvider/ThemeProvider";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {

    useEffect(() => {
        document.body.style.zoom = "110%";
    }, []);

	return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
	)
}

export default MyApp
