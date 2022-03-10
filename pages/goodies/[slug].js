import hydrate from "next-mdx-remote/hydrate";
import { getFiles, getFileBySlug } from "../../lib/mdx";
import GoodyLayout from "../../layouts/goody/GoodyLayout.js";
import MDXComponents from "../../components/MDX/MDXComponents";

export default function Goody({ mdxSource, frontMatter }) {
    
    const content = hydrate(mdxSource, {
        components: MDXComponents
    })

    return (
        <GoodyLayout frontMatter={frontMatter}>
            {content}
        </GoodyLayout>
    )
}

export async function getStaticPaths() {
    const goodies = await getFiles("goodies");

    return {
        paths: goodies.map(goody => ({
            params: {
                slug: goody.replace(/\.mdx/, "")
            }
        })),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const goody = await getFileBySlug("goodies", params.slug);

    return {props: goody};
}