import NextLink from "next/link";

const MDXComponents = {
    h1: (props) => <h1 {...props}></h1>,
    p: props => <p style={{marginTop: 0}} {...props}></p>
}

export default MDXComponents