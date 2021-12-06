// Adding icons for footer for github and linkedin
import './footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button } from '@mui/material';

export default function Footer() {
    return (
        <div className="footer" id="footer">
            <Button size='large' className='git' href='https://github.com/Andydchoo' target="_blank" alt='Github'>
                <GitHubIcon />
            </Button>
            <Button size='large' className='link' href='https://www.linkedin.com/in/andychoo' target="_blank" alt='LinkedIn'>
                <LinkedInIcon />
            </Button>
            {/* <a className="git" href="https://github.com/Andydchoo">Github</a>
            <a className="link" href="https://www.linkedin.com/in/andychoo">LinkedIn</a> */}
        </div>
    )
}