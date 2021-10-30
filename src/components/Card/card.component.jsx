import React, { useState } from 'react'
import CardList from '../CardList/cardlist.component'
import listings from '../../stays.json'
import './card.style.css'

export default function CardComponent() {
    const [data, setData] = useState(listings)
    
    return (
        <div className="card-row">
            {
                data.map((datas) => {
                    return <CardList key={datas.title} {...datas}/>
                })
            }
        </div>
    )
}
