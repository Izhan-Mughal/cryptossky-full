import React from 'react'
import Header from './Elements/Header'
import { Link } from 'react-router-dom'
import Footer from './Elements/Footer'

export default function Forget() {
  return (
    <div>
    {/* <div id="loader-wrapper">
      <div id="loading-center-absolute">
        <div className="object" id="object_four" />
        <div className="object" id="object_three" />
        <div className="object" id="object_two" />
        <div className="object" id="object_one" />
      </div>
      <div className="loader-section section-left" />
      <div className="loader-section section-right" />
    </div> */}
    {/* END LOADER */}
    {/* START HEADER */}
    {/* END HEADER */}
    {/* START SECTION BANNER */}
    <section className="section_breadcrumb bg_navy_blue" data-z-index={1} data-parallax="scroll" data-image-src="assets/images/home_banner_bg.png">
        <Header/>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="banner_text text-center">
              <h1 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="1.1s" style={{animationDelay: '1.1s', opacity: 1}}>Forgot Password</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* END SECTION BANNER */} 
    {/* START SECTION LOGIN */} 
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="authorize_box">
              <div className="title_default_dark title_border text-center">
                <h4 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{animationDelay: '0.2s', opacity: 1}}>Forgot Password</h4>
              </div>
              <div className="field_form authorize_form">
                <p className="animation mb-3 animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{animationDelay: '0.4s', opacity: 1}}>Reset Password link will be sent to your Email Address.</p>
                <form action="server.php" method="post">
                  <div className="form-group col-md-12 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.6s" style={{animationDelay: '0.6s', opacity: 1}}>
                    <input type="email" className="form-control" required placeholder="Enter Email Address" name="email" />
                  </div>
                  <div className="form-group col-md-12 text-center animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.8s" style={{animationDelay: '0.8s', opacity: 1}}>
                    <button className="btn btn-default btn-radius" type="submit" name="reset-password">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* END SECTION LOGIN */} 
    {/* START FOOTER SECTION */}
 
    {/* END FOOTER SECTION */}
    <a href="#" className="scrollup btn-default" style={{display: 'none'}}><i className="ion-ios-arrow-up" /></a>
    <Footer/>
  </div>
  )
}
