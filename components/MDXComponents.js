import NextLink from "next/link";
import { BsCheckCircle } from "react-icons/bs";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Prism from "prismjs";
require('prismjs/components/prism-javascript')
require('prismjs/components/prism-css')
require('prismjs/components/prism-jsx')
import "prismjs/themes/prism-tomorrow.css";
import PrismBlock from "./prism/Prism";

const PostParagraph = ({ children }) => {
    return (
        <p className="post-paragraph post-text td">
            {children}
        </p>
    )
};

const TipGreen = ({ children, title }) => {
    return (
        <div className="tip-green td">
            {
                title ? <div className="tip-title">{title}</div> : <></>
            }
            <i></i>
            <BsCheckCircle size={26} className="tip-icon-green"/>
            {children}
        </div>
    )
};

const TipBlue = ({ children, title }) => {
    return (
        <div className="tip-blue td">
            {
                title ? <div className="tip-title">{title}</div> : <></>
            }
            <i></i>
            <IoMdInformationCircleOutline size={32} className="tip-icon-blue"/>
            {children}
        </div>
    )
};

const MDXComponents = {
    h1: props => <h1 {...props}></h1>,
    p: props => <PostParagraph {...props}></PostParagraph>,
    TipGreen: props => <TipGreen {...props}></TipGreen>,
    TipBlue: props => <TipBlue {...props}></TipBlue>,
    it: props => <span className="italic" {...props}></span>,
    Prism: props => <PrismBlock {...props}></PrismBlock>
}

export default MDXComponents