import React, { useEffect, useState } from "react";
import { getAllFilesFrontMatter } from "../lib/mdx";
import Image from "next/image";
import Header from "../components/header/Header";
import { useInView } from "react-intersection-observer";
import BlogCard from "../components/blogCard/BlogCard";
import Footer from "../components/footer/Footer";
import Link from "next/link";

export default function Blog({posts}) {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // get all categories and remove duplicates
        setCategories([...new Set(posts.map(post => post.category))]);
    }, [posts]);

    const [currentCharacter, setCurrentCharacter] = useState("characterSmileEyesOpen");

    const [avatarRef, pageInView] = useInView({
        threshold: 0,
        triggerOnce: true,
    })

    return (
        <div className="blog-container">
            <div ref={avatarRef} className="blog-top-container td">
                <div className="blog-top-sub-container">
                    <Header/>
                </div>

                <div className="avatar-container">
                    <div onMouseLeave={() => setCurrentCharacter("characterSmileEyesOpen")} onMouseEnter={() => setCurrentCharacter("characterSmileEyesClosed")} className={`avatar ${pageInView ? "avatar-visible" : ""}`}>
                        <Image alt="" width={200} height={200} src={`/images/${currentCharacter}.svg`}></Image>
                    </div>
                </div> 

                <div className="wave-container">
                    <svg preserveAspectRatio="none" width="100%" height="50%" viewBox="0 0 1440 74" className="wave"><path className="wave-path td" d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path></svg>
                </div>
            </div>

            <div className="blog-bottom-container td">
                <div className="blog-bottom-sub-container">
                    <div className="blog-grid">
                        <div className="blog-posts-flex">
                            <span className="blog-title">
                                Recent Publications
                            </span>
                            <div className="blog-posts">
                                {  
                                    posts.map(frontMatter => 
                                        <BlogCard key={frontMatter.title} {...frontMatter}
                                    />)
                                }
                            </div>
                        </div>

                        <div className="blog-posts-categories">
                            <span className="blog-title">
                                Categories
                            </span>
                            <div className="blog-categories">
                                {
                                    categories.map(category => 
                                        <Link href={`/blog/posts/${category.toLowerCase()}`} key={category}>
                                            <a className="blog-category">{category}</a>
                                        </Link>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter("blog");

    return { props : { posts } }
}