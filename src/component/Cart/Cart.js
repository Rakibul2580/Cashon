import { data } from 'autoprefixer';
import React from 'react';


import Swal from 'sweetalert2'
// Swal.fire({
//     title: 'Error!',
//     text: 'Do you want to continue',
//     icon: 'error',
//     confirmButtonText: 'Cool'
//   })

// CommonJS

const Cart = ({data}) => {
    const {name, time, picture} = data
    // const notify = () => toast("Wow so easy!");
    const notify = () =>{
        Swal.fire({
            text: 'Your work has been saved',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    }
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-lg shadow-indigo-500/40 bg-white">
            <img src={picture} alt="Shoes" className='h-[382px]' />
            <div className="card-body text-white bg-gradient-to-r from-sky-400 to-indigo-500">
                <h2 className="card-title block">{name}</h2>
                <p>Time required: {time} Minutes</p>
                <div className="card-actions justify-center">
                {/* <button onClick={notify} className="btn bg-transparent text-white w-45">Add Now</button><ToastContainer /> */}
                <button onClick={notify} className="btn bg-transparent text-white w-full">Add Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Cart;