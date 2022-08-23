import React from 'react'
import Header from './Elements/Header'
import Footer from './Elements/Footer'

export default function Invest() {
  return (
    <div>
      {/* START LOADER */}
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

      {/* END HEADER */}{/* START SECTION BANNER */}
      <section className="section_breadcrumb bg_navy_blue" data-z-index={1} data-parallax="scroll" data-image-src="assets/images/home_banner_bg.png">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="banner_text text-center">
                <h1 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="1.1s" style={{ animationDelay: '1.1s', opacity: 1 }}>IT IS SAFE INVEST IN CRYPTOSSKY.COM?</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="service" className=" pb-0">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className=" title_border text-center">
                  <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">IT IS SAFE INVEST IN CRYPTOSSKY.COM?</h4>
                  <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">The answer is yes, if the circumstances remain within the economic parameters considered normal in the international sphere. For these same reasons, we remind our potential investors to use common sense instead of using emotion as the spearhead to initiate an investment program. But besides that, we will never tell you that you are going to get rich here, but it is very possible that with our monthly contribution you can feel more comfortable in your day to day life. At least one of our investors will own an apartment every six months, only for our subscribers. Our wish is that your level of confidence increases every day in view of the management of resources.</p>
                  <p className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">And to increase this trust, despite the fact that it can only grow due to the daily result of our operations, we have created the Global Protection Fund that increases with each deposit and that has the function of mitigating the possible damages to which they may be submitted our servers. Currently we have more than two Dedicated Servers and for security I should not make our strategy public to guarantee all the data.</p>
                  <p>For this we have created a security protocol in order to keep your investment safe and the management of the benefits that are generated and that we return in daily payments. As you probably already know, the Cryptossky platform is supported by investments in Real Estate in the United Arab Emirates, especially Dubai and the company Kingdom Gold Resources SARL, dedicated to the exploration of Precious Minerals and the local purchase of gold and diamonds in Kono and Banankoro. At the present time, we are awaiting the receipt of exploration concessions in Mali, Nigeria Uganda and Ghana, to increase our production of precious minerals. We will give more info about all these events through our monthly online newspaper that will be available after the fourth online week of Cryptossky.com and that you can download it from our website.</p>
                  <p>But let's ask ourselves the question again: Is it safe to invest in Cryptossky.com? My answer remains the same: Yes. Although today any investment has a very high percentage of risk. But let me give you some suggestions so that you have an overview of this matter. The investment plans offered here have a maximum of 1.2% daily for deposits of 100 and 200 USDT and for the maximum allowed deposit of 100,000USDT it is 0.10% daily interest. No bank will offer a interest like it- (Please check our plans). These data are in accordance with the current world situation and allow appreciable sustainability in the medium and long term. We prepare to withstand hurricane winds in the global economy, so our business strategy prioritizes the security of our investors' assets.</p>
                  <p>If you have had time to get to know our website better, you will have realized that our referral plan has only two levels, with 5% being the commission obtained from a direct person and 2.5% from the direct one of your direct. And in addition to this, the system will not allow a number greater than 25 direct people. We have done this this way because until now, the different levels only serve for some leaders, with little investment, to earn a lot of money by attracting other people with non-existent promises. We also want to avoid that due to an excessive number of levels it is possible to think, although this will be inevitable, that it could be a Ponzi system.</p>
                  <p>In any case, my recommendation is that before becoming part of this network of investors, think again if you can invest and if you do not endanger your status and your family. And if after thinking it over you decide to invest, do it with the minimum allowed, see our evolution and see for yourself if you really feel comfortable with us. Regardless, whether you come or not, let me tell you that you will always be welcome in our community.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      <a href="#" className="scrollup btn-default" style={{ display: 'none' }}><i className="ion-ios-arrow-up" /></a>
      <div className="spop-container spop--bottom-left" id="spop--bottom-left" />
      <Footer />
    </div>
  )
}
