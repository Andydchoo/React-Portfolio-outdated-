// working on mobile friendly view.
//need to fix small empty space under photo
//looks terrible on mobile/smaller screens
export default function Intro() {
    return (
        <div className="intro" id="intro" style={{
            backgroundColor: 'coral',
            display: 'flex',
            height: '100%',
        }}>
            <div className="left-container" style={{
                flex: '1',
                backgroundColor: '#99AAB5',
                overflow: 'hidden'
            }}>
                <div className="imgContainer" style= {{
                    width: '100%',
                    height: 'auto',
                    overflow: 'hidden',
                    background: '#23272A'
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
                backgroundColor: '#99AAB5',
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
                        color: '#404EED',
                        overflow: 'hidden'
                    }}>
                        {/* Gonna use some api for the time to say good afternoon/morning/evening */}
                        Hello!
                    </h1>

                    <h2 style={{
                        fontSize: '4vw',
                        color: '#5865F2',
                        overflow: 'hidden'
                    }}>
                        I am
                    </h2>

                    <h1 style={{
                        fontSize: '6vw',
                        color: '#404EED',
                        overflow: 'hidden'
                    }}>
                        Andy Choo
                    </h1>

                    <div style={{fontSize: '3vw', color: '#F6F6F6'}}>
                        <h3>- Full-Stack Web Developer</h3>
                        <h3>- Korean-American</h3>
                        <h3>- Crypto Enthusiast</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
