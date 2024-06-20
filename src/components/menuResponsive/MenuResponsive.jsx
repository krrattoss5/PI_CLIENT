import style from './MenuResponsive.module.css'
import { filterBy,filterType,orderPokemons } from '../../redux/features/globalSlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import { isHomeNav } from '../../redux/features/globalSlice'
=======
import { homeNav as hNav } from '../../redux/actions/actions'
>>>>>>> f57d034bca69e3bd1c23cdeab4764a1d99b04e0f

export default function MenuResponsive({navHom}) {
  const dispatch = useDispatch()
  const [inMenu,setInMenu] = useState(false)
  // const { homeNav } = useSelector(s=>s.global)


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

  function handleMenu(){
    if(inMenu){
        setInMenu(false)
      }else{
        setInMenu(true)
      }
    }
<<<<<<< HEAD
  //   function handleNavHome(){
  //     if(homeNav){
  //       dispatch(isHomeNav(false))
  //       setInMenu(false)
  //     }else{
  //       dispatch(isHomeNav(true))
  //       setInMenu(false)
  //   }
  // }
=======
    function handleNavHome(e){
      if(homeNav){
        dispatch(hNav(false))
        setInMenu(false)
      }else{
        dispatch(hNav(true))
        setInMenu(false)
    }
  }
>>>>>>> f57d034bca69e3bd1c23cdeab4764a1d99b04e0f

  return (
    <div>
        <div className={style.container_nav} onClick={()=>handleMenu()}>
            <span className={style.span}></span>
            <span className={style.span}></span>
            <span className={style.span}></span>
        </div>
        {
            !inMenu?null:<div className={style.button_container}>
<<<<<<< HEAD
            <Link to="/home"><button onClick={()=>dispatch(isHomeNav(false))} className={style.button_nav}>HOME</button></Link>
            <Link to="/home"><button onClick={()=>dispatch(isHomeNav(true))} className={style.button_nav}>CREATE</button></Link>
=======
            <Link to="/home"><button onClick={()=>dispatch(hNav(false))} className={style.button_nav}>HOME</button></Link>
            <Link to="/home"><button onClick={()=>dispatch(hNav(true))} className={style.button_nav}>CREATE</button></Link>
>>>>>>> f57d034bca69e3bd1c23cdeab4764a1d99b04e0f
            <select className={style.button_nav} onChange={handleOrder} id='order'>
              <option type='default' disabled>ORDER</option>
              <option onClick={()=>setInMenu(false)}>Attack ▲</option>
              <option>Attack ▼</option>
              <option>A-Z</option>
              <option>Z-A</option>
            </select>
            <select className={style.button_nav} onChange={handlerFilterType} id='type'>
              <option type='default' disabled>FILTER BY TYPE</option>
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
              <option type='default' disabled>FILTER</option>
              <option>From Db</option>
              <option>From Api</option>
              <option>All</option>
            </select>
          </div>
        }
    </div>
  )
}
