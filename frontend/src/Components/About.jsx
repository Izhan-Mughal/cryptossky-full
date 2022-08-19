import React from 'react'
import Header from './Elements/Header'
import Footer from './Elements/Footer'

export default function About() {
  return (
    <div>
      {/* START LOADER */}
      <div id="loader-wrapper">
        <div id="loading-center-absolute">
          <div className="object" id="object_four" />
          <div className="object" id="object_three" />
          <div className="object" id="object_two" />
          <div className="object" id="object_one" />
        </div>
        <div className="loader-section section-left" />
        <div className="loader-section section-right" />
      </div>
      {/* END LOADER */}
      {/* START HEADER */}

      {/* END HEADER */}{/* START SECTION BANNER */}
      <section className="section_breadcrumb bg_navy_blue" data-z-index={1} data-parallax="scroll" data-image-src="assets/images/home_banner_bg.png">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="banner_text text-center">
                <h1 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="1.1s" style={{ animationDelay: '1.1s', opacity: 1 }}>About The Cryptossky</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="pb-0" data-parallax="scroll" data-image-src="assets/images/about_bg2.png">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="title_blue_dark title_border text-center">
                {/* <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">About The Cryptossky
                </h4> */}
                <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Cryptossky will
                  provide a GPF (Global Protection Funds) to minimize any crisis with the international Real
                  Estate, Mineral mining and cryptocurrency market. We believe instead of creating a global
                  fund to share with the users have been bringing to us extra referees, we want to use this
                  fund to protect your investment. This fund will be increase in every deposit a 10%, but you
                  balance will be the total investment you do, as every investment will be blocked for 180 or 360
                  days. This will make this fund bigger every day. Investor will see the counter on the home page once login in.</p>
                <p className="animation mb-0" data-animation="fadeInUp" data-animation-delay="0.8s">Another very attractive
                  benefit for users is the possibility to win an apartment in Turkey or United Arabic
                  Emirates. Every six months we will provide one property in combination with a Real Estate
                  Group in Dubai (Conditions Apply).
                </p>
                <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.8s">

                  <img src={process.env.PUBLIC_URL + "./assets/images/logo-cryptossky.png"} alt="Cryptoskky" />
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10 offset-1">
              <div className="divider small_divider" />
              <div className="video_wrap animation d-flex justify-content-center" data-animation="fadeInUp" data-animation-delay="0.4s">
                <img src="assets/images/video_img2.jpg" alt="video_img2" />
                {/* <div class="video_text">
                    	<a href="https://www.youtube.com/watch?v=ZE2HxTmxfrI" class="video">
                        	<i class="ion-ios-play-outline gradient_box"></i>
                        	<span>How It Work</span>
                        </a>
                    </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="bg_navy_blue video_bg" />
      </section>

      <a href="#" className="scrollup btn-default" style={{ display: 'none' }}><i className="ion-ios-arrow-up" /></a>
      <div className="spop-container spop--bottom-left" id="spop--bottom-left" />
      <Footer />
    </div>
  )
}
