import { Component, useState, useEffect } from 'react'
import CardList from './components/card-list/CardList'
import SearchBox from './components/search-box/SearchBox'
import './App.css';

const App = () => {
  const [title, setTitle] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [monsters, setMonsters] = useState([])
  console.log('render')
  useEffect(() => {
    console.log('use effect fired')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        setMonsters(users)
      })
      .catch(error => {
        console.error(error)
      })

    return () => {

    }
  }, [])


  const onSearchInputChange = (e) => {
    console.log(e.target.value)
    setSearchValue(e.target.value)
  }

  const onChangeTile = (e) => {
    setTitle(e.target.value)
  }

  return (
    <div className="App">
      <h1 className='app-title'>{title}</h1>
      <SearchBox className='monster-search-box' placeholder={'search monster'} searchValue={searchValue} onSearchInputChange={e => onSearchInputChange(e)}></SearchBox>
      <SearchBox className='monster-search-box' placeholder={'set title'} searchValue={title} onSearchInputChange={e => onChangeTile(e)}></SearchBox>
      <CardList monsters={monsters} searchValue={searchValue}></CardList>
    </div>
  )
}

export default App;
