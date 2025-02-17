import React, { useState } from 'react';

function Example() 
{
    
const[count,countValue]=useState(0);
const[cardVisible,setCardVisiblity]=useState(true);


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

export default Example;