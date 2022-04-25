import React, { useEffect, useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import uuid from 'react-uuid'
import { BsArrowCounterclockwise } from "react-icons/bs";

export default function Codepen({ _HTML, _CSS, _JS, _initial }) {
    const [HTML, setHTML] = useState(_HTML ? _HTML : '');
    const [CSS, setCSS] = useState(_CSS ? _CSS : '');
    const [JS, setJS] = useState(_JS ? _JS : '');

    const [selected, setSelected] = useState(_initial ? _initial : 'HTML');

    const [iFrame, setIFrame] = useState(null);
    const [iFrameId, setIFrameId] = useState(uuid());

    useEffect(() => {
        if(document) {
            let frame = document.getElementById("codepen-iframe-" + iFrameId).contentWindow.document;

            setIFrame(frame);
            writeInFrame(frame, HTML, CSS, JS);
        }
    }, []);

    const resetIFrame = () => {
        let resetButton = document.getElementById("codepen-reset-" + iFrameId);

        resetButton.classList.add("codepen-reset-active");
        setTimeout(() => {
            resetButton.classList.remove("codepen-reset-active");
        }, 400);

        setHTML(_HTML ? _HTML : '');
        setCSS(_CSS ? _CSS : '');
        setJS(_JS ? _JS : '');

        writeInFrame(iFrame, _HTML, _CSS, _JS);
    };

    const writeInFrame = (frame, HTML, CSS, JS) => {
        try {
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
        } catch {}
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

            <div className="codepen-title-flex">
                <span className="codepen-title td">
                    Code playground
                </span>
                <BsArrowCounterclockwise 
                    id={"codepen-reset-" + iFrameId} 
                    title="Reset code" 
                    onClick={resetIFrame} 
                    className="codepen-reset" 
                    size={23}/>
            </div>

            <div className="codepen-display">
                <div className="codepen-editors">
                    <div className="codepen-editor-picker td">
                        {
                            <button 
                            className={`td ${selected === "HTML" ? "codepen-title-selected " : ""}`}
                            onClick={() => setSelected("HTML")}
                            >
                                HTML
                            </button>
                        }

                        {
                            <button 
                            className={`td ${selected === "CSS" ? "codepen-title-selected " : ""}`}
                            onClick={() => setSelected("CSS")}
                            >
                                CSS
                            </button>
                        }

                        {
                            <button 
                            className={`td ${selected === "JS" ? "codepen-title-selected " : ""}`}
                            onClick={() => setSelected("JS")}
                            >
                                JS
                            </button>
                        }
                    </div>
                    <div className="codepen-textareas td">
                        <div className="codepen-editor td">
                            {
                                selected === "CSS" &&
                                <Editor
                                    value={CSS}
                                    onValueChange={newVal => updateTextArea("CSS", newVal)}
                                    highlight={(code) => highlight(code, languages.css, 'css')}
                                />
                            }
                        </div>

                        <div className="codepen-editor td">
                            {
                                selected === "HTML" &&
                                <Editor
                                    value={HTML}
                                    onValueChange={newVal => updateTextArea("HTML", newVal)}
                                    highlight={(code) => highlight(code, languages.html, 'html')}
                                />
                            }
                        </div>

                        <div className="codepen-editor td">
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
                    <div className="codepen-results-title td">Results</div>
                    <div className="codepen-iframe-container td">
                        <iframe marginWidth="0" marginHeight="0" className="td" id={"codepen-iframe-" + iFrameId}></iframe>
                    </div>
                </div>
            </div>

        </div>
    );
}