import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Divider } from '@mui/material'
import Guest from '../Guest/guest.component'

import './drawer.styles.css'
import LocationsMenu from '../Location/location.component'

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
                        <div className="location locationBtn" onClick={() => setPickedMenu("locationsMenu")}>
                            <span>LOCATION</span>
                            {pickedLocation ? <p className="location">{pickedLocation}, Finland</p> : "Add City"}
                        </div>
                        <Divider orientation="vertical" flexItem />
                        <div className="guests" onClick={() => setPickedMenu("guest")}>
                            <span>GUESTS</span>
                            {numAdults === 0 && numChildren === 0 
                            ? "Add guests" 
                            : <p className="numGuests">{numAdults + numChildren} guests</p>}
                        </div>
                        <Divider orientation="vertical" flexItem />
                        <div className="search">
                            <button 
                                onClick={() => {
                                    toggleShow(false);
                                    changeCity(pickedLocation);
                                    changeAdultsNum(numAdults);
                                    changeChildrenNum(numChildren);
                                    getFilteredData(numAdults, numChildren, pickedLocation)
                                }}>
                                <FaSearch />Search
                            </button>
                        </div>
                    </div>
                </nav>
                {pickedMenu === "locationMenu" ? (
                    <LocationsMenu cities={cities} pickCity={(city) => setPickedLocation(city)} />
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