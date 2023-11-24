import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../public/assets/css/templatemo-training-studio.css'
import { Link, Route, Routes } from 'react-router-dom';
import Classes from './components/pages/Classes';
import Main from './components/pages/Main';
import Programs from './components/pages/Programs'
import Schedule from './components/pages/Schedule';
import '../public/assets/css/Navbar.css'
import logo from '../public/assets/images/features-first-icon.png'
import LogIn from '../src/components/Auth/Login';
import MaybeShowNavBar from './components/MaybeShowNavBar';
import RegisterForm from './components/Auth/Register';
import ForgotPassword from './components/Auth/ForgotPassword';



function App() {
  return (
    <>
    <MaybeShowNavBar>
    <Navbar className='navbar' bg="white" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className='logo' as={Link} to='/' ><img
      src={logo}
      width="35"
      height="35"
    />  Fit Zone</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/programs'>Programs</Nav.Link>
            <Nav.Link as={Link} to='/schedule'>Schedule</Nav.Link>
            <Nav.Link as={Link} to='/classes' >Classes</Nav.Link>
            <Nav.Link as={Link} to='/register' >Register</Nav.Link>
           
            
          </Nav>
        </Container>
      </Navbar>
      </MaybeShowNavBar>

      <div>
        <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/programs' element={<Programs/>}/>
          <Route path='/classes' element={<Classes/>}/>
          <Route path='/schedule' element={<Schedule/>}/>
          <Route path='/register' element={<RegisterForm/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/reset' element={<ForgotPassword/>}/>
          
        

          
        </Routes>
      </div>
      
    </>
  )
}
export default App
