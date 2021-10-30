import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import Drawer from '@mui/material/Drawer'
import DrawerFilter from '../Drawer/DrawerFilter.component';
import rooms from '../../stays.json'
import './searchBar.style.css'

export default function SearchBar({place, getFilteredData, showAll}) {

    const [menu, setMenu] = useState(null)
    const [cities, setCities] = useState([]);
    const [location, setLocation] = useState(place)

    const [numAdults, setNumAdults] = useState(0);
    const [numChildren, setNumChildren] = useState(0);

    const [showing, setShowing] = useState(false);
    

    const toggleShow = (open) => (event) => {
        setShowing(open)
    }
    
    const openAndSetMenu = (menuVal) => {
        setMenu(menuVal)
        setShowing(true)
    };

    useEffect(() => {
        setCities(new Set(rooms.map((item) => item.city)))
    }, [])

    return (
        <>
        <div className="btn_div">
            <button className="input_single" onClick={() => openAndSetMenu("locationMenu")}>
                {location ? <p className="locale">{location}, Finland</p> : 'Add city'}
            </button>
            <button className="guest" onClick={() => openAndSetMenu("guestsMenu")}>
                {numAdults === 0 && numChildren === 0 ? "Add guests" :
                    <p className="numGuests">{numAdults + numChildren} guests</p>
                }
            </button>
            <button className="search" onClick={toggleShow(true)} >
                <FaSearch /> 
            </button>
        </div>
            

            <Drawer 
                anchor={"top"}
                open={showing} 
                onClose={toggleShow(false)} 
                sx={{
                    marginBlock: 5,
                    boxShadow: 0,
                    height: 460,
                  }}>
                <DrawerFilter 
                    cities={cities}
                    toggleShow={(val) => {
                        setShowing(val);
                    }}
                    changeCity={(val) => {
                        setLocation(val);
                    }}
                    location={location}
                    menu={menu}
                    adults={numAdults}
                    children={numChildren}
                    changeAdultsNum={(num) => setNumAdults(num)}
                    changeChildrenNum={(num) => setNumChildren(num)}
                    getFilteredData={(numAdults, numChildren, pickedLocation) => 
                    getFilteredData(numAdults, numChildren, pickedLocation)}
                />
            </Drawer>
        </>
    )
}
