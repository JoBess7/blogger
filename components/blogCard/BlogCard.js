import Link from "next/link"
import { BiRightArrowAlt } from "react-icons/bi";

export default function BlogCard({title, publishedAt, summary, slug}) {

    return (
        <Link href={"posts/"}>
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