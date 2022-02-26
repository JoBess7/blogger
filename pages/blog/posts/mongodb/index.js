import BlogCategory from "../../../../layouts/category/BlogCategory";
import { getAllFilesFrontMatter } from "../../../../lib/mdx";

export default function mongodb({ posts }) {
    return (
        <BlogCategory posts={posts} category="mongodb"/>
    )
}

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter("blog");

    return { props : { posts } }
}