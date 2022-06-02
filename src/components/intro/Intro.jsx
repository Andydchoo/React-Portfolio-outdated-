// working on mobile friendly view.
// looks terrible on mobile/smaller screens
// change photo to look more professional
export default function Intro() {
    return (
        <div className="intro" id="intro" style={{
            display: 'flex',
            backgroundColor: 'coral',
            height: '100%',
        }}>
            <div className="left-container" style={{
                display: 'flex',
                alignItems: 'center',
                flex: '1',
                width: '100%',
                height: 'auto',
                backgroundColor: '#a68a64',
                overflow: 'hidden'
            }}>
                <div className="imgContainer" style= {{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    height: 'auto',
                    overflow: 'hidden',
                    background: '#23272A',
                }}>
                    <img className="img" src="assets/selfie-ny.jpeg" alt="Andy Choo"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}/>
                </div>
            </div>

            <div className="right-container" style={{
                flex: '1',
                backgroundColor: '#656d4a',
                postion: 'relative',
                overflow: 'hidden',
                height: 'auto'
            }}>
                <div className="wrapper" style={{
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    overflow: 'hidden'
                }}>
                    <h1 style={{
                        fontSize: '6vw',
                        color: '#582f0e',
                        overflow: 'hidden'
                    }}>
                        {/* Gonna use some api for the time to say good afternoon/morning/evening */}
                        Hello!
                    </h1>

                    <h2 style={{
                        fontSize: '4vw',
                        color: '#7f4f24',
                        overflow: 'hidden'
                    }}>
                        I am,
                    </h2>

                    <h1 style={{
                        fontSize: '6vw',
                        color: '#582f0e',
                        overflow: 'hidden'
                    }}>
                        Andy Choo
                    </h1>

                    <div style={{fontSize: '3vw', color: '#b6ad90'}}>
                        <h3>- Full-Stack Web Developer</h3>
                        <h3>- Korean-American</h3>
                        <h3>- Crypto Enthusiast</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
