import { useState } from 'react'
import style from './Card.module.css'
import { Link } from 'react-router-dom'
import PokeType from '../pokeType/PokeType'
import NotFound from '../notFound/NotFound'
<<<<<<< HEAD
import { isHomeNav } from '../../redux/features/globalSlice'
=======
import { homeNav } from '../../redux/actions/actions'
>>>>>>> f57d034bca69e3bd1c23cdeab4764a1d99b04e0f
import { useDispatch } from 'react-redux'

export default function Card(pokemon) {
  const dispatch = useDispatch()
  const [ confirm, setConfirm ] = useState(false);
  const {onClose} = pokemon
  return (
    <div className={style.container_out}>
      {
        !pokemon.id?<NotFound />:<div className={style.container_card}>
          <button onClick={()=>setConfirm(true)} className={style.button_close}>x</button>
          {!confirm?null:<div className={style.confirm}>
            <span className={style.confirm_span}>Seguro quieres borrar este Pokemon?</span>
            <div>
              <button className={style.no} onClick={()=>setConfirm(false)}>No</button>
              <button className={style.si} onClick={()=>onClose(pokemon.id)}>Si</button>
            </div>
          </div>}
<<<<<<< HEAD
          <Link onClick={()=>dispatch(isHomeNav(true))} to={`detail/${pokemon.id}`}>
=======
          <Link onClick={()=>dispatch(homeNav(true))} to={`detail/${pokemon.id}`}>
>>>>>>> f57d034bca69e3bd1c23cdeab4764a1d99b04e0f
            <img src={pokemon.img} alt={pokemon.name} className={style.img_card}/>
            <h2 className={style.title}>{pokemon.name}</h2>
          </Link>
          <div className={style.type_container}>
            {
              <PokeType type={pokemon.type||pokemon.types}/>
            }
          </div>
        </div>
      }
    </div>
  )
}
