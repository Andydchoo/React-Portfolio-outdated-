import { Button, Container, Typography } from '@mui/material';

export default function Contact() {
    return (
      <Container 
        className="contact" 
        style={{
          display: 'flex',
          alignItems: 'start',
          flexDirection: 'column',
          backgroundColor: '#1a3351'
      }}>
          <h1 style={{ display: 'flex', fontWeight: '600', fontSize: '6vw', color: '#e7ecef'}}>
            Connect: 
          </h1>
          <h2 style={{ display: 'flex', fontWeight: '400', fontSize: '4vw', paddingLeft: '10%', color: '#e7ecef'}}>
            I'd love to talk!
          </h2>
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
              width: '25%',
              marginLeft: '30%',
          }}>
            <Typography 
              variant="button" 
              style={{ 
                fontSize: '2vw', 
                fontWeight: '600'
            }}>
              Contact Me
            </Typography>
          </Button>
            </Container>
    )
}
