import React, { useState, useEffect } from 'react'
import { BsPlusSquare } from 'react-icons/bs'
import { AiOutlineMinusSquare } from 'react-icons/ai'

import './guest.style.css'

export default function Guest({ changeAdults, changeChildren, adults, children }) {

    const [numAdults, setNumAdults] = useState(adults);
    const [numChildren, setNumChildren] = useState(children);

    useEffect(() => {
        changeAdults(numAdults);
        changeChildren(numChildren)
    }, [numChildren, numAdults, changeAdults, changeChildren]);

    return (
        <div className="guest_selector">
            <div className="selector">
                <h4>Adults</h4>
                <p>Ages 13 or above</p>
                <div className="number">
                    <AiOutlineMinusSquare onClick={() => numAdults > 0 && setNumAdults(numAdults -1 )} className="icon_btn m_ed"/>
                        <span>{numAdults}</span>
                    <BsPlusSquare onClick={() => setNumAdults(numAdults +1)} className="icon_btn"/>
                </div>
            </div>

            <div className="selector">
                <h4>Children</h4>
                <p>Ages 2-12</p>
                <div className="number">
                    <AiOutlineMinusSquare onClick={() => numChildren > 0 && setNumChildren(numChildren -1 )} className="icon_btn m_ed"/>
                        <span>{numChildren}</span>
                    <BsPlusSquare onClick={() => setNumChildren(numChildren +1)} className="icon_btn"/>
                </div>
            </div>
        </div>
    )
}
