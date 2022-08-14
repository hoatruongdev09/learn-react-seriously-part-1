import React, { Component } from 'react'
import Card from '../card/Card'
import './CardList.style.css'

const CardList = ({monsters, searchValue})  =>{
    const isFilteredValue = (text, searchValue) =>{
        return includeSearchValue(text,searchValue)|| searchValue.length == 0
    }
    const includeSearchValue = (text, searchValue) => {
        return text.toLowerCase().includes(searchValue.toLowerCase())
    }
    return (
        <div className='card-list'>
            {
                monsters.map(monster => (
                (isFilteredValue(monster.name, searchValue)) ?
                <Card key={`monster-card-${monster.name}-${monster.id}`} monster={monster}></Card> : <></>
                ))
            }
        </div>
            
    )
}
export default CardList