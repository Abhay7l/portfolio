import { Box, Stack } from "@mui/material";
import log from "../../assets/Js.png";
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
            <p>cjkabs jabflj ancjd ckalsn weg a faf qwefad scsad qwdc ksldncjksnx ckxcaodifwnqnc a cask dcn wqnpifo jqith iqowthoinfjbgabfk nkn laffn oqf q few-i9tu9qw uq94tu2r 80tu wo j</p>
        </Box>
      </Stack>
    </Box>
  )
}

export default Projects;