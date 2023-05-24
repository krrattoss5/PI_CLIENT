import React from 'react'
import s from './Home.module.css'
import Form from '../form/Form'
import Cards from '../cards/Cards'
import { useSelector } from 'react-redux'
import Loading from '../loading/Loading'

export default function Home({onClose,navHome}) {
  const { pokemons,homeNav,allPokemons } = useSelector(s=>s)
  return (
    <div className={s.all}>
      {!allPokemons.length?<div><Loading /><span className={s.span_1}>Aún no hay Pokemons!</span></div>:<>
        {!homeNav?null:<Form navHome={navHome}/>}
        {homeNav?null:<Cards pokemons={pokemons} onClose={onClose}/>}
      </>}
    </div>
  )
}