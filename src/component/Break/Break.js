import React, { useState } from 'react';

const Break = ({setValue}) => {
    return (
        <div>
            <h1 className='text-left my-8 text-blue-800 text-2xl font-semibold flex items-center'>Exercise Details</h1>
                <div className='flex justify-around rounded-md bg-gradient-to-r from-sky-400 to-indigo-500 p-2'>
                    <div className='flex'>
                        <button onClick={(e)=>setValue(e.target.innerText)} className="btn btn-ghost rounded-full text-lg">10</button>
                        <p className='text-sm -ml-4 flex items-center'>m</p>
                    </div>
                    <div className='flex'>
                        <button onClick={(e)=>setValue(e.target.innerText)} className="btn btn-ghost rounded-full text-lg">20</button>
                        <p className='text-sm -ml-4 flex items-center'>m</p>
                    </div>
                    <div className='flex'>
                        <button onClick={(e)=>setValue(e.target.innerText)} className="btn btn-ghost rounded-full text-lg">30</button>
                        <p className='text-sm -ml-4 flex items-center'>m</p>
                    </div>
                    <div className='flex'>
                        <button onClick={(e)=>setValue(e.target.innerText)} className="btn btn-ghost rounded-full text-lg">40</button>
                        <p className='text-sm -ml-4 flex items-center'>m</p>
                    </div>
                    <div className='flex'>
                        <button onClick={(e)=>setValue(e.target.innerText)} className="btn btn-ghost rounded-full text-lg">50</button>
                        <p className='text-sm -ml-4 flex items-center'>m</p>
                    </div>
            </div>
        </div>
    );
};

export default Break;