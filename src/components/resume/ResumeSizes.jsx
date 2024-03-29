//Align and style pdf to be more aesthetic
//fix design of left side
import Stack from '@mui/material/Stack';
import DescriptionIcon from '@mui/icons-material/Description';
import { Button } from '@mui/material';

export function ResumeDesktop() {
  return (
    <div
      id='resume'
      style={{
        backgroundColor: '#e7ecef',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
    }}>
    {/* Dividing component into two halves to make more use of space */}
        <Button style={{display: 'flex', flex: '1',}}>
        <h1 
            className="resumeH1"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '6vw',
              overflow: 'hidden',
              color: '#404EED'
        }}>
            <a 
              href="https://docs.google.com/document/d/1nLiP4xkcmvnuA8g9GN72zhD537m8yjlW0qt6zR9ELRY/edit?usp=sharing" 
              target="_blank"
              style={{
              color: '#274c77',
              textDecoration: 'none'
            }}>
              Resume
            </a>
        </h1>
      </Button>
      <Button 
        className="resumePNG"
        href="https://docs.google.com/document/d/1nLiP4xkcmvnuA8g9GN72zhD537m8yjlW0qt6zR9ELRY/edit?usp=sharing"
        target="_blank"
        style={{
          display: 'flex',
          flex: '1',
          justifyContent: 'center',
      }}>
        <img 
          src="assets/resume.png" 
          alt="resume"
        />
      </Button>
    </div>
  )
}

export function ResumeMobile() {
  return (
    <div
        id='resume'
        style={{
          display: 'flex',
          backgroundColor: '#e7ecef',
          height: '100%',
          justifyContent: 'center',
          flexDirection: 'column',
          margin: 'none',
          padding: 'none'
    }}>
      <Button>
        <h1 
            className="resumeH1"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '6vw',
              overflow: 'hidden',
              color: '#404EED'
        }}>
            <a 
              href="https://docs.google.com/document/d/1nLiP4xkcmvnuA8g9GN72zhD537m8yjlW0qt6zR9ELRY/edit?usp=sharing" 
              target="_blank"
              style={{
              color: '#274c77',
              textDecoration: 'none',
              alignItems: 'center',
            }}>
              Resume
            </a>
        </h1>
      </Button>
      <Button 
        className="resumePNG"
        href="https://docs.google.com/document/d/1nLiP4xkcmvnuA8g9GN72zhD537m8yjlW0qt6zR9ELRY/edit?usp=sharing"
        target="_blank"
      >
        <img 
          src="assets/resume.png" 
          alt="resume"
        />
      </Button>
    </div>
  )
}
