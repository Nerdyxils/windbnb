import React from 'react'
import { BsPlusSquare } from 'react-icons/bs'
import { AiOutlineMinusSquare } from 'react-icons/ai'
export default function Guest({age, stage, handleDecrease, handleIncrease, increasing}) {
    return (
        <div>
            <h4>{stage}</h4>
            <p>{age}</p>
            <div className="number">
                <button onClick={handleIncrease}><BsPlusSquare/></button>
                    <p>{increasing}</p>
                <button onClick={handleDecrease}><AiOutlineMinusSquare/></button>
            </div>
        </div>
    )
}
