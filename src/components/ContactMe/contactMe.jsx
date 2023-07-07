import { Box, Stack } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import "./contactMe.scss"
const ContactMe = ({contactRef}) => {
    const phoneNumber = '8989284322'
    const whatsAppLink = `https://wa.me/${phoneNumber}`; 
    const emailAddress = 'abhaygupta24803@gmail.com';
    const mailtoLink = `mailto:${emailAddress}`;
  return (
    <Stack ref={contactRef} direction={"column"}
        sx={{
        display:"flex",
        // backgroundColor:"black",
        flexDirection:"column",
        alignItems:"center",
        width:"100vw",
        height:"100vh",
        justifyContent:"center",
        gap:4
        }}>
    <div
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          borderBottom: "1px solid white",
        }}
      >
        <h1>Contact Me</h1>
      </div>
    
    <Stack direction={{sx:"column",lg:"row"}} sx={{
        width:"900px" ,
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
        }}>
    <div class="cardi">
    <a href={whatsAppLink}>
    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <WhatsAppIcon style={{fontSize:"100px",color:"green"}}/>
    </Box>
       <p>Phone : +91 8989294322</p>
</a>
</div>
    <div class="cardi">
    <a href={mailtoLink} >
    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <EmailOutlinedIcon style={{fontSize:"100px",color:"red"}} />
    </Box>
        <p>Email :<br/>abhaygupta24803@gmail.com</p>
    </a>
</div>  
    </Stack>
    </Stack>
  )
}


export default ContactMe;