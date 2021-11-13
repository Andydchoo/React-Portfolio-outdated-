import './intro.css'

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left-container">
                <div className="imgContainer">
                    <img className="img" src="assets/selfie-ny.jpeg" alt="Image of Andy Choo"/>
                </div>
            </div>

            <div className="right-container">
                <div className="wrapper">
                    <h1>Welcome.<h2>I am<h1>Andy Choo</h1></h2></h1>
                    
                    <h3>- Full-Stack Web Developer</h3>
                    <h3>- Korean-American</h3>
                    <h3>- Crypto Enthusiast</h3>
                </div>
            </div>
        </div>
    )
}
