import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import './cardlist.style.css'

export default function CardList({ image, type, title, rating, superHost, beds }) {
    return (<div className="card-item">
                <img src={image} alt={title} className="card-img" />
                <div className="title-row">
                    {superHost && <span className="super_host">Super Host</span>  }
                    <p>{type}{beds && `. ${beds} ${beds > 1 ? "beds" : "bed"}`}</p>
                    <p><AiFillStar className="s_icon"/>{rating}</p>
                </div>
                <h4>{title}</h4>
            </div>
    )
}
