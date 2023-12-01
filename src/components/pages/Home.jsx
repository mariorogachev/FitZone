import '../../../public/assets/css/templatemo-training-studio.css'
import { useNavigate } from 'react-router-dom';
import { Button,Container} from 'reactstrap';


export default function Home() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/classes`; 
      navigate(path);}
      
    return(
    <>
        
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
                easy with our <em>gym</em>
              </h2>
             
            </div>
          </div>
        </div>
        {/* ***** Main Banner Area End ***** */}
        {/* ***** Features Item Start ***** */}
        <section className="section" id="features">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="section-heading">
                  <h2>
                    Choose <em>Program</em>
                  </h2>
                  <img src="assets/images/line-dec.png" alt="waves" />
                  <p>
                    Training Studio is free CSS template for gyms and fitness centers.
                    You are allowed to use this layout for your business website.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <ul className="features-items">
                  <li className="feature-item">
                    <div className="left-icon">
                      <img
                        src="assets/images/features-first-icon.png"
                        alt="First One"
                      />
                    </div>
                    <div className="right-content">
                      <h4>Basic Fitness</h4>
                      <p>
                        Please do not re-distribute this template ZIP file on any
                        template collection website. This is not allowed.
                      </p>
                      <a href="#" className="text-button">
                        Discover More
                      </a>
                    </div>
                  </li>
                  <li className="feature-item">
                    <div className="left-icon">
                      <img
                        src="assets/images/features-first-icon.png"
                        alt="second one"
                      />
                    </div>
                    <div className="right-content">
                      <h4>New Gym Training</h4>
                      <p>
                        If you wish to support TemplateMo website via PayPal, please
                        feel free to contact us. We appreciate it a lot.
                      </p>
                      <a href="#" className="text-button">
                        Discover More
                      </a>
                    </div>
                  </li>
                  <li className="feature-item">
                    <div className="left-icon">
                      <img
                        src="assets/images/features-first-icon.png"
                        alt="third gym training"
                      />
                    </div>
                    <div className="right-content">
                      <h4>Basic Muscle Course</h4>
                      <p>
                        Credit goes to{" "}
                        <a
                          rel="nofollow"
                          href="https://www.pexels.com"
                          target="_blank"
                        >
                          Pexels website
                        </a>{" "}
                        for images and video background used in this HTML template.
                      </p>
                      <a href="#" className="text-button">
                        Discover More
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="features-items">
                  <li className="feature-item">
                    <div className="left-icon">
                      <img
                        src="assets/images/features-first-icon.png"
                        alt="fourth muscle"
                      />
                    </div>
                    <div className="right-content">
                      <h4>Advanced Muscle Course</h4>
                      <p>
                        You may want to browse through{" "}
                        <a
                          rel="nofollow"
                          href="https://templatemo.com/tag/digital-marketing"
                          target="_parent"
                        >
                          Digital Marketing
                        </a>{" "}
                        or{" "}
                        <a href="https://templatemo.com/tag/corporate">Corporate</a>{" "}
                        HTML CSS templates on our website.
                      </p>
                      <a href="#" className="text-button">
                        Discover More
                      </a>
                    </div>
                  </li>
                  <li className="feature-item">
                    <div className="left-icon">
                      <img
                        src="assets/images/features-first-icon.png"
                        alt="training fifth"
                      />
                    </div>
                    <div className="right-content">
                      <h4>Yoga Training</h4>
                      <p>
                        This template is built on Bootstrap v4.3.1 framework. It is
                        easy to adapt the columns and sections.
                      </p>
                      <a href="#" className="text-button">
                        Discover More
                      </a>
                    </div>
                  </li>
                  <li className="feature-item">
                    <div className="left-icon">
                      <img
                        src="assets/images/features-first-icon.png"
                        alt="gym training"
                      />
                    </div>
                    <div className="right-content">
                      <h4>Body Building Course</h4>
                      <p>
                        Suspendisse fringilla et nisi et mattis. Curabitur sed finibus
                        nisi. Integer nibh sapien, vehicula et auctor.
                      </p>
                      <a href="#" className="text-button">
                        Discover More
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Features Item End ***** */}
        {/* ***** Call to Action Start ***** */}
        <section className="section" id="call-to-action">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="cta-content">
                  <h2>
                    Don’t <em>think</em>, begin <em>today</em>!
                  </h2>
                  <p>
                    
                  </p>
                  <div className="main-button scroll-to-section">
                  <Button className="px-4"
            onClick={routeChange}
              >
              Classes
            </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Call to Action End ***** */}
        {/* ***** Our Classes Start ***** */}
        <section className="section" id="our-classes">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="section-heading">
                  <h2>
                    Our <em>Classes</em>
                  </h2>
                  <img src="assets/images/line-dec.png" alt="" />
                  <p>
                    Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
                    viverra ipsum dolor, ultricies fermentum massa consequat eu.
                  </p>
                </div>
              </div>
            </div>
            <div className="row" id="tabs">
              <div className="col-lg-4">
                <ul>
                  <li>
                    <a href="#tabs-1">
                      <img src="assets/images/tabs-first-icon.png" alt="" />
                      First Training Class
                    </a>
                  </li>
                  <li>
                    <a href="#tabs-2">
                      <img src="assets/images/tabs-first-icon.png" alt="" />
                      Second Training Class
                    </a>
                  </li>
                  <li>
                    <a href="#tabs-3">
                      <img src="assets/images/tabs-first-icon.png" alt="" />
                      Third Training Class
                    </a>
                  </li>
                  <li>
                    <a href="#tabs-4">
                      <img src="assets/images/tabs-first-icon.png" alt="" />
                      Fourth Training Class
                    </a>
                  </li>
                  <div className="main-rounded-button">
                    <a href="#">View All Schedules</a>
                  </div>
                </ul>
              </div>
              <div className="col-lg-8">
                <section className="tabs-content">
                  <article id="tabs-1">
                    <img
                      src="assets/images/training-image-01.jpg"
                      alt="First Class"
                    />
                    <h4>First Training Class</h4>
                    <p>
                      Phasellus convallis mauris sed elementum vulputate. Donec
                      posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit
                      erat, sed vehicula ligula. Aliquam ut sem fermentum sem
                      tincidunt lacinia gravida aliquam nunc. Morbi quis erat
                      imperdiet, molestie nunc ut, accumsan diam.
                    </p>
                    <div className="main-button">
                      <a href="#">View Schedule</a>
                    </div>
                  </article>
                  <article id="tabs-2">
                    <img
                      src="assets/images/training-image-02.jpg"
                      alt="Second Training"
                    />
                    <h4>Second Training Class</h4>
                    <p>
                      Integer dapibus, est vel dapibus mattis, sem mauris luctus leo,
                      ac pulvinar quam tortor a velit. Praesent ultrices erat ante, in
                      ultricies augue ultricies faucibus. Nam tellus nibh, ullamcorper
                      at mattis non, rhoncus sed massa. Cras quis pulvinar eros. Orci
                      varius natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </p>
                    <div className="main-button">
                      <a href="#">View Schedule</a>
                    </div>
                  </article>
                  <article id="tabs-3">
                    <img
                      src="assets/images/training-image-03.jpg"
                      alt="Third Class"
                    />
                    <h4>Third Training Class</h4>
                    <p>
                      Fusce laoreet malesuada rhoncus. Donec ultricies diam tortor, id
                      auctor neque posuere sit amet. Aliquam pharetra, augue vel
                      cursus porta, nisi tortor vulputate sapien, id scelerisque felis
                      magna id felis. Proin neque metus, pellentesque pharetra semper
                      vel, accumsan a neque.
                    </p>
                    <div className="main-button">
                      <a href="#">View Schedule</a>
                    </div>
                  </article>
                  <article id="tabs-4">
                    <img
                      src="assets/images/training-image-04.jpg"
                      alt="Fourth Training"
                    />
                    <h4>Fourth Training Class</h4>
                    <p>
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada fames ac turpis egestas. Aenean ultrices elementum
                      odio ac tempus. Etiam eleifend orci lectus, eget venenatis ipsum
                      commodo et.
                    </p>
                    <div className="main-button">
                      <a href="#">View Schedule</a>
                    </div>
                  </article>
                </section>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="trainers">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="section-heading">
                  <h2>
                    Expert <em>Trainers</em>
                  </h2>
                  <img src="assets/images/line-dec.png" alt="" />
                  <p>
                    Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
                    viverra ipsum dolor, ultricies fermentum massa consequat eu.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="trainer-item">
                  <div className="image-thumb">
                    <img src="assets/images/first-trainer.jpg" alt="" />
                  </div>
                  <div className="down-content">
                    <span>Strength Trainer</span>
                    <h4>Bret D. Bowers</h4>
                    <p>
                      Bitters cliche tattooed 8-bit distillery mustache. Keytar
                      succulents gluten-free vegan church-key pour-over seitan
                      flannel.
                    </p>
                    <ul className="social-icons">
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-behance" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="trainer-item">
                  <div className="image-thumb">
                    <img src="assets/images/second-trainer.jpg" alt="" />
                  </div>
                  <div className="down-content">
                    <span>Muscle Trainer</span>
                    <h4>Hector T. Daigl</h4>
                    <p>
                      Bitters cliche tattooed 8-bit distillery mustache. Keytar
                      succulents gluten-free vegan church-key pour-over seitan
                      flannel.
                    </p>
                    <ul className="social-icons">
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-behance" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="trainer-item">
                  <div className="image-thumb">
                    <img src="assets/images/third-trainer.jpg" alt="" />
                  </div>
                  <div className="down-content">
                    <span>Power Trainer</span>
                    <h4>Paul D. Newman</h4>
                    <p>
                      Bitters cliche tattooed 8-bit distillery mustache. Keytar
                      succulents gluten-free vegan church-key pour-over seitan
                      flannel.
                    </p>
                    <ul className="social-icons">
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-behance" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Testimonials Ends ***** */}
        {/* ***** Contact Us Area Starts ***** */}
        <section className="section" id="contact-us">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-xs-12">
                <div id="map">
                <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47059.1395409954!2d27.439646925749646!3d42.508637910537175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a695df713ef1f3%3A0x7d40c314b363a210!2z0J_Rg9C70YEg0JLQuNGC0LDQuyDRgdC_0L7RgNGC!5e0!3m2!1sen!2sbg!4v1701452591442!5m2!1sen!2sbg"
  width="100%"
  height={600}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-xs-12">
                <div className="contact-form">
                  <form id="contact" action="https://formspree.io/f/mjvqqlzb" method="POST">
                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <fieldset>
                          <input
                            name="name"
                            type="text"
                            id="name"
                            placeholder="Your Name*"
                            required
                          />
                        </fieldset>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <fieldset>
                          <input
                            name="email"
                            type="text"
                            id="email"
                            pattern="[^ @]*@[^ @]*"
                            placeholder="Your Email*"
                            required
                          />
                        </fieldset>
                      </div>
                      <div className="col-md-12 col-sm-12">
                        <fieldset>
                          <input
                            name="subject"
                            type="text"
                            id="subject"
                            placeholder="Subject"
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <textarea
                            name="message"
                            rows={6}
                            id="message"
                            placeholder="Message"
                            required
                            defaultValue={""}
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <button
                            type="submit"
                            id="form-submit"
                            className="main-button"
                          >
                            Send Message
                          </button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Contact Us Area Ends ***** */}
        {/* ***** Footer Start ***** */}
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p>
                  Copyright © 2020 Training Studio - Designed by{" "}
                  <a
                    rel="nofollow"
                    href="https://templatemo.com"
                    className="tm-text-link"
                    target="_parent"
                  >
                    TemplateMo
                  </a>
                </p>
                {/* You shall support us a little via PayPal to info@templatemo.com */}
              </div>
            </div>
          </div>
        </footer>
        {/* jQuery */}
        {/* Bootstrap */}
        {/* Plugins */}
        {/* Global Init */}
      </>
      );
}