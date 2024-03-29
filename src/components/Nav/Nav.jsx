import React from 'react'
import SearchBar from '../search/SearchBar'
import style from './Nav.module.css'
import { filterBy,filterType,orderPokemons } from '../../redux/actions/actions'
import { useDispatch,useSelector } from 'react-redux'
import pokeRandom from '../../assets/pokeRandom'

export default function Nav({onSearch,navHome}) {
  const dispatch = useDispatch()
  const { homeNav } = useSelector(s=>s)

  function handlerFilterBy(e){
    e.preventDefault()
    dispatch(filterBy(e.target.value))
  }

  function handlerFilterType(e){
    e.preventDefault()
    dispatch(filterType(e.target.value))
  }

  function handleOrder(e){
    e.preventDefault()
    dispatch(orderPokemons(e.target.value))
  }

  return (
    <div className={style.container_nav}>
      <a href="/#/home"><img src={pokeRandom.img[74]} alt='random-img' className={style.logo} /></a>
      <div className={style.container_nav2}>
      {!homeNav?<select className={style.button_nav} onChange={handleOrder} id='order'>
        <option type='default' disable='true'>ORDER</option>
        <option>Attack ▲</option>
        <option>Attack ▼</option>
        <option>A-Z</option>
        <option>Z-A</option>
      </select>:null}
      {!homeNav?<select className={style.button_nav} onChange={handlerFilterType} id='type'>
        <option type='default' disable='true'>FILTER BY TYPE</option>
        <option>bug</option>
        <option>fighting</option>
        <option>flying</option>
        <option>poison</option>
        <option>ground</option>
        <option>rock</option>
        <option>ghost</option>
        <option>steel</option>
        <option>fire</option>
        <option>water</option>
        <option>grass</option>
        <option>electric</option>
        <option>psychic</option>
        <option>ice</option>
        <option>dragon</option>
        <option>dark</option>
        <option>fairy</option>
        <option>unknown</option>
        <option>shadow</option>
        <option>normal</option>
      </select>:null}
      {!homeNav?<select className={style.button_nav} onChange={handlerFilterBy} id='filter'>
        <option type='default' disable='true'>FILTER</option>
        <option>From Db</option>
        <option>From Api</option>
        <option>All</option>
      </select>:null}
      {!homeNav?<button onClick={()=>navHome(true)} className={style.button_nav}>CREATE</button>:null}
      <a href="/#/home"><button onClick={()=>navHome(false)} className={style.button_nav}>HOME</button></a>
      {!homeNav?<SearchBar onSearch={onSearch}/>:null}
    </div>
    </div>
  )
}
