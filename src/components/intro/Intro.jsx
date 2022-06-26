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
                display: 'flex',
                flex: '1',
                backgroundColor: '#e7ecef',
                postion: 'relative',
                overflow: 'hidden',
                height: 'auto',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <div className="wrapper" style={{
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    height: '75%',
                    overflow: 'hidden'
                }}>
                    <h1 style={{
                        fontSize: '4vw',
                        fontWeight: '400',
                        color: '#274c77',
                        overflow: 'hidden',
                    }}>
                        {/* Gonna use some api for the time to say good afternoon/morning/evening */}
                        Hello!
                    </h1>

                    <h2 style={{
                        fontSize: '2vw',
                        color: '#6096ba',
                        overflow: 'hidden'
                    }}>
                        I am,
                    </h2>

                    <h1 style={{
                        fontSize: '6vw',
                        color: '#274c77',
                        overflow: 'hidden'
                    }}>
                        Andy Choo
                    </h1>

                    <div style={{fontSize: '2vw', color: '#979dac', fontWeight: '200'}}>
                        <h3>- Full-Stack Web Developer</h3>
                        <h3>- Korean-American</h3>
                        <h3>- Crypto Enthusiast</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
