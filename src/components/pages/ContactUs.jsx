export default function ContactUs (){
    return (
        <>
        <section className="section" id="contact-us">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-xs-12">
          <div id="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2079.3970622506445!2d27.46806326267267!3d42.51893797801568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a695df713ef1f3%3A0x7d40c314b363a210!2z0J_Rg9C70YEg0JLQuNGC0LDQuyDRgdC_0L7RgNGC!5e0!3m2!1sen!2sbg!4v1698241600461!5m2!1sen!2sbg"
              width="100%"
              height="600px"
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen=""
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-xs-12">
          <div className="contact-form">
            <form id="contact" action="" method="post">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <fieldset>
                    <input
                      name="name"
                      type="text"
                      id="name"
                      placeholder="Your Name*"
                      required=""
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
                      required=""
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
                      required=""
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
        </>
    )
}