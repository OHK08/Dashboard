import React from 'react'

export default function Option({img,title}) {
    return (
        <>
        {/* Props Drilling */}
            <li className="nav-item">
                <a className="nav-link text-white" href="#">
                    <img src={img} />
                    <span className='p-1' style={{fontSize: '14px'}}>{title}</span>
                </a>
            </li>
        </>
    )
}
