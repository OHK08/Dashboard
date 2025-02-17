import React from 'react'

export default function TextBox({placeholder}) {
    return (
        <>
            <input
                type="text"
                className="form-control"
                placeholder={placeholder}
            />
        </>
    )
}
