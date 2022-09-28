import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

const Body = () => {
    const [datas, setDatas] = useState([])
    useEffect(()=>{
        fetch('fData.json')
        .then(res => res.json())
        .then(data => setDatas(data))
    },[]);
    return (
        <div className='bg-white px-10'>
            <h1>morning work</h1>
            <div className='block md:flex'>
                <div className='w-4/5'>
                <div className="grid grid-cols-3 gap-4">
                    {
                        datas.map(data => <Cart data={data} key={data._id}></Cart>)
                    }
                </div>
                </div>
                <div className='w-1/5'><h1>djddsds</h1></div>
            </div>
        </div>
    );
};

export default Body;