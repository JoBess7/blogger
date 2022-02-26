import Link from "next/link"
import { BiRightArrowAlt } from "react-icons/bi";

export default function BlogCard({title, publishedAt, summary, category, slug}) {

    return (
        <Link href={`/blog/posts/${category.toLowerCase()}/${slug}`}>
            <a className="postcard">
                <div className="postcard-title-flex">
                    <span className="postcard-title">{title}</span>
                    <BiRightArrowAlt className="postcard-arrow" size={22}/>
                </div>
                <span className="postcard-description">{summary}</span>
            </a>
        </Link>
    )
};