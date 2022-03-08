import NextLink from "next/link";
import { BsCheckCircle } from "react-icons/bs";

const PostParagraph = ({ children }) => {
    return (
        <p className="post-paragraph post-text td">
            {children}
        </p>
    )
};

const TipGreen = ({ children, title }) => {
    return (
        <div className="tip td">
            {
                title ? <div className="tip-title">{title}</div> : <></>
            }
            <i></i>
            <BsCheckCircle size={26} className="tip-icon"></BsCheckCircle>
            {children}
        </div>
    )
};

const MDXComponents = {
    h1: props => <h1 {...props}></h1>,
    p: props => <PostParagraph {...props}></PostParagraph>,
    TipGreen: props => <TipGreen {...props}></TipGreen>,
    it: props => <span className="italic" {...props}></span>
}

export default MDXComponents