/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { scrollIntoView } from "../../utils/funcs";

export default function TableOfContents({ content }) {

    const [currentSection, setCurrentSection] = useState();

    const callback = (entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                setCurrentSection(entry.target.id);
            }
        });
    };
    
    useEffect(() => {
        const highlightables = Array.from(document.getElementsByClassName("highlightable-section"));

        let options = {
            root: document.querySelector("null"),
            rootMargin: '0px',
            threshold: 0
        }

        console.log("run");
        const observer = new IntersectionObserver(callback, options);

        highlightables.map(element => {
            observer.observe(document.getElementById(element.id));
        })
    }, [callback]);

    return (
        <div className="table-of-contents">
            <span>Table of Contents</span>
            {
                Object.entries(content).map(entry => {
                    return (
                        <div key={entry[0]} className="table-of-contents-sub">
                            <span onClick={() => scrollIntoView(entry[0])} className={`table-of-contents-title ${currentSection === entry[0] ? "toc-active": ""}`}>{entry[0]}</span>
                            <div className="table-of-contents-targets">
                                {
                                    Object.entries(entry[1][0].targets).map(target => {
                                        return (
                                            <span className={`table-of-contents-target ${currentSection === target[1] ? "toc-active": ""}`} onClick={() => scrollIntoView(target[1])} key={target[1]}>
                                                {target[0]}
                                            </span>
                                        )    
                                    })
                                }
                            </div>
                        </div>
                        
                    )
                })
            }
        </div>
    )
}