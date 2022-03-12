import Link from "next/link";
import { BsDot, BsGithub } from "react-icons/bs";
import { AiFillCodepenCircle } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
    return (
        <footer>
            <>{/* newsletter, coming soon */}</>

            <div className="footer-container-bottom">
                <div className="footer-links-flex">
                    <Link href="/blog/posts">
                        <a className="footer-link td">Posts</a>
                    </Link>
                    <BsDot className="footer-link-dot"/>
                    <Link href="/goodies">
                        <a className="footer-link td">Goodies</a>
                    </Link>
                    <BsDot className="footer-link-dot"/>
                    <Link href="/">
                        <a className="footer-link td">About</a>
                    </Link>
                    <BsDot className="footer-link-dot"/>
                    <a className="footer-link td" href="mailto:jbey078@gmail.com">Contact</a>
                </div>

                <div className="footer-icons-flex">
                    <Link href="https://github.com/JoBess7">
                        <a>
                            <BsGithub className="footer-icon td" size={30}/>
                        </a>
                    </Link>
                    <Link href="https://codepen.io/jobess7">
                        <a>
                            <AiFillCodepenCircle className="footer-icon td" size={35}/>
                        </a>
                    </Link>
                </div>
            </div>
        </footer>
    )
}