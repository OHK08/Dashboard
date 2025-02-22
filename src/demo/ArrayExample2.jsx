import React from 'react';

export default function ArrayExample2({ values, deleteElementNum, addElementNum, words, deleteWords, addWords, setInputValue }) {
    return (
        <div className='container'>
            <h3>Numbers</h3>
            {values.map((item, index) => (
                <p key={index} onClick={() => deleteElementNum(index)}>
                    {item}
                </p>
            ))}
            <button onClick={addElementNum}>Add Number</button>

            <h3>Words</h3>
            {words.map((word, index) => (
                <p key={index} onClick={() => deleteWords(index)}>
                    {word}
                </p>
            ))}
            <input
                type="text"
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter a word"
            />
            <button onClick={addWords}>Add Word</button>
        </div>
    );
}
