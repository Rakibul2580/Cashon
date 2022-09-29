import React from 'react';
import Myimg from '../Body/img/WhatsApp Image 2022-01-01 at 3.16.13 PM (2).jpeg'
const Myself = () => {
    return (
        <div>
            <div>
                <div className='flex items-center justify-around'>
                    <img src={Myimg} alt="" className='w-20 h-20 rounded-full' />
                    <div>
                        <h1 className='text-left text-blue-900 text-xl font-semibold flex items-center'>Rakibul</h1>
                        <h1 className='text-sm ml-1 text-start text-slate-600'>(Hasan)</h1>  
                    </div>
                </div>
                <div className='flex p-2 my-8 justify-around rounded-md bg-gradient-to-r from-sky-400 to-indigo-500'>
                    <div>
                        <h1 className='text-left text-white text-xl font-semibold flex items-center'>60 <span className='text-sm ml-1 text-slate-400'>kg</span></h1>
                        <p className='text-lg ml-1 text-start text-slate-300'>Weight</p>
                    </div>
                    <div>
                        <h1 className='text-left text-white text-xl font-semibold flex items-center'>5.5 <span className='text-sm ml-1 text-slate-400'>f</span></h1>
                        <p className='text-lg ml-1 text-start text-slate-300'>Height</p>
                    </div>
                    <div>
                        <h1 className='text-left text-white text-xl font-semibold flex items-center'>21 <span className='text-sm ml-1 text-slate-400'>yrs</span></h1>
                        <p className='text-lg ml-1 text-start text-slate-300'>Age</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Myself;