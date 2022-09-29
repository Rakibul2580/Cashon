import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Cart = ({data, notifyStime}) => {
    const {name, time, picture} = data
    useEffect(()=>{
        AOS.init();
      },[])
    return (
        <div>
            <div className="card w-full h-full shadow-lg bg-base-100 shadow-indigo-500/40" data-aos="zoom-in-up">
            <img src={picture} alt="Shoes" className='h-[382px]' />
            <div className="card-body text-white bg-gradient-to-r from-sky-400 to-indigo-500">
                <h2 className="card-title block">{name}</h2>
                <p>Time required: {time} Minutes</p>
                <div className="card-actions justify-center">
                <button onClick={()=>notifyStime(time)} className="btn bg-transparent text-white w-full">Add Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Cart;