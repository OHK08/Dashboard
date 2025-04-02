import React, { useMemo, useState } from 'react'

export default function ExampleUseMemo( { a, b } ) {
    const [count, setCount] = useState(0);
    const expensiveValue = useMemo (() => {
        console.log('Computing expensive value...');
        return a + b + count;
    }, [a, b, count]);
    const incrementCount = () => setCount(count + 1);
  return (
    <div>
        <p>The expensive value is: {expensiveValue}</p>
        <button onClick={incrementCount}>
            Increment Count
        </button>
    </div>
  )
}
