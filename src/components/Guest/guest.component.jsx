import React from 'react'
import { BsPlusSquare } from 'react-icons/bs'
import { AiOutlineMinusSquare } from 'react-icons/ai'

import './guest.style.css'

export default function Guest({age, stage, handleDecrease, handleIncrease, increasing, handleDecreaseAge, handleIncreaseAge, increasingAge}) {

    return (
        <>
            <h4>{stage}</h4>
            <p>{age}</p>
            <div className="number">
                <AiOutlineMinusSquare onClick={handleDecrease} onClick={handleDecreaseAge} className="icon_btn m_ed"/>
                    <p>{increasing}{increasingAge}</p>
                <BsPlusSquare onClick={handleIncrease} onClick={handleIncreaseAge} className="icon_btn"/>
            </div>
        </>
    )
}
