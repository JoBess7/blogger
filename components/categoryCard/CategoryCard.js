import Link from "next/link";

export default function CategoryCard({ category, post }) {
    return (
        <Link key={post.title} href={`${category.toLowerCase()}/${post.slug}`}>
            <a className="post-types-post shadow1">
                <span className="post-types-post-title">{post.title}</span>
                <span className="post-types-post-desc">{post.summary}</span>
            </a>
        </Link>
    )
}