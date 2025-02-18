import { useState } from 'react'
import React  from 'react'
import Child from './Child'

export default function Parent() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count+1)
        console.log(count);
    };
    return (
        <>
            {count}
            <Child incrementCount={incrementCount}/>
        </>
    )
}
