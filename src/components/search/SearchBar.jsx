import React,{useState} from 'react'
import style from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
  const [name, setName] = useState('')
  function handleInput(e){
    setName(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    e.target.value = ''
  }

  return (
    <div className={style.container_form}>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='escribe un nombre...' name='search' onChange={handleInput} className={style.search_bar}/>
        <button type='submit' onClick={()=>{onSearch(name)}} className={style.button_search}>SEARCH</button>
      </form>
    </div>
  )
}