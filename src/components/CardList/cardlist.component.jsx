import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import './cardlist.style.css'

export default function CardList({ photo, type, title, rating, superHost }) {
    return (<div className="card-item">
                <img src={photo} alt={title} className="card-img" />
                <div className="title-row">
                    {superHost && <span className="super_host">Super Host</span>  }
                    <p>{type}</p>
                    <p><AiFillStar className="s_icon"/>{rating}</p>
                </div>
                <h4>{title}</h4>
            </div>
    )
}