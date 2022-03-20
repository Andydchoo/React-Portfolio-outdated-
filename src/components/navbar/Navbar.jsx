import { Button, Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

// working on mobile friendly view.
// Find way to move buttons into hamburger when viewing on mobile
//useMediaQuery for adjusting styling in mobile view
export default function Navbar() {
    const matches = useMediaQuery('(min-width:600px)');

    return (
        <div className="navbar" style={{
            backgroundColor: '#2C2F33',
            width: '100%',
            position: 'fixed',
            height: '65px',
            top: '0',
            zIndex: '2',
            scroll: 'sticky',
            display: 'flex'
        }}>
            <Grid container>
                <Grid item xs={6}>
                        <a href="#intro" className="name"
                            style={{
                                color: '#5865F2',
                                fontSize: '50px',
                                fontWeight: '600',
                                textDecoration: 'none',
                                paddingLeft: '10px'
                            }}>
                                Andy Choo
                        </a>
                </Grid>
                <Grid container alignItems="center" justifyContent="center" item xs={6} spacing={1}>
                    <Grid item>
                      <Button
                          href="#intro"
                          variant='contained'
                          size='small'
                          style={{
                              backgroundColor: '#5865F2',
                              color: '#2C2F33',
                              fontWeight: '600',
                              fontSize: '1.5vw'
                          }}>
                              Introduction
                      </Button>
                    </Grid>
                    
                    <Grid item>
                      <Button
                          href="#portfolio"
                          variant='contained'
                          size='small'
                          style={{
                              backgroundColor: '#57F287',
                              color: '#2C2F33',
                              fontWeight: '600',
                              fontSize: '1.5vw'
                          }}
                      >
                        Portfolio
                    </Button>
                    </Grid>
                    
                    <Grid item>
                        <Button
                            href="#resume"
                            variant='contained'
                            size='small'
                            style={{
                                backgroundColor: '#CCFF66',
                                color: '#2C2F33',
                                fontWeight: '600',
                                fontSize: '1.5vw'
                            }}
                        >
                            Resume
                        </Button>
                    </Grid>
                    
                    <Grid item>
                        <Button
                            href="#contact"
                            variant='contained'
                            size='small'
                            style={{
                                backgroundColor: '#FF6666',
                                color: '#2C2F33',
                                fontWeight: '600',
                                fontSize: '1.5vw'
                            }}
                        >
                            Contact
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            
        </div>
    )
}
