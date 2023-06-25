import { Container, Nav, Navbar } from "react-bootstrap";
import { useEffect, useState } from "react";
import React from "react";
import logo from "../assets/images/logo.svg";
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/nav-icon2.jpg";
import navIcon3 from "../assets/images/nav-icon3.svg";



export const NavBar=()=>{
    const [activeLink, setActiveLink]=useState('home');
    const [scrolled, setScrolled]=useState(false);

    let state;

    const onScroll=()=>{
        if(window.scrollY>50){
            state=true;
        }else{
            state=false;
        }

        setScrolled(state);
    }

    useEffect(()=>{
        
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
        
    },[]);

    const onUpdateActiveLink=(value)=>{
        setActiveLink(value);
    }
    
    
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink ==='home' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink ==='skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/khrystyna-bindiuk-800494254/"><img src={navIcon1} alt="icon"/></a>
                        <a href="https://github.com/magnifiq"><img src={navIcon2} alt="icon"/></a>
                        <a href="https://www.instagram.com/cri.ma_/"><img src={navIcon3} alt="icon"/></a>
                    </div>
                </span>
                <button className="vvd"><a href="#connect" onClick={() => onUpdateActiveLink('connect')}>Let's connect</a></button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}