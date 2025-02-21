import React from 'react'

export default function FullButton({id}) {
    return (
        <>
            <button
                type="button"
                className="btn"
                style={{ fontSize: 13 }}
                id={id}
            >
                <img src="src/assets/svg/add.svg" /> Add New Card{" "}
            </button>
        </>
    )
}
