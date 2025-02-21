import React from 'react'
import ArrayExample1 from './ArrayExample1'

export default function ArrayExample2({ values, deleteElement }) {
    return (
        <>
            <div className='container'>
                {/* {values.map((item, index) => (
                    <p key={index}>{item}</p>
                ))} */}
                {values.map((item, index) => (
                    <p key={index} 
                        onClick={() => { deleteElement(index); }
                    }>
                        {item}
                    </p>
                ))}
            </div>
        </>
    )
}
