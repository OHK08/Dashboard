import React, { useState } from 'react';

function ExampleUseState() 
{
const[count,countValue]=useState(0);

  const incrementCount = () => {
    countValue(count+1);
    console.log(count);
  };

  return (
    <div className= "bg-dark text-white">
      <p>You clicked {count} times</p>
      <button onClick={incrementCount}>
        Click me
      </button>
    </div>
  );
}

export default ExampleUseState;