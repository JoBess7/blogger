import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function GoodyLayout({ children, frontMatter }) {

    return (
        <div className="goody-main-container">

            <div className="goody-top-container td">

                <div className="goody-header-container td">
                    <div className="goody-header-sub-container">
                        <Header/>
                    </div>
                </div>

            </div>

            <div className="goody-bottom-container td">
                <div className="goody-bottom-sub-container">
                    <span className="td">{frontMatter.title}</span>
                    <div className="goody-actual-content">
                        {children}
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}