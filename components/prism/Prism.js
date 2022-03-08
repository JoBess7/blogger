import Prism from "prismjs";
require('prismjs/components/prism-javascript')
require('prismjs/components/prism-css')
require('prismjs/components/prism-jsx')
import "prismjs/themes/prism-tomorrow.css";
import 'prismjs/components/prism-jsx.js'
import { useEffect } from "react";

export default function PrismBlock({ children, type }) {

    useEffect(() => {
        if (typeof window !== 'undefined') {
            Prism.highlightAll();
        }
    });

    return (
        <pre className="language-javascript" >
            <code>
                {children}
            </code>
        </pre>
    )
};