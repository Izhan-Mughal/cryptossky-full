import React, { useEffect, useState } from 'react'
import HeaderDashboard from './HeaderDashboard'
import SidebarDashboard from './SidebarDashboard'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import axios from 'axios';
import config from '../../config'
// import Web3 from 'web3';




function Profile() {

    const userState = useSelector(selectUser)

    const [userinfo, setuserinfo] = useState([])


    const getUser = async () => {
        axios.post(`${config.baseURL}/get-user-info.php`, {
            token: userState.token,
            email: userState.email,
        }).then(async (response) => {
            console.log(response.data);
            setuserinfo(await response.data)
        })
    }



    useEffect(() => {
        getUser()
    }, [])

    return (
        <>
            <div class="dashboard-body">
                <div className='ws-nav-bg'>
                    <img src="/assets/images/bg-effect.png" alt="" />
                </div>
                <div className="ws-nav">
                    <HeaderDashboard />
                </div>
                <div className="container ws-container dashboard-main">
                    <div className="w-100 px-lg-0 px-3 d-flex flex-lg-row flex-column">
                        <div className="ws-side-col pt-lg-0 pt-4">
                            <SidebarDashboard />
                        </div>
                        <div className="ws-side-main">
                            <div className="ps-lg-4">
                                <div className="d-flex align-items-center justify-content-between pt-3 pb-4">
                                    <span className='fs-6 fw-500 text-light'>Profile</span>
                                    <span className='fs-7 text-light '> <Link to="dashboard" className='text-light text-faded text-decoration-none'>Dashboard </Link>   <span className='text-faded fs-8'>/</span>  <Link to="profile" className='text-light text-faded text-decoration-none'>Profile</Link></span>
                                </div>
                                <div className="w-100">
                                    <div className="card ws-card mb-4 p-4" bis_skin_checked={1}>
                                        <div className="card-body">
                                            <div className="w-100 d-flex flex-column align-items-center">
                                                <img src="assets/images/user_img.png" className='profile-avater' alt="" />
                                                <h6 className='mt-4 text-dark'>{userinfo?.email}</h6>
                                            </div>
                                            <div className="w-100 d-flex flex-column ">
                                                <span className='mt-4 text-dark'>Personal Information</span>
                                                <span className='fs-8 mt-3 text-faded' style={{lineHeight:"10px"}}>Email Address</span>
                                                <span className=' fs-7 text-dark'>{userinfo?.email}</span>
                                                <span className='fs-8 mt-3 text-faded' style={{lineHeight:"10px"}}>Phone number</span>
                                                <span className=' fs-7 text-dark'>{userinfo?.phone}</span>
                                                <span className='fs-8 mt-3 text-faded' style={{lineHeight:"10px"}}>Office Address</span>
                                                <span className=' fs-7 text-dark'>User Address here...</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile