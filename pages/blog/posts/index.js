import Link from "next/link";
import {MdArrowForwardIos} from "react-icons/md";
import CategoryCard from "../../../components/categoryCard/CategoryCard";
import { useEffect, useState } from "react";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import { getAllFilesFrontMatter } from "../../../lib/mdx";

export default function BlogCategory({ posts }) {

    const [shownPosts, setShownPosts] = useState([]);

    return (
        <div className="category-main-container">

            <div className="category-top-container td">

                <div className="category-header-container td">
                    <div className="category-header-sub-container">
                        <Header/>
                    </div>
                </div>

                <div className="category-top-flex">
                    <div className="category-top-left-flex">
                        <span>All posts</span>
                        <div className="category-links">
                            <Link href="/blog">
                                <a className="td category-link-hoverable category-link">Blog</a>
                            </Link>
                            <MdArrowForwardIos className="category-links-arrow" size={15} color="grey"/>
                            <span className="td category-link">Posts</span>
                        </div>
                    </div>
                    <div className="category-top-right-flex">
                        <span>
                            {posts.length} post{posts.length === 1 ? <></> : <>s</>}
                        </span>
                        
                    </div>
                </div>
            </div>

            <div className="category-bottom-container td">
                <div className="category-bottom-sub-container">
                    {
                        posts.map(post => 
                            <CategoryCard key={post.title} category={`posts/${post.category}`} post={post}/>
                        )
                    }
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