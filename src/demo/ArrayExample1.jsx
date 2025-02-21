import React, { useState } from 'react'
import ArrayExample2 from './ArrayExample2';

export default function ArrayExample1() {

    const [values, setValues] = useState([1, 2, 3, 4, 5, 6]);

    const deleteElement = (index) => {
        setValues((prevItems) => prevItems.filter((_, i) => i !== index));
        // setValues((values) => values.splice(index, 0, values.length))

        // const newArray = [...values];
        // newArray.splice(index, 1);
        // setValues(newArray);

        //task add next number based on length of values, and do this with text and input box

    }

  return (
    <>
        <ArrayExample2 values={values} deleteElement={deleteElement}/>
    </>
  )
}
