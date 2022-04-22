/* eslint-disable @next/next/no-img-element */
import { BsCheckCircle } from "react-icons/bs";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { AiOutlineNumber } from "react-icons/ai";
import JavaScript from "../prism/JavaScript";
import CSS from "../prism/CSS";
import HTML from "../prism/HTML";
import Link from "next/link";
import Codepen from "../codepen/Codepen";
import { scrollIntoView } from "../../utils/funcs";
import { DicebearAvatarGenerator } from "../dicebearAvatarGenerator/DicebearAvatarGenerator";

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

const Lk = ({ children, url }) => {
    return (
        <span className="lk">
            <i className="lk-border td"></i>
            <Link href={url}>
                <a className="lk-a">
                    {children}
                </a>
            </Link>
        </span>
    )
};

const SoloImage = ({ image, dimensions, alt }) => {
    return (
        <div className="solo-image">
            {/* next.js doesn't support height: auto, must use img tag in this case */}
            <img
                alt={alt}
                src={`/images/${image}`}
            />
        </div>
    )
};

const Section = ({ title, id }) => {
    return (
        <div id={id} className="section highlightable-section">
            <span className="td">{title}</span>
            <AiOutlineNumber onClick={() => scrollIntoView(id)} size={30}/>
        </div>
    )
};

const Subsection = ({ title, id }) => {
    return (
        <div id={id} className="subsection highlightable-section">
            <span className="td">{title}</span>
            <AiOutlineNumber onClick={() => scrollIntoView(id)} size={22}/>
        </div>
    )
};

const Options = ({ children }) => {
    return (
        <ul className="options">
            {children}
        </ul>
    )
};


const FolderText = ({ text }) => {
    return (
        <span className="folder-text">{text}</span>
    )
};

const MDXComponents = {
    h1: props => <h1 {...props}></h1>,
    p: props => <PostParagraph {...props}/>,
    TipGreen: props => <TipGreen {...props}/>,
    TipBlue: props => <TipBlue {...props}/>,
    it: props => <span className="italic" {...props}></span>,
    JavaScript: props => <JavaScript {...props}/>,
    CSS: props => <CSS {...props}/>,
    HTML: props => <HTML {...props}/>,
    Lk: props => <Lk {...props}/>,
    SoloImage: props => <SoloImage {...props}/>,
    Section: props => <Section {...props}/>,
    Subsection: props => <Subsection {...props}/>,
    Options: props => <Options {...props}/>,
    DicebearAvatarGenerator: props => <DicebearAvatarGenerator {...props}/>,
    FolderText: props => <FolderText {...props}/>,
    Codepen: props => <Codepen {...props}/>
}

export default MDXComponents