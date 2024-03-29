import * as React from 'react';
import { Button, Grid, Container, AppBar, Box, Toolbar, Typography, IconButton, Menu, MenuItem} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CodeIcon from '@mui/icons-material/Code';
import DescriptionIcon from '@mui/icons-material/Description';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';

export function NavbarDesktop() {
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
            {/* Using grid to group the items in the navbar */}
            <Grid container justifyContent='space-between' alignItems='center' item xs={12} paddingLeft='20px'>
                <Grid item className="intro">
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
                            fontSize: '2vw',
                            border: '2px solid #e7ecef',
                            borderRadius: '10px',
                            boxShadow: 'none',
                            
                        }}>
                            <AccountBoxIcon />
                            Andy Choo
                    </Button>
                </Grid>
                
                <Grid item className="portfolio">
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
                            fontSize: '2vw',
                            border: '2px solid #e7ecef',
                            borderRadius: '10px',
                            boxShadow: 'none',
                        }}
                    >
                    <CodeIcon />
                    Portfolio
                </Button>
                </Grid>
                
                <Grid item className="resume">
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
                            fontSize: '2vw',
                            border: '2px solid #e7ecef',
                            borderRadius: '10px',
                            boxShadow: 'none',
                        }}
                    >
                        <DescriptionIcon />
                        Resume
                    </Button>
                </Grid>

                <Grid item className="contact">
                    <Button
                        className="btn"
                        href="#contact"
                        variant='contained'
                        size='small'
                        style={{
                            backgroundColor: '#7d8597',
                            color: '#e7ecef',
                            alignItems: 'center',
                            fontWeight: '600',
                            fontSize: '2vw',
                            border: '2px solid #e7ecef',
                            borderRadius: '10px',
                            boxShadow: 'none',
                        }}
                    >
                        <MailIcon />
                        Contact
                    </Button>
                </Grid>

                <Grid item className="icons">
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
//Looking to change background color of menu.
//Make menu go away after clicking on an item
//Align the items and icons in the menu
//Navigation links dont seem to work
export function NavbarMobile() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <Box sx={{ flexGrow: 1}}>
            <AppBar style={{
                backgroundColor: '#1a3351',
                justifyContent: 'center',
                width: '100%',
                position: 'fixed',
                height: '65px',
                top: '0',
                zIndex: '2',
                scroll: 'sticky',
                overflow: 'hidden',
            }}>
                <Toolbar>
                    <IconButton
                        id="menu"
                        aria-controls={open ? 'menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        sx={{ mr: 2 }}
                        onClick={handleClick}
                    >
                        <MenuIcon style={{color: '#7d8597'}}/>
                    </IconButton>
                    <Menu
                        id="menu"
                        aria-labelledby="menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        style={{
                            color: '#6096ba',
                            display: 'flex',
                        }}
                        >
                        <MenuItem onClick={handleClose}> 
                          <Button href="#intro">
                            <AccountBoxIcon />
                            Intro
                          </Button>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Button href="#portfolio">
                            <CodeIcon />
                              Portfolio
                          </Button>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Button href="#resume">
                            <DescriptionIcon />
                            Resume
                          </Button>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Button href="#contact">
                            <MailIcon />
                            Contact
                          </Button>
                        </MenuItem>
                    </Menu>
                    <Typography 
                      variant="h8"
                      sx={{ flexGrow: 1 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: "6vw",
                        fontWeight: "500",
                        component: "div",
                        color: "#e7ecef"
                    }}>
                      Andy Choo
                    </Typography>
                    <Button
                        className="btn"
                        href='https://github.com/Andydchoo'
                        target="_blank"
                        alt='GitHub'
                        size='small'
                        style={{
                            color: '#7d8597',
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
                            color: '#7d8597',
                            alignItems: 'center',
                            fontWeight: '600',
                            fontSize: '1.5vw',
                        }}
                    >
                        <LinkedInIcon />
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}