/**
 * The function SliderLang returns a slider component that displays various technologies the developer
 * has worked with, along with brief descriptions and links to learn more.
 */
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import JavascriptIcon from '@mui/icons-material/Javascript';
import Slider from "react-slick";
import reactJS from './assets/react.png';
import netCore from './assets/netcore.png'
import flutter from './assets/flutter.png'
import html from './assets/htmlcss.png'
import frame from './assets/netfw.png';
import tortoise from './assets/tortoise.png'
import github from './assets/github.svg'
import dockerLogo from './assets/docker.png'
import angularJSLogo from './assets/react.png';
import reactNativeLogo from './assets/netcore.png'
import azureLogo from './assets/flutter.png'
import awsLogo from './assets/htmlcss.png'
import { Container } from 'react-bootstrap';
import CategoryIcon from '@mui/icons-material/Category';

const typographyStyles = {
    fontSize: '15px',
    color: 'white',
    transition: '0.3s linear',
    fontFamily: 'Unbounded, cursive !important',
};

const typographyfontStyles = {
    fontSize: '12px',
    color: 'grey',
    transition: '0.3s linear',
    fontFamily: 'Unbounded, cursive !important',
};

function SliderLang() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        scroll: true,
        slidesToShow: 4,
        slidesToScroll: 3
    };

    return (
        <>
            <Grid sx={{backgroundColor:'#040016', p:3}}>
                <Grid sx={{ textAlign: 'center', p: 2 }}>
                    <Typography sx={{ fontSize: '20px', fontFamily: 'Unbounded, cursive !important' }}><CategoryIcon sx={{ fontSize: '30px' }} />Technologies I've Worked With!</Typography>
                </Grid>
                <Slider {...settings}>
                    <div>
                        <Grid sx={{ p: 2, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={reactJS} alt='react' height='40px' style={{ display: 'inherit' }} />
                            <Typography sx={typographyStyles}>ReactJS</Typography>
                            <Typography sx={typographyfontStyles}>
                                A JavaScript library for building user interfaces, developed by Facebook.
                            </Typography>
                            <a style={{ color: 'lightblue', fontSize: '12px' }} href='https://legacy.reactjs.org/docs/getting-started.html'>Learn ReactJS</a>
                        </Grid>
                    </div>
                    <div>
                        <Grid sx={{ p: 2, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={netCore} alt='react' height='40px' style={{ display: 'inherit' }} />
                            <Typography sx={typographyStyles}>.NET Core</Typography>
                            <Typography sx={typographyfontStyles}>
                                A free and open-source, cross-platform framework for building modern, cloud-based, internet-connected applications, developed by Microsoft.
                            </Typography>
                            <a style={{ color: 'lightblue', fontSize: '12px' }} href='https://dotnet.microsoft.com/'>Learn .NET Core</a>
                        </Grid>
                    </div>
                    <div>
                        <Grid sx={{ p: 2, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={flutter} alt='react' height='40px' style={{ display: 'inherit' }} />
                            <Typography sx={typographyStyles}>Flutter</Typography>
                            <Typography sx={typographyfontStyles}>
                                A free and open-source mobile application development framework created by Google for building natively compiled applications for mobile, web, and desktop from a single codebase.
                            </Typography>
                            <a style={{ color: 'lightblue', fontSize: '12px' }} href='https://flutter.dev/'>Learn Flutter</a>
                        </Grid>
                    </div>
                    <div>
                        <Grid sx={{ p: 2, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={html} alt='react' height='40px' style={{ display: 'inherit' }} />
                            <Typography sx={typographyStyles}>HTML/CSS</Typography>
                            <Typography sx={typographyfontStyles}>
                                The standard markup and style sheet language used for creating web pages and applications.
                            </Typography>
                            <a style={{ color: 'lightblue', fontSize: '12px' }} href='https://www.w3.org/html/'>Learn HTML/CSS</a>
                        </Grid>
                    </div>
                    <div>
                        <Grid sx={{ p: 2, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={frame} alt='react' height='40px' style={{ display: 'inherit' }} />
                            <Typography sx={typographyStyles}>.NET Framework</Typography>
                            <Typography sx={typographyfontStyles}>
                                A software development framework created by Microsoft for building applications with visually stunning user experiences and secure communication.
                            </Typography>
                            <a style={{ color: 'lightblue', fontSize: '12px' }} href='https://dotnet.microsoft.com/download/dotnet-framework'>Learn .NET Framework</a>
                        </Grid>
                    </div>
                    <div>
                        <Grid sx={{ p: 2, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={tortoise} alt='react' height='40px' style={{ display: 'inherit' }} />
                            <Typography sx={typographyStyles}>Tortoise SVN</Typography>
                            <Typography sx={typographyfontStyles}>
                                A free and open-source Apache Subversion (SVN) client for managing source code and version control directly from Windows Explorer.
                            </Typography>
                            <a style={{ color: 'lightblue', fontSize: '12px' }} href='https://tortoisesvn.net/'>Learn Tortoise SVN</a>
                        </Grid>
                    </div>
                    <div>
                        <Grid sx={{ p: 2, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={github} alt='react' height='40px' style={{ display: 'inherit' }} />
                            <Typography sx={typographyStyles}>Github</Typography>
                            <Typography sx={typographyfontStyles}>
                                A web-based platform that provides hosting for software development and version control using Git.
                            </Typography>
                            <a style={{ color: 'lightblue', fontSize: '12px' }} href='https://github.com/'>Learn Github</a>
                            <a style={{ color: 'yellow', fontSize: '12px' }} href='https://github.com/Abdevlo'>My Github</a>
                        </Grid>
                    </div>
                    <div>
                        <Grid sx={{ p: 2, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={dockerLogo} alt='Docker' height='40px' style={{ display: 'inherit' }} />
                            <Typography sx={typographyStyles}>Docker</Typography>
                            <Typography sx={typographyfontStyles}>
                                A platform for developing, shipping, and running applications using containerization technology.
                            </Typography>
                            <a style={{ color: 'lightblue', fontSize: '12px' }} href='https://www.docker.com/'>Learn Docker</a>
                        </Grid>
                    </div>
                    <div>
                        <Grid sx={{ p: 2, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={angularJSLogo} alt='AngularJS' height='40px' style={{ display: 'inherit' }} />
                            <Typography sx={typographyStyles}>AngularJS</Typography>
                            <Typography sx={typographyfontStyles}>
                                A JavaScript-based open-source front-end web application framework developed by Google.
                            </Typography>
                            <a style={{ color: 'lightblue', fontSize: '12px' }} href='https://angularjs.org/'>Learn AngularJS</a>
                        </Grid>
                    </div>
                    <div>
                        <Grid sx={{ p: 2, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={reactNativeLogo} alt='React Native' height='40px' style={{ display: 'inherit' }} />
                            <Typography sx={typographyStyles}>React Native</Typography>
                            <Typography sx={typographyfontStyles}>
                                A JavaScript framework for building native mobile applications for iOS, Android, and other platforms.
                            </Typography>
                            <a style={{ color: 'lightblue', fontSize: '12px' }} href='https://reactnative.dev/'>Learn React Native</a>
                        </Grid>
                    </div>
                    <div>
                        <Grid sx={{ p: 2, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={azureLogo} alt='Azure' height='40px' style={{ display: 'inherit' }} />
                            <Typography sx={typographyStyles}>Azure</Typography>
                            <Typography sx={typographyfontStyles}>
                                A cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers.
                            </Typography>
                            <a style={{ color: 'lightblue', fontSize: '12px' }} href='https://azure.microsoft.com/'>Learn Azure</a>
                        </Grid>
                    </div>
                    <div>
                        <Grid sx={{ p: 2, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={awsLogo} alt='AWS' height='40px' style={{ display: 'inherit' }} />
                            <Typography sx={typographyStyles}>AWS</Typography>
                            <Typography sx={typographyfontStyles}>
                                A cloud computing platform created by Amazon for building, testing, and deploying applications and services through Amazon-managed data centers.
                            </Typography>
                            <a style={{ color: 'lightblue', fontSize: '12px' }} href='https://aws.amazon.com/'>Learn AWS</a>
                        </Grid>
                    </div>
                    <div>
                        <Grid sx={{ p: 2, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            {/* <img src={sqlServer} alt='SQL Server' height='40px' style={{ display: 'inherit' }} /> */}
                            <Typography sx={typographyStyles}>SQL Server</Typography>
                            <Typography sx={typographyfontStyles}>
                                A relational database management system developed by Microsoft, commonly used in enterprise environments.
                            </Typography>
                            <a style={{ color: 'lightblue', fontSize: '12px' }} href='https://www.microsoft.com/en-us/sql-server'>Learn SQL Server</a>
                        </Grid>
                    </div>
                    <div>
                        <Grid sx={{ p: 2, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            {/* <img src={mongoDB} alt='MongoDB' height='40px' style={{ display: 'inherit' }} /> */}
                            <Typography sx={typographyStyles}>MongoDB</Typography>
                            <Typography sx={typographyfontStyles}>
                                A document-oriented NoSQL database program, which uses JSON-like documents with optional schemas.
                            </Typography>
                            <a style={{ color: 'lightblue', fontSize: '12px' }} href='https://www.mongodb.com/'>Learn MongoDB</a>
                        </Grid>
                    </div>
                </Slider>
            </Grid>
        </>

    )
}

export default SliderLang