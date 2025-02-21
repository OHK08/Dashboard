import React from 'react'

export default function TextBox({placeholder, id}) {
    return (
        <>
            <input
                type="text"
                className="form-control"
                placeholder={placeholder}
                id = {id}
            />
        </>
    )
}
