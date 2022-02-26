import BlogCategory from "../../../../layouts/category/BlogCategory";
import { getAllFilesFrontMatter } from "../../../../lib/mdx";

export default function react({ posts }) {
    return (
        <BlogCategory posts={posts} category="react"/>
    )
}

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter("blog");

    return { props : { posts } }
}