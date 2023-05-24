import React from 'react'
import style from './Loading.module.css'


export default function Loading() {
  return (
    <div className={style.container_all}>
      <div className={style.container}>
        <div className={style.pokeball}></div>
      <div className={style.lds_ellipsis}><div></div><div></div><div></div><div></div></div>
      </div>
    </div>
  )
}
