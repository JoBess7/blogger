import Link from "next/link";
import Header from "../../components/header/Header";
import {MdArrowForwardIos} from "react-icons/md";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";

export default function BlogCategory({ category, posts }) {

    const [shownPosts, setShownPosts] = useState([]);

    useEffect(() => {
        setShownPosts(posts.filter(post => {
            return getAdequateCategory(post.category.toLowerCase()) === getAdequateCategory(category.toLowerCase())
            || post.subcategories.indexOf(getAdequateCategory(category.toLowerCase())) >= 0;
        }));
    }, [posts, category]);

    const getAdequateCategory = cat => {
        switch(cat) {
            case "mongodb":
                return "MongoDB";
            case "css":
                return "CSS";
            case "react":
                return "React";
            case "next.js":
                return "Next.js";
            case "animation":
                return "Animation"
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
                        <span>
                            {shownPosts.length} post{shownPosts.length === 1 ? <></> : <>s</>}
                        </span>
                    </div>
                </div>
            </div>

            <div className="category-bottom-container td">
                <div className="category-bottom-sub-container">
                    {
                        shownPosts.map(post => 
                            <CategoryCard key={post.title} category={category} post={post}/>
                        )
                    }
                </div>
            </div>

            <Footer/>
        </div>
    )
}