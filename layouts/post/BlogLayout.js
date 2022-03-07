import { useEffect } from "react"
import Header from "../../components/header/Header"
import ThemeToggler from "../../components/header/ThemeToggler"
import TableOfContents from "../../components/tableOfContents/TableOfContents"
import {MdArrowForwardIos} from "react-icons/md";
import Link from "next/link";

export default function BlogLayout({frontMatter, children}) {
    return (
        <div className="blog">
            <div className="blog-top-container td">
                <div className="blog-header-container td">
                    <div className="blog-header-sub-container">
                        <Header/>
                    </div>
                </div>

                <div className="blog-top-flex">
                    <div className="blog-top-left-flex">
                        <span>{frontMatter.title}</span>
                        <div className="blog-links">
                            <Link href="/blog">
                                <a className="td blog-link-hoverable blog-link">Blog</a>
                            </Link>
                            <MdArrowForwardIos className="blog-links-arrow" size={15} color="grey"/>
                            <Link href="/blog/posts">
                                <a className="td blog-link-hoverable blog-link">Posts</a>
                            </Link>
                            <MdArrowForwardIos className="blog-links-arrow" size={15} color="grey"/>
                            <Link href={`/blog/posts/${frontMatter.category.toLowerCase()}`}>
                                <a className="td blog-link-hoverable blog-link">{frontMatter.category}</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blog-content td">
                <div className="blog-content-sub">
                    <div className="blog-actual-content">
                        {children}
                    </div>
                    <div className="blog-table-container">
                        <TableOfContents content={frontMatter.tableOfContents}/>
                    </div>
                </div>
            </div>
        </div>
    )
}