import React from 'react'

export default function AddCard() {
    return (
        <>
            <button
                type="button"
                className="m-3 btn btn-outline-dark"
                style={{ fontSize: 13 }}
            >
                <img src="src/assets/svg/add.svg" /> Add New Card{" "}
            </button>
        </>
    )
}
