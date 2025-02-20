import React from 'react'

export default function Option({img,title}) {
    return (
        <>
        {/* Props Drilling */}
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <img src={img} />
                    <span className='p-1 text-white' style={{fontSize: '14px'}}>{title}</span>
                </a>
            </li>
        </>
    )
}
