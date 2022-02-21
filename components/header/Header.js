import Link from "next/link"
import ThemeToggler from "./ThemeToggler"

export default function Header() {
    return (
        <header>
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
            </div> 
        </header>
    )
}