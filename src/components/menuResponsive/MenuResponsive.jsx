import style from './MenuResponsive.module.css'
import { filterBy,filterType,orderPokemons } from '../../redux/actions/actions'
import { useDispatch,useSelector } from 'react-redux'
import { useState } from 'react'

export default function MenuResponsive({navHome}) {
  const dispatch = useDispatch()
  const [inMenu,setInMenu] = useState(false)
  const { homeNav } = useSelector(s=>s)


  function handlerFilterBy(e){
    e.preventDefault()
    dispatch(filterBy(e.target.value))
    setInMenu(false)
  }

  function handlerFilterType(e){
    e.preventDefault()
    dispatch(filterType(e.target.value))
    setInMenu(false)
  }

  function handleOrder(e){
    e.preventDefault()
    dispatch(orderPokemons(e.target.value))
    setInMenu(false)
  }

  function handleMenu(e){
    if(inMenu){
        setInMenu(false)
      }else{
        setInMenu(true)
      }
    }
    function handleNavHome(e){
      if(homeNav){
        navHome(false)
        setInMenu(false)
      }else{
        navHome(true)
        setInMenu(false)
    }
  }

  return (
    <div>
        <div className={style.container_nav} onClick={()=>handleMenu()}>
            <span className={style.span}></span>
            <span className={style.span}></span>
            <span className={style.span}></span>
        </div>
        {
            !inMenu?null:<div className={style.button_container}>
            <a href="/#/home"><button onClick={()=>navHome(false)} className={style.button_nav}>HOME</button></a>
            <button onClick={()=>handleNavHome()} className={style.button_nav}>CREATE</button>
            <select className={style.button_nav} onChange={handleOrder} id='order'>
              <option type='default' disable='true'>ORDER</option>
              <option onClick={()=>setInMenu(false)}>Attack ▲</option>
              <option>Attack ▼</option>
              <option>A-Z</option>
              <option>Z-A</option>
            </select>
            <select className={style.button_nav} onChange={handlerFilterType} id='type'>
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
            </select>
            <select className={style.button_nav} onChange={handlerFilterBy} id='filter'>
              <option type='default' disable='true'>FILTER</option>
              <option>From Db</option>
              <option>From Api</option>
              <option>All</option>
            </select>
          </div>
        }
    </div>
  )
}
