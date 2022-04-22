import React, { useEffect, useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import uuid from 'react-uuid'

export default function Codepen({ _HTML, _CSS, _JS }) {
    const [HTML, setHTML] = useState(_HTML);
    const [CSS, setCSS] = useState(_CSS);
    const [JS, setJS] = useState(_JS);

    const [selected, setSelected] = useState("HTML");

    const [iFrame, setIFrame] = useState(null);
    const [iFrameId, setIFrameId] = useState(uuid());

    useEffect(() => {
        if(document) {
            let frame = document.getElementById("codepen-iframe-" + iFrameId).contentWindow.document;
            setIFrame(frame);
            writeInFrame(frame, HTML, CSS, JS);
        }
    }, []);

    const writeInFrame = (frame, HTML, CSS, JS) => {
        frame.open()
        frame.writeln(
                HTML   +
            '<style>'     +
                CSS    +
            '</style>'    +
            '<script>'    +
                JS     +
            '</script>'

        )
        frame.close()
    };

    const updateTextArea = (type, val) => {
        let tmpHTML = HTML;
        let tmpCSS = CSS;
        let tmpJS = JS;

        if      (type === "HTML")  {setHTML(val); tmpHTML = val;}
        else if (type === "CSS")   {setCSS(val);  tmpCSS = val;}
        else if (type === "JS")    {setJS(val);   tmpJS = val;}

        writeInFrame(iFrame, tmpHTML, tmpCSS, tmpJS);
    };


    return (
        <div className="codepen">
            <span className="codepen-title">
                Code playground
            </span>

            <div className="codepen-display">
                <div className="codepen-editors">
                    <div className="codepen-editor-picker">
                        {
                            <button 
                            className={`${selected === "HTML" ? "codepen-title-selected " : ""}`}
                            onClick={() => setSelected("HTML")}
                            >
                                HTML
                            </button>
                        }

                        {
                            <button 
                            className={`${selected === "CSS" ? "codepen-title-selected " : ""}`}
                            onClick={() => setSelected("CSS")}
                            >
                                CSS
                            </button>
                        }

                        {
                            <button 
                            className={`${selected === "JS" ? "codepen-title-selected " : ""}`}
                            onClick={() => setSelected("JS")}
                            >
                                JS
                            </button>
                        }
                    </div>
                    <div className="codepen-textareas">
                        <div className="codepen-editor">
                            {
                                selected === "CSS" &&
                                <Editor
                                    value={CSS}
                                    onValueChange={newVal => updateTextArea("CSS", newVal)}
                                    highlight={(code) => highlight(code, languages.css, 'css')}
                                />
                            }
                        </div>

                        <div className="codepen-editor">
                            {
                                selected === "HTML" &&
                                <Editor
                                    value={HTML}
                                    onValueChange={newVal => updateTextArea("HTML", newVal)}
                                    highlight={(code) => highlight(code, languages.html, 'html')}
                                />
                            }
                        </div>

                        <div className="codepen-editor">
                            {
                                selected === "JS" &&
                                <Editor
                                    value={JS}
                                    onValueChange={newVal => updateTextArea("JS", newVal)}
                                    highlight={(code) => highlight(code, languages.js, 'js')}
                                />
                            }
                        </div>
                    </div>
                </div>
                
                <div className="codepen-results">
                    <div className="codepen-results-title">Results</div>
                    <div className="codepen-iframe-container">
                        <iframe id={"codepen-iframe-" + iFrameId}></iframe>
                    </div>
                </div>
            </div>

        </div>
    );
}