import React from "react"
import { useState,useEffect } from "react"
import {Navbar,Container,Nav,NavDropdown,Form,Button,FormControl} from "react-bootstrap"
import logo from "../assets/images/logo.svg"
import navIcon1 from "../assets/images/nav-icon1.svg"
import navIcon2 from "../assets/images/nav-icon2.svg"
import navIcon3 from "../assets/images/nav-icon3.svg"

const NavBar=()=>{

     const[activlink,setactivlink]=useState("home")
     const[scrolled,setscrolled] =useState(false) 

     useEffect(()=>{
        const onScroll=()=>{
            if(window.scrollY > 50){
                setscrolled(true)
            }
            else{
                setscrolled(false)  
            }
        }
window.addEventListener("scroll",onScroll)
return()=> window.removeEventListener("scroll",onScroll)
     },[])
const onUpdateActiveLink=(value)=>{
    setactivlink(value)
    console.log(value)
}
// bg="dark"
    return(
        <Navbar  expand="lg" className={scrolled ? "scrolled" :""}>
        <Navbar.Brand href="#home">
            <img src={logo} alt="LOGO" className="img1" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toogler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home" className={activlink==="home"? "active navbar-link" :"navbar-link"} onClick={()=>onUpdateActiveLink("home")}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activlink==="skills"? "active navbar-link" :"navbar-link"} onClick={()=>onUpdateActiveLink("skills")}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activlink==="projects"? "active navbar-link" :"navbar-link"} onClick={()=>onUpdateActiveLink("projects")}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/ayakhalafallah/" target="_blank"><img src={navIcon1} alt=""/></a>
                <a href=""><img src={navIcon2} alt=""/></a>
                <a href=""><img src={navIcon3} alt=""/></a>


            </div>
            <button className="btn1" onClick={()=>console.log("connect")}><span>Let's Connect</span></button>
          </span>
         
        </Navbar.Collapse>
      </Navbar>  
    )
}

export default NavBar;