import hydrate from "next-mdx-remote/hydrate";
import { getFiles, getFileBySlug } from "../../../../lib/mdx";
import BlogLayout from "../../../../layouts/post/BlogLayout";
import MDXComponents from "../../../../components/MDX/MDXComponents";
import { PostRepository } from "../../../../api/domain/PostRepository";

export default function Blog({ post, DBData }) {

    const {frontMatter, mdxSource} = post;
    DBData = JSON.parse(DBData);

    const content = hydrate(mdxSource, {
        components: MDXComponents
    })

    return (
        <BlogLayout DBData={DBData} frontMatter={frontMatter}>
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

    const res = await PostRepository.getPostBySlug(params.slug);
    const DBData = JSON.stringify(res);
    
    return {
        props: {
            post,
            DBData
        },
        revalidate: 30
    };
}