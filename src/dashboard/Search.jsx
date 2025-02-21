import React from 'react'

export default function Search({id}) {
    return (
        <>
            <div className="input-group" id = {id}>
                <span className="input-group-text bg-light border-0">
                    <img src="src/assets/svg/search.svg" />
                </span>
                <input
                    type="text"
                    className="form-control bg-light border-0"
                    placeholder="Search"
                />
            </div>
        </>
    )
}
