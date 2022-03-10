import Header from "../../components/header/Header"
import TableOfContents from "../../components/tableOfContents/TableOfContents"
import { getFormattedDate } from "../../utils/date/date";

export default function BlogLayout({frontMatter, children}) {
    console.log(frontMatter);
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
                        <div className="blog-layout-date">
                            {getFormattedDate(frontMatter.publishedAt)} &#183; {frontMatter.category}
                        </div>
                        <span>{frontMatter.title}</span>
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