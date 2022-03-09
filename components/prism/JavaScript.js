import Prism from "prismjs";
require('prismjs/components/prism-javascript')
require('prismjs/components/prism-css')
require('prismjs/components/prism-jsx')
import 'prismjs/components/prism-jsx.js'

import { useEffect } from "react";

export default function JavaScript({ children }) {

    useEffect(() => {
        if (typeof window !== 'undefined') {
            Prism.highlightAll();
        }
    });

    return (
        <div className="prism">
            <div className="prism-file">JS</div>
            <pre className="language-jsx">
                <code className="language-jsx">
                    {children}
                </code>
            </pre>
        </div>
    )
};