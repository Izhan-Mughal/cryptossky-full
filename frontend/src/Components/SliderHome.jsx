

import React from "react";
import Slider from "react-slick";
const SliderHome = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="px-3">
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
        </div>
        <div  className="px-3">
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
        </div>
        <div className="px-3">
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
        </div>

      </Slider>
    </div>
  )
}

export default SliderHome


