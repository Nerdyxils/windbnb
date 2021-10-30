import React from 'react'
import { BiLocationPlus } from 'react-icons/bi'

export default function Location({ cities, pickCity }) {

    return (
        <div>
            {
                cities && [...cities].map((city, index) => {
                    return (
                        <p style={{fontSize: '14px', fontFamily: 'Mulish, sans-serif', lineHeight: '18px'}} key={index} onClick={() => pickCity(city)}>
                            <BiLocationPlus/>{city}, Finland
                        </p>
                    )
                })
            }
            
        </div>
    )
}
