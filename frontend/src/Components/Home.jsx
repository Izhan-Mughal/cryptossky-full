import React from 'react'
import Header from './Elements/Header'
import Footer from './Elements/Footer'
export default function Home() {

  return (
    <>

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
        <section id="home_section" className="section_banner bg_navy_blue banner_full_height" data-z-index={1} data-parallax="scroll" data-image-src="assets/images/banner_bg2.png">
          <Header />
          <div id="banner_bg_effect" className="banner_effect" />
          <div className="container h-100">
            <div className="row align-items-center h-100">
              <div className="col-md-12 col-sm-12 order-first">
                <div className="banner_text text-center">
                  <h3 className="animation" data-animation="fadeInUp" data-animation-delay="0.8s">WELCOME TO CRYPTOSSKY </h3>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 order-lg-first">
                <div className="banner_text text_md_center">
                  <h1 className="animation" data-animation="fadeInUp" data-animation-delay="1.1s">WITH CRYPTOSSKY.COM
                    YOU WILL GET AN EXCELLENT FINANCIAL OPPORTUNITY</h1>
                  <p className="animation" data-animation="fadeInUp" data-animation-delay="1.3s">
                    Beside Cryptossky is
                    a small team with experience in mineral mining, Real Estate and triangular arbitrage
                    trading. Cryptossky works with the finest in their fields, who are willing to go above and
                    beyond to give you with the highest investment returns reasonable and maintain it for long.
                    We use the best servers, Cloudflare DDoS protection, and SSL encryption to secure important
                    data on our site, so your data is completely safe, but just in case the security is
                    compromised we will use the last hour security copy.</p>
                  <div className="btn_group animation" data-animation="fadeInUp" data-animation-delay="1.4s">
                    <a href="#contact" className="btn btn-default btn-radius nav-link ">Contact Us <i className="ion-ios-arrow-thin-right" /></a>
                    <a href="#pricing" className="btn btn-border btn-radius">Chose Plan Now! <i className="ion-ios-arrow-thin-right" /></a>
                  </div>
                  <div id="whitepaper" className="team_pop mfp-hide">
                    <div className="row m-0">
                      <div className="col-md-7">
                        <div className="pt-3 pb-3">
                          <div className="title_blue_dark title_border">
                            <h4>Download Whitepaper</h4>
                            <p>A purely peer-to-peer version of electronic cash would allow online
                              payments to be sent directly from one party to another without going
                              through a financial institution.Digital signatures provide part of the
                              solution, but the main benefits are lost if a trusted third party is
                              still required to prevent double-spending.</p>
                            <p>The network timestamps transactions by hashing them into an ongoing chain
                              of hash-based proof-of-work, forming a record that cannot be changed
                              without redoing the proof-of-work.</p>
                            <a href="#" className="btn btn-default btn-radius">Download Now <i className="ion-ios-arrow-thin-right" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <img className="pt-3 pb-3" src="assets/images/whitepaper2.png" alt="whitepaper2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 order-first">
                <div className="banner_image_right res_md_mb_50 res_xs_mb_30 animation" data-animation-delay="1.5s" data-animation="fadeInRight">
                  <img alt="banner_vector4" src="assets/images/banner_img4.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="ripple_effect_left_bottom">
            <div className="circle_bg1 circle_bg_color1">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="ripple_effect_right_top">
            <div className="circle_bg1 circle_bg_color1">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </section>
        {/* END SECTION BANNER */}
        {/* START SECTION ABOUT US */}
        <section id="about" className="pb-0" data-parallax="scroll" data-image-src="assets/images/about_bg2.png">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="title_blue_dark title_border text-center">
                  <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">About The Cryptossky
                  </h4>
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
        {/* END SECTION ABOUT US */}
        {/* START SECTION SERVICES */}
        <section id="service" className="bg_navy_blue pb-0">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="title_default_light title_border text-center">
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
        {/* END SECTION SERVICES */}
        {/* START SECTION SALE */}
        {/* <section id="token" class="section_token token_sale overflow_hide">
	<div class="container">
        <div class="row">
			<div class="col-lg-6 offset-lg-3 col-md-12 col-sm-12">
                <div class="title_blue_dark title_border text-center">
                    <h4 class="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Token Sale</h4>
                    <p class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Join the industry leaders to discuss where the markets are heading. We accept token payments. </p>
                </div>
			</div>
        </div>
        <div class="row small_space">
        	<div class="col-lg-4">
            	<div class="token_info_table h-100">
            		<table class="table table-navy-blue m-0 h-100">
                    	<tbody>
                            <tr class="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                              <td>Starting Time :</td>
                              <td>APR 23,2018</td>
                            </tr>
                            <tr class="animation" data-animation="fadeInUp" data-animation-delay="0.3s">
                              <td>Ending Time :</td>
                              <td>JUN 18,2018</td>
                            </tr>
                            <tr class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                              <td>Soft cap :</td>
                              <td>90,000 BCC</td>
                            </tr>
                            <tr class="animation" data-animation="fadeInUp" data-animation-delay="0.5s">
                              <td>Hard cap :</td>
                              <td>55,000 BCC</td>
                            </tr>
                            <tr class="animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                              <td>TOken :</td>
                              <td>BCC Token</td>
                            </tr>
                            <tr class="animation" data-animation="fadeInUp" data-animation-delay="0.7s">
                              <td>Exchange Rate :</td>
                              <td>1 BTC = 1940 BCC</td>
                            </tr>
                            <tr class="animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                              <td>Token Sale :</td>
                              <td>85,000 BCC (8%)</td>
                            </tr>
                  		</tbody>
                    </table>
                </div>
            </div>
            <div class="col-lg-8">
            	<div class="bg_navy_blue token_dt res_md_mt_30 res_xs_mt_20">
                    <div class="row align-items-center h-100">
                    	<div class="col-lg-7">
                            <div class="tk_counter_inner text-center">
                                <div class="tk_countdown_time p-0 transparent_bg box_shadow_none animation" data-animation="fadeInUp" data-animation-delay="0.2s" data-time="2021/12/08 00:00:00"></div>
                                <div class="progress animation" data-animation="fadeInUp" data-animation-delay="0.3s">
                                <div class="progress-bar progress-bar-striped gradient" role="progressbar" aria-valuenow="46" aria-valuemin="0" aria-valuemax="100" style="width:46%"> 46% </div>
                                    <span class="progress_label bg-white" style="left: 30%"> <strong> 46,000 BCC </strong></span>
                                    <span class="progress_label bg-white" style="left: 75%"> <strong> 90,000 BCC </strong></span>
                                    <span class="progress_min_val">Sale Raised</span>
                                    <span class="progress_max_val">Soft-caps</span>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <a href="#" class="btn btn-default btn-radius animation" data-animation="fadeInUp" data-animation-delay="0.4s">Buy Tokens <i class="ion-ios-arrow-thin-right"></i></a>
                                    <ul class="icon_list list_none d-flex justify-content-center">
                                        <li class="animation" data-animation="fadeInUp" data-animation-delay="0.4s"><i class="fa fa-cc-visa"></i></li>
                                        <li class="animation" data-animation="fadeInUp" data-animation-delay="0.5s"><i class="fa fa-cc-mastercard"></i></li>
                                        <li class="animation" data-animation="fadeInUp" data-animation-delay="0.6s"><i class="fa fa-bitcoin"></i></li>
                                        <li class="animation" data-animation="fadeInUp" data-animation-delay="0.7s"><i class="fa fa-paypal"></i></li>
                                    </ul> 
                                </div>                       
                            </div>
                        </div>
                        <div class="col-lg-5">
                        	<div class="token_detail text-center res_md_mt_30 res_xs_mt_20">
                            	<ul class="list_none">
                                	<li class="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                                    	<h4>1 BCC = $32.21</h4>
                                    	<span>Private Sale</span>
                                    </li>
                                    <li class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                                    	<h4>$ 1.4814.45.24</h4>
                                    	<span>Raised</span>
                                    </li>
                                    <li class="animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                                    	<h4>BTC, ETH, LTC</h4>
                                    	<span>Acceptable Currency</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                	</div>
                </div>  
            </div>
        </div>
        <div class="row">
        	<div class="col-md-12">
            	<ul class="list_none doc_list">
                	<li class="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                    	<a href="#">WhitePaper <span><i class="fa fa-file-pdf-o"></i></span></a>
                    </li>
                    <li class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                    	<a href="#">OnePager <span><i class="fa fa-file-pdf-o"></i></span></a>
                    </li>
                    <li class="animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                    	<a href="#">Rating Review <span><i class="fa fa-download"></i></span></a>
                    </li>
                    <li class="animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                    	<a href="#">Marketing Plan <span><i class="fa fa-file-pdf-o"></i></span></a>
                    </li>
                    <li class="animation" data-animation="fadeInUp" data-animation-delay="1s">
                    	<a href="#">Privacy Policy <span><i class="fa fa-file-pdf-o"></i></span></a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="divider large_divider"></div>
        <div class="row">
			<div class="col-lg-6 col-md-12 col-sm-12 res_md_mb_40">
                <div class="title_blue_dark text_md_center title_border">
                    <h4 class="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Token Sale Proceeds</h4>
                </div>
                <div class="row">
                	<div class="col-lg-12 lg_pt_20 res_sm_pt_0">
                    	<div class="d-flex align-items-center justify-content-center justify-content-lg-start">
                            <div class="animation chart_img" data-animation="fadeInRight" data-animation-delay="0.2s"> 
                                <img  src="assets/images/sale-proceeds6.png" alt="sale-proceeds6" /> 
                            </div>
                            <ul class="list_none chart_info_list">
                                <li class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                                    <span class="chart_bx color6"></span>
                                    <span>Private/Pre Sale</span>
                                </li>
                                <li class="animation" data-animation="fadeInUp" data-animation-delay="0.5s">
                                    <span class="chart_bx color7"></span>
                                    <span> Public ICO</span>
                                </li>
                                <li class="animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                                    <span class="chart_bx color8"></span>
                                    <span>Team & Advisor</span>
                                </li>
                                <li class="animation" data-animation="fadeInUp" data-animation-delay="0.7s">
                                    <span class="chart_bx color9"></span>
                                    <span>Marketing & General</span>
                                </li>
                                <li class="animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                                    <span class="chart_bx color10"></span>
                                    <span>Bounty</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
			</div>
            <div class="col-lg-6 col-md-12 col-sm-12">
                <div class="title_blue_dark text_md_center title_border">
                    <h4 class="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Token Distribution</h4>
                </div>
                <div class="row">
                	<div class="col-lg-12 lg_pt_20 res_sm_pt_0">
                    	<div class="d-flex align-items-center justify-content-center justify-content-lg-start">
                            <div class="animation chart_img" data-animation="fadeInRight" data-animation-delay="0.2s"> 
                                <img  src="assets/images/distribution6.png" alt="distribution6" /> 
                            </div>
                            <ul class="list_none chart_info_list">
                                <li class="animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                                    <span class="chart_bx color6"></span>
                                    <span>interconnection Dev</span>
                                </li>
                                <li class="animation" data-animation="fadeInUp" data-animation-delay="0.5s">
                                    <span class="chart_bx color7"></span>
                                    <span>Marketing & General</span>
                                </li>
                                <li class="animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                                    <span class="chart_bx color8"></span>
                                    <span>Mobile Ad Platform</span>
                                </li>
                                <li class="animation" data-animation="fadeInUp" data-animation-delay="0.7s">
                                    <span class="chart_bx color9"></span>
                                    <span>Ad Platform Integration</span>
                                </li>
                                <li class="animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                                    <span class="chart_bx color10"></span>
                                    <span>Operational Overhead</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
          </div>
        </div>
    </div>
</section> */}
        {/* END SECTION SALE */}
        <section id="roadmap" className="bg_navy_blue">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12 offset-lg-2">
                <div className="title_default_light text-center">
                  <h4 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: '0.2s', opacity: 1 }}>Road Map</h4>
                  <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: '0.4s', opacity: 1 }}>Cryptossky works with the finest in their fields, who are willing to go above and beyond to give you with the highest investment returns.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row roadmap_list small_space align-items-end">
              <div className="col-lg">
                <div className="single_roadmap roadmap_done">
                  <div className="roadmap_icon" />
                  <h6 className="animation animated fadeInDown" data-animation="fadeInDown" data-animation-delay="0.2s" style={{ animationDelay: '0.2s', opacity: 1 }}>April 2020</h6>
                  <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.3s" style={{ animationDelay: '0.3s', opacity: 1 }}>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </div>
              </div>
              <div className="col-lg">
                <div className="single_roadmap roadmap_done">
                  <div className="roadmap_icon" />
                  <h6 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: '0.2s', opacity: 1 }}>February 2021</h6>
                  <p className="animation animated fadeInDown" data-animation="fadeInDown" data-animation-delay="0.2s" style={{ animationDelay: '0.2s', opacity: 1 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
              <div className="col-lg">
                <div className="single_roadmap">
                  <div className="roadmap_icon" />
                  <h6 className="animation animated fadeInDown" data-animation="fadeInDown" data-animation-delay="0.2s" style={{ animationDelay: '0.2s', opacity: 1 }}>March 2021</h6>
                  <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: '0.2s', opacity: 1 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
              <div className="col-lg">
                <div className="single_roadmap">
                  <div className="roadmap_icon" />
                  <h6 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: '0.2s', opacity: 1 }}>June 2021</h6>
                  <p className="animation animated fadeInDown" data-animation="fadeInDown" data-animation-delay="0.2s" style={{ animationDelay: '0.2s', opacity: 1 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
              <div className="col-lg">
                <div className="single_roadmap">
                  <div className="roadmap_icon" />
                  <h6 className="animation animated fadeInDown" data-animation="fadeInDown" data-animation-delay="0.2s" style={{ animationDelay: '0.2s', opacity: 1 }}>October 2021</h6>
                  <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: '0.2s', opacity: 1 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
              <div className="col-lg">
                <div className="single_roadmap">
                  <div className="roadmap_icon" />
                  <h6 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: '0.2s', opacity: 1 }}>December 2021</h6>
                  <p className="animation animated fadeInDown" data-animation="fadeInDown" data-animation-delay="0.2s" style={{ animationDelay: '0.2s', opacity: 1 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* START SECTION PRICING TABLE- */}
        <section id="plans">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12 offset-lg-2">
                <div className="title_default_dark title_border text-center">
                  <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Choose Your Plan
                  </h4>
                </div>
              </div>
            </div>
            <div className="row small_space">
              <div className="col-lg-4 col-md-4">
                <div className="pricing_box text-center res_sm_mt_20">
                  <div className="pr_title gradient_box2">
                    <h3>Basic</h3>
                    <div className="price_tage">
                      <h3>100 USDT</h3>
                      <span>360 Days</span>
                    </div>
                  </div>
                  <div className="pr_content">
                    <ul className="list_none ps-0">
                      <li>1.2% return daily for 5 days week</li>
                      <li>360 Days locked</li>
                      <li>24% interest monthly</li>
                      <li>288 USDT year profit</li>
                    </ul>
                  </div>
                  <div className="pr_footer">
                    <a href="#" className="btn btn-default btn-radius">Select Plan Now</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="pricing_box text-center res_sm_mt_20">
                  <div className="pr_title gradient_box2">
                    <h3>Basic</h3>
                    <div className="price_tage">
                      <h3>200 USDT</h3>
                      <span>360 Days</span>
                    </div>
                  </div>
                  <div className="pr_content">
                    <ul className="list_none">
                      <li>1.2% return daily for 5 days week</li>
                      <li>360 Days locked</li>
                      <li>24% interest monthly</li>
                      <li>576 USDT year profit</li>
                    </ul>
                  </div>
                  <div className="pr_footer">
                    <a href="#" className="btn btn-default btn-radius">Select Plan Now</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="pricing_box text-center res_sm_mt_20">
                  <div className="pr_title gradient_box2">
                    <h3>Basic</h3>
                    <div className="price_tage">
                      <h3>500 USDT</h3>
                      <span>360 Days</span>
                    </div>
                  </div>
                  <div className="pr_content">
                    <ul className="list_none">
                      <li>1.2% return daily for 5 days week</li>
                      <li>360 Days locked</li>
                      <li>24% interest monthly</li>
                      <li>1440 USDT year profit</li>
                    </ul>
                  </div>
                  <div className="pr_footer">
                    <a href="#" className="btn btn-default btn-radius">Select Plan Now</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="pricing_box text-center res_sm_mt_20">
                  <div className="pr_title gradient_box2">
                    <h3>Basic</h3>
                    <div className="price_tage">
                      <h3>1000 USDT</h3>
                      <span>180 Days</span>
                    </div>
                  </div>
                  <div className="pr_content">
                    <ul className="list_none">
                      <li>1.2% return daily for 5 days week</li>
                      <li>180 Days locked</li>
                      <li>24% interest monthly</li>
                      <li>1440 USDT 6 month profit</li>
                    </ul>
                  </div>
                  <div className="pr_footer">
                    <a href="#" className="btn btn-default btn-radius">Select Plan Now</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="pricing_box text-center res_sm_mt_30">
                  <div className="pr_title gradient_green">
                    <h3>Standard</h3>
                    <div className="price_tage">
                      <h3>2500 USDT</h3>
                      <span>180 Days</span>
                    </div>
                  </div>
                  <div className="pr_content">
                    <ul className="list_none">
                      <li>0.30% return daily for 5 Days week</li>
                      <li>180 Days locked</li>
                      <li>6% interest monthly</li>
                      <li>900 USDT 6 months profit</li>
                    </ul>
                  </div>
                  <div className="pr_footer">
                    <a href="#" className="btn btn-default btn-radius">Select Plan Now</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="pricing_box text-center res_sm_mt_30">
                  <div className="pr_title gradient_green">
                    <h3>Standard</h3>
                    <div className="price_tage">
                      <h3>5000 USDT</h3>
                      <span>180 Days</span>
                    </div>
                  </div>
                  <div className="pr_content">
                    <ul className="list_none">
                      <li>0.35% return daily for 5 Days week</li>
                      <li>180 Days locked</li>
                      <li>7% interest monthly</li>
                      <li>2100 USDT 6 month profit</li>
                    </ul>
                  </div>
                  <div className="pr_footer">
                    <a href="#" className="btn btn-default btn-radius">Select Plan Now</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="pricing_box text-center res_sm_mt_30">
                  <div className="pr_title gradient_green">
                    <h3>Standard</h3>
                    <div className="price_tage">
                      <h3>10,000 USDT</h3>
                      <span>180 Days</span>
                    </div>
                  </div>
                  <div className="pr_content">
                    <ul className="list_none">
                      <li>0.40% return daily for 180 Days</li>
                      <li>180 Days locked</li>
                      <li>8% interest monthly</li>
                      <li>4800 USDT 6 months profit</li>
                    </ul>
                  </div>
                  <div className="pr_footer">
                    <a href="#" className="btn btn-default btn-radius">Select Plan Now</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="pricing_box text-center res_sm_mt_30">
                  <div className="pr_title gradient_green">
                    <h3>Standard</h3>
                    <div className="price_tage">
                      <h3>25,000 USDT</h3>
                      <span>180 Days</span>
                    </div>
                  </div>
                  <div className="pr_content">
                    <ul className="list_none">
                      <li>0.45% return daily for 180 Days</li>
                      <li>180 Days locked</li>
                      <li>9% interest monthly</li>
                      <li>13,500 USDT 6 months profit</li>
                    </ul>
                  </div>
                  <div className="pr_footer">
                    <a href="#" className="btn btn-default btn-radius">Select Plan Now</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="pricing_box text-center res_sm_mt_30">
                  <div className="pr_title yellow_bg">
                    <h3>Premium Gold</h3>
                    <div className="price_tage">
                      <h3>50,000 USDT</h3>
                      <span>360 Days</span>
                    </div>
                  </div>
                  <div className="pr_content">
                    <ul className="list_none">
                      <li>0.15% return daily for 5 Days week</li>
                      <li>360 Days locked</li>
                      <li>36% interest yearly</li>
                      <li>Profit+Capital = 68,000 USDT</li>
                    </ul>
                  </div>
                  <div className="pr_footer">
                    <a href="#" className="btn btn-default btn-radius">Select Plan Now</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="pricing_box text-center res_sm_mt_30">
                  <div className="pr_title yellow_bg">
                    <h3>Premium Diamond</h3>
                    <div className="price_tage">
                      <h3>100,000 USDT</h3>
                      <span>360 Days</span>
                    </div>
                  </div>
                  <div className="pr_content">
                    <ul className="list_none">
                      <li>0.10% return daily for 5 Days week</li>
                      <li>360 Days locked</li>
                      <li>24% interest yearly</li>
                      <li>Profit+Capital = 124,000 USDT</li>
                    </ul>
                  </div>
                  <div className="pr_footer">
                    <a href="#" className="btn btn-default btn-radius">Select Plan Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p className="mb-1"><strong>Note:</strong> Any plan Basic or Standard can be withdrawal after 10 days
                  with a 10% charge.</p>
                <ul className="pl-4">
                  <li>Gold and Diamond plan withdrawal during the six first months will be charged with 1% and for
                    the next six months will be charge with 0.5%</li>
                  <li>User are allowed to withdrawal one time a day any time except from 00.00 to 04.00 am.</li>
                  <li>Any withdrawal of profit or plan expired will be charged with 1%.</li>
                  <li>The minimum amount to withdrawal is 20USDT.</li>
                  <li>User can have a maximum of 3 plans, only one in every level.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* END SECTION PRICING TABLE- */}
        {/* START SECTION TEAM */}
        <section id="team" className="bg_navy_blue team_box_s2">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12 offset-lg-2">
                <div className="title_default_light title_border text-center">
                  <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Lotto Prize</h4>
                  <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Certainly, we want our investors and users get a beautiful experience in cryptossky.com and despite the actual economic panorama we do the effort in Real Estate for you get a better life by the mean of win a home, completed furniture with garage, swimming pool for summer and for winter, sauna, hammam, gym, garden and barbeque area.</p>
                  <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Every six months you have a chance to win a home in four different touristic places: Alanya, beside Mediterranean Sea, (Turkey). Samsun, beside Black see, (Turkey). Dubai (UAE) and Kerala (India)
                    To access to the draw, you must have at least one plan in any plan category. You can buy a maximum of 10 tickets per user. </p>
                </div>
                <div className="text-center"><a href="login.html" className="btn btn-default btn-radius">REGISTER NOW TO JOIN THE DRAW </a></div>
              </div>
            </div>
          </div>
        </section>
        {/* END SECTION TEAM */}
        {/* START SECTION TESTIMONIAL */}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12 offset-lg-2">
                <div className="title_default_dark title_border text-center">
                  <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Our Happy Clients
                  </h4>
                </div>
              </div>
            </div>
            <div className="row small_space">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="testimonial_slider owl-carousel owl-theme">
                  <div className="item">
                    <div className="testimonial_wrap rounded_img">
                      <img src="assets/images/testmonial_client1.jpg" className="animation" data-animation="zoomIn" data-animation-delay="0.2s" alt="testmonial_client1" />
                      <h5 className="animation" data-animation="fadeInUp" data-animation-delay="0.3s">Kerri Reece
                      </h5>
                      <span className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">CEO
                        Company</span>
                      <p className="animation" data-animation="fadeInUp" data-animation-delay="0.5s">You should
                        not expect anything more. This is a fantastic program, punctual paying, thanks a
                        lot. I recommend this hyip!</p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial_wrap rounded_img">
                      <img src="assets/images/testmonial_client2.jpg" className="animation" data-animation="zoomIn" data-animation-delay="0.2s" alt="testmonial_client2" />
                      <h5 className="animation" data-animation="fadeInUp" data-animation-delay="0.3s">Alvaro
                        Martin</h5>
                      <span className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Investor</span>
                      <p className="animation" data-animation="fadeInUp" data-animation-delay="0.5s">This is a
                        realistic program for anyone looking for site to invest. Paid to me regularly, keep
                        up good work.This is a realistic program for anyone looking </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial_wrap rounded_img">
                      <img src="assets/images/testmonial_client3.jpg" className="animation" data-animation="zoomIn" data-animation-delay="0.2s" alt="testmonial_client3" />
                      <h5 className="animation" data-animation="fadeInUp" data-animation-delay="0.3s">Jessica Bell
                      </h5>
                      <span className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Head Of
                        Sale</span>
                      <p className="animation" data-animation="fadeInUp" data-animation-delay="0.5s">This is a
                        realistic program for anyone looking for site to invest. Paid to me regularly, keep
                        up good work.This is a realistic program for anyone looking </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END SECTION TESTIMONIAL */}
        {/* START SECTION CONTACT */}
        <section id="contact" className="contact_section small_pt">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 pr-0 res_md_pr_15 pe-lg-0">
                <div className="bg_navy_blue contact_box animation" data-animation="fadeInLeft" data-animation-delay="0.1s">
                  <div className="title_default_light title_border">
                    <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Contact With Us
                    </h4>
                    <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Our office is
                      located in a beautiful building and garden and fast growing city.</p>
                  </div>
                  <ul className="list_none contact_info mt-margin ps-0">
                    <li className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                      <i className="ion-ios-location" />
                      <div className="contact_detail"> <span>Address</span>
                        <p>USA</p>
                      </div>
                    </li>
                    <li className="animation" data-animation="fadeInUp" data-animation-delay="0.5s">
                      <i className="ion-android-call" />
                      <div className="contact_detail"> <span>Phone</span>
                        <p>000-000-0000</p>
                      </div>
                    </li>
                    <li className="animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                      <i className="ion-ios-email" />
                      <div className="contact_detail"> <span>Email</span>
                        <p><a className="text-white" href="mailto:cryptossky@yahoo.com">cryptossky@yahoo.com</a></p>
                      </div>
                    </li>
                  </ul>
                  <div className="contct_follow large_space">
                    <span className="text-uppercase animation" data-animation="fadeInUp" data-animation-delay="0.2s">Follow Us</span>
                    <ul className="list_none social_icon ps-0">
                      <li className="animation" data-animation="fadeInUp" data-animation-delay="0.4s"><a href="#"><i className=" fa-brands fa-facebook" /></a></li>
                      <li className="animation" data-animation="fadeInUp" data-animation-delay="0.5s"><a href="#"><i className=" fa-brands fa-twitter" /></a></li>
                      <li className="animation" data-animation="fadeInUp" data-animation-delay="0.6s"><a href="#"><i className=" fa-brands fa-google-plus" /></a></li>
                      <li className="animation" data-animation="fadeInUp" data-animation-delay="0.7s"><a href="#"><i className=" fa-brands fa-pinterest" /></a></li>
                      <li className="animation" data-animation="fadeInUp" data-animation-delay="0.8s"><a href="#"><i className=" fa-brands fa-linkedin" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 pl-0 res_md_pl_15 ps-lg-0">
                <div className="bg_navy_blue_dark contact_box animation" data-animation="fadeInRight" data-animation-delay="0.1s">
                  <div className="title_default_light title_border">
                    <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Leave a Message
                    </h4>
                  </div>
                  <form method="post" name="enq" className="form_field">
                    <div className="row">
                      <div className="form-group col-md-12 animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                        <input type="text" required="required" placeholder="Enter Name *" id="first-name" className="form-control" name="name" />
                      </div>
                      <div className="form-group col-md-12 animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                        <input type="email" required="required" placeholder="Enter Email *" id="email" className="form-control" name="email" />
                      </div>
                      <div className="form-group col-md-12 animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                        <input type="text" required="required" placeholder="Enter Subject" id="subject" className="form-control" name="subject" />
                      </div>
                      <div className="form-group col-md-12 animation" data-animation="fadeInUp" data-animation-delay="1s">
                        <textarea required="required" placeholder="Message *" id="description" className="form-control" name="message" rows={2} defaultValue={""} />
                      </div>
                      <div className="col-md-12 text-center animation" data-animation="fadeInUp" data-animation-delay="1.2s">
                        <button type="submit" title="Submit Your Message!" className="btn btn-default btn-radius" id="submitButton" name="submit" value="Submit">Submit <i className="ion-ios-arrow-thin-right" /></button>
                      </div>
                      <div className="col-md-12">
                        <div id="alert-msg" className="alert-msg text-center" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <a href="#" className="scrollup btn-default" style={{ display: 'none' }}><i className="ion-ios-arrow-up" /></a>

        {/* END SECTION CONTACT */}      </div>
        <Footer/>
    </>
  )
}
