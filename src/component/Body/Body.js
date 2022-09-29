import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPersonWalking } from '@fortawesome/free-solid-svg-icons'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'

import Myself from '../Myself/Myself';
import Break from '../Break/Break';
import Details from '../Details/Details';
import Qcollapse from '../Qcollapse/Qcollapse';


const Body = () => {
    const [totlTime, settotlTime] = useState([])
    const notifyStime = (addTime) =>{
        settotlTime([...totlTime, addTime])
        Swal.fire({
            text: 'Your work has been saved',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    }
    const setExeTime = totlTime?.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    
    const notify = () => toast("Wow so easy!");

    const [datas, setDatas] = useState([])
    useEffect(()=>{
        fetch('fData.json')
        .then(res => res.json())
        .then(data => setDatas(data))
    },[]);

    const [breakTime, setBreakTime] = useState('0')
    const [localData, setLocalData] = useState('0')
    const setValue = (time) =>{
        localStorage.setItem('break', JSON.stringify(time))
        setBreakTime(time)
    }
    useEffect(()=>{
        const timeGet = localStorage.getItem('break')
        const timeGetPars = JSON.parse(timeGet)
        if(timeGetPars){
            setLocalData(timeGetPars)
        }
    },[breakTime])

    return (
        <div className='bg-white px-3 md:px-6 lg:px-10 pt-10'>
            <h1 className='text-left text-blue-900 md:text-5xl md:font-bold text-4xl font-semibold '><FontAwesomeIcon icon={faPersonWalking}></FontAwesomeIcon> Morning work</h1>
            <p className='text-2xl my-10 font-semibold text-white bg-gradient-to-r from-sky-400 to-indigo-400 p-5 w-full rounded-lg'>Select today’s exercise</p>
            <div className='block md:flex'>
                <div className='w-12/12 md:w-8/12 lg:9/12'>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                    {
                        datas.map(data => <Cart data={data} notifyStime={notifyStime} key={data._id}></Cart>)
                    }
                </div>
                <Qcollapse></Qcollapse>
                </div>
                <div className='w-12/12 md:w-4/12 lg:3/12 px-3 shadow-lg h-full py-8 ml-3 md:sticky top-0'>
                    <Myself></Myself>
                    <Break setValue={setValue}></Break>
                    <Details localData={localData} setExeTime={setExeTime}></Details>
                    <button onClick={notify} className="btn bg-gradient-to-r from-sky-400 to-indigo-500 border-0 text-white w-45">Add Now</button><ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Body;