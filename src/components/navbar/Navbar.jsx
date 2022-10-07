import { Button, Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CodeIcon from '@mui/icons-material/Code';
import DescriptionIcon from '@mui/icons-material/Description';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

// add hover effect to buttons
// find better colors for text
// why does it look so boring and wrong?

export default function Navbar() {
    const matches = useMediaQuery('(min-width:600px)');

    return (
        <div className="navbar" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1a3351',
            width: '100%',
            position: 'fixed',
            height: '65px',
            top: '0',
            zIndex: '2',
            scroll: 'sticky',
            overflow: 'hidden',
        }}>
            {/* <Grid container style={{
                display: 'flex',
                justifyContent: 'center',
            }}> */}
                {/* <Grid item xs={6}>
                        <a href="#intro" className="name"
                            style={{
                                color: '#fefae0',
                                fontSize: '50px',
                                fontWeight: '600',
                                textDecoration: 'none',
                                paddingLeft: '10px',
                            }}>
                                Andy Choo
                        </a>
                </Grid> */}
                <Grid container alignItems="center" justifyContent='space-between' item xs={12} spacing={1}>   
                    <Grid item>
                      <Button
                          className="btn"
                          href="#intro"
                          variant='contained'
                          size='small'
                          style={{
                              backgroundColor: '#7d8597',
                              alignItems: 'center',
                              color: '#e7ecef',
                              fontWeight: '600',
                              fontSize: '1.5vw',
                              border: '2px solid #e7ecef',
                              borderRadius: '10px',
                              boxShadow: 'none',
                              
                          }}>
                              <AccountBoxIcon />
                              Andy Choo
                      </Button>
                    </Grid>

                    {/* Trying to make a dividing line */}

                    {/* <Grid item>
                        <a style={{
                            borderLeft: '5px solid #582f0e',
                            height: '100%',
                            left: '50%',
                            marginLeft: '-3px',
                            top: '0'
                        }}>
                        </a>
                    </Grid> */}
                    
                    <Grid item>
                      <Button
                          className="btn"
                          href="#portfolio"
                          variant='contained'
                          size='small'
                          style={{
                              backgroundColor: '#7d8597',
                              color: '#e7ecef',
                              alignItems: 'center',
                              fontWeight: '600',
                              fontSize: '1.5vw',
                              border: '2px solid #e7ecef',
                              borderRadius: '10px',
                              boxShadow: 'none',
                          }}
                      >
                        <CodeIcon />
                        Portfolio
                    </Button>
                    </Grid>
                    
                    <Grid item>
                        <Button
                            className="btn"
                            href="#resume"
                            variant='contained'
                            size='small'
                            style={{
                                backgroundColor: '#7d8597',
                                color: '#e7ecef',
                                alignItems: 'center',
                                fontWeight: '600',
                                fontSize: '1.5vw',
                                border: '2px solid #e7ecef',
                                borderRadius: '10px',
                                boxShadow: 'none',
                            }}
                        >
                            <DescriptionIcon />
                            Resume
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            className="btn"
                            href='https://github.com/Andydchoo'
                            target="_blank"
                            alt='GitHub'
                            size='small'
                            style={{
                                color: '#e7ecef',
                                alignItems: 'center',
                                fontWeight: '600',
                                fontSize: '1.5vw',
                            }}
                        >
                            <GitHubIcon />
                        </Button>

                        <Button
                            className="btn"
                            href='https://www.linkedin.com/in/andychoo'
                            target="_blank"
                            alt='LinkedIn'
                            size='small'
                            style={{
                                color: '#e7ecef',
                                alignItems: 'center',
                                fontWeight: '600',
                                fontSize: '1.5vw',
                            }}
                        >
                            <LinkedInIcon />
                        </Button>
                    </Grid>
                </Grid>
            
        </div>
    )
}
