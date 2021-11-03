import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { Divider } from '@mui/material'
import Guest from '../Guest/guest.component'
import LocationsMenu from '../Location/location.component'

import './drawer.styles.css'

const DrawerFilter = ({
    toggleShow, 
    menu,
    cities,
    location,
    children,
    adults,
    changeCity,
    changeAdultsNum,
    changeChildrenNum,
    getFilteredData}) => {
    const [pickedLocation, setPickedLocation] = useState(location);
    const [pickedMenu, setPickedMenu] = useState(menu);

    const [numAdults, setNumAdults] = useState(adults);
    const [numChildren, setNumChildren] = useState(children);



    return (
        <div className="drawer-box">
                <nav>
                        <div className="edt_search">
                            <h4>Edit your search</h4>
                            <AiOutlineClose className="close_icon" onClick={() => toggleShow(false)} />
                        </div>
                    <div className="form_inputs">
                        <div className="location locationBtn" onClick={() => setPickedMenu("locationMenu")}>
                            <span>LOCATION</span>
                            <div className="output">
                                {pickedLocation ? <p className="">{pickedLocation}, Finland</p> : "Add City"}  
                            </div>
                        </div>
                        <Divider orientation="vertical" flexItem />
                        <div className="guests" onClick={() => setPickedMenu("guest")}>
                            <span>GUESTS</span>
                            <div className="output">
                                {numAdults === 0 && numChildren === 0 
                                    ? "Add guests" 
                                    : <p className="numGuests">{numAdults + numChildren} guests</p>}
                            </div>
                        </div>
                        <Divider orientation="vertical" flexItem />
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
                    <LocationsMenu cities={cities} pickCity={(city) => setPickedLocation(city)} />
                ) : (
                    <Guest 
                        adults={numAdults}
                        children={numChildren}
                        changeAdults={(num) => setNumAdults(num)}
                        changeChildren={(num) => setNumChildren(num)}/>
                )}

                <div className="mobile-search">
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
    )
}

export default DrawerFilter;