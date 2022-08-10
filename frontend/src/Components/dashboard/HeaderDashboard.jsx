import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import { logout, selectUser } from '../../features/userSlice';


function HeaderDashboard() {
  const userState = useSelector(selectUser)
  const dispatch = useDispatch();
  return (
    <div>

      <Navbar variant="dark" expand="lg">
        <div className='container ws-container'>
          <Link to='deposit' className="navbar-brand">
            <img src="/assets/images/logo-white.png" className='ms-lg-3' alt="" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title={<><img src="/assets/images/user_img.png" className='ws-avater' alt="" /><span className='ws-avater-name'>{userState?.email}</span></>} id="basic-nav-dropdown">
                <li  class="dropdown-item pointer" onClick={() =>dispatch(logout())}>Logout</li>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  )
}

export default HeaderDashboard