import React, { useState } from 'react';

const Break = () => {
    const [time, setTime] = useState("")
    console.log(time)
    return (
        <div>
            <h1 className='text-left my-8 text-blue-800 text-2xl font-semibold flex items-center'>Add A Break</h1>
                <div className='flex justify-around rounded-md bg-gradient-to-r from-sky-400 to-indigo-500 p-2'>
                <button onClick={(e)=>setTime(e.terget.value)} className="btn btn-ghost rounded-full text-lg">10 <span className='text-sm ml-1'>s</span></button>
                <button onClick={(e)=>setTime(e.terget.value)} className="btn btn-ghost rounded-full text-lg">20 <span className='text-sm ml-1'>s</span></button>
                <button onClick={(e)=>setTime(e.terget.value)} className="btn btn-ghost rounded-full text-lg">30 <span className='text-sm ml-1'>s</span></button>
                <button onClick={(e)=>setTime(e.terget.value)} className="btn btn-ghost rounded-full text-lg">40 <span className='text-sm ml-1'>s</span></button>
                <button onClick={(e)=>setTime(e.terget.value)} className="btn btn-ghost rounded-full text-lg">50 <span className='text-sm ml-1'>s</span></button>
            </div>
        </div>
    );
};

export default Break;