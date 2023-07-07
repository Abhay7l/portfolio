import React from 'react'
import "./about.scss"
import {useMediaQuery} from '@mui/material';
// import BackImag from "../../assets/bcakImg3.jpg";
// import BackImag2 from "../../assets/Mount.jpg";
import MyImg from "../../assets/MyImg4.png";
import { Box, Stack } from '@mui/material'
// import Imag from "../../assets/PinkB.png"
const About = ({aboutRef}) => {
    const isSmallScreen = useMediaQuery('(max-width:960px)');
  return (
    !isSmallScreen?<>{
    <Stack ref={aboutRef} className='about' direction={'row'} gap={4} sx={{                
}}>
        
        <Stack className="aboutMe" direction={'column'} 
        sx={{
            alignItems: 'center',
            padding:4,
            color: 'white',
            width:'50%',
            // position: 'relative',
        }}
        gap={3}
        >
        {/* <img src={Imag} alt="im" style={{position:'absolute'}} /> */}
        <Box sx={{fontSize:"30px" ,display:'flex',alignItems:'center',justifyContent:'center'}}>
            <p style={{fontSize:"30px"}}>I'm</p><br/>
            <p>Abhay Gupta</p>
        </Box>
        <Box className="typewriter" sx={{zIndex:99}}>
            <h1  >Front_EnD_Dev=loper</h1>
        </Box>
        <Box className="content"
        sx={{
            lineHeight:2,
            padding:2,
            width:'100%',
        }}>
            <p>I am a ReactJS FrontEnd Developer with an experience of building, maintaining and deploying various single page applications and I can adapt onto any technology rapidly making myself flexible upon any tech stack. A passionate, diligent person who wants to learn continuously.</p>
        </Box>
        </Stack>
        
        <Box className="aboutMeImg" sx={{
            display:'flex',
            width:'50%',
            justifyContent: 'center',
            // position:"relative",
        }}>
            {/* <img src={Imag} alt="img" style={{position:'absolute',bottom:100}}/> */}
            <img style={{width:"350px",zIndex:99}} src={MyImg} alt="my img"  />
        </Box>
    </Stack>
    }</>:
    
    // mobile devices
    <>{
       <Stack ref={aboutRef} className='about' direction={'column'} sx={{
        display:'flex',
        height:'100vh',
       }} >
       <Box sx={{
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <img style={{width:'200px'}} src={MyImg} alt="my img" />
          </Box>
          <Stack className='aboutMe' direction={'column'} sx={{justifyContent:'center',alignItems:'center'}}>
            <Box className="Heading" sx={{
                overflowWrap:'break-word',
            }}>
            <h1 style={{fontSize:'30px'}}>Front_EnD_<h1 style={{
                fontWeight: 'bold',
                fontSize: '35px',
            }}>Dev=loper</h1></h1>
            </Box>
            <Box className="content" sx={{
                // paddingTop:4,
                paddingBottom:4,
                paddingLeft:2,
                paddingRight:2,
                color:'white',
                fontSize:'16px',
                lineHeight:1.5,
                // textAlign:'justify',
            }}>
            <p>I am a ReactJS FrontEnd Developer with an experience of building, maintaining and deploying various single page applications and I can adapt onto any technology rapidly making myself flexible upon any tech stack. A passionate, diligent person who wants to learn continuously.</p>
            </Box>
          </Stack>
          
       </Stack>
    }</>
  )
}

export default About
