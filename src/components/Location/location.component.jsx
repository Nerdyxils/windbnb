import React from 'react'
import { BiLocationPlus } from 'react-icons/bi'

export default function Location({ name }) {
    return (
        <div>
            <p><BiLocationPlus/>{name}</p>
        </div>
    )
}
