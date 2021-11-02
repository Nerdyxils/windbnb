import React from 'react'
import { BiLocationPlus } from 'react-icons/bi'

export default function LocationsMenu({ cities, pickCity }) {

    return (
        <div>
            {
                cities && [...cities].map((city, index) => {
                    return (
                        <p className="location_out" key={index} onClick={() => pickCity(city)}>
                            <BiLocationPlus/>{city}, Finland
                        </p>
                    )
                })
            }
            
        </div>
    )
}
