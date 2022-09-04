import { useState, useEffect } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { logout, selectUser } from '../../features/userSlice';
import { toogle, selectMode } from '../../features/modeSlice';
import axios from 'axios';
import config from '../../config';

function HeaderDashboard(props) {
  const [mode, setmode] = useState(0);
  const userState = useSelector(selectUser)
  const dispatch = useDispatch();

  const modeState = useSelector(selectMode)

  const [userinfo, setuserinfo] = useState([])

  const getUser = async () => {
    axios.post(`${config.baseURL}/get-user-info.php`, {
      token: userState.token,
      email: userState.email,
    }).then(async (response) => {
      setuserinfo(await response.data)
    })
  }

  useEffect(() => {
    getUser()
  }, [])



  return (
    <div>

      <Navbar variant="dark" expand="lg">
        <div className='container ws-container'>
          <Link to='/dashboard' className="navbar-brand">
            <img src="/assets/images/logo-white.png" className='ms-lg-3' alt="" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">

              <NavDropdown title={
                userinfo?.image != null ?
                  <>
                    <img className='ws-avater' src={`${config.baseURL}/images/${userinfo?.image}`} alt="" />
                    <span className='ws-avater-name'>{userState?.email}</span>
                  </>
                  :
                  <>
                    <img className='ws-avater' src="assets/images/user_img.png" alt="" />
                    <span className='ws-avater-name'>{userState?.email}</span>
                  </>
              }
                id="basic-nav-dropdown">
                <li class="dropdown-item pointer" onClick={() => dispatch(logout())}>Logout</li>
              </NavDropdown>
              <li className='ms-1'>
                <div >
                  <div class="toogle-mode" onClick={() => dispatch(toogle(!modeState))}>
                    {
                      modeState == 0 ?
                        <i className="fa fa-moon"></i>
                        :
                        <i className="fa fa-sun"></i>

                    }
                  </div>
                </div>
              </li>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  )
}

export default HeaderDashboard