import React from 'react'

export default function MyButton({action,img}) {
    return (
        <>
            <button type="button" className="btn btn-light" onClick={action}>
                <img src={img}/>
            </button>
        </>
    )
}
