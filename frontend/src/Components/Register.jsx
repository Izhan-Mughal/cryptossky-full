import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'
import { Link } from 'react-router-dom'
import Header from './Elements/Header'
import config from '../config'
import axios from 'axios'
import Footer from './Elements/Footer'
import { useHistory } from 'react-router-dom'


export default function register() {

  const history = useHistory()
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [phone, setphone] = useState("")
  const [password, setpassword] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("")
  const [terms, setterms] = useState(false)
  const [error, seterror] = useState("")
  const [loader, setloader] = useState(0)

  const dispatch = useDispatch()

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const formSubmit = async () => {

    if (name.split("").length < 3) {
      seterror({ variant: "danger", data: "Name Should contain atleast 3 chracter" })
    } else {
      if (!isValidEmail(email)) {
        seterror({ variant: "danger", data: "Invalid Email" })
      } else {
        if (phone.split("").length < 9) {
          seterror({ variant: "danger", data: "Invalid Phone number" })
        } else {
          if (password.split("").length < 6) {
            seterror({ variant: "danger", data: "Password should contain 6 letters" })
          } else {
            if (confirmPassword != password) {
              seterror({ variant: "danger", data: "Password Not Match" })
            }
            else {
              if (terms != true) {
                seterror({ variant: "danger", data: "Agree terms and conditions" })
              } else {
                setloader(1)
                await axios.post(`${config.baseURL}/register_user.php`, {
                  name,
                  email,
                  phone,
                  password
                }).then((result) => {
                  let getData = result.data
                  console.log(getData);
                  if (getData.status == 'false') {
                    seterror({ variant: "danger", data: getData.data })
                  }
                  if (getData.status == 'true') {
                    seterror({ variant: "success", data: getData.data.message })
                    dispatch(login({
                      email,
                      token: getData.data.token,
                      loginStatus: 1
                    }))
                    setname("");
                    setemail("");
                    setphone("");
                    setpassword("");
                    setconfirmPassword("");
                    history.push('/verify')
                  }
                })
                setloader(0)
              }
            }
          }
        }
      }
    }




  }

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
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="banner_text text-center">
                <h1 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="1.1s" style={{ animationDelay: '1.1s', opacity: 1 }}>Register</h1>
                <ul className="breadcrumb bg-transparent justify-content-center animation m-0 p-0 animated fadeInUp" data-animation="fadeInUp" data-animation-delay="1.3s" style={{ animationDelay: '1.3s', opacity: 1 }}>
                  <li><a href="/">Home</a> </li>
                  <li><span>Sign Up</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION BANNER */}
      {/* START SECTION SIGN UP */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="authorize_box">
                <div className="title_default_dark title_border text-center">
                  <h4 className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.2s" style={{ animationDelay: '0.2s', opacity: 1 }}>Register Now</h4>
                  <p className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" style={{ animationDelay: '0.4s', opacity: 1 }}>Create your Free account</p>
                </div>
                <div className="field_form authorize_form">
                  {error != "" &&
                    <div className={"alert alert-" + error.variant} role="alert">
                      {error.data}
                    </div>
                  }
                  <div >
                    <div className="form-group col-md-12 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.5s" style={{ animationDelay: '0.5s', opacity: 1 }}>
                      <input onChange={(e) => setname(e.target.value)} type="text" className="form-control" required placeholder="Name" name="username" />
                    </div>
                    <div className="form-group col-md-12 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.6s" style={{ animationDelay: '0.6s', opacity: 1 }}>
                      <input onChange={(e) => setemail(e.target.value)} type="email" className="form-control" required placeholder="Email" name="email" />
                    </div>
                    <div className="form-group col-md-12 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.7s" style={{ animationDelay: '0.7s', opacity: 1 }}>
                      <input onChange={(e) => setphone(e.target.value)} type="number" className="form-control" required placeholder="Phone Number" name="phone_no" />
                    </div>
                    <div className="form-group col-md-12 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.7s" style={{ animationDelay: '0.7s', opacity: 1 }}>
                      <input onChange={(e) => setpassword(e.target.value)} type="password" className="form-control" required placeholder="Password" name="password_1" />
                    </div>
                    <div className="form-group col-md-12 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.8s" style={{ animationDelay: '0.8s', opacity: 1 }}>
                      <input onChange={(e) => setconfirmPassword(e.target.value)} type="password" className="form-control" required placeholder="Confirm Password" name="password_2" />
                    </div>
                    <div className="form-group col-md-12 animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.9s" style={{ animationDelay: '0.9s', opacity: 1 }}>
                      <div className="checkbox_field d-inline">
                        <input checked={terms} onChange={(e) => setterms(!terms)} type="checkbox" name="rememberme" id="rememberme" />
                        <label htmlFor="rememberme">I agree with <Link to="/term-of-service">Terms of Services</Link></label>
                      </div>
                    </div>
                    <div className="form-group col-md-12 text-center animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="1s" style={{ animationDelay: '1s', opacity: 1 }}>
                      <button className="btn btn-default btn-radius" type="submit" name="login_user" onClick={() => formSubmit()}>
                        Submit
                        {
                          loader == 1 &&
                          <div class="spinner-border spinner-border-sm ms-2" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                        }
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider small_divider" />
              <div className="text-center">
                <span className="animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="1s" style={{ animationDelay: '1s', opacity: 1 }}>Already have an account? <Link to="/login"> Login</Link></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION SIGN UP */}
      {/* START FOOTER SECTION */}

      {/* END FOOTER SECTION */}
      <a href="#" className="scrollup btn-default" style={{ display: 'none' }}><i className="ion-ios-arrow-up" /></a>
      <Footer />
    </div>
  )
}
