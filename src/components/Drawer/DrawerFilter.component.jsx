import React, { useState } from 'react'
import Location from '../Location/location.component'
import { FaSearch } from 'react-icons/fa'
import Guest from '../Guest/guest.component'

import './drawer.styles.css'

const DrawerFilter = ({
    toggleShow, 
    changeAdultsNum,
    changeChildrenNum,
    getFilteredData,
    menu,
    cities,
    location,
    adults,
    children,
    changeCity
}) => {
    const [pickedLocation, setPickedLocation] = useState(location);
    const [pickedMenu, setPickedMenu] = useState(menu);

    const [numAdults, setNumAdults] = useState(adults);
    const [numChildren, setNumChildren] = useState(children);



    return (
        <div className="drawer-box">
            <div className="overlay_nav">
                <nav>
                    <div className="form_inputs">
                        <div className="location locationBtn" onClick={() => setPickedMenu("locationMenu")}>
                            <span>LOCATION</span>
                            {pickedLocation ? <p className="location">{pickedLocation}, Finland</p> : "Add City"}
                        </div>

                        <div className="guests" onClick={() => setPickedMenu("guestsMenu")}>
                            <span>GUESTS</span>
                            {numAdults === 0 && numChildren === 0 ? "Add guests" : <p className="numGuests">{numAdults + numChildren} guests</p>}
                        </div>

                        <div className="search">
                            <button 
                                onClick={() => {
                                    toggleShow(false);
                                    changeCity(pickedLocation);
                                    changeAdultsNum(numAdults);
                                    changeChildrenNum(numChildren);
                                    getFilteredData(numAdults, numChildren, pickedLocation);
                                }}>
                                <FaSearch />Search
                            </button>
                        </div>
                    </div>
                </nav>
                {pickedMenu === "locationMenu" ? (
                    <Location cities={cities} pickCity={(city) => setPickedLocation(city)} />
                ) : (
                    <Guest 
                        adults={numAdults}
                        children={numChildren}
                        changeAdults={(num) => setNumAdults(num)}
                        changeChildren={(num) => setNumChildren(num)}/>
                )}
            </div>
        </div>
    )
}

export default DrawerFilter;