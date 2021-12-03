import { Button } from '@mui/material';

// working on mobile friendly view.
// Need to fix buttons not fitting on mobile
export default function Navbar() {
    return (
        <div className="navbar" style={{
            backgroundColor: '#2C2F33',
            width: '100%',
            height: '65px',
            position: 'fixed',
            top: '0',
            zIndex: '2'
        }}>
            <div className="wrapper" style={{
                padding: '0.5% 2%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <div className="left-container"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: 'inherit',
                        flex: '1'
                    }}>

                    <a href="#intro" className="name"
                        style={{
                            color: '#5865F2',
                            fontSize: '40px',
                            fontWeight: '600',
                            display: 'flex',
                            textDecoration: 'none',
                        }}>
                            Andy Choo
                    </a>

                </div>
                <div className="right-container" 
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flex: '1'
                    }}
                >
                    


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

                </div>
            </div>
        </div>
    )
}
