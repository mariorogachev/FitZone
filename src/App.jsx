import '../public/assets/css/templatemo-training-studio.css'
import { Link, Route, Routes } from 'react-router-dom';
import Classes from './components/pages/Classes';
import Main from './components/pages/Main';
import Programs from './components/pages/Programs'
import Schedule from './components/pages/Schedule';
import RegisterForm from './components/Auth/Register';
import ForgotPassword from './components/Auth/ForgotPassword';
import NavbarComp from './components/Navbar';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
} from "@clerk/clerk-react";
import { useNavigate } from 'react-router-dom';
import { dark } from '@clerk/themes';
import BlogList from './components/pages/Blog/BlogList';
import '../public/assets/css/SignIn.css'
import Home from './components/pages/Home';



function App() {
  if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
  }
  
  const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
  const navigate = useNavigate();
  
  return (
    <>
    <ClerkProvider
      publishableKey={clerkPubKey}
      navigate={(to) => navigate(to)}
      
    >
      
   <NavbarComp/>

      <div>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/programs' element={<Programs/>}/>
          <Route path='/classes' element={<Classes/>}/>
          <Route path='/schedule' element={<Schedule/>}/>
          <Route path = '/blog' element={<BlogList/>}/>
          <Route path='/register' element={<RegisterForm/>}/>
          <Route path='/home' element={<Home/>}/>
          
          
          <Route
          path="/sign-in"
          element={<SignIn routing="path" path="/sign-in" />}
        />
         <Route
          path="/sign-up/*"
          element={<SignUp routing="path" path="/sign-up" />}
        />
          <Route path='/reset' element={<ForgotPassword/>}/>
          
        

          
        </Routes>
      </div>
      </ClerkProvider>
    </>
  )
}
export default App
