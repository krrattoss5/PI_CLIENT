import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    types: [],
    homeNav: false,
    pokemon: {},
    pokemons: [],
    allPokemons: [],
    numPagination: 1,
    pokemonCreated: {},
  },
  reducers: {
    isHomeNav: (state, action) => {
      return {
        ...state,
        homeNav: action.payload,
      };
    },
    addPokemons: (state, action) => {
      if (Array.isArray(action.payload)) {
        let filtro1 = new Set(action.payload);
        let filtro2 = Array.from(filtro1);
        return {
          ...state,
          allPokemons: filtro2,
          pokemons: filtro2,
        };
      }
      return {
        ...state,
        allPokemons: [action.payload, ...state.allPokemons],
        pokemons: [action.payload, ...state.pokemons],
      };
    },
    getAllTypes: (state, action) => {
      return {
        ...state,
        types: action.payload,
      };
    },
    resetHome: (state) => {
      return {
        ...state,
        pokemons: state.allPokemons,
        pokemon: {},
      };
    },
    getPokemonByName: (state, action) => {
      return {
        ...state,
        pokemons: [action.payload],
      };
    },
    removePokemon: (state, action) => {
      const deleted = state.pokemons.filter((p) => p.id !== action.payload);
      console.log(action.payload);
      return {
        ...state,
        pokemons: deleted,
      };
    },
    addNewPokemon: (state, action) => {
      return {
        ...state,
        pokemons: [action.payload, ...state.pokemons],
        allPokemons: [action.payload, ...state.allPokemons],
      };
    },
    addPokemon:(state,action)=>{
      return{
        ...state,
        pokemon:action.payload
      }
    },
    orderPokemons: (state, action) => {
      let order = [];

      if (action.payload === "Attack ▲" || action.payload === "Attack ▼") {
        order = state.pokemons.sort((a, b) => {
          if (a.attack < b.attack) {
            return "Attack ▲" === action.payload ? -1 : 1;
          }
          if (a.attack > b.attack) {
            return "Attack ▼" === action.payload ? -1 : 1;
          }
          return 0;
        });
      }
      if (action.payload === "A-Z" || action.payload === "Z-A") {
        order = state.pokemons.sort((a, b) => {
          if (a.name < b.name) {
            return "A-Z" === action.payload ? -1 : 1;
          }
          if (a.name > b.name) {
            return "Z-A" === action.payload ? -1 : 1;
          }
          return 0;
        });
      }
      console.log('====================================');
      console.log(order);
      console.log('====================================');

      return {
        ...state,
        pokemons: order,
      };
    },
    filterBy: (state, action) => {
      let pokeFilter = [];
      if (action.payload === "From Db")
        pokeFilter = state.allPokemons.filter(
          (p) => Number.isInteger(p.id) === false
        );
      if (action.payload === "From Api")
        pokeFilter = state.allPokemons.filter(
          (p) => Number.isInteger(p.id) === true
        );
      if (action.payload === "All") pokeFilter = state.allPokemons;
      return {
        ...state,
        pokemons: pokeFilter,
      };
    },
    filterType: (state, action) => {
      let filterTypes = [];
      state.pokemons.forEach((p) => {
        if (!p.types) {
          if (p.type[0].name === action.payload) filterTypes.push(p);
          if (p.type[1] && p.type[1].name === action.payload)
            filterTypes.push(p);
        }
        if (!p.type) {
          if (p.types[0].name === action.payload) filterTypes.push(p);
          if (p.types[1] && p.types[1].name === action.payload)
            filterTypes.push(p);
        }
      });
      return {
        ...state,
        pokemons: filterTypes,
      };
    },
    nextP:(state)=>{
      return{
        ...state,
        numPagination: state.numPagination + 1
      }
    },
    backP:(state)=>{
      return{
        ...state,
        numPagination: state.numPagination - 1
      }
    },
    forceCurrent:(state,action)=>{
      return{
        ...state,
        numPagination: action.payload
      }
    }
  },
});

export const {
  isHomeNav,
  addPokemons,
  getAllTypes,
  resetHome,
  getPokemonByName,
  removePokemon,
  addPokemon,
  addNewPokemon,
  orderPokemons,
  filterType,
  filterBy,
  nextP,
  backP,
  forceCurrent,
} = globalSlice.actions;

export default globalSlice.reducer;
