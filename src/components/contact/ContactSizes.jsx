import { Button, Container, Typography } from '@mui/material';

export function ContactDesktop() {
    return (
      <Container 
        id="contact" 
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexDirection: 'column',
          backgroundColor: '#1a3351',
          height: '70vh'
      }}>
          <Typography 
            variant="h1" 
            style={{ 
              display: 'flex', 
              justifyContent: 'center',
              fontWeight: '600', 
              fontSize: '6vw', 
              color: '#e7ecef',
              scroll: 'none',
              overflow: 'hidden'
          }}>
            Contact
          </Typography>
          <Typography 
            variant="h2" 
            style={{ 
              display: 'flex', 
              justifyContent: 'left',
              flexDirection: 'column',
              fontWeight: '500', 
              fontSize: '4vw', 
              color: '#e7ecef',
          }}>
            My email is always open for:
            <Container style={{ paddingLeft: '5vw'}}>
              <br></br>
              -project ideas
              <br></br>
              -improvements
              <br></br>
              -job opportunites
            </Container>
          </Typography>
          <Container style={{ display: 'flex', justifyContent: 'center' }}>
            <Button 
              variant="contained"
              size="large"
              target="_top"
              rel="noopener noreferrer"
              href={`mailto:andydchoo@gmail.com`} 
              style={{ 
                display: 'flex', 
                alignItems: 'center',
                backgroundColor: '#6096ba',
                borderRadius: '20px',
                margin: '20px',
                width: '20vw',
            }}>
              <Typography 
                variant="button" 
                style={{ 
                  fontSize: '2vw', 
                  fontWeight: '600'
              }}>
                Contact
              </Typography>
            </Button>
          </Container>
            </Container>
    )
}
//Trying to align button to center
export function ContactMobile() {
  return (
    <Container 
      id="contact" 
      style={{
        display: 'flex',
        height: '50vh',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        backgroundColor: '#1a3351',
        
        margin: '0'
    }}>
        <Typography 
          variant="h1" 
          style={{ 
            display: 'flex',
            justifyContent: 'center',
            fontWeight: '600', 
            fontSize: '6vw', 
            padding: '10px',
            color: '#e7ecef',
            scroll: 'none'
        }}>
          Connect with me
        </Typography>
        <Typography 
          variant="h2" 
          style={{ 
            display: 'flex', 
            justifyContent: 'left',
            flexDirection: 'column',
            fontWeight: '500', 
            fontSize: '4vw', 
            color: '#e7ecef',
        }}>
          My email is always open for
          <Container style={{ paddingLeft: '5vw' }}>
            <br></br>
            -project ideas
            <br></br>
            -improvements
            <br></br>
            -job opportunites
          </Container>
        </Typography>
        <Container style={{ display: 'flex', justifyContent: 'center' }}>
          <Button 
            variant="contained"
            size="large"
            target="_top"
            rel="noopener noreferrer"
            href={`mailto:andydchoo@gmail.com`} 
            style={{ 
              display: 'flex', 
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#6096ba',
              borderRadius: '20px',
              width: '30vw',
              height: '5vh',
          }}>
            <Typography 
              variant="h2" 
              style={{ 
                fontSize: '3vw', 
                fontWeight: '600',
                
            }}>
              Contact
            </Typography>
          </Button>
        </Container>
          </Container>
  )
}