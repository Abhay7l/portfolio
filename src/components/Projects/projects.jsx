import { Box, Stack } from "@mui/material";
import log from "../../assets/pexels-photomix-company-97083.jpg"
const Projects = ({projectsRef}) => {
  return (
    <Box ref={projectsRef} className="projectSection" sx={{ padding: "50px",display: "flex",flexDirection: "column",alignItems: "center",justifyContent: "center",gap:4,width:"100vw",height:"100vh",
}}>
        <div
        style={{color: "white",display: "flex",justifyContent: "center",borderBottom: "1px solid white",}}>
        <h1>My Projects</h1>
      </div>
      <Stack direction={"row"} sx={{padding:''}} >
        <Box gap={2} sx={{color:'white',display:"flex",justifyContent:"center",alignItems:'center',
          //  backgroundColor:'#1a1a2d',
        //    background: "transparent",
        padding:"10px",
           backdropFilter:'blur(10px)',
           backgroundColor: 'rgba(3, 3, 3, 0.7) !important'
,
           borderRadius:'10px',
        }}>
            <img style={{objectFit:'contain',width:'120px'}} src={log} alt="ajscanokca "/>
            <Stack direction={"column"} >
            <a href="https://github.com/Abhay7l/pgfinder/tree/master">
            <h2>RoomFinder</h2>
            </a>
            <p>Developed a comprehensive web application, RoomFinder, using the MERN stack (MongoDB,
Express.js, React.js, Node.js), allowing to easily search and find rooms or PGs (paying guest
accommodations) for rent. The application provides a user-friendly platform for customers to search
for rooms or PGs based on filters like city , rent-range</p>
            </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export default Projects;