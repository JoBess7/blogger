import React, { useState } from "react";
import { getAllFilesFrontMatter } from "../lib/mdx";
import Head from "next/head";
import BlogPost from "../components/BlogPost";

export default function Blog({posts}) {

    return (
        <>
            <Head>
                <title>Blog - jojo</title>
            </Head>
            <div>
                {
                    posts.map((frontMatter) => <BlogPost key={frontMatter.title} {...frontMatter}></BlogPost>)
                }
            </div>
        </>
    )
}

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter("blog");

    return { props : { posts } }
}