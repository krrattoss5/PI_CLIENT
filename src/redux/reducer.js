import { ADD_POKEMON,ADD_POKEMONS,GET_POKEMON_BY_NAME,GET_TYPES,CREATE_POKEMON, REMOVE,NEXT,BACK,FORCE_CURRENT, RESET,HOME_NAV, FILTER, FILTER_TYPE, ORDER_POKEMONS } from './actions/types.js';
const initialState = {
  types:[],//aqui almaceno mis types para hacer las relaciones
  homeNav:false,//este state comunica al nav con el home para renderizar componentes acorde a al flag
  pokemon:{},//aqui guardo mi detail pokemon para poderlo mostrar
  pokemons:[],//este estado lo uso para que mis filtros y mis ordenamientos no tengan conflicto
  allPokemons:[],//aqui respaldo mis pokemons para un filtrado mas optimo en caso de un reset
  numPagination:1,//este es mi numero actual de paginado
  pokemonCreated:{}//lo uso para mostrar es estado de la ruta post
};

export default function rootReducer(state=initialState,{type,payload}){
  switch(type){
    case ADD_POKEMONS:
      if(Array.isArray(payload)){
        let filtro1 = new Set(payload)
        let filtro2 = Array.from(filtro1)
        return{
          ...state,
          allPokemons:filtro2,
          pokemons:filtro2
        }
      }
      return{
        ...state,
        allPokemons:[payload, ...state.allPokemons],
        pokemons:[payload, ...state.pokemons]
      };
    case ADD_POKEMON:
      return{
        ...state,
        pokemon:payload
      };
    case REMOVE:
        const clean = state.pokemons.filter(p => p.id !== payload)
        return{
          ...state,
          pokemons:clean
        };
    case GET_POKEMON_BY_NAME:
      return{
        ...state,
        pokemons:[payload]
      }
    ;
    //navegacion
    case NEXT:
      return{
        ...state,
        numPagination:state.numPagination + 1
      }
      ;
    case BACK:
      return{
        ...state,
        numPagination:state.numPagination - 1
    }
      ;
    case FORCE_CURRENT:
      return{
        ...state,
        numPagination:payload
      }
    ;
    //crear pokemon
    case CREATE_POKEMON:
      return{
        ...state,
        pokemonCreated:{ok:payload.ok,message:payload.message}
      }
    ;
    //obtener los tipos
    case GET_TYPES:
      return{
        ...state,
        types:payload
      }
    ;
    case HOME_NAV:
      return{
        ...state,
        homeNav:payload
      };
    case RESET:
      return {
        ...state,
        pokemons:state.allPokemons,
        pokemon:{}
      };
    case FILTER:
    let pokeFilter = [];
    if(payload === 'From Db') pokeFilter = state.allPokemons.filter((p)=>Number.isInteger(p.id)===false)
    if(payload === 'From Api') pokeFilter = state.allPokemons.filter((p)=>Number.isInteger(p.id)===true)
    if(payload === 'All') pokeFilter = state.allPokemons
    return {
      ...state,
      pokemons:pokeFilter
    };
    case FILTER_TYPE:
      let filterTypes = [];
      state.pokemons.forEach(p=>{
        if(!p.types){
          if(p.type[0].name === payload) filterTypes.push(p)
          if(p.type[1] && p.type[1].name === payload) filterTypes.push(p)
        }
        if(!p.type){
          if(p.types[0].name === payload) filterTypes.push(p)
          if(p.types[1] && p.types[1].name === payload) filterTypes.push(p)
        }
      })
      return{
        ...state,
        pokemons:filterTypes
      }
    case ORDER_POKEMONS:
      let order = []
      if(payload === 'Attack ▲'||payload === 'Attack ▼'){
        order = state.pokemons.sort((a,b) => {
          if(a.attack<b.attack){
            return 'Attack ▲' === payload?-1:1;
          }
          if(a.attack>b.attack){
            return 'Attack ▼' === payload?-1:1;
          }
          return 0;
        });
      }
      if(payload === 'A-Z'||payload === 'Z-A'){
        order = state.pokemons.sort((a,b) => {
          if(a.name<b.name){
            return 'A-Z' === payload?-1:1;
          }
          if(a.name>b.name){
            return 'Z-A' === payload?-1:1;
          }
          return 0;
        });
      }
      return{
        ...state,
        pokemons:order
      }
    default: return state;
  }
}