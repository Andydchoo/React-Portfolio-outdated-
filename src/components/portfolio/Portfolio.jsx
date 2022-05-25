// import './portfolio.css'

import Container from '@mui/material/Container';


export default function Portfolio() {
    return (
        <div
            className="portfolio"
            id="portfolio"
            style={{
                backgroundColor: '#23272A',
            }}
        >
            <h1
                style={{
                    fontSize: '6vw',
                    display: 'flex',
                    justifyContent: 'center',
                    color: '#404EED',
                }}
            >
                Portfolio
            </h1>
            <Container
                style={{
                    height: '50%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    padding: '12px',
                }}
            >

                <div style={{flex: '1', padding: '5%', height: '100%'}}>
                    <a href="https://github.com/Copernichris/CryptoWatch" target="_blank" rel="noreferrer">
                        <h3 style={{color: 'lightblue'}}>CryptoWatch</h3>
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

                <div style={{flex: '1', padding: '5%', height: '100%'}}>
                    <a href="https://github.com/Copernichris/Vodu" target="_blank" rel="noreferrer">
                        <h3 style={{color: 'lightblue'}}>VodU</h3>
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
                    padding: '12px'
                }}
            >
                
                <div style={{flex: '1', padding: '5%', height: '100%'}}>
                    <a href="https://github.com/Andydchoo/Retro-Game-Market" target="_blank" rel="noreferrer">
                        <h3 style={{color: 'lightblue'}}>RGMarket</h3>
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

                <div style={{flex: '1', padding: '5%', height: '100%'}}>
                    <a href="https://github.com/Andydchoo/Note-Taker" target="_blank" rel="noreferrer">
                        <h3 style={{color: 'lightblue'}}>Note Taker</h3>
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
