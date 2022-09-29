
const Details = ({localData,setExeTime}) => {
    return (
        <div>
            <div>
            <h1 className='text-left my-8 text-blue-800 text-2xl font-semibold flex items-center'>Exercise Details</h1>
                <div className='flex p-2 my-5 justify-around rounded-md bg-gradient-to-r from-sky-400 to-indigo-500'>
                    <div>
                        <h1 className='text-left text-white text-xl font-semibold flex items-center'>Exercise time</h1>
                    </div>
                    <div>
                        <p className='text-lg ml-1 text-start text-slate-300'>{setExeTime} Minutes</p>
                    </div>
                </div>
                <div className='flex p-2 my-5 justify-around rounded-md bg-gradient-to-r from-sky-400 to-indigo-500'>
                    <div>
                        <h1 className='text-left text-white text-xl font-semibold flex items-center'>Break time</h1>
                    </div>
                    <div>
                        <p className='text-lg ml-1 text-start text-slate-300'>{localData} Minutes</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;