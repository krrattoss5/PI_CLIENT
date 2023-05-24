import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { nextP,backP,forceCurrent } from '../../redux/actions/actions'
import style from './Pagination.module.css'

export default function Pagination() {
  const dispatch = useDispatch()
  const { numPagination } = useSelector(s=>s)
  const { pokemons } = useSelector(s=>s)
  const last = Math.ceil(pokemons.length / 12)

  function nexTo (){
    dispatch(nextP())
  }
  function backTo (){
    dispatch(backP())
  }
  function forcePage (num){
    dispatch(forceCurrent(num))
  }
  return (
    <div className={style.container_pagination}>
      {numPagination <2?null:<button className={style.button_navigation_back} onClick={()=>backTo()}>BACK</button>}
      {numPagination > 3?<button className={style.force_button} onClick={()=>forcePage(1)}>1</button>:null}
      {numPagination < 3?null:<button className={style.button_number} onClick={()=>forcePage(numPagination - 2)}>{numPagination - 2}</button>}
      {numPagination < 2?null:<button className={style.button_number} onClick={()=>forcePage(numPagination - 1)}>{numPagination - 1}</button>}
      <span className={style.current_span}>{numPagination}</span>
      {numPagination > last-2?null:<button className={style.button_number} onClick={()=>forcePage(numPagination + 1)}>{numPagination + 1}</button>}
      {numPagination > last-3?null:<button className={style.button_number} onClick={()=>forcePage(numPagination + 2)}>{numPagination + 2}</button>}
      {numPagination === last?null:<button className={style.force_button} onClick={()=>forcePage(last)}>{last}</button>}
      {numPagination === last?null:<button className={style.button_navigation_next} onClick={()=>nexTo()}>NEXT</button>}
    </div>
  )
}
