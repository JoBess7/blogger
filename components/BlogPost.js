import React from "react";
import NextLink from "next/link";

const BlogPost = ({title, publishedAt, summary, slug}) => {
    return (
        <NextLink href={`blog/CSS/${slug}`} passHref>
            <a>
                <h1>summary</h1>
            </a>
        </NextLink>
    )
}

export default BlogPost;