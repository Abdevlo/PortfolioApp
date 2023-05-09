import { AppBar, Grid, Toolbar, Typography } from '@mui/material';

import logo from "./assets/logo.svg";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';


const navBarButtons = [
    {
        text: 'PORTFOLIO',
        link: 'portfolio',
    },
    {
        text: 'WORK',
        link: 'work',
    },

    {
        text: 'PASSION',
        link: 'passion',
    },
    {
        text: 'CONTACT',
        link: 'contact',
    },
];

function BottomAppBar() {
    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    top: 'auto',
                    top: 0,
                    backgroundColor: 'transparent',
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center',
                }}
                elevation={0}
            >
                <Toolbar
                    sx={{
                        m: 4,
                        backgroundColor: 'transparent',
                        borderRadius: '20px',
                        width: '50vw',
                        justifyContent: 'center',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <img src={logo} alt="logo" width="45px" />
                    {navBarButtons.map((navButton) => (
                        <Link
                            to={navButton.link}
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="navbarButton"
                        >
                            {navButton.text}
                        </Link>

                    ))}
                </Toolbar>
            </AppBar>
            <AppBar position="fixed" sx={{ top: 'auto', p: 2, bottom: 0, backgroundColor: 'transparent', justifyContent: 'center', display: 'flex', alignItems: 'center' }} elevation={0}>
                <Grid item sx={{ m: 3, backgroundColor: '#b471c510', justifyContent: 'center', display: 'flex', 'alignContent': 'center', borderRadius: '20px', margin: '10px', paddingRight: 2, paddingLeft: 2 }}>
                    <a className='sayHiBtn' href='#contact'>Connect with me!</a>
                    <a href="https://www.facebook.com">
                        <FacebookIcon sx={{ p: 1, color: 'grey', transition: '0.2s linear', cursor: 'pointer', '&:hover': { color: 'violet', transform: 'translateY(-2px)' } }} />
                    </a>

                    <a href="https://www.instagram.com">
                        <InstagramIcon sx={{ p: 1, color: 'grey', transition: '0.2s linear', cursor: 'pointer', '&:hover': { color: 'orange', transform: 'translateY(-2px)' } }} />
                    </a>

                    <a href="https://twitter.com/programerhumor?lang=en">
                        <TwitterIcon sx={{ p: 1, color: 'grey', transition: '0.2s linear', cursor: 'pointer', '&:hover': { color: 'cyan', transform: 'translateY(-2px)' } }} />
                    </a>

                    <a href="https://www.reddit.com/r/programming/">
                        <RedditIcon sx={{ p: 1, color: 'grey', transition: '0.2s linear', cursor: 'pointer', '&:hover': { color: 'tomato', transform: 'translateY(-2px)' } }} />
                    </a>

                    <a href="https://lk.linkedin.com/in/abdallah-muath-164242236">
                        <LinkedInIcon sx={{ p: 1, color: 'grey', transition: '0.2s linear', cursor: 'pointer', '&:hover': { color: 'cornflowerblue', transform: 'translateY(-2px)' } }} />
                    </a>

                </Grid>
            </AppBar>
        </>
    );
}

export default BottomAppBar;
