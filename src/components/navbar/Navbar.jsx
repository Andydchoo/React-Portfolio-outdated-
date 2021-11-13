import './navbar.css'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left-container">
                    <a href="#intro" className="name">Andy Choo</a>
                </div>
                <div className="right-container">
                    <a href="#intro" className="intro">Introduction</a>
                    <a href="#portfolio" className="portfolio">Portfolio</a>
                    {/* <a href="#resume" className="resume">Resume</a> */}
                    <a href="#contact" className="contact">Contact</a>

                </div>
            </div>
        </div>
    )
}
