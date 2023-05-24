import React from 'react'
import style from './NotFound.module.css'
import pokeRandom from '../../assets/pokeRandom';

export default function notFound() {
  return (
    <div className={style.container_404}>
      <h2>404</h2>
      <img src={pokeRandom.img[73]} alt='not found' />
      <h3>Not Found!</h3>
    </div>
  )
}
