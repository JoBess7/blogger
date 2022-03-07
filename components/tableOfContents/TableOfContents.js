export default function TableOfContents({ content }) {
    
    const scrollIntoView = element => {
        document.getElementById(element).scrollIntoView({
            behavior: "smooth"
        })
    };

    return (
        <div className="table-of-contents">
            <span>Table of Contents</span>
            {
                Object.entries(content).map(entry => {
                    return (
                        <div key={entry[0]} className="table-of-contents-sub">
                            <span onClick={() => scrollIntoView(entry[0])} className="table-of-contents-title">{entry[0]}</span>
                            <div className="table-of-contents-targets">
                                {
                                    Object.entries(entry[1][0].targets).map(target => {
                                        return (
                                            <span onClick={() => scrollIntoView(target[1])} className="table-of-contents-target" key={target[1]}>
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