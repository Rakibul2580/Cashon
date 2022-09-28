import { data } from 'autoprefixer';
import React from 'react';

const Cart = ({data}) => {
    const {name, time, picture} = data
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-lg shadow-indigo-500/40 bg-white">
            <figure><img src={picture} alt="Shoes" className='h-[382px]' /></figure>
            <div className="card-body text-center">
                <h2 className="card-title block">{name}</h2>
                <p>{time}</p>
                <div className="card-actions justify-center">
                <button className="btn btn-primary">Add Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Cart;