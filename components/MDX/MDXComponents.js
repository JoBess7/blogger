import { BsCheckCircle } from "react-icons/bs";
import { IoMdInformationCircleOutline } from "react-icons/io";
import JavaScript from "../prism/JavaScript";
import CSS from "../prism/CSS";
import HTML from "../prism/HTML";
import Link from "next/link";
import Image from "next/image";

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
        <div style={{height: `${dimensions}px`}} className="solo-image">
            <Image
            
                layout="fill"
                objectFit='contain' 
                alt={alt}
                src={`/images/${image}`}
            />
        </div>
    )
};

const MDXComponents = {
    h1: props => <h1 {...props}></h1>,
    p: props => <PostParagraph {...props}></PostParagraph>,
    TipGreen: props => <TipGreen {...props}></TipGreen>,
    TipBlue: props => <TipBlue {...props}></TipBlue>,
    it: props => <span className="italic" {...props}></span>,
    JavaScript: props => <JavaScript {...props}></JavaScript>,
    CSS: props => <CSS {...props}></CSS>,
    HTML: props => <HTML {...props}></HTML>,
    Lk: props => <Lk {...props}></Lk>,
    SoloImage: props => <SoloImage {...props}></SoloImage>
}

export default MDXComponents