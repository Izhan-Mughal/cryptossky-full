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



const columns = [
    { field: 'id', headerName: 'Id no.', width: 80 },
    { field: 'billing_name', headerName: 'Billing Name', width: 170 },
    { field: 'amount', headerName: 'Amount', width: 170 },
    { field: 'payment_status', headerName: 'Payment Status', width: 170 },
];



function Profile() {

    const userState = useSelector(selectUser)

    const [userinfo, setuserinfo] = useState([])
    const [history, sethistory] = useState([])
    const [balance, setbalance] = useState([])


    const getUser = async () => {
        axios.post(`${config.baseURL}/get-user-info.php`, {
            token: userState.token,
            email: userState.email,
        }).then(async (response) => {
            console.log(response.data);
            setuserinfo(await response.data)
        })
    }

    const getHistory = async () => {
        sethistory([])
        axios.post(`${config.baseURL}/get-history.php`, {
            token: userState.token,
            email: userState.email,
        }).then(async (response) => {
            let response_data = response.data
            let tempArr = []
            response_data.forEach(element => {
                tempArr.push(
                    { id: "#" + element.history.id, billing_name: element.user.name, amount: element.plan.amount, payment_status: element.history.status == 1 ? "Payed" : "Canceled" },
                )
            });
            sethistory(tempArr)
        })
    }


    const getBalance = async () => {
        axios.post(`${config.baseURL}/account-blance.php`, {
            token: userState.token,
            email: userState.email,
        }).then(async (response) => {
            setbalance(await response.data)
        })
    }



    useEffect(() => {
        getUser()
        getHistory()
        getBalance()
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
                                    <span className='fs-6 fw-500 text-light'>PROFILE</span>
                                    <span className='fs-7 text-light '> <Link to="dashboard" className='text-light text-faded text-decoration-none'>Dashboard </Link>   <span className='text-faded fs-8'>/</span>  <Link to="profile" className='text-light text-faded text-decoration-none'>Profile</Link></span>
                                </div>
                                <div className="w-100 pt-3">
                                    <div className="row mx-0">
                                        <div className="col-lg-3 col-12 px-0">
                                            <div className="card ws-card p-4 mb-4">
                                                <div className="card-body">
                                                    <div className="w-100 d-flex flex-column align-items-center">
                                                        <img src="assets/images/user_img.png" className='profile-avater' alt="" />
                                                        <h6 className='mt-4 text-dark text-capitalize'>{userinfo?.name}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card ws-card p-2 mb-4">
                                                <div className="card-body py-1 ">
                                                    <div className="w-100 d-flex flex-column ">
                                                        <span className=' text-dark'>Personal Information</span>
                                                        <span className='fs-8 mt-3 text-faded' style={{ lineHeight: "10px" }}>Email Address</span>
                                                        <span className=' fs-7 text-dark'>{userinfo?.email}</span>
                                                        <span className='fs-8 mt-3 text-faded' style={{ lineHeight: "10px" }}>Name</span>
                                                        <span className=' fs-7 text-dark'>{userinfo?.name}</span>
                                                        <span className='fs-8 mt-3 text-faded' style={{ lineHeight: "10px" }}>Phone number</span>
                                                        <span className=' fs-7 text-dark'>{userinfo?.phone}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-9 col-12 px-0 ps-lg-2">
                                            <div className="row mx-0 w-100">
                                                <div className="col-lg-3 col-12 ps-lg-3 px-0">
                                                    <div className="card ws-card px-3 py-3 mb-4 d-flex flex-column align-items-start">
                                                        <div className="d-flex align-items-center justify-content-between ">
                                                            <span className='text-faded fs-7'>Account Balance</span>
                                                        </div>
                                                        <span className='text-faded fs-5 fw-500'>{parseFloat(balance?.balance)} USDT</span>
                                                        <span className="ws-badge mt-2 badge-soft-success ">Account Balance</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-12 px-lg-3 px-0">
                                                    <div className="card ws-card px-3 py-3 mb-4 d-flex flex-column align-items-start">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <span className='text-faded fs-7'>Total Deposits</span>
                                                        </div>
                                                        <span className='text-faded fs-5 fw-500'>{parseFloat(balance?.deposit)} USDT</span>
                                                        <span className="ws-badge mt-2 badge-soft-warning ">Deposits Amount</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-12  ps-lg-2 pe-lg-3">
                                                    <div className="card ws-card px-3 py-3 mb-4 d-flex flex-column align-items-start">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <span className='text-faded fs-7'>Total Earnings</span>
                                                        </div>
                                                        <span className='text-faded fs-5 fw-500'>{parseFloat(balance?.earning)} USDT</span>
                                                        <div className="d-flex align-items-center mt-2">
                                                            <span className="ws-badge  badge-soft-primary ">Account Earning</span>
                                                            <span className='ps-2' style={{ fontSize: "12px", lineHeight: "15px" }}>Pending <strong className='fw-600'> {parseFloat(balance?.pending)} USDT</strong> </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mx-0 w-100">
                                                <div className="col-lg-12 col-12 px-lg-3 px-0">
                                                    <div className="card ws-card px-3 py-3 mb-4 d-flex flex-column">
                                                        <Box sx={{ height: 500, width: '100%' }}>
                                                            <DataGrid
                                                                rows={history}
                                                                columns={columns}
                                                                pageSize={12}
                                                                rowsPerPageOptions={[10]}
                                                                disableSelectionOnClick
                                                            />
                                                        </Box>
                                                    </div>
                                                </div>
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