import React, { useState, useEffect } from 'react'
import data from '../../stays.json'
import CardComponent from '../Card/card.component'
import HeaderComponent from '../Header/header.component'

import './mainBody.css'

export default function MainBody() {
    const [location, setLocation] = useState(null);
    const [items, setItems] = useState([]);

    const changeCity = (city) => {
        setLocation(city);
    }

    const getAllProperties = () => {
        setLocation(null);
        setItems(data);
    };

    useEffect(() => {
        getAllProperties();
    }, []);

    const getFilteredData = (children, adults, city) => {

        const totalGuests = children + adults;

        if (totalGuests === 0) {
            setItems(data.filter((property) => property.city === city));
        }

        if (totalGuests !== 0) {
            if (!city)
            setItems(
                data.filter((property) => property.maxGuests === totalGuests)
            );
            else {
                setItems(
                    data.filter(
                        (property) => 
                            property.maxGuests === totalGuests && property.city === city
                    )
                )
            }
        }
        if (totalGuests === 0 && city === null) getAllProperties()
    };

    return (
        <>
            <HeaderComponent 
                place={location}
                changeCity={(val) => changeCity(val)}
                getFilteredData={(children, adults, city) => 
                    getFilteredData(children, adults, city)}
                showAll ={() => getAllProperties()}
            />
            <div className="top-texts">
                <h2>Stays in Finland</h2>
                <p>{items.length}+ Stays</p>
            </div>
            
            <CardComponent />
            
        </>
    )
}
