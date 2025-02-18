import React from 'react';
import Menu from '../Menu';
import MyCards from '../cards/MyCards';

export default function Button1() {

  const hello = () => {
    return (
      <>
      console.log("hello");
      <div className='d-none'>
        <Menu Content={<MyCards />} />
      </div>
      </>
    );
  };

  return (
    <>
      {/* <Menu Content={<MyCards/>} hello = {hello}/> */}
      <button onClick={hello}>Click me</button>
    </>
  );
}


// import React, { useState } from 'react';
// import Menu from '../Menu';
// import MyCards from '../cards/MyCards';

// export default function Button1() {
//   const [isVisible, setIsVisible] = useState(false);

//   const toggleVisibility = () => {
//     setIsVisible(prevState => !prevState);
//   };

//   return (
//     <>
//       <button onClick={toggleVisibility}>Click me</button>
//       {isVisible && <Menu Content={<MyCards />} />}
//     </>
//   );
// }

