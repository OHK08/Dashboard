import React from 'react'

export default function MyButton({action,img, id, id1}) {
    return (
        <>
            <button type="button" className="btn" onClick={action} id={id}>
                <img src={img} id={id1}/>
            </button>
        </>
    )
}
