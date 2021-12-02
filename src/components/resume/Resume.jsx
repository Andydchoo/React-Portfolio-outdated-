import './resume.css'
import Stack from '@mui/material/Stack';

export default function Resume() {
    return (
        <div
            id='resume'
            style={{
                backgroundColor: '#CCFF66',
                height: 'calc(100vh - 65px)',
                overflow: 'hidden'
            }}
        >
            <h1 style={{
                display: 'flex',
                justifyContent: 'center',
                fontSize: '6vw',
                overflow: 'hidden',
                paddingTop: '0px'
                }}
            >
                Resume
            </h1>
            <a
                href="https://docs.google.com/document/d/1WmBt5b2q4WbkGnadHP-Qx6uI7-VqkDmVg1RgikmBp2k/edit?usp=sharing"
                target="_blank"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    height: '75vh',
                    paddingRight: '5px',
                    paddingLeft: '5px'
                    }}
                >
                <img
                    src="assets/resume.png"
                    alt="Resume"
                />
            </a>
        </div>
    )
}
