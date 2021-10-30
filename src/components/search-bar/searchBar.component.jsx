import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import Location from '../Location/location.component'
import Guest from '../Guest/guest.component'
import './searchBar.style.css'

export default function SearchBar({ showing, handleClickAgain, handleSearch, rooms, handleClick  }) {
    
    const [location, setLocation] = useState("active");
    const [guest, setGuest] = useState('');

    const handleClickLocation = () => {
        setLocation("active");
        setGuest("");
    }

    const handleClickGuest = () => {
        setGuest("active");
        setLocation("");
    }

    const [increasing, setIncreasing] = useState(0);

    const handleIncrease = () => {
        setIncreasing(increasing +1)
    }
    const handleDecrease = () => {
        setIncreasing(increasing -1);
        if (increasing === 0) {
            setIncreasing(0)
        }
    }

    const [increasingAge, setIncreasingAge] = useState(0);
    const handleIncreaseAge = () => {
        setIncreasingAge(increasingAge +1)
    }

    const handleDecreaseAge = () => {
        setIncreasingAge(increasingAge -1);
        if (increasingAge === 0) {
            setIncreasingAge(0)
        }
    }

    return (
        <>
            <div className="form_inputs" onClick={handleClick}>
                <div className="input_single">
                    <p style={{color: '#333', fontFamily:'Mulish, sans-serif'}}>Helsinki, Finland</p>
                </div>
                <div className="guest">
                   <p>Add Guests</p>
                </div>
                <div className="search">
                    <FaSearch /> 
                </div>
            </div>

            {showing === "active" ?

                <div>
                    <div className="overlay_nav" onClick={handleClickAgain}>
                        <nav>
                            <form className="form_inputs" onSubmit={(e) => handleSearch(e, rooms.map(room => room.city || room.maxGuests))}>
                                <div className="location-box">
                                    <div className="location" onClick={handleClickLocation}>
                                        <label htmlFor="location">LOCATION</label>
                                        <input type="text" name="location" placeholder="Helsinki, Finland" />
                                    </div>
                                    <div className="location-output">
                                        {
                                            location === "active" ? <div className="location-tab">
                                                <Location name="Helsinki, Finland" />
                                                <Location name="Oulu, Finland" />
                                                <Location name="Vaasa, Finland" />
                                                <Location name="Turku, Finland" />
                                            </div> : null
                                        }
                                    </div>
                                </div>
                                <div className="guest-box">
                                    <div className="guests" onClick={handleClickGuest}>
                                        <label htmlFor="guest">GUEST</label>
                                        <input type="text" name="guest" id="guest" placeholder="Add Guests" />
                                        <div className="guest-output">
                                            {
                                                guest === "active" ? <div className="guest-tab">
                                                    <Guest age="Age 13 or above" stage="Adults" 
                                                        increasing={increasing} 
                                                        handleIncrease={handleIncrease} 
                                                        handleDecrease={handleDecrease} />
                                                    <Guest age="Age 2 -12" stage="Children"
                                                        increasingAge={increasingAge} 
                                                        handleIncreaseAge={handleIncreaseAge} 
                                                        handleDecreaseAge={handleDecreaseAge}
                                                    />
                                                </div> : null
                                            }
                                        </div>
                                    </div>

                                </div>
                                
                                <div className="search">
                                    <button>
                                        <FaSearch />Search
                                    </button>
                                </div>
                            </form>
                        </nav>
                    </div>
                </div>
            : null}
        </>
    )
}
