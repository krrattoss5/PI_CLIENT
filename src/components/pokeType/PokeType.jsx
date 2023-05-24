import React from 'react'
import style from './PokeTypes.module.css'

export default function PokeType(type) {
  const types = type.type||type.types
  return (
    <div>
        {!types?console.log(type.types):types.map((t)=>

                {switch(t.name){
                  case'bug': return <button key={'bug'} className={style.button_bug}>{t.name}</button>;
                  case'fighting': return <button key={'fighting'} className={style.button_fighting}>{t.name}</button>;
                  case'flying': return <button key={'flying'} className={style.button_flying}>{t.name}</button>;
                  case'poison': return <button key={'poison'} className={style.button_poison}>{t.name}</button>;
                  case'ground': return <button key={'ground'} className={style.button_ground}>{t.name}</button>;
                  case'rock': return <button key={'rock'} className={style.button_rock}>{t.name}</button>;
                  case'ghost': return <button key={'ghost'} className={style.button_ghost}>{t.name}</button>;
                  case'steel': return <button key={'steel'} className={style.button_steel}>{t.name}</button>;
                  case'fire': return <button key={'fire'} className={style.button_fire}>{t.name}</button>;
                  case'water': return <button key={'water'} className={style.button_water}>{t.name}</button>;
                  case'grass': return <button key={'grass'} className={style.button_grass}>{t.name}</button>;
                  case'electric': return <button key={'electric'} className={style.button_electric}>{t.name}</button>;
                  case'psychic': return <button key={'psychic'} className={style.button_psychic}>{t.name}</button>;
                  case'ice': return <button key={'ice'} className={style.button_ice}>{t.name}</button>;
                  case'dragon': return <button key={'dragon'} className={style.button_dragon}>{t.name}</button>;
                  case'dark': return <button key={'dark'} className={style.button_dark}>{t.name}</button>;
                  case'fairy': return <button key={'fairy'} className={style.button_fairy}>{t.name}</button>;
                  case'unknown': return <button key={'unknown'} className={style.button_unknown}>{t.name}</button>;
                  case'shadow': return <button key={'shadow'} className={style.button_shadow}>{t.name}</button>;
                  case'normal': return <button key={'normal'} className={style.button_normal}>{t.name}</button>;

                  default: return <button>{t.name}</button>;
                }}
            )}
    </div>
  )
}