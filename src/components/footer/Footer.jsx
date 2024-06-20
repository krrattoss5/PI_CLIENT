import React from 'react'
import s from './Footer.module.css'
import pokeRandom from '../../assets/pokeRandom'

export default function Footer() {
  return (
    <div className={s.container}>
        <div className={s.items}>
            <img src={pokeRandom.img[70]} alt='random-img' className={s.henry} />
        </div>
        <div className={s.items}>
            <h3>Repositorios</h3>
            <br />
            <a href='https://github.com/krrattoss5/PI_API'><h4>Back-End</h4></a>
            <br />
            <a href='https://github.com/krrattoss5/PI_CLIENT'><h4>Front-End</h4></a>
        </div>
        <div className={s.items}>
            <h3>Sobre Mi</h3>
            <br />
            <a href='https://github.com/krrattoss5'><h4>GitHub</h4></a>
            <br />
            <a href='https://www.linkedin.com/in/didier-pereira-71145321a/'><h4>Linkedin</h4></a>
        </div>
        <p className={s.copy}>© 2023, PokeApp</p>
    </div>
  )
}
