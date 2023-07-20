import React from 'react'
import Card from '../card/Card'
import style from './Cards.module.css'
import { useSelector } from 'react-redux'
import Pagination from '../pagination/Pagination';

export default function Cards(props) {
  const { numPagination,pokemons } = useSelector(s=>s);
  let fromPage = (numPagination-1)*12;
  let toPage = numPagination *12;
  const current = props.pokemons.slice(fromPage,toPage)
  return (
    <div className={style.cards_container_out}>
      <div className={style.cards_container} >
        {
          current.map((p)=>
            <Card
              key={p.name+p.id+p.hp}
              id={p.id}
              name={p.name}
              img={p.img}
              type={p.type}
              types={p.types}
              onClose={props.onClose}
              navHome={props.navHome}
            />
          )
        }
      </div>
      <div className={style.Pagination}>
        {pokemons.length<12?null:<Pagination />}
      </div>
    </div>
  )
}
