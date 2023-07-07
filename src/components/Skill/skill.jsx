import { Box ,Stack, useMediaQuery} from "@mui/material"
import Mount from "../../assets/Pexels.jpg";
import ReactJs from "../../assets/react.png";
import Js from "../../assets/Js.png";
import Node from "../../assets/NodeJs.png";
import Cpp from "../../assets/CPP.png"
import Java from "../../assets/Java.png"
import Express from "../../assets/Express.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowBackIos } from "@mui/icons-material";
import { ArrowForwardIos } from "@mui/icons-material";
import { Hidden } from "@mui/material";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

const Skill = ({skillsRef}) => {
  const isSmallScreen = useMediaQuery('(max-width:960px)')
    const Images=[
        ReactJs,
        Js,
        Node,
        Cpp,Express,
        Java
    ];
    const breakpoints = {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      };
  return (
    <Box ref={skillsRef} className="skillSection" sx={{
        // backgroundColor:'red',
        // backgroundImage:`url(${Mount})`,
        // backgroundSize:'cover',
        height:'100vh',
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
    }} >
    <div style={{color:'white',display:'flex',justifyContent: 'center',borderBottom:'1px solid white'}}>
    <h1>SKILLS</h1>
    </div>
    <Swiper 
        breakpoints={breakpoints}
        effect={"coverflow"}
        grabCursor="true"
        centeredSlides="true"
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 40,
          stretch: 10,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mySwiper"
        style={{
            padding:"100px",
            width:'900px',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}
      >
        {Images.map((imgi, index) => (
          <SwiperSlide className="swiper-slide">
            <div className="image-container" key={index}>
              <img style={{width:"150px"}} src={imgi} alt="sponsor" className="image" />
            </div>
          </SwiperSlide>
        ))}
        {!isSmallScreen && 
        <div className="slider-controler" style={{
          display:"flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <div className="swiper-button-prev slider-arrow">
            <Hidden smDown>
              <ArrowBackIos sx={{ color: "aqua" }} />
            </Hidden>
          </div>
          <div className="swiper-button-next slider-arrow">
            <Hidden smDown>
              <ArrowForwardIos sx={{ color: "aqua" }} />
            </Hidden>
          </div>
          <div className="swiper-pagination"></div>
        </div>
        }
      </Swiper>

      <Box sx={{maxWidth:'90vw',border:'1px solid white',borderTop:'none',borderBottom:'none'}}>
      <Stack direction={'row'} gap={2} sx={{
        backgroundColor: 'transparent',
        color: 'white',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        fontSize: "20px",
        width:'900px',
        maxWidth:'100%',
        // maxWidth: "900px",
      }}>
       <Stack sx={{width:'50%',display:'flex',alignItems:'center',}}>
        <p>React Js</p>
        <p>Node Js</p>
        <p>Express Js</p>
        <p>Javascript</p>
       </Stack>
       <Stack sx={{width:'50%',display:'flex',alignItems:'center',}}>
        <p>C++</p>
        <p>Java</p>
        <p>HTML5</p>
        <p>CSS</p>
       </Stack>
      </Stack>
    </Box>
</Box>
  )
}


export default Skill
