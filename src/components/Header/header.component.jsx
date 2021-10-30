import React, { useState } from 'react'
import Logo from '../Logo'
import SearchBar from '../search-bar/searchBar.component'
import rooms from '../../stays.json'

import './header.style.css'

export default function HeaderComponent() {

    const [room, setRoom] = useState(rooms);

    const [showing, setShowing] = useState('');

    const handleClickAgain = () => {
        setShowing('');
    }

    const handleClick = () => {
        setShowing("active");
    }

    const handleSearch = (e, city) => {
        e.preventDefault();

        const newRoom = rooms.filter(room => room.city.toLowerCase() === e.target.children[0].children[1].value.toLowerCase());
        const guest = rooms.filter(room => room.maxGuests === parseInt(e.target.children[1].children[1].value));
        {newRoom.length && setRoom(newRoom)}
        {guest.length && setRoom(guest)}
        setShowing('');
    }
    
    return (
        <div className="header">
            <Logo/>
            <SearchBar rooms={room} showing={showing} handleClick={handleClick} handleClickAgain={handleClickAgain} handleSearch={handleSearch} />
        </div>
    )
}
