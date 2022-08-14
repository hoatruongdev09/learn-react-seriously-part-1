import React, { Component } from 'react'
import './Card.style.css'

const Card = ({monster}) =>{
    const {name, email, id} = monster
    return (
        <div className='card-container'>
            <img 
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?size=180x180`}
                ></img>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}
export default Card