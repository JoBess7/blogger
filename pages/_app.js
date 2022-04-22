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
import "../components/footer/styles.css";
import "../components/codepen/styles.css";
import "../components/blogCard/styles.css";
import "../components/threeDButton/styles.css";
import "../components/categoryCard/styles.css";
import "../components/tableOfContents/styles.css";
import "../components/dicebearAvatarGenerator/styles.css";

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
