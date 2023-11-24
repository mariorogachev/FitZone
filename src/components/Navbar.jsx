import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../public/assets/css/templatemo-training-studio.css'
import { Link, Route, Routes } from 'react-router-dom';
import Classes from './pages/Classes';
import About from './pages/About';
import Main from './pages/Main';
import Programs from './pages/Programs'
import Schedule from './pages/Schedule';
import '../../public/assets/css/Navbar.css'
import logo from '../../public/assets/images/features-first-icon.png'
import LogIn from './Auth/Login';
import RegisterForm from './Auth/Register';

export default function NavbarComp() {
  return (
    <>
      <Navbar className='navbar' bg="white" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className='logo' as={Link} to='/home' ><img
      src={logo}
      width="35"
      height="35"
    />  FitZone</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
            <Nav.Link as={Link} to='/programs'>Programs</Nav.Link>
            <Nav.Link as={Link} to='/schedule'>Schedule</Nav.Link>
            <Nav.Link as={Link} to='/classes' >Classes</Nav.Link>
            <Nav.Link as={Link} to='/register' >Register</Nav.Link>
            
           
            
          </Nav>
        </Container>
      </Navbar>

      <div>
        <Routes>
        <Route path='/home' element={<Main/>}/>
        <Route path='/programs' element={<Programs/>}/>
          <Route path='/classes' element={<Classes/>}/>
          <Route path='/schedule' element={<Schedule/>}/>
          <Route path='/register' element={<RegisterForm/>}/>
          
          
        

          
        </Routes>
      </div>
    </>
  );
}

