import ThemeToggler from "../../components/header/ThemeToggler"

export default function BlogLayout({frontMatter, children}) {
    return (
        <div className="blog-content">
            {children}
            <ThemeToggler></ThemeToggler>
        </div>
    )
}