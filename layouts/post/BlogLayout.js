import Header from "../../components/header/Header"
import TableOfContents from "../../components/tableOfContents/TableOfContents"
import { getFormattedDate } from "../../utils/date/date";
import { BsCalendarCheck, BsClockHistory } from "react-icons/bs";
import { RiEye2Line } from "react-icons/ri";
import { useEffect } from "react";

export default function BlogLayout({frontMatter, DBData, children}) {

    useEffect(() => {
        fetch(`/api/blog/posts/views`, {
            method: 'POST',
            body: JSON.stringify({
                slug: frontMatter.slug
            }),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        })
    }, [frontMatter.slug]);
    
    return (
        <div className="blog-layout">
            <div className="blog-layout-top-container td">
                <div className="blog-layout-header-container td">
                    <div className="blog-layout-header-sub-container">
                        <Header/>
                    </div>
                </div>

                <div className="blog-layout-top-flex">
                    <div className="blog-layout-top-left-flex">

                        <span>{frontMatter.title}</span>    

                        <div className="blog-layout-title-info">
                            <BsCalendarCheck size={18}/>

                            <span className="blog-layout-date">Published on {getFormattedDate(frontMatter.publishedAt)}</span>
                        </div>
                        
                        <div className="blog-layout-title-info">
                            <BsClockHistory size={18}/>

                            <span className="blog-layout-read-time">{frontMatter.readingTime.text}</span>
                        </div>

                        {
                            DBData 
                            ?
                            <div className="blog-layout-title-info">
                                <RiEye2Line size={20}/>
                                <span className="blog-layout-read-time">{DBData.views} views</span>
                            </div>
                            :
                            <div className="blog-layout-title-info">
                                <RiEye2Line size={20}/>
                            </div>
                        }
                    </div>
                </div>
            </div>

            <div className="blog-layout-content td">
                <div className="blog-layout-content-sub">
                    <div className="blog-layout-actual-content">
                        {children}
                    </div>
                    <div className="blog-layout-table-container">
                        <TableOfContents content={frontMatter.tableOfContents}/>
                    </div>
                </div>
            </div>
        </div>
    )
}