import React from 'react'
import BoldText from '../assets/BoldText'
import SmallText from '../assets/SmallText'

export default function Box({img, text, num1, num2 }) {
    return (
        <>
            <div className="mt-2 p-3 bg-light rounded ad_pics1">
                {/* add props drilling for image too */}
                <img src={img} />
                <p>{text}</p>
                <BoldText text={num1} style={{fontSize: '20px'}} />
                <SmallText num={num2} />
            </div>
        </>
    )
}
