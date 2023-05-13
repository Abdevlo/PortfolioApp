import { Box, Container, Grid, Typography, Chip, Stack, Button } from '@mui/material';
import { useRef, useEffect, useState } from 'react';
import './App.css';
import overlay from './assets/overlay.svg';
import blob from './assets/blob.svg';
import blob2 from './assets/blob2.svg';
import blob3 from './assets/blob3.svg';
import blob4 from './assets/blob4.svg';

import line from './assets/line.svg';
import avatar from './assets/avatar.svg';
import cuboLogo from './assets/cubo.svg';
import BottomAppBar from './BottomAppBar';
import Avatar from '@mui/material/Avatar';

import { useMediaQuery } from '@mui/material';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
// icons
import NorthEastIcon from '@mui/icons-material/NorthEast';
import SouthWestIcon from '@mui/icons-material/SouthWest';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TerminalIcon from '@mui/icons-material/Terminal';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import DownloadingIcon from '@mui/icons-material/Downloading';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BrushIcon from '@mui/icons-material/Brush';
import WebStoriesIcon from '@mui/icons-material/WebStories';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import AdjustIcon from '@mui/icons-material/Adjust';
import karabot from './assets/karabot.svg'
import karademo from './assets/karabot.png'

import SliderLang from './SliderLang';
import PortfolioItem from './PortfolioItem'

