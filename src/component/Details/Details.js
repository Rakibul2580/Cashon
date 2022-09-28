import React from 'react';

const Details = () => {
    return (
        <div>
            <div>
            <h1 className='text-left my-8 text-blue-800 text-2xl font-semibold flex items-center'>Add A Break</h1>
                <div className='flex p-2 my-5 justify-around rounded-md bg-gradient-to-r from-sky-400 to-indigo-500'>
                    <div>
                        <h1 className='text-left text-white text-xl font-semibold flex items-center'>65</h1>
                    </div>
                    <div>
                        <p className='text-lg ml-1 text-start text-slate-300'>Height</p>
                    </div>
                </div>
                <div className='flex p-2 my-5 justify-around rounded-md bg-gradient-to-r from-sky-400 to-indigo-500'>
                    <div>
                        <h1 className='text-left text-white text-xl font-semibold flex items-center'>65</h1>
                    </div>
                    <div>
                        <p className='text-lg ml-1 text-start text-slate-300'>Height</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;