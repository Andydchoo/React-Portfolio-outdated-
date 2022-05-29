//Align and style pdf to be more aesthetic
//fix design of left side
import './resume.css'
import Stack from '@mui/material/Stack';

export default function Resume() {
    return (
        <div
            id='resume'
            style={{
                backgroundColor: '#99AAB5',
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
                padding: '10px',
                color: '#404EED'
              }}
            >
                <a 
                  href="https://docs.google.com/document/d/1WmBt5b2q4WbkGnadHP-Qx6uI7-VqkDmVg1RgikmBp2k/edit?usp=sharing" 
                  target="_blank"
                  style={{
                      textDecoration: 'underline'
                  }}
                >
                    Resume
                </a>
            </h1>
            <div
                style={{
                    display: 'flex',
                    flex: '1',
                    justifyContent: 'center',
                    backgroundColor: '#333333'
            }}>
                <img src="assets/resume.png" alt="resume"/>
            </div>
        </div>
    )
}