import resume from './assets/resume.pdf'

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
  //   window.addEventListener('scroll', highlighOnScroll);how can 
  //   return () => {
  //     window.removeEventListener('scroll', highlighOnScroll);
  //   }
  // }, []);
  const isLargeScreen = useMediaQuery('(min-width:682px)');
  console.log(window.innerWidth);
  const [scrolledDown, setScrolledDown] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      console.log(`scroll:${window.scrollY}`)

      if (window.scrollY > 400) {
        setScrolledDown(true);
      } else {
        setScrolledDown(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


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
      <Grid className='body' container >
        <img src={overlay} alt="Overlay Image" class="overlay" />
        <img src={blob} alt="Blob Image" class="blob" />
        <img src={blob2} alt="Blob Image" class="blob2" />
        <img src={blob3} alt="Blob Image" class="blob3" />

        <button
          className="scroll-top-button"
          style={{ display: scrolledDown ? 'block' : 'none' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUpwardIcon /> Back to Top
        </button>


        <div className='content'>
          <BottomAppBar />

          <Container sx={{ width: { xs: '90vw', md: '60vw' }, marginTop: { xs: '7vh', md: '10vh' } }}>
            <Box sx={{ paddingTop: 9, height: '80vh', textAlign: 'left' }}>
              <Chip
                avatar={<Avatar alt="User" src={avatar} />}
                label="Abdallah Muath"
                variant="outlined"
                sx={{ color: 'white', border: 'NONE', backgroundColor: '#1f0233a2' }}
              />
              <Typography sx={{ color: '#ffffffbe', fontFamily: 'Unbounded, cursive !important', variant: 'h1', fontSize: { xs: '30px', sm: '40px', md: '50px' } }}>
                I'm <span className='nameHeader'>Abdallah Muath!</span> Graphic Designer and Full Stack Developer
              </Typography>
              <Typography sx={{ color: 'grey', fontSize: { xs: '15px', sm: '20px', md: '30px' } }}>
                I'm a <span style={{ textDecoration: 'underline dotted' }}>Tech Enthusiast</span> and <span >Creative</span> based in Colombo, Sri Lanka working as an Associate <span style={{ textDecoration: 'underline dotted' }}>.NET Developer</span>.
              </Typography>
              <Box sx={{ paddingLeft: 3, paddingTop: 4, paddingBottom: 1 }}>
                <Typography sx={{ color: 'grey', textTransform: 'uppercase' }}>#Interests</Typography>
                {headerButtons.map((headerButton) => (
                  <a href='#portfolio'>
                    <button className='headerBtn' href='portfolio'>{headerButton}</button>
                  </a>
                ))}
              </Box>
            </Box>
          </Container>

          <Container>
            <Grid container>
              <Grid item xs={1} sx={{ borderRight: '1px dotted', borderColor: '#fbfbfb71', paddingRight: '2rem', mb: '20vh', mt: '15vh' }}>
              </Grid>
              <Grid item xs={11}>
                <Grid id='about'>
                  <Grid ref={highlightRef3} className='highlighOnScroll' xs={12} sx={{ m: 3, p: 6, borderRadius: '25px', color: 'white' }}>
                    <QuestionMarkIcon sx={{ backgroundColor: '#1f0233', p: 1, borderRadius: '50%', position: 'absolute', left: -45, boxShadow: '0 0 10px #de63fd4d, 0 0 20px #ed40f317, 0 0 30px #a500e61f, 0 0 40px #8a00e61a' }} />
                    <Box>
                      <Chip
                        avatar={<Avatar alt="User" src={avatar} />}
                        label="Portfolio"
                        variant="outlined"
                        sx={{ color: 'white', border: 'NONE', backgroundColor: '#1f0233a2' }}
                      />
                      <Typography sx={{ fontSize: { xs: '30px', sm: '40px', md: '50px' }, fontFamily: 'Unbounded, cursive !important' }}><AdjustIcon sx={{ fontSize: '35px' }} />ABOUT</Typography>
                      {/* <hr style={{borderTop: 'dotted 1px', color:'grey'}} />                */}
                      <Grid xs={12} md={9}>
                        <Typography sx={{ fontSize: '18px', color: 'grey', textAlign: 'justify' }}>
                        Hey there! I'm Abdallah Muath and im 19. I'm a versatile individual who loves coding and leading an outgoing lifestyle. When not programming, I enjoy snooker, table tennis, and swimming. Video games, especially Battlefield 1, are a passion of mine.

Hip-hop music and the high energy of the NBA inspire me. With experience in Design, UI/UX, Enterprise Solutions, and Mobile App Development, I thrive on new challenges. Check out my career highlights!
                        </Typography>
                      </Grid>
                    </Box>
                    <Grid container spacing={2} sx={{ pt: 4 }}>
                      <PortfolioItem
                        icon={<BrushIcon sx={{ backgroundColor: '#1f0233', p: 1, borderRadius: '50%', boxShadow: '0 0 10px #de63fd4d, 0 0 20px #ed40f317, 0 0 30px #a500e61f, 0 0 40px #8a00e61a' }} />}
                        title="Design"
                        content="As a developer well-versed in Adobe applications, I possess a strong skill set in graphic design and visual aesthetics. I have honed my abilities to create stunning and impactful designs using tools like Adobe Photoshop, Illustrator, and InDesign. Whether it's crafting visually appealing user interfaces or designing captivating marketing materials, my expertise in Adobe applications allows me to bring ideas to life with precision and creativity."
                      />
                      <PortfolioItem
                        icon={<WebStoriesIcon sx={{ backgroundColor: '#1f0233', p: 1, borderRadius: '50%', boxShadow: '0 0 10px #de63fd4d, 0 0 20px #ed40f317, 0 0 30px #a500e61f, 0 0 40px #8a00e61a' }} />}
                        title="WebDev"
                        content="Being an experiencede Web Developer, I have acquired a proficient understanding of various technologies. My expertise extends to HTML, CSS, and JavaScript, which enable me to build responsive and dynamic web pages. With a solid grasp of frameworks like Bootstrap and Foundation, I am able to streamline the development process and create visually cohesive and engaging websites."
                      />
                      <PortfolioItem
                        icon={<AspectRatioIcon sx={{ backgroundColor: '#1f0233', p: 1, borderRadius: '50%', boxShadow: '0 0 10px #de63fd4d, 0 0 20px #ed40f317, 0 0 30px #a500e61f, 0 0 40px #8a00e61a' }} />}
                        title="FrontEnd"
                        content="Frontend development is where I truly excel. Through my experience and expertise, I have become proficient in transforming design concepts into fully functional user interfaces.I am able to craft intuitive and interactive web experiences that prioritize usability and aesthetics. I am well-versed in modern frontend frameworks like React and Angular, enabling me to create scalable and efficient frontend solutions."
                      />
                      <PortfolioItem
                        icon={<BlurOnIcon sx={{ backgroundColor: '#1f0233', p: 1, borderRadius: '50%', boxShadow: '0 0 10px #de63fd4d, 0 0 20px #ed40f317, 0 0 30px #a500e61f, 0 0 40px #8a00e61a' }} />}
                        title="BackEnd"
                        content="In the realm of backend development, I possess strong skills in .NET Core and .NET Framework. With my knowledge of C# and other backend technologies, I can architect and build robust server-side applications that handle data processing, logic implementation, and database management. I am experienced in developing RESTful APIs and integrating them seamlessly with frontend interfaces, ensuring smooth communication and functionality between the client and the server."
                      />
                    </Grid>
                    <SliderLang />
                  </Grid>

                </Grid>
                <Grid id='portfolio'>
                  {/* <img src={line} alt="Blob Image" class="line" /> */}
                  <Grid ref={highlightRef1} className='highlighOnScroll' xs={12} sx={{ m: 3, p: 6, borderRadius: '25px', color: 'white' }}>
                    <EmojiEventsIcon sx={{ backgroundColor: '#1f0233', p: 1, borderRadius: '50%', position: 'absolute', left: -45, boxShadow: '0 0 10px #de63fd4d, 0 0 20px #ed40f317, 0 0 30px #a500e61f, 0 0 40px #8a00e61a' }} />
                    <Box>
                      <Chip
                        avatar={<Avatar alt="User" src={avatar} />}
                        label="Portfolio"
                        variant="outlined"
                        sx={{ color: 'white', border: 'NONE', backgroundColor: '#1f0233a2' }}
                      />
                      <Typography sx={{ fontSize: { xs: '30px', sm: '40px', md: '50px' }, fontFamily: 'Unbounded, cursive !important' }}><SouthWestIcon sx={{ fontSize: '35px' }} />EXPERIENCE</Typography>
                      {/* <hr style={{borderTop: 'dotted 1px', color:'grey'}} />                */}
                      <Grid xs={12} md={9}>
                        <Typography sx={{ fontSize: '18px', color: 'grey', textAlign: 'justify' }}>
                          Having close to 2-1/2 years of experience, I've dabbled in a bunch of different areas like <span style={{ textDecoration: 'underline dotted' }}>Design, UI/UX, Enterprise Solutions, Mobile App Developement,</span> and a whole lot more! I've got a diverse skill set and love taking on new challenges. Check out some of my Career highlights!
                        </Typography>
                      </Grid>
                      <a href={resume} download style={{marginTop:'12px'}}>
                        <button className='downloadBtn'>
                          <DownloadingIcon sx={{ fontSize: '14px' }} /> Download My Resume
                        </button>
                      </a>
                    </Box>
                    <Container sx={{ marginTop: '10vh' }}>
                      <Grid container xs={12}>
                        <Grid xs={12} md={6} sx={{ justifyContent: 'center', display: 'flex', alignContent: 'center', height: '65vh', overflow: 'hidden' }}>
                          <div style={{ position: 'relative', height: '100%', width: '100%' }}>
                            <img src={karademo} alt='kara' height='650px' className='responsive-image' />
                            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '25%', background: 'linear-gradient(transparent, #040016)' }}></div>
                          </div>
                        </Grid>
                        <Grid xs={12} md={6} sx={{ pt: { xs:0 , md:  13}, pl:{ xs:0 , md:7}}}>
                          <img src={karabot} alt='kara' height='50px' />
                          <Typography sx={{ fontSize: '30px', fontFamily: 'Unbounded, cursive !important' }}>KARABOT.AI</Typography>
                          <Typography sx={{ fontSize: '13px', color: 'grey', textAlign: 'justify' }}>
                            Developed using Flutter and Wit.ai's advanced natural language processing capabilities, Karabot is a cutting-edge health assistant that effortlessly helps you find the closest and available doctors in your area and provides personalized medicine recommendations. <br></br>With its intuitive chat-based interface and powerful technologies, Karabot empowers users of all ages to access healthcare services, make informed decisions about their well-being, and experience the future of healthcare conveniently.
                          </Typography>
                          <a href='mailto:abdallahmuath0@gmail.com?subject=Requesting%20For%20Karabot%20Demo&body=My%20name%20is%20%5BEnter%20your%20Name%5D%20and%20Im%20highly%20interested%20in%20Karabot%20Demo.%20Im%20available%20on%20%5BEnter%20Date%5D%20at%20%5BEnter%20Time%5D'>
                            <button className='demoBtn'>Request Demo</button>
                          </a>
                          <a href='https://github.com/Abdevlo/KaraBot'>
                            <button className='demoBtn' >View Source Code</button>
                          </a>
                        </Grid>
                      </Grid>
                    </Container>
                  </Grid>
                </Grid>
                <Grid id='work'>
                  <Grid ref={highlightRef2} className='highlighOnScroll' xs={12} sx={{ m: 3, p: 6, color: 'white' }}>
                    <TerminalIcon sx={{ backgroundColor: '#1f0233', p: 1, borderRadius: '50%', position: 'absolute', left: -45, boxShadow: '0 0 10px #de63fd4d, 0 0 20px #ed40f317, 0 0 30px #a500e61f, 0 0 40px #8a00e61a' }} />
                    <Box>
                      <Chip
                        avatar={<Avatar alt="User" src={avatar} />}
                        label="Work"
                        variant="outlined"
                        sx={{ color: 'white', border: 'NONE', backgroundColor: '#1f0233a2' }}
                      />
                      <Typography sx={{ fontSize: { xs: '30px', sm: '40px', md: '50px' }, fontFamily: 'Unbounded, cursive !important' }}><NorthEastIcon sx={{ fontSize: '35px' }} />CURRENT ROLE</Typography>
                      <Grid xs={12} md={8}>
                        <Typography sx={{ fontSize: '18px', color: 'grey', textAlign: 'justify' }}>
                          For the last 2 years, I've been working full-time at <span style={{ textDecoration: 'underline dotted' }}>Cubo Technologies</span>, doing a bit of everything from <span style={{ textDecoration: 'underline dotted' }}>marketing to human resource management to graphic design.</span> And now, I've started delving into the world of <span style={{ textDecoration: 'underline dotted' }}>full-stack development using ReactJS and .NET Core </span>  and <span style={{ textDecoration: 'underline dotted' }}>mobile-app developement with Flutter.</span>
                        </Typography>
                      </Grid>
                    </Box>
                    <Box sx={{ marginTop: 3, display: 'flex', overflow: 'hidden', flexDirection: { xs: 'column', md: 'row' } }}>
                      <Grid xs={12} md={7} className='prt_col prt_work' sx={{ marginBottom: { xs: 3, md: 0 } }}>
                      </Grid>
                      <Grid xs={12} md={5} sx={{ backgroundColor: 'transparent', p: 3 }}>
                        <Box sx={{ alignItems: 'center', marginBottom: 2 }}>
                          <img src={cuboLogo} alt='' width='50px' sx={{ marginRight: 2 }} />
                          <Typography sx={{ fontSize: '20px', transition: '0.3s linear', fontFamily: 'Unbounded, cursive !important', '&:hover': { color: 'orange' } }}>
                            Associate .NET/ReactJS Full Stack Developer
                          </Typography>
                        </Box>
                        <Typography sx={{ fontSize: '16px', color: 'grey', justifyContent: 'justify', textAlign: 'justify', marginBottom: 2 }}>
                          Cubo Systems delivers comprehensive and innovative IT solutions to a diverse range of businesses across the globe.
                        </Typography>
                        <Box sx={{ bottom: 0 }}>
                          <a class='link customCursor' style={{ textTransform: 'uppercase', fontFamily: 'Unbounded, cursive !important', fontSize: '13px' }} href='https://www.cubosystems.com'>Discover More</a>
                        </Box>
                      </Grid>
                    </Box>

                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
          {/* <Container id='passion'>
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
                  <Typography sx={{ fontSize: '18px', color: 'grey', textAlign: 'justify'  }}>
                    I lead a balanced life and enjoy a variety of activities. When I'm not coding, you might find me playing snooker, table tennis, or swimming laps. I'm also a fan of video games – specially Battlefield 1<br></br>
                    Music is a huge part of my life, especially hip-hop and the NBA hold a special place in my heart. There's just something about the fast pace and high energy that I find exhilarating.
                  </Typography>
                </Grid>
              </Box>
              <Grid container xs={12} sx={{ m: 5, overflow: 'hidden', borderRadius: '20px', boxShadow: '0 0 10px #de63fd4d, 0 0 20px #ed40f317, 0 0 30px #a500e61f, 0 0 40px #8a00e61a', transition: 'linear 0.3s', '&:hover': { boxShadow: '0 0 0px #de63fd4d, 0 0 0px #ed40f317, 0 0 30px #a500e61f, 0 0 40px #8a00e61a' } }}>
                <Grid item xs={12}>
                  <video src="/path/to/video.mp4" autoplay loop controls width="100%" height="auto" />
                </Grid>
              </Grid>
            </Grid> 

          </Container>*/}
          <Container id='contact' >
            <Grid ref={highlightRef4} className='zoom-out' xs={12} sx={{ m: 3, marginBottom: '5vh', p: 6, borderRadius: '25px', color: 'white', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
              <Typography sx={{ fontSize: '30px', color: 'white', fontFamily: 'Unbounded, cursive !important' }}><WavingHandIcon sx={{ fontSize: '40px' }} />Get in touch with me!</Typography>
              <Container>
                <Grid container sx={{ textAlign: 'center', p: 3 }}>
                  <Grid xs={12} md={6}>
                    <EmailIcon sx={{ backgroundColor: '#1f0233', p: 1, borderRadius: '50%', boxShadow: '0 0 10px #de63fd4d, 0 0 20px #ed40f317, 0 0 30px #a500e61f, 0 0 40px #8a00e61a' }} />
                    <Typography sx={{ fontSize: '18px', color: 'grey' }}> Email Me at<br></br><a href="mailto:abdallahmuath0@gmail.com" className='customCursor' style={{ color: 'grey' }}>abdallahmuath0@gmail.com</a> </Typography>
                  </Grid>
                  <Grid xs={12} md={6}>
                    <CallIcon sx={{ backgroundColor: '#1f0233', p: 1, borderRadius: '50%', boxShadow: '0 0 10px #de63fd4d, 0 0 20px #ed40f317, 0 0 30px #a500e61f, 0 0 40px #8a00e61a' }} />
                    <Typography sx={{ fontSize: '18px', color: 'grey' }}> Call Me at<br></br> <a href="tel:+94726712616" className='customCursor' style={{ color: 'grey' }}>+94 72 671 2616</a></Typography>
                  </Grid>
                </Grid>
                {!isLargeScreen && (
                  <Grid item sx={{ m: 3, backgroundColor: '#b471c510', justifyContent: 'center', display: 'flex', 'alignContent': 'center', borderRadius: '20px', margin: '10px', paddingRight: 2, paddingLeft: 2 }}>
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
                )}
              </Container>
            </Grid>
          </Container>
        </div>
      </Grid >
    </>
  );
}

export default App;