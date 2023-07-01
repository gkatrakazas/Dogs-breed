import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../media/dogs_logo.png'
import "../css/Navigationbar.css";
import { useLocation } from 'react-router-dom';

import { AiOutlineHome,AiOutlineTeam, AiFillDatabase } from 'react-icons/ai';
import {LuLayoutDashboard } from 'react-icons/lu';
import {FaGithub } from 'react-icons/fa';
import {MdOutlineRoomPreferences} from 'react-icons/md'

const NavigationBar = () => {
  const location = useLocation();

  return (
    <Navbar expand="lg">
      <Container className="nav-container d-flex justify-content-center">
        <Navbar.Brand href="/personal_page"><img src={logo} width="250" alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="container-fluid d-flex justify-content-center mr-auto">
            <Nav.Link href="/dogs_breed/" id={'logo'} className={`${location.pathname === '/dogs_breed' ? 'active-link' : ''}`}><AiOutlineHome size={25} /> Home</Nav.Link>
            <Nav.Link href="/dogs_breed/team" className={`${location.pathname === '/dogs_breed/team' ? 'active-link' : ''}`}><AiOutlineTeam size={25} /> Our Team</Nav.Link>
            <Nav.Link href="/dogs_breed/dataset" className={`${location.pathname === '/dogs_breed/dataset' ? 'active-link' : ''}`}><AiFillDatabase size={25} /> Dataset</Nav.Link>
            <Nav.Link href="/dogs_breed/visualization" className={`${location.pathname === '/dogs_breed/visualization' ? 'active-link' : ''}`}><LuLayoutDashboard size={25}/> Visualization</Nav.Link>
            <Nav.Link href="/dogs_breed/references" className={`${location.pathname === '/dogs_breed/references' ? 'active-link' : ''}`}><MdOutlineRoomPreferences size={25}/> References</Nav.Link>

          </Nav>

          <Nav className="ml-auto">
          <Nav.Link href="https://github.com/gregory1996/dogs_breed" target='_black'><FaGithub size={30} /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
