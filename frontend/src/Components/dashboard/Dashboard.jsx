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
// import Web3 from 'web3';



const columns = [
    { field: 'date', headerName: 'Date', width: 170 },
    { field: 'id', headerName: 'Id no.', width: 170 },
    { field: 'billing_name', headerName: 'Billing Name', width: 170 },
    { field: 'amount', headerName: 'Amount', width: 170 },
    { field: 'payment_status', headerName: 'Payment Status', width: 170 },
];


function Dashboard() {

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
            sethistory(tempArr)
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


    // const withdraw = () => {

    //     var burl = 'https://api.binance.com';
    //     var endPoint = '/api/v3/account';
    //     let timestamp = 1660586013008;
    //     // let timestamp = Date.now();
    //     // let address = "0x2b58713E4d56eAB77826279CfAcFF2216C049103"


    //     var dataQueryString = 'recvWindow=60000&timestamp=' + timestamp;

    //     var keys = {
    //         'akey': 'g7kzQm1IW2snmm04uBByzPg0maYBpN9FfUNG85YOPwF2PFt29cOMl86YV8a5ePRV',
    //         'skey': 'DWDsYWaV6x8kD5jjmC39FPxY8wKST4zHWiIm5O0gTwMq94ajc1PEJSZF9lv48kzz'
    //     }

    //     var signature = CryptoJS.HmacSHA256(dataQueryString, keys['skey']).toString(CryptoJS.enc.Hex);


    //     var ourRequest = new XMLHttpRequest();

    //     var url = burl + endPoint + '?' + dataQueryString + '&signature=' + signature;
    //     // var url = `${burl}/sapi/v1/capital/withdraw/apply?coin=BNB&address=${address}&amount=1.01&timestamp=${timestamp}&signature=${signature}`

    //     ourRequest.open('GET', url, true);
    //     ourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']);
    //     ourRequest.setRequestHeader("Content-Type", "application/json");


    //     ourRequest.onload = function () {
    //         ourData = JSON.parse(ourRequest.responseText);
    //         console.log(ourData);
    //     }
    //     ourRequest.send();


    //     // var xhr = new XMLHttpRequest();
    //     // xhr.withCredentials = true;

    //     // xhr.addEventListener("readystatechange", function () {
    //     //     if (this.readyState === 4) {
    //     //         console.log(this.responseText);
    //     //     }
    //     // });

    //     // let address = "0x2b58713E4d56eAB77826279CfAcFF2216C049103"
    //     // // let paramurl = `https://api.binance.com/sapi/v1/capital/withdraw/apply?coin=BNB&address=${address}&amount=1.01&timestamp=${timestamp}&signature=${signature}`
    //     // let paramurl = burl + endPoint + '?' + dataQueryString + '&signature=' + signature;
    //     // xhr.open("POST",paramurl);
    //     // xhr.setRequestHeader("Content-Type", "application/json");
    //     // xhr.setRequestHeader('X-MBX-APIKEY', keys['akey']);

    //     // xhr.send();

    // }

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
                                    <span className='fs-6 fw-500 text-light'>DASHBOARD</span>
                                    <span className='fs-7 text-light '> <Link to="dashboard" className='text-light text-faded text-decoration-none'>Dashboard </Link></span>
                                </div>
                                <div className="w-100 pt-3">
                                    <div className="row mx-0">
                                        <div className="col-lg-12 col-12 px-0 ">
                                            <div className="row mx-0 w-100">
                                                <div className="col-lg-4 col-12  pe-lg-2 px-0">
                                                    <div className="card ws-card px-3 py-3 mb-4 d-flex flex-column align-items-start">
                                                        <div className="d-flex align-items-center justify-content-between ">
                                                            <span className='text-faded fs-7'>Account Balance</span>
                                                        </div>
                                                        <span className='text-faded fs-5 fw-500'>{parseFloat(balance?.balance).toFixed(4)} USDT</span>
                                                        <span className="ws-badge mt-2 badge-soft-success ">Account Balance</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-12 px-lg-3 px-0">
                                                    <div className="card ws-card px-3 py-3 mb-4 d-flex flex-column align-items-start">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <span className='text-faded fs-7'>Total Deposits</span>
                                                        </div>
                                                        <span className='text-faded fs-5 fw-500'>{parseFloat(balance?.deposit).toFixed(4)} USDT</span>
                                                        <span className="ws-badge mt-2 badge-soft-warning ">Deposits Amount</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-12  ps-lg-2 px-0">
                                                    <div className="card ws-card px-3 py-3 mb-4 d-flex flex-column align-items-start">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <span className='text-faded fs-7'>Total Earnings</span>
                                                        </div>
                                                        <span className='text-faded fs-5 fw-500'>{parseFloat(balance?.earning).toFixed(4)} USDT</span>
                                                        <div className="d-flex align-items-center mt-2">
                                                            <span className="ws-badge  badge-soft-primary ">Account Earning</span>
                                                            <span className='ps-2' style={{ fontSize: "12px" ,lineHeight: "15px" }}>Pending <strong className='fw-600'> {parseFloat(balance?.pending).toFixed(4)} USDT</strong> </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mx-0 w-100">
                                                <div className="col-lg-12 col-12  px-0">
                                                    <div className="card ws-card px-3 py-3 mb-4 d-flex flex-column align-items-start">
                                                        <span className="fs-6 text-purple fw-500">Referral</span>
                                                        <span className='fs-8 py-3 pt-2 text-faded' style={{ lineHeight: "20px" }}>Lorem ipsum dolor sit, amet
                                                            consectetur adipisicing elit. In perspiciatis dolorum ex architecto
                                                            consectetur adipisicing elit. In perspiciatis dolorum ex architecto
                                                            consectetur adipisicing elit. In perspiciatis dolorum ex architecto
                                                            consectetur adipisicing elit. In perspiciatis dolorum ex architecto
                                                            consectetur adipisicing elit. In perspiciatis dolorum ex architecto
                                                            maxime hic sapiente cum temporibus consequuntur atque.</span>
                                                        <div className="d-flex align-items-center refer-code">
                                                            <span class="ps-2">{host}/register?refer={balance?.refer_code}</span>
                                                            <button className='btn-3 py-1 ms-3' onClick={() => copytoClipboard(host + '/register?refer=' + balance?.refer_code)} > <i className="fa fa-copy"></i> Copy Refer Code</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-12  px-0">
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

export default Dashboard