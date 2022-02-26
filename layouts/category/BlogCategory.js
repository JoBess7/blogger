import Link from "next/link";
import Header from "../../components/header/Header";
import {MdArrowForwardIos} from "react-icons/md";
import { useEffect, useState } from "react";

export default function BlogCategory({ category, posts }) {

    const [shownPosts, setShownPosts] = useState([]);

    useEffect(() => {
        setShownPosts(posts.filter(post => {
            return getAdequateCategory(post.category.toLowerCase()) === getAdequateCategory(category.toLowerCase())
            || post.subcategories.indexOf(getAdequateCategory(category.toLowerCase())) >= 0;
        }));
    }, [posts, category]);

    const getAdequateCategory = (cat) => {
        switch(cat) {
            case "mongodb":
                return "MongoDB";
            case "css":
                return "CSS";
            case "react":
                return "React";
            case "next":
                return "Next.js";
            default:
                return "Not found";
        }
    };

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
                        <span>{getAdequateCategory(category)}</span>
                        <div className="category-links">
                            <Link href="/blog">
                                <a className="td category-link-hoverable category-link">Blog</a>
                            </Link>
                            <MdArrowForwardIos className="category-links-arrow" size={15} color="grey"/>
                            <Link href="/blog/posts">
                                <a className="td category-link-hoverable category-link">Posts</a>
                            </Link>
                            <MdArrowForwardIos className="category-links-arrow" size={15} color="grey"/>
                            <span className="td category-link">{getAdequateCategory(category)}</span>
                        </div>
                    </div>
                    <div className="category-top-right-flex">
                        <span>{shownPosts.length}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}