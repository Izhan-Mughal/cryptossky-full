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
import CryptoJS from 'crypto-js';
import swal from 'sweetalert';
// import Web3 from 'web3';



const columns = [
    { field: 'date', headerName: 'Date', width: 170 },
    { field: 'id', headerName: 'Id no.', width: 170 },
    { field: 'billing_name', headerName: 'Billing Name', width: 170 },
    { field: 'amount', headerName: 'Amount', width: 170 },
    { field: 'payment_status', headerName: 'Payment Status', width: 170 },
];


function Withdraw() {

    const userState = useSelector(selectUser)

    const [history, sethistory] = useState([])
    const [balance, setbalance] = useState([])


    const getBalance = async () => {
        axios.post(`${config.baseURL}/account-blance.php`, {
            token: userState.token,
            email: userState.email,
        }).then(async (response) => {
            setbalance(await response.data)
        })
    }

    const withdrawRequest = () => {
        axios.post(`${config.baseURL}/request-withdraw.php`, {
            token: userState.token,
            email: userState.email,
        }).then(async (response) => {
            if (response.data.status == "True") {
                swal(response.data.data)
            }
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
                    { date: element.history.created_at, id: "#" + element.history.id, billing_name: element.user.name, amount: element.plan.amount, payment_status: element.history.status == 1 ? "Payed" : "Canceled" },
                )
            });
            // sethistory(tempArr)
        })
    }

    const copytoClipboard = (code) => {
        navigator.clipboard.writeText(code)
        alert('Link copy to clipboard')
    }


    const host = window.location.origin

    useEffect(() => {
        getBalance()
        getHistory()
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
                                    <span className='fs-6 fw-500 text-light'>WITHDRAW</span>
                                    <span className='fs-7 text-light '> <Link to="dashboard" className='text-light text-faded text-decoration-none'>Dashboard </Link>   <span className='text-faded fs-8'>/</span>  <Link to="withdraw" className='text-light text-faded text-decoration-none'>Withdraw</Link></span>
                                </div>
                                <div className="w-100 pt-3">
                                    <div className="row mx-0">
                                        <div className="col-lg-12 col-12 px-0 ">
                                            <div className="row mx-0 w-100">
                                                <div className="col-lg-12 col-12  px-0">
                                                    <div className="card ws-card px-3 py-3 mb-4 d-flex flex-column">
                                                        <div className="d-flex pb-4 justify-content-between">
                                                            <span className='fs-6  '>Withdrawls</span>
                                                            <button onClick={() => withdrawRequest()} className="btn btn-success text-capitalize fw-400 py-2 px-3" style={{ color: ' #fff', backgroundColor: '#45cb85' }}>Request Withdraw</button>
                                                        </div>
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

export default Withdraw