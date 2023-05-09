import { Box, Container, Grid, Typography, Chip, Stack, Button } from '@mui/material';
import { useRef, useEffect } from 'react';
import './App.css';
import overlay from './assets/overlay.svg';
import blob from './assets/blob.svg';
import blob2 from './assets/blob2.svg';
import blob3 from './assets/blob3.svg';
import line from './assets/line.svg';
import avatar from './assets/avatar.svg';
import cuboLogo from './assets/cubo.svg';
import BottomAppBar from './BottomAppBar';
import Avatar from '@mui/material/Avatar';

// icons
import NorthEastIcon from '@mui/icons-material/NorthEast';
import SouthWestIcon from '@mui/icons-material/SouthWest';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TerminalIcon from '@mui/icons-material/Terminal';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SliderLang from './SliderLang';

const headerInfo = 'hi! Im Abdallah Muath! im a tech enthusiast based in Srilanka';
const headerButtons = ['Graphic Designer', 'UI/UX Engineer', 'ReactJS Developer', '.NET Developer']
const designInfo = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';


function App() {
  // const grids = useRef([]);

  // useEffect(() => {
  //   const gridElements = document.querySelectorAll(".highlighOnScroll");
  //   grids.current = Array.from(gridElements);
  //   const highlighOnScroll = () => {
  //     const middleIndex = Math.floor(grids.current.length / 1);
  //     const windowHeight = window.innerHeight;
  //     grids.current.forEach((grid, index) => {
  //       const gridTop = grid.getBoundingClientRect().top;
  //       const gridBottom = grid.getBoundingClientRect().bottom;
  //       const isMiddle = index === middleIndex;
  //       const shouldHighlight = !isMiddle && gridTop < windowHeight / 2 && gridBottom > windowHeight / 2;
  //       if (shouldHighlight) {
  //         grid.classList.add('highlighted');
  //       } else {
  //         grid.classList.remove('highlighted');
  //       }
  //     });
  //   }
  //   window.addEventListener('scroll', highlighOnScroll);
  //   return () => {
  //     window.removeEventListener('scroll', highlighOnScroll);
  //   }
  // }, []);

  const highlightRef1 = useRef(null);
  const highlightRef2 = useRef(null);
  const highlightRef3 = useRef(null);
  const highlightRef4 = useRef(null);

  useEffect(() => {
    const handleScroll1 = () => {
      if (highlightRef1.current) {
        const highlightOffset = highlightRef1.current.offsetTop + 250;
        const scrollPosition = window.pageYOffset + window.innerHeight;
        if (scrollPosition > highlightOffset) {
          setTimeout(() => {
            highlightRef1.current.classList.add('fade-in');
          }, 300);
        } else {
          highlightRef1.current.classList.remove('fade-in');
        }
      }
    };

    const handleScroll2 = () => {
      if (highlightRef2.current) {
        const highlightOffset = highlightRef2.current.offsetTop + 250;
        const scrollPosition = window.pageYOffset + window.innerHeight;
        if (scrollPosition > highlightOffset) {
          setTimeout(() => {
            highlightRef2.current.classList.add('fade-in');
          }, 300);
        } else {
          highlightRef2.current.classList.remove('fade-in');
        }
      }
    };

    const handleScroll3 = () => {
      if (highlightRef3.current) {
        const highlightOffset = highlightRef3.current.offsetTop + 250;
        const scrollPosition = window.pageYOffset + window.innerHeight;
        if (scrollPosition > highlightOffset) {
          setTimeout(() => {
            highlightRef3.current.classList.add('fade-in');
          }, 300);
        } else {
          highlightRef3.current.classList.remove('fade-in');
        }
      }
    };

    const handleScroll4 = () => {
      if (highlightRef4.current) {
        const highlightOffset = highlightRef4.current.offsetTop + 250;
        const scrollPosition = window.pageYOffset + window.innerHeight;
        if (scrollPosition > highlightOffset) {
          setTimeout(() => {
            highlightRef4.current.classList.add('zoom-in');
          }, 100);
        } else {
          highlightRef4.current.classList.remove('zoom-in');
        }
      }
    };

    window.addEventListener('scroll', handleScroll1);
    window.addEventListener('scroll', handleScroll2);
    window.addEventListener('scroll', handleScroll3);
    window.addEventListener('scroll', handleScroll4);

    return () => window.removeEventListener('scroll', handleScroll1);
    return () => window.removeEventListener('scroll', handleScroll2);
    return () => window.removeEventListener('scroll', handleScroll3);
    return () => window.removeEventListener('scroll', handleScroll4);


  }, []);



  return (
    <>
      <Grid className='body' container sx={{ p: 7 }}>
        <div class="logoOverlay">
          <img src={overlay} alt="Overlay Image" class="overlay" />
          <img src={blob} alt="Blob Image" class="blob" />
          <img src={blob2} alt="Blob Image" class="blob2" />
          <img src={blob3} alt="Blob Image" class="blob3" />
        </div>

        <div className='content'>
          <BottomAppBar />
          <img src={line} alt="Blob Image" class="line" />
          <Container>
            <Grid xs={12} sx={{ m: 2, paddingTop: 9, height: '80vh', textAlign: 'left' }}>
              <Chip
                avatar={<Avatar alt="User" src={avatar} />}
                label="Abdallah Muath"
                variant="outlined"
                sx={{ color: 'white', border: 'NONE', backgroundColor: '#1f0233a2' }}
              />
              <Typography xs={6} sx={{ color: '#ffffffbe', fontSize: '50px', fontFamily: 'Unbounded, cursive !important' }}>
                I'm <span className='nameHeader'>Abdallah Muath!</span> Graphic Designer and Full Stack Developer
              </Typography>
              <Typography sx={{ color: 'grey', fontSize: '30px' }}>
                I'm a <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Tech Enthusiast</span> and <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Creative</span> based in Colombo, Sri Lanka working as an Associate <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>.NET Developer</span>.
              </Typography>
              <Box sx={{ paddingLeft: 3, paddingTop: 4, paddingBottom: 1 }}>
                <Typography sx={{ color: 'grey', textTransform: 'uppercase' }}>#Interests</Typography>
                {headerButtons.map((headerButton) => (
                  <button className='headerBtn'>{headerButton}</button>
                ))}
              </Box>
            </Grid>
          </Container>
          <Container id='portfolio'>
            <Grid ref={highlightRef1} className='highlighOnScroll' xs={12} sx={{ m: 3, p: 6, borderRadius: '25px', color: 'white' }}>
              <EmojiEventsIcon sx={{ backgroundColor: '#1f0233', p: 1, borderRadius: '50%', position: 'absolute', left: -40, boxShadow: '0 0 10px #de63fd4d, 0 0 20px #ed40f317, 0 0 30px #a500e61f, 0 0 40px #8a00e61a' }} />
              <Box>
                <Chip
                  avatar={<Avatar alt="User" src={avatar} />}
                  label="Portfolio"
                  variant="outlined"
                  sx={{ color: 'white', border: 'NONE', backgroundColor: '#1f0233a2' }}
                />
                <Typography sx={{ fontSize: '40px', fontFamily: 'Unbounded, cursive !important' }}><SouthWestIcon sx={{ fontSize: '60px' }} />EXPERIENCE</Typography>
                {/* <hr style={{borderTop: 'dotted 1px', color:'grey'}} />                */}
                <Grid xs={8}>
                  <Typography sx={{ fontSize: '18px', color: 'grey' }}>
                    Hey there, I've dabbled in a bunch of different areas like <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Design, UI/UX, Enterprise Solutions, Mobile App Developement,</span> and a whole lot more! I've got a diverse skill set and love taking on new challenges. Check out some of my <span style={{ textDecoration: 'underline', cursor: 'pointer', fontWeight: 'bold' }}>Career highlights!</span>
                  </Typography>
                </Grid>
              </Box>
              <Container xs={12} sx={{ marginTop: '5px' }}>
                <SliderLang/>
              </Container>
            </Grid>
          </Container>
          <Container id='work'>
            <Grid ref={highlightRef2} className='highlighOnScroll' xs={12} sx={{ m: 3, p: 6, color: 'white' }}>
              <TerminalIcon sx={{ backgroundColor: '#1f0233', p: 1, borderRadius: '50%', position: 'absolute', left: -40, boxShadow: '0 0 10px #de63fd4d, 0 0 20px #ed40f317, 0 0 30px #a500e61f, 0 0 40px #8a00e61a' }} />
              <Box>
                <Chip
                  avatar={<Avatar alt="User" src={avatar} />}
                  label="Work"
                  variant="outlined"
                  sx={{ color: 'white', border: 'NONE', backgroundColor: '#1f0233a2' }}
                />
                <Typography sx={{ fontSize: '40px', fontFamily: 'Unbounded, cursive !important' }}><NorthEastIcon sx={{ fontSize: '60px' }} />CURRENT ROLE</Typography>
                <Grid xs={8}>
                  <Typography sx={{ fontSize: '18px', color: 'grey' }}>
                    For the last 2 years, I've been working full-time at <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Cubo Technologies</span>, doing a bit of everything from <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>marketing to human resource management to graphic design.</span> And now, I've started delving into the world of <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>full-stack development using ReactJS and .NET Core </span>  and <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>mobile-app developement with Flutter.</span>
                  </Typography>
                </Grid>
              </Box>
              <Box sx={{ marginTop: 3, display: 'flex',  overflow: 'hidden', borderRadius:'20px' }} >
                <Grid xs={7} className='prt_col prt_work'>
                </Grid>
                <Grid xs={5} sx={{ backgroundColor: '#0000004d', p: 4 }}>
                  <img src={cuboLogo} alt='' width='50px' />
                  <Typography sx={{ fontSize: '20px',  transition: '0.3s linear', fontFamily: 'Unbounded, cursive !important', '&:hover': { color: 'orange' } }}>
                    Associate .NET Full Stack Developer
                  </Typography>
                  <Typography sx={{ fontSize: '16px', color: 'grey', justifyContent: 'justify' }}>
                    Cubo Systems delivers comprehensive and innovative IT solutions to a diverse range of businesses across the globe.
                  </Typography>
                  <hr style={{ borderTop: 'dotted 1px', color: 'grey', }}></hr>
                  <Box sx={{ paddingTop: '7px', bottom: 0 }}>
                    <a class='link' style={{ textTransform: 'uppercase', fontFamily: 'Unbounded, cursive !important', fontSize:'13px' }} href='https://www.cubosystems.com'>Discover More</a>
                  </Box>
                </Grid>
              </Box>
              
            </Grid>
          </Container>
          <Container id='passion'>
            <Grid ref={highlightRef3} className='highlighOnScroll' xs={12} sx={{ m: 3, p: 6, borderRadius: '25px', color: 'white' }}>
              <SportsEsportsIcon sx={{ backgroundColor: '#1f0233', p: 1, borderRadius: '50%', position: 'absolute', left: -40, boxShadow: '0 0 10px #de63fd4d, 0 0 20px #ed40f317, 0 0 30px #a500e61f, 0 0 40px #8a00e61a' }} />
              <Box>
                <Chip
                  avatar={<Avatar alt="User" src={avatar} />}
                  label="Passion"
                  variant="outlined"
                  sx={{ color: 'white', border: 'NONE', backgroundColor: '#1f0233a2' }}
                />
                <Typography sx={{ fontSize: '40px', fontFamily: 'Unbounded, cursive !important' }}><MultipleStopIcon sx={{ fontSize: '60px' }} />Current Interests</Typography>
                <Grid xs={8}>
                  <Typography sx={{ fontSize: '18px', color: 'grey' }}>
                    I lead a balanced life and enjoy a variety of activities. When I'm not coding, you might find me playing snooker, table tennis, or swimming laps. I'm also a fan of video games – specially Battlefield 1<br></br>

                    Music is a huge part of my life, especially hip-hop and the NBA hold a special place in my heart. There's just something about the fast pace and high energy that I find exhilarating.
                  </Typography>
                </Grid>
              </Box>
              <Grid container xs={12} sx={{ marginTop: 3 }}>
                <Grid item xs={3} className='prt_col prt_design_col_1'>

                </Grid>
                <Grid item xs={3} className='prt_col prt_design_col_1'>

                </Grid>
                <Grid item xs={3} className='prt_col prt_design_col_1'>

                </Grid>
                <Grid item xs={3} className='prt_col prt_design_col_1'>

                </Grid>
              </Grid>
            </Grid>
          </Container>
          <Container id='contact' >
            <Grid ref={highlightRef4} className='zoom-out' xs={12} sx={{ m: 3, p: 6, borderRadius: '25px', color: 'white', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
              <Typography sx={{ fontSize: '30px', color: 'white', fontFamily: 'Unbounded, cursive !important' }}><WavingHandIcon sx={{ fontSize: '40px' }} />Get in touch with me!</Typography>
              Email Me at<a href="mailto:abdallahmuath0@gmail.com" className='abdallahmuath0@gmail.com'>Email Me!</a> or Call Me at <a href="tel:+94726712616">+94 72 671 2616</a>
            </Grid>
          </Container>
        </div>
      </Grid >

    </>
  );
}

export default App;