import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import '../../public/assets/css/templatemo-training-studio.css'
import { Link, Route, Routes } from 'react-router-dom';
import '../../public/assets/css/Navbar.css'
import logo from '../../public/assets/images/features-first-icon.png'
import MaybeShowNavBar from './MaybeShowNavBar'
import { SignedOut, UserButton,SignedIn } from '@clerk/clerk-react';

export default function NavbarComp() {
  return (
    <>
      <MaybeShowNavBar>
    <Navbar bg="light" fixed="top" collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className='logo' as={Link} to='/'><img
      src={logo}
      width="35"
      height="35"
    />Fit Zone</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <SignedIn><Nav.Link as={Link} to='/home'>Home</Nav.Link></SignedIn>
          <SignedOut><Nav.Link as={Link} to='/'>Home</Nav.Link></SignedOut>
            <Nav.Link as={Link} to='/classes' >Classes</Nav.Link>
            <SignedIn>
              <Nav.Link as={Link} to='/blog' >Blog</Nav.Link>
              </SignedIn>
              <SignedIn>
            <Nav.Link as={Link} to='/schedule'>Schedule</Nav.Link>
            </SignedIn>
            
            <NavDropdown  title="Programs" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to='/classes'>Basic Fitness</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                New gym training
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Yoga training</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  as={Link} to='/programs'>
                All programs
              </NavDropdown.Item>
            </NavDropdown>
            
            
          <SignedOut><Nav.Link as={Link} to='/sign-in' >Sign In</Nav.Link></SignedOut>
          <Navbar.Text>
            <UserButton/>
          </Navbar.Text>
    
          <Navbar.Collapse className="justify-content-end">
        </Navbar.Collapse>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </MaybeShowNavBar>
      
    </>
  );
}

