import React, { useEffect, useRef, useState } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { useHistory, Link } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/userSlice';



export default function Header() {

    const history = useHistory();
    const [state, setstate] = useState(false);
    const [isToggle, setToggle] = useState(false);
    // const i = document.querySelector('.hello');

    const userState = useSelector(selectUser)

    const dispatch = useDispatch()

    // const toggleClass2 = () => {
    //     setToggle(!isToggle);
    // };

    // const changevalueonScroll = () => {

    //     const scrollvalue = document.documentElement.scrollTop;
    //     if (scrollvalue > 20 && i.style.backgroundColor == "rgb(18, 26, 109)") {
    //         setstate(true);
    //         i.style.backgroundColor = 'rgb(18, 26, 109)';
    //     }
    //     else {
    //         setstate(false);
    //         i.style.backgroundColor = 'hsla(120,100%,50%,0);';
    //         console.log('cannot perform this action');

    //     }
    // }
    // window.addEventListener('scroll', changevalueonScroll);
    const myFunc1 = () => {
    //     // document.querySelector('.hello').style.backgroundColor = '#121a6d';
    //     const i = document.querySelector('.hello');
    //     const scrollvalue = document.documentElement.scrollTop;
    //     if (scrollvalue < 50 || i.style.backgroundColor == 'rgb(18, 26, 109)') {
    //         i.style.backgroundColor = 'hsla(120,100%,50%,0);'
    //         // i.style.backgroundColor = 'transparent';


    //     }
    //     else {
    //         i.style.backgroundColor = 'rgb(18, 26, 109)';

    //     }
    }
    // "header_wrap fixed-top pt-lg-4"
    return (
        <>

            <header className={state ? "header nav-fixed header_wrap fixed-top py-lg-2 hello w-100" : "  header header_wrap fixed-top pt-0 pb-0 w-100"}>
                <Container fluid>
                    <Navbar id="mynav" className="navbar" expand="lg">
                        <Navbar.Brand className="navbar-brand page-scroll animation animated fadeInDown"><img src={process.env.PUBLIC_URL + "assets/images/cryptoskky-logo.png"} alt="" onClick={() => history.push('/')} /></Navbar.Brand>
                        <div onClick={myFunc1}>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler animation animated fadeInDown" data-animation="fadeInDown" data-animation-delay="1.1s" style={{ animationDelay: '1.1s', opacity: 1 }}>
                                <span className="ion-android-menu" />
                            </Navbar.Toggle>
                        </div>

                        <Navbar.Collapse className="navbar-collapse collapse " id="navbarSupportedContent" style={{}}>
                            <ul className="navbar-nav m-auto">
                                <li className="animation animated fadeInDown" data-animation="fadeInDown" data-animation-delay="1s" style={{ animationDelay: '1s', opacity: 1 }}>
                                    <a className="nav-link active" href="/">Home</a>
                                </li>
                                <li className="animation animated fadeInDown" data-animation="fadeInDown" data-animation-delay="1.2s" style={{ animationDelay: '1.2s', opacity: 1 }}>
                                    <a className="nav-link page-scroll dropdown-toggle" href="#" data-toggle="dropdown">About</a>
                                    <div className="dropdown-menu">
                                        <ul className="list_none ps-0">
                                            <li><a className="dropdown-item nav-link page-scroll nav_item" href="#about">About Cryptossky</a></li>
                                            <li><a className="dropdown-item nav-link page-scroll nav_item" href="#service">IT IS SAFE INVEST IN CRYPTOSSKY?</a></li>
                                            <li><a className="dropdown-item nav-link page-scroll nav_item" href="#">KNOWING OUR BONUS</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="animation animated fadeInDown" data-animation="fadeInDown" data-animation-delay="1.3s" style={{ animationDelay: '1.3s', opacity: 1 }}><a className="nav-link page-scroll nav_item" href="#roadmap">Road Map</a></li>
                                <li className="animation animated fadeInDown" data-animation="fadeInDown" data-animation-delay="1.4s" style={{ animationDelay: '1.4s', opacity: 1 }}><a className="nav-link page-scroll nav_item" href="#plans">Our Plans</a></li>
                                <li className="animation animated fadeInDown" data-animation="fadeInDown" data-animation-delay="1.6s" style={{ animationDelay: '1.6s', opacity: 1 }}><Link className="nav-link page-scroll nav_item" to="/shop">Shop</Link></li>
                                <li className="animation animated fadeInDown" data-animation="fadeInDown" data-animation-delay="1.8s" style={{ animationDelay: '1.8s', opacity: 1 }}><a className="nav-link page-scroll nav_item" href="#contact">Contact</a></li>
                            </ul>
                            <ul className="navbar-nav nav_btn align-items-center">
                                <li className="animation animated fadeInDown" data-animation="fadeInDown" data-animation-delay="1.9s" style={{ animationDelay: '1.9s', opacity: 1 }}>
                                    {/* <div className="lng_dropdown  mx-lg-0 mx-auto mt-2 mb-3 mt-lg-0 mb-lg-0">
                                <select name="countries" id="lng_select">
                                    <option value='en' data-image="assets/images/eng.png" data-title="English">EN
                                    </option>

                                </select>
                            </div> */}
                                    <div class="dropdown">
                                        <button class="btn bg-none d-flex gap-4 align-items-center btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className='px-1  bg-none'><img className="rounded-circle w-100" src="assets/images/eng.png" alt="" /> EN</span>
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li className='p-0'>
                                                <span className='px-1 bg-none d-flex text-white gap-3'><img className="rounded-circle img-fluid" src="assets/images/eng.png" alt="" /> EN</span>
                                            </li>

                                        </ul>
                                    </div>
                                </li>

                                <li className="animation animated fadeInDown" data-animation="fadeInDown" data-animation-delay="2s" style={{ animationDelay: '2s', opacity: 1 }}>
                                    {
                                        userState == null ?
                                            <Link className="btn btn-default btn-radius nav_item" to="/login">Login</Link>
                                            :
                                            <>
                                                <Link className="btn btn-default btn-radius nav_item" to="/dashboard">Dashboard</Link>
                                                <button onClick={() => dispatch(logout())} className="btn btn-default btn-radius nav_item" to="/login" style={{ fontSize: "14px !important" }}>Logout</button>
                                            </>
                                    }
                                </li>
                            </ul>
                        </Navbar.Collapse>
                    </Navbar>
                </Container >
            </header>
            <img src={process.env.PUBLIC_URL + "assets/images/bg.png"} class='bg-image' alt="" />
        </>
    )
}
