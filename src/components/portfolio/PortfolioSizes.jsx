
import Container from '@mui/material/Container';
import { Button, Grid } from '@mui/material';

export function PortfolioDesktop() {
  return(
    <div  className="portfolio" id="portfolio" style={{ backgroundColor: '#c2c5aa'}}>
    {/* Left container for keeping items grouped in component */}
      <Container
        style={{
          height: '50%',
          display: 'flex',
          flexWrap: 'wrap',
          textAlign: 'center'
      }}>
        <div style={{flex: '1', height: '100%'}}>
          <Button href="https://github.com/Copernichris/CryptoWatch" target="_blank" rel="noreferrer">
            <h3 
              style={{
                display: 'flex',
                color: '#274c77',
                textDecoration: 'none',
                fontSize: '30px',
            }}>
              CryptoWatch
            </h3>
          </Button>
          <a href="https://copernichris.github.io/CryptoWatch/" target="_blank" rel="noreferrer">
            <img
              src="assets/cryptowatch.png"
              alt="CryptoWatch"
              style={{
                overflow: 'hidden',
                width: '100%',
                height: '75%'
            }}/>
          </a>
        </div>

        <div style={{flex: '1', height: '100%'}}>
          <Button href="https://github.com/Copernichris/Vodu" target="_blank" rel="noreferrer">
            <h3 
              style={{
                display: 'flex',
                color: '#274c77',
                textDecoration: 'none',
                fontSize: '30px'
            }}>
              VodU
            </h3>
          </Button>
          <a href="https://vodu2.herokuapp.com/" target="_blank" rel="noreferrer">
            <img 
              src="assets/vodu.png"
              alt="VodU"
              style={{
                overflow: 'hidden',
                width: '100%',
                height: '75%'
            }}/>
          </a>
        </div>
      </Container>
      
      {/* Right container for grouping items in the Portfolio component */}
      <Container
        style={{
          height: '50%',
          display: 'flex',
          flexWrap: 'wrap',
          textAlign: 'center'
      }}>
          
        <div style={{flex: '1', height: '100%'}}>
          <Button href="https://github.com/Andydchoo/Retro-Game-Market" target="_blank" rel="noreferrer">
            <h3 
              style={{
                display: 'flex',
                color: '#274c77',
                textDecoration: 'none',
                fontSize: '30px'
            }}>
              RGMarket
            </h3>
          </Button>
          <a href="https://retro-game-market.herokuapp.com/" target="_blank" rel="noreferrer">
            <img
              src="assets/rgmarket.png"
              alt="RGMarket"
              style={{
                  overflow: 'hidden',
                  width: '100%',
                  height: '75%',
            }}/>
          </a>
        </div>

          <div style={{flex: '1', height: '100%'}}>
            <Button href="https://github.com/Andydchoo/Note-Taker" target="_blank" rel="noreferrer">
              <h3 
                style={{
                  display: 'flex',
                  color: '#274c77',
                  textDecoration: 'none',
                  fontSize: '30px'
              }}>
                Note Taker
              </h3>
            </Button>
            <a href="https://notetakinghw.herokuapp.com/notes" target="_blank" rel="noreferrer">
              <img
                src="assets/notetaker.png"
                alt="Note Taker"
                style={{
                  overflow: 'hidden',
                  width: '100%',
                  height: '75%',
              }}/>
            </a>
          </div>
      </Container> 
    </div>
  )
}

//Make mobile version fill all the space in the container. Each image of apps take up 1/4th of container.
export function PortfolioMobile() {
  return(
    <div  className="portfolio" id="portfolio" style={{ backgroundColor: '#c2c5aa'}}>
    {/* Left container for keeping items grouped in component */}
      <Container
        style={{
          height: '50%',
          display: 'flex',
          flexWrap: 'wrap',
          textAlign: 'center'
      }}>

        <div style={{flex: '1', height: '100%'}}>
          <Button href="https://github.com/Copernichris/CryptoWatch" target="_blank" rel="noreferrer">
            <h3 
              style={{
                display: 'flex',
                color: '#274c77',
                textDecoration: 'none',
                fontSize: '30px',
            }}>
              Crypto
            </h3>
          </Button>
          <a href="https://copernichris.github.io/CryptoWatch/" target="_blank" rel="noreferrer">
            <img
              src="assets/cryptowatch.png"
              alt="CryptoWatch"
              style={{
                overflow: 'hidden',
                width: '100%',
                height: '75%'
            }}/>
          </a>
        </div>

        <div style={{flex: '1', height: '100%'}}>
          <Button href="https://github.com/Copernichris/Vodu" target="_blank" rel="noreferrer">
            <h3 
              style={{
                display: 'flex',
                color: '#274c77',
                textDecoration: 'none',
                fontSize: '30px'
            }}>
              VodU
            </h3>
          </Button>
          <a href="https://vodu2.herokuapp.com/" target="_blank" rel="noreferrer">
            <img 
              src="assets/vodu.png"
              alt="VodU"
              style={{
                overflow: 'hidden',
                width: '100%',
                height: '75%'
            }}/>
          </a>
        </div>
      </Container>
      
      {/* Right container for grouping items in the Portfolio component */}
      <Container
        style={{
          height: '50%',
          display: 'flex',
          flexWrap: 'wrap',
          textAlign: 'center'
      }}>
          
        <div style={{flex: '1', height: '100%'}}>
          <Button href="https://github.com/Andydchoo/Retro-Game-Market" target="_blank" rel="noreferrer">
            <h3 
              style={{
                display: 'flex',
                color: '#274c77',
                textDecoration: 'none',
                fontSize: '30px'
            }}>
              RGMarket
            </h3>
          </Button>
          <a href="https://retro-game-market.herokuapp.com/" target="_blank" rel="noreferrer">
            <img
              src="assets/rgmarket.png"
              alt="RGMarket"
              style={{
                  overflow: 'hidden',
                  width: '100%',
                  height: '75%',
            }}/>
          </a>
        </div>

          <div style={{flex: '1', height: '100%'}}>
            <Button href="https://github.com/Andydchoo/Note-Taker" target="_blank" rel="noreferrer">
              <h3 
                style={{
                  display: 'flex',
                  color: '#274c77',
                  textDecoration: 'none',
                  fontSize: '30px'
              }}>
                Notes
              </h3>
            </Button>
            <a href="https://notetakinghw.herokuapp.com/notes" target="_blank" rel="noreferrer">
              <img
                src="assets/notetaker.png"
                alt="Note Taker"
                style={{
                  overflow: 'hidden',
                  width: '100%',
                  height: '75%',
              }}/>
            </a>
          </div>
      </Container> 
    </div>
  )
}