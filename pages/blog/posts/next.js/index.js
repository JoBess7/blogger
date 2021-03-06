import BlogCategory from "../../../../layouts/category/BlogCategory";
import { getAllFilesFrontMatter } from "../../../../lib/mdx";

export default function css({ posts }) {
    return (
        <BlogCategory posts={posts} category="next.js"/>
    )
}

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter("blog");

    return { props : { posts } }
}
