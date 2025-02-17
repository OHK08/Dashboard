import React from 'react'

export default function Button({img}) {
    return (
        <>
            <button type="button" className="btn btn-light">
                <img src={img} />
            </button>
        </>
    )
}
