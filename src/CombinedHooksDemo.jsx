import React, { useState, useEffect, useMemo } from 'react';

export default function HooksComparisonDemo() {
  const [count, setCount] = useState(0);
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    console.log('useEffect: Running after render due to count change');
    const fetchData = () => {
      console.log(`useEffect: Simulating fetch for count ${count}`);
      setTimeout(() => {
        console.log(`useEffect: Fetch completed for count ${count}`);
      }, 1000);
    };
    fetchData();
  }, [count]);

  const memoizedFetch = useMemo(() => {
    console.log('useMemo: Running simulated fetch due to count change');
    const fetchData = () => {
      console.log(`useMemo: Simulating fetch for count ${count}`);
      setTimeout(() => {
        console.log(`useMemo: Fetch completed for count ${count}`);
      }, 1000);
    };
    fetchData();
    return `Memoized fetch result for count ${count}`;
  }, [count]);

  const factorial = useMemo(() => {
    console.log('useMemo: Calculating factorial');
    let result = 1;
    for (let i = 1; i <= count; i++) {
      result *= i; // Expensive for large numbers
    }
    return result;
  }, [count]);

  const expensiveFactorialWithoutMemo = () => {
    console.log('Function: Calculating factorial without memo');
    let result = 1;
    for (let i = 1; i <= count; i++) {
      result *= i;
    }
    return result;
  };

  const incrementCount = () => {
    console.log('Incrementing count');
    setCount((prev) => prev + 1);
  };

  const triggerRerender = () => {
    console.log('Triggering re-render');
    setTrigger((prev) => prev + 1);
  };

  console.log('Component rendering');

  return (
    <div>
      <h1>Hooks Comparison Demo</h1>
      <p>Count: {count}</p>
      <p>Trigger: {trigger}</p>
      <p>Memoized Fetch Result: {memoizedFetch}</p>
      <p>Factorial (with useMemo): {factorial}</p>
      <p>Factorial (without memo): {expensiveFactorialWithoutMemo()}</p>
      <button onClick={incrementCount}>Increment Count</button>
      <button onClick={triggerRerender}>Trigger Re-render</button>
    </div>
  );
}