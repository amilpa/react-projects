import React from 'react';
import { useState } from 'react';

import './Counter.css';


const Counter = () => {
    const [ count , setCount ] = useState(0)

    return(
        <div className='counter'>
            <h2 className='count'>This is the count { count }</h2>
            <button onClick={() => setCount( count + 1 )}>increase</button>
            <button onClick={() => setCount( count - 1 )}>decrease</button>
        </div>
    )
}

export default Counter;
