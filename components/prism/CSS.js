import Prism from "prismjs";
require('prismjs/components/prism-javascript')
require('prismjs/components/prism-css')
require('prismjs/components/prism-jsx')
import 'prismjs/components/prism-jsx.js'
import { useEffect } from "react";

export default function CSS({ children }) {

    useEffect(() => {
        if (typeof window !== 'undefined') {
            Prism.highlightAll();
        }
    });

    return (
        <div className="prism">
            <div className="prism-file">CSS</div>
            <pre className="language-css">
                <code>
                    {children}
                </code>
            </pre>
        </div>
    )
};