import React from 'react'
import data from '../../stays.json'
import CardComponent from '../Card/card.component'
import HeaderComponent from '../Header/header.component'

import './mainBody.css'

export default function MainBody() {
    return (
        <div>
            <HeaderComponent />
            <div className="top-texts">
                <h2>Stays in Finland</h2>
                <p>{data.length}+ Stays</p>
            </div>
            <CardComponent />
        </div>
    )
}
