import hydrate from "next-mdx-remote/hydrate";
import { getFiles, getFileBySlug } from "../../../../lib/mdx";
import BlogLayout from "../../../../layouts/post/BlogLayout";
import MDXComponents from "../../../../components/MDX/MDXComponents";
import { useEffect, useState } from "react";

export default function Blog({ mdxSource, frontMatter }) {

    useEffect(() => {
        fetch(`/api/blog/posts/views`, {
            method: 'POST',
            body: JSON.stringify({
                slug: frontMatter.slug
            }),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        })
        .then(res => res.json())
        .then(data => console.log(data));
    }, [frontMatter.slug]);

    const [DBData, setDBData] = useState({});
    
    useEffect(() => {
        const getDBData = () => {
            fetch("/api/blog/posts/posts")
            .then(res => res.json())
            .then(data => {
                let tmpArray = [];
                data.data.map(post => {
                    tmpArray[post.route] = post;
                });

                setDBData(tmpArray);
            });
        };
    
        getDBData();
    }, []);
    
    const content = hydrate(mdxSource, {
        components: MDXComponents
    })

    return (
        <BlogLayout DBData={DBData[frontMatter.slug]} frontMatter={frontMatter}>
            {content}
        </BlogLayout>
    )
}

export async function getStaticPaths() {
    const posts = await getFiles("blog");

    return {
        paths: posts.map((p) => ({
            params: {
                slug: p.replace(/\.mdx/, "")
            }
        })),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const post = await getFileBySlug("blog", params.slug);

    return {props: post};
}