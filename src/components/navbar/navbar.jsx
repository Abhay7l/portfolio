// import { useState,useEffect } from "react";
// import { Link, NavLink, Route, BrowserRouter as Router, Routes } from "react-router-dom";import {Nav, Navbar} from "react-bootstrap"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import About from "../About/about";
// import Skill from "../Skill/skill";
// import ContactMe from "../ContactMe/contactMe";
// import "./navbar.scss"
// import A7 from "../../assets/A7.png"
// const NavBar = () => {
//   const [isSticky,setIsSticky] = useState(false);
//   useEffect(()=>{
//     const handleScroll = () => (window.scrollY > 50) ? setIsSticky(true) : setIsSticky(false);
//     window.addEventListener("scroll",handleScroll);
//     return () => window.removeEventListener("scroll",handleScroll);
//   },[]);
//   return (
//     <Router >
//     <div>
//     <Navbar expand="lg" bg="transparent" variant="dark" className={`navbarBlur ${isSticky ? 'sticky':''}`} >
//       <Navbar.Brand href="/"><img src={A7} alt="A7"/></Navbar.Brand>
//       <Navbar.Toggle aria-controls="navbar-collapse" />
//       <Navbar.Collapse id="navbar-collapse">
//         <Nav className="ml-auto" style={{gap:8}} >
//         <NavLink to="/about" activeClassName="active">About</NavLink>
//         <NavLink to="/skills" activeClassName="active">Skills</NavLink>
//         <NavLink to="/contact" activeClassName="active">Contact</NavLink>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//     <Routes>
//   <Route path="/about" element={<About />} />
//   <Route path="/skills" element={<Skill />} />
//   <Route path="/contact" element={<ContactMe />} />
//     </Routes>
//   </div>
// </Router>
//   )
// }


import { useState,useEffect,useRef } from "react";
import {Nav, Navbar} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
// import About from "../About/about";
import "./navbar.scss"
import A7 from "../../assets/A7.png"
const NavBar = () => {
  const [isSticky,setIsSticky] = useState(false);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  useEffect(()=>{
    const handleScroll = () => (window.scrollY > 50) ? setIsSticky(true) : setIsSticky(false);
    window.addEventListener("scroll",handleScroll);
    return () => window.removeEventListener("scroll",handleScroll);
  },[]);
  const scrollToSkills = () => {
    skillsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Navbar expand="lg" bg="transparent" variant="dark" className={`navbarBlur ${isSticky ? 'sticky':''}`} >
      <Navbar.Brand href="/"><img src={A7} alt="A7"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-collapse" />
      <Navbar.Collapse id="navbar-collapse">
        <Nav className="ml-auto" >
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link onClick={scrollToSkills}>Skills</Nav.Link>
          <Nav.Link onClick={scrollToContact}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      {/* <Skill skillsRef={skillsRef}/> */}
    </Navbar>
  )
}



export default NavBar