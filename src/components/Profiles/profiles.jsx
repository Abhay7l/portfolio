import { Box, Stack } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import Leetcode from "../../assets/Leetcode2.png";
import GFG from "../../assets/icons8-geeksforgeeks-144.png";
import "./profiles.scss"
const Profiles = ({profilesRef}) => {
  const LeetCodeProfile = `https://leetcode.com/abhay7Gupta/`;
  const GFGProfile =  `https://auth.geeksforgeeks.org/user/abhaygupta24803/practice`;
  const GitHubProfile = `https://github.com/Abhay7l`;
  return (
    <Box ref={profilesRef} 
      className="skillSection" sx={{ padding: "50px",display: "flex",flexDirection: "column",alignItems: "center",justifyContent: "center",gap:4,width:"100vw",height:"100vh",
      }}
    >
      <div
        style={{color: "white",display: "flex",justifyContent: "center",borderBottom: "1px solid white",}}>
        <h1>My Profiles</h1>
      </div>
      <Stack
        direction={{"sx":"column",lg:"row"}}
        sx={{display: "flex",justifyContent: "",
          alignItems: "center",
          gap:3
        }}
      >
      <div className="card">
        <a style={{ textDecorationLine: "none" }}
          href={LeetCodeProfile}>
          <img style={{width: "100px",}} src={Leetcode} alt="Leetcode" />
          <b />
        </a>
      </div>
      <div className="card">
        <a
          style={{ textDecorationLine: "none" }}
          href={GFGProfile} >
          <img style={{width: "100px",}} src={GFG} alt="Leetcode" />
          <b />
        </a>
      </div>
      <div className="card">
        <a
          style={{ textDecorationLine: "none" }}
          href={GitHubProfile} >
          <GitHubIcon style={{fontSize:"100px"}} alt="github" />
          <b />
        </a>
      </div>
      </Stack>
    </Box>
  );
};

export default Profiles;
