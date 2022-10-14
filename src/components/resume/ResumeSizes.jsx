//Align and style pdf to be more aesthetic
//fix design of left side
import Stack from '@mui/material/Stack';
import DescriptionIcon from '@mui/icons-material/Description';

export function ResumeDesktop() {
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
            {/* Dividing component into two halves to make more use of space */}
            <h1 
                className="resumeH1"
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
                    href="https://docs.google.com/document/d/1nLiP4xkcmvnuA8g9GN72zhD537m8yjlW0qt6zR9ELRY/edit?usp=sharing" 
                    target="_blank"
                    style={{
                    color: '#274c77',
                    textDecoration: 'none'
                    }}>
                    Resume
                </a>
            </h1>
            <div 
                className="resumePNG"
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

export function ResumeMobile() {
    return(
        <div>
            Mobile viewing in works
        </div>
    )
}
