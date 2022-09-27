//Align and style pdf to be more aesthetic
//fix design of left side
import './resume.css'
import Stack from '@mui/material/Stack';
import DescriptionIcon from '@mui/icons-material/Description';

export default function Resume() {
    return (
        <div
            id='resume'
            style={{
                backgroundColor: '#e7ecef',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <h1 
              style={{
                display: 'flex',
                flex: '1',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '6vw',
                overflow: 'hidden',
                color: '#404EED'
              }}
            >
                <a 
                  href="https://docs.google.com/document/d/1WmBt5b2q4WbkGnadHP-Qx6uI7-VqkDmVg1RgikmBp2k/edit?usp=sharing" 
                  target="_blank"
                  style={{
                    color: '#274c77',
                    textDecoration: 'none'
                  }}>
                    Resume
                </a>
            </h1>
            <div
                style={{
                    display: 'flex',
                    flex: '1',
                    justifyContent: 'center',
                    backgroundColor: '#1a3351'
            }}>
                <img src="assets/resume.png" alt="resume"/>
            </div>
        </div>
    )
}
