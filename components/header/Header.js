import Link from "next/link"
import ThemeToggler from "./ThemeToggler"
import { SpinReverse } from "react-burgers";
import { useContext, useState } from "react";
import { ThemeContext } from "../themeProvider/ThemeProvider";

export default function Header() {

    const { colorMode } = useContext(ThemeContext);

    const [burgerOpened, setBurgerOpened] = useState(false);
    const [burgerClasses, setBurgerClasses] = useState("");

    const burgerClickEvent = () => {
        setBurgerOpened(!burgerOpened);

        if(!burgerOpened) {
            // remove scroll
            document.body.style.overflowY = "hidden";
            setBurgerClasses("burger-menu-appear");
        } else {
            document.body.style.overflowY = "scroll";
            setBurgerClasses("burger-menu-disappear");
        }
    };

    return (
        <header>
            <div className={`header-burger-menu ${burgerClasses}`}>
                <div className="header-burger-container">
                    <div className="header-burger-links">
                        <Link href="/posts">
                            <a className={`h-link burger-link`}>Posts</a>
                        </Link>

                        <Link href="/latest">
                            <a className={`h-link burger-link`}>Latest</a>
                        </Link>

                        <Link href="/goodies">
                            <a className={`h-link burger-link`}>Goodies</a>
                        </Link>

                        <a href="https://jobess7.com" className={`h-link burger-link`}>About</a>
                    </div>
                    
                    <div className="header-burger-toggler">
                        <ThemeToggler/>
                    </div>
                </div>
            </div>

           <div className="header-container">
               <div className="header-left-flex">
                    <Link passHref href={"/"}>
                        <a className="header-home-link">
                            <span className="header-name">Jonathan B</span>
                            <span className="header-seven">7</span>
                        </a>
                    </Link>
                    
                    <div className="header-links">
                        <Link href="/blog/posts">
                            <a className="h-link h-link-item">Posts</a>
                        </Link>

                        <Link href="/blog/latest">
                            <a className="h-link">Latest</a>
                        </Link>

                        <Link href="/blog/goodies">
                            <a className="h-link">Goodies</a>
                        </Link>

                        <a href="https://jobess7.com" className="h-link">About</a>
                    </div>
               </div>

               <div className="header-right-flex">
                    <ThemeToggler/>
               </div>

               <div onClick={() => burgerClickEvent()} className="header-burger">
                    <SpinReverse
                        lineSpacing={6}
                        width={30}
                        lineHeight={3}
                        color={colorMode === "light" ? "black" : "white"}
                        borderRadius={3}
                        active={burgerOpened}
                    />
               </div>
            </div>
        </header>
    )
}