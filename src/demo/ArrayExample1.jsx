import React, { useState } from 'react';
import ArrayExample2 from './ArrayExample2';

export default function ArrayExample1() {
    const [values, setValues] = useState([1, 2, 3, 4, 5, 6]);

    const addElementNum = () => { 
        setValues((prevValues) => [...prevValues, prevValues.length + 1]); 
    };

    const deleteElementNum = (index) => {
        setValues((prevValues) => prevValues.filter((_, i) => i !== index));
        //setValues((prevItems) => prevItems.filter((_, i) => i !== index));
        //or
        // const newArray = [...values];
        // newArray.splice(index, 1);
        // setValues(newArray);
    };

    const [words, setWords] = useState(["apple", "orange", "mango"]);
    const [inputValue, setInputValue] = useState("");

    const addWords = () => {
        setWords((prevWords) => [...prevWords, inputValue]);
        setInputValue("");
    };

    const deleteWords = (index) => {
        setWords((prevWords) => prevWords.filter((_, i) => i !== index));
    };

    return (
        <>
            <ArrayExample2 
                values={values} 
                deleteElementNum={deleteElementNum} 
                addElementNum={addElementNum}
                words={words}
                addWords={addWords} 
                deleteWords={deleteWords} 
                setInputValue={setInputValue}
            />
            

        </>
    );
}
