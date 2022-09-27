// import './portfolio.css'

import Container from '@mui/material/Container';

// make names of apps on side vertical
// add little blocks on ends for the name of apps
// change text font/color/size

export default function Portfolio() {
    return (
        <div
            className="portfolio"
            id="portfolio"
            style={{
                backgroundColor: '#c2c5aa',
                size: '100%',
                width: '100%',
            }}
        >
            {/* <h1
                style={{
                    fontSize: '6vw',
                    display: 'flex',
                    justifyContent: 'center',
                    color: '#404EED',
                }}
            >
                Portfolio
            </h1> */}
            <Container
                style={{
                    height: '50%',
                    padding: '0',
                    display: 'flex',
                    flexWrap: 'wrap',
                }}
            >

                <div style={{flex: '1', height: '100%'}}>
                    <a href="https://github.com/Copernichris/CryptoWatch" target="_blank" rel="noreferrer">
                        <h3 style={{
                            display: 'flex',
                            color: '#274c77',
                            textDecoration: 'none',
                            justifyContent: 'center',
                            }}>
                                CryptoWatch
                            </h3>
                    </a>
                    <a href="https://copernichris.github.io/CryptoWatch/" target="_blank" rel="noreferrer">
                        <img
                        src="assets/cryptowatch.png"
                        alt="CryptoWatch"
                        style={{
                            overflow: 'hidden',
                            width: '100%',
                            height: '75%'
                        }}
                        />
                    </a>
                </div>

                <div style={{flex: '1', height: '100%'}}>
                    <a href="https://github.com/Copernichris/Vodu" target="_blank" rel="noreferrer">
                        <h3 style={{
                                display: 'flex',
                                justifyContent: 'center',
                                color: '#274c77',
                                textDecoration: 'none'
                            }}>
                                VodU
                            </h3>
                    </a>
                    <a href="https://vodu2.herokuapp.com/" target="_blank" rel="noreferrer">
                        <img 
                            src="assets/vodu.png"
                            alt="VodU"
                            style={{
                                overflow: 'hidden',
                                width: '100%',
                                height: '75%'
                            }}
                        />
                    </a>
                </div>

            </Container>

            <Container
                style={{
                    height: '50%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    padding: '0'
                }}
            >
                
                <div style={{flex: '1', height: '100%'}}>
                    <a href="https://github.com/Andydchoo/Retro-Game-Market" target="_blank" rel="noreferrer">
                        <h3 style={{
                                display: 'flex',
                                justifyContent: 'center',
                                color: '#274c77',
                                textDecoration: 'none'
                            }}>
                                RGMarket
                            </h3>
                    </a>
                    <a href="https://retro-game-market.herokuapp.com/" target="_blank" rel="noreferrer">
                        <img
                            src="assets/rgmarket.png"
                            alt="RGMarket"
                            style={{
                                overflow: 'hidden',
                                width: '100%',
                                height: '75%'
                            }}
                        />
                    </a>
                </div>

                <div style={{flex: '1', height: '100%'}}>
                    <a href="https://github.com/Andydchoo/Note-Taker" target="_blank" rel="noreferrer">
                        <h3 style={{
                                display: 'flex',
                                justifyContent: 'center',
                                color: '#274c77',
                                textDecoration: 'none'
                            }}>
                                Note Taker
                            </h3>
                    </a>
                    <a href="https://notetakinghw.herokuapp.com/notes" target="_blank" rel="noreferrer">
                        <img
                            src="assets/notetaker.png"
                            alt="Note Taker"
                            style={{
                                overflow: 'hidden',
                                width: '100%',
                                height: '75%'
                            }}
                        />
                    </a>
                </div>

            </Container>
            
        </div>
    )
}
