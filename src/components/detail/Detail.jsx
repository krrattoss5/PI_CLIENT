import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch,useSelector } from 'react-redux'
import { addPokemon } from '../../redux/actions/actions'
import PokeType from '../pokeType/PokeType'
import Loading from '../loading/Loading'
import style from './Detail.module.css'
import MenuResponsive from '../menuResponsive/MenuResponsive'


export default function Detail() {
  const {id} = useParams()
  const {pokemon} = useSelector(s=>s)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(addPokemon([]))
    axios.get(`http://localhost:3001/pokemon/${id}`)
        .then(({data})=>{
          dispatch(addPokemon(data))
        })
  },[dispatch, id])

  return (
    <div className={style.detail_box}>
      <div className={style.container_detail}>
        {!pokemon.name||!pokemon.img||!pokemon.attack||!pokemon.hp||!pokemon.defense?<Loading />:
          <>
            <img src={pokemon.img} alt={pokemon.name} className={style.image_detail}/>
              <h1>{pokemon.name}</h1>
              <span className={style.id_area}>Id:#{pokemon.id}</span>
            <div className={style.info_area}>
              <div className={style.box_span}>
                  <span>📏 Height:</span>
                  <span>{pokemon.height}</span>
              </div>
              <div className={style.menu}><div className={style.prueba} style={{ width:`${pokemon.height > 99?100:pokemon.height}%`}}></div></div>
              <div className={style.box_span}>
                  <span>⚖️ Weight:</span>
                  <span>{pokemon.weight}</span>
              </div>
              <div className={style.menu}><div className={style.prueba} style={{ width:`${pokemon.weight > 99?100:pokemon.weight}%`}}></div></div>
              <div className={style.box_span}>
                  <span>🩸 Hp:</span>
                  <span>{pokemon.hp}</span>
              </div>
              <div className={style.menu}><div className={style.prueba} style={{ width:`${pokemon.hp > 99?100:pokemon.hp}%`}}></div></div>
              <div className={style.box_span}>
                  <span>⚔️ Attack:</span>
                  <span>{pokemon.attack}</span>
              </div>
              <div className={style.menu}><div className={style.prueba} style={{ width:`${pokemon.attack > 99?100:pokemon.attack}%`}}></div></div>
              <div className={style.box_span}>
                  <span>🛡️ Defense:</span>
                  <span>{pokemon.defense}</span>
              </div>
              <div className={style.menu}><div className={style.prueba} style={{ width:`${pokemon.defense > 99?100:pokemon.defense}%`}}></div></div>
              <div className={style.box_span}>
                  <span>⚡ Speed:</span>
                  <span>{pokemon.speed}</span>
              </div>
              <div className={style.menu}><div className={style.prueba} style={{ width:`${pokemon.speed > 99?100:pokemon.speed}%`}}></div></div>
              <div className={style.poketype}>
                <PokeType type={pokemon.type||pokemon.types}/>
              </div>
            </div>
          </>
        }
      </div>
      
      <MenuResponsive />
    </div>
  )
}
