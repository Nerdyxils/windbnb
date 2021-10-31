import React from 'react'
import Logo from '../Logo'
import SearchBar from '../search-bar/searchBar.component'

import './header.style.css'

export default function HeaderComponent() {
    return (
        <div className="header">
            <Logo/>
            <SearchBar />
        </div>
    )
}
