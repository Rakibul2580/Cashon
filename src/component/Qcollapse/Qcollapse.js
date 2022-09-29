import React from 'react';

const Qcollapse = () => {
    return (
        <div className='my-5'> 
            <div tabIndex={0} className="collapse group my-3 rounded-md">
                <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                    #1. How does react work
                </div>
                <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content"> 
                    <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
                </div>
            </div>
            <div tabIndex={1} className="collapse group my-3 rounded-md">
                <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                    #2. Difference between props and state?
                </div>
                <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content"> 
                    <p>Props: Props are read only, It can be modified, Props Immutable <br/>State: State changes can be asynchronous. It can be modified using this.setState. State Mutuable.</p>
                </div>
            </div>
            <div tabIndex={2} className="collapse group my-3 rounded-md">
                <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
                    #3. What is the uses of UseEffect
                </div>
                <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content"> 
                    <p>The useEffect Hook always perform as SideEffect. For example: Add an event listener for a button. Data fetching from API when component mounts. Perform an action when state or props change. Clean up event listeners when the component unmounts.</p>
                </div>
            </div>
        </div>
    );
};

export default Qcollapse;