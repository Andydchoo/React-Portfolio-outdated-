import { styled } from "@mui/material/styles";
import { Button, Grid, Container, AppBar, Box, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';

export function IntroDesktop() {
  return (
    <Container 
      id="intro"
      disableGutters
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#e7ecef',
        height: 'auto',
    }}>
      {/* Left container for personal photo */}
      <Container 
        className="left-container"
        disableGutters
        style={{
          display: 'flex',
          flex: '1',
          overflow: 'hidden',
      }}>
        <Container 
          className="imgContainer" 
          disableGutters
          style= {{
            display: 'flex',
            overflow: 'hidden',
            background: '#23272A',
        }}>
          <img 
            className="img" 
            src="assets/selfie-ny.jpeg" 
            alt="Andy Choo"
            style={{
              height: 'auto'
          }}/>
        </Container>
      </Container>

      {/* Right container for brief introduction */}
      <Container 
        className="right-container" 
        disableGutters
        style={{
          display: 'flex',
          flex: '1',
          backgroundColor: '#e7ecef',
          postion: 'relative',
          overflow: 'hidden',
          height: '100%',
      }}>
        <Container
          disableGutters 
          style={{
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            height: '100%',
        }}>
          <Typography
            variant="h1" 
            style={{
              display: 'flex',
              fontSize: '6vw',
              fontWeight: '500',
              color: '#274c77',
              overflow: 'hidden',
              marginLeft: '5%'
          }}>
              Hello!
          </Typography>

          <Typography
            variant="h1" 
            style={{
              fontSize: '4vw',
              fontWeight: '200',
              color: '#6096ba',
              overflow: 'hidden',
              marginLeft: '15%'
          }}>
              I am,
          </Typography>

          <Typography style={{
              display: 'flex',
              justifyContent: 'center',
              fontSize: '6vw',
              fontWeight: '600',
              color: '#274c77',
              overflow: 'hidden',
              
          }}>
              Andy Choo
          </Typography>

          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              fontSize: '2vw', 
              color: '#979dac', 
              fontWeight: '200', 
              justifyContent: 'center'
          }}>
            <h3>- Full-Stack Web Developer</h3>
            <h3>- Korean-American</h3>
            <h3>- Crypto Enthusiast</h3>
            <h3>- Keyboard hobbyist</h3>
          </div>
        </Container>
      </Container>
    </Container>
  )
}

export function IntroMobile() {
  return (
    <Container 
      id="intro"
      disableGutters
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#e7ecef',
        height: 'auto',
    }}>
      {/* Left container for personal photo */}
      <Container 
        className="left-container"
        disableGutters
        style={{
          display: 'flex',
          flex: '1',
          overflow: 'hidden',
      }}>
        <Container 
          className="imgContainer" 
          disableGutters
          style= {{
            display: 'flex',
            overflow: 'hidden',
            background: '#23272A',
        }}>
          <img 
            className="img" 
            src="assets/selfie-ny.jpeg" 
            alt="Andy Choo"
            style={{
              height: 'auto'
          }}/>
        </Container>
      </Container>

      {/* Right container for brief introduction */}
      <Container 
        className="right-container" 
        disableGutters
        style={{
          display: 'flex',
          flex: '1',
          backgroundColor: '#e7ecef',
          postion: 'relative',
          overflow: 'hidden',
          height: '100%',
      }}>
        <Container
          disableGutters 
          className="wrapper" 
          style={{
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
        }}>
          <Typography
            variant="h1" 
            style={{
              display: 'flex',
              fontSize: '6vw',
              fontWeight: '500',
              color: '#274c77',
              scroll: 'none',
              marginLeft: '5%'
          }}>
              Hello!
          </Typography>

          <Typography
            variant="h1" 
            style={{
              fontSize: '4vw',
              fontWeight: '200',
              color: '#6096ba',
              overflow: 'hidden',
              marginLeft: '15%'
          }}>
              I am,
          </Typography>

          <Typography style={{
              display: 'flex',
              justifyContent: 'center',
              fontSize: '6vw',
              fontWeight: '600',
              color: '#274c77',
              overflow: 'hidden',
              
          }}>
              Andy Choo
          </Typography>

          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              fontSize: '2vw', 
              color: '#979dac', 
              fontWeight: '200', 
              justifyContent: 'center'
          }}>
            <h3>- Full-Stack Web Developer</h3>
            <h3>- Korean-American</h3>
            <h3>- Crypto Enthusiast</h3>
            <h3>- Keyboard hobbyist</h3>
          </div>
        </Container>
      </Container>
    </Container>
  )
}