import './portfolio.css'

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <div className="projects-container">
                    <div className="project">
                        <a href="https://github.com/Copernichris/CryptoWatch"><h3>CryptoWatch</h3></a>
                            <a href="https://copernichris.github.io/CryptoWatch/">
                                <img src="assets/cryptowatch.png" className="cryptowatch" alt="CryptoWatch"/>
                            </a>
                    </div>
                    <div className="project">
                        <a href="https://github.com/Andydchoo/Retro-Game-Market"><h3>RGMarket</h3></a>
                            <a href="https://retro-game-market.herokuapp.com/">
                                <img src="assets/rgmarket.png" className="rgmarket" alt="RGMarket" />
                            </a>
                    </div>
            </div>
            <div className="projects-container">
                    <div className="project">
                    <a href="https://github.com/Andydchoo/Note-Taker"><h3>Note Taker</h3></a>
                            <a href="https://notetakinghw.herokuapp.com/notes">
                                <img src="assets/notetaker.png" className="notetaker" alt="Note Taker" />
                            </a>
                    </div>
                    <div className="project">
                        <h3>CryptoWatch</h3>
                        <img src="assets/cryptowatch.png" className="cryptowatch" alt="CryptoWatch" href="https://copernichris.github.io/CryptoWatch/"/>
                    </div>
            </div>
            <div className="projects-container">
                    <div className="project">
                        <h3>CryptoWatch</h3>
                        <img src="assets/cryptowatch.png" className="cryptowatch" alt="CryptoWatch" href="https://copernichris.github.io/CryptoWatch/"/>
                    </div>
                    <div className="project">
                        <h3>CryptoWatch</h3>
                        <img src="assets/cryptowatch.png" className="cryptowatch" alt="CryptoWatch" href="https://copernichris.github.io/CryptoWatch/"/>
                    </div>
            </div>
        </div>
    )
}
