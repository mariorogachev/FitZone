import { Button,Container} from 'reactstrap';
import { useNavigate } from "react-router-dom";
import NavbarComp from '../Navbar';
import '../../../public/assets/css/Navbar.css'


export default function Main (){

  

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/register`; 
    navigate(path);
  }

    return(
        <>
        
        {/* ***** Main Banner Area Start ***** */}
  <div className="main-banner" id="top">
  <video autoPlay muted loop id='bg-video'>
  <source
    src="assets/images/gym-video.mp4"
    type="video/mp4"
  />
</video>
    <div className="video-overlay header-text">
      <div className="caption">
        <h6>work harder, get stronger</h6>
        <h2>
          Fit <em>Zone</em>
        </h2>
        <div className="main-button scroll-to-section">
        <Container>
              
          <Button className="px-4"
            onClick={routeChange}
              >
              Login
            </Button>
      
       </Container>
            
        
        </div>
      </div>
    </div>
  </div>
  {/* ***** Main Banner Area End ***** */}
        </>
    )
}