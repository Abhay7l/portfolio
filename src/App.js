import { Box } from "@mui/material"
import { useRef ,useEffect,useState} from "react"
import "./App.css"
import {Nav, Navbar} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Parallax,ParallaxLayer } from "@react-spring/parallax"
import About from "./components/About/about"
import Skill from "./components/Skill/skill"
import NavBar from "./components/navbar/navbar"
import Profiles from "./components/Profiles/profiles"
import ContactMe from "./components/ContactMe/contactMe"
import A7 from "./assets/A7.png"
import Projects from "./components/Projects/projects";
import ScrollVisibleWrapper from "./scrollVis";
const App = () => {
  const [isSticky,setIsSticky] = useState(false);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const profilesRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  useEffect(()=>{
    const handleScroll = () => (window.scrollY > 50) ? setIsSticky(true) : setIsSticky(false);
    window.addEventListener("scroll",handleScroll);
    return () => window.removeEventListener("scroll",handleScroll);
  },[]);
  const scrollToSkills = () => {
    skillsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProfiles = () => {
    profilesRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
     <Box className="boxContainer">
     <ScrollVisibleWrapper>
     <Navbar expand="lg" bg="transparent" variant="dark" className={`navbarBlur ${isSticky ? 'sticky':''}`} >
      <Navbar.Brand href="/"><img src={A7} alt="A7"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-collapse" />
      <Navbar.Collapse id="navbar-collapse">
        <Nav className="ml-auto" >
          <Nav.Link onClick={scrollToAbout}>About</Nav.Link>
          <Nav.Link onClick={scrollToSkills}>Skills</Nav.Link>
          <Nav.Link onClick={scrollToProjects}>Projects</Nav.Link>
          <Nav.Link onClick={scrollToProfiles}>Profile</Nav.Link>
          <Nav.Link onClick={scrollToContact}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
     <About aboutRef={aboutRef}/>
     <Skill skillsRef={skillsRef}/>
     <Projects projectsRef={projectsRef}/>
     <Profiles profilesRef={profilesRef}/>
     <ContactMe contactRef={contactRef}/>
     </ScrollVisibleWrapper>
     </Box>
    </>
  )

}



export default App