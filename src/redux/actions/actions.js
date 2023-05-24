import { ADD_POKEMON,ADD_POKEMONS,GET_POKEMON_BY_NAME,GET_TYPES,CREATE_POKEMON, REMOVE, NEXT, BACK, FORCE_CURRENT, RESET, HOME_NAV, FILTER, FILTER_TYPE, ORDER_POKEMONS } from './types.js';
import axios from 'axios';

//actions minimos del pi
export const addPokemons = (pokemons)=>{ //lo uso para traer todos los pokemons cuando se monta el componente app
  return{
    type:ADD_POKEMONS,
    payload:pokemons
  }
};
export const addPokemon = (pokemon)=>{ //lo uso para el detail
  return{
    type:ADD_POKEMON,
    payload:pokemon
  }
};
export const getPokemonByName = (pokemon)=>{ //se usa para la function onSearch
  return{
    type:GET_POKEMON_BY_NAME,
    payload:pokemon
  }
};
export const getTypes = ()=>{ //con esta traigo todos los tipos para el formulario
  const endPointType = 'http://localhost:3001/types'
  return async (dispatch)=>{
    await axios.get(endPointType)
    .then(({data})=>{
      return dispatch({
        type:GET_TYPES,
        payload:data
      })
    })
  }
};
export const createPokemon = (pokemon)=>{ //esta la uso para crear los pokemons
  const endPoint = 'http://localhost:3001/pokemon/create'
  return async (dispatch)=>{
    await axios.post(endPoint,pokemon)
    .then(({data})=>{
      return dispatch({
        type:CREATE_POKEMON,
        payload:data
      })
    })
  }
};
//mini extras
export const remove = (id)=>{ //con este remuevo los pokemons de la db o del cache del back
  const endPoint = `http://localhost:3001/pokemon/${id}`
  return async (dispatch)=>{
    await axios.delete(endPoint)
    .then(({data})=>{
      return dispatch({
        type:REMOVE,
        payload:id
      })
    })
  }
};
export const homeNav = (flag)=>{ //con este comunico al nav con el home para actuar segun el flag
  return{
    type:HOME_NAV,
    payload:flag
  }
}
//filtros de ordenamiento
export const resetHome = ()=>{
  return{
    type:RESET
  }
};
//estos son los foltros y los ordenamientos
export const filterBy = (f)=>{
  return{
    type:FILTER,
    payload:f
  }
};
export const filterType = (f)=>{
  return{
    type:FILTER_TYPE,
    payload:f
  }
};
export const orderPokemons = (o)=>{
  return{
    type:ORDER_POKEMONS,
    payload:o
  }
};
//paginado
export const nextP = ()=>{
  return{
    type:NEXT
  }
};
export const backP = ()=>{
  return{
    type:BACK
  }
};
export const forceCurrent = (num)=>{
  return{
    type:FORCE_CURRENT,
    payload:num
  }
};