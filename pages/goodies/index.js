import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { getAllFilesFrontMatter } from "../../lib/mdx";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Goodies({ goodies }) {

    const [sortedGoodies, setGoodies] = useState([]);

    useEffect(() => {
        setGoodies(goodies.sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt)))
    }, []);

    return (
        <div className="goodies-main-container">

            <div className="goodies-top-container td">

                <div className="goodies-header-container td">
                    <div className="goodies-header-sub-container">
                        <Header/>
                    </div>
                </div>

                <div className="goodies-top-flex">
                    <div className="goodies-top-left-flex">
                        <span>Goodies</span>
                        <div className="goodies-description">
                            <span>A collection of packages, websites and code snippets that may be useful to you!</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="goodies-bottom-container td">
                <div className="goodies-bottom-sub-container">
                    {
                        sortedGoodies.map(goody => {
                            return (
                                <Link href={`/goodies/${goody.slug}`} key={goody.title}>
                                    <a className="goody-card">
                                        <div className="goody-title-flex">
                                            <span className="goody-title">{goody.title}</span>
                                            <span className="goody-published">{goody.publishedAt}</span>
                                        </div>
                                        
                                        <span className="goody-description">
                                            {goody.description}
                                        </span>
                                    </a>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export async function getStaticProps() {
    const goodies = await getAllFilesFrontMatter("goodies");

    return { props : { goodies } }
}