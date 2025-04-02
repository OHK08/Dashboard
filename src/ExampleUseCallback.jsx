import React, { useState, useCallback } from 'react'

export default function ExampleUseCallback() {
    const [count, setCount] = useState(0);
    const incrementCount = useCallback (() => {
        setCount(count + 1);
    }, [count]);
  return (
    <div>
        <h2>useCallback Example</h2>
        <p>You clicked {count} times</p>
        <button onClick = {incrementCount}>Click me</button>
    </div>
  )
}
