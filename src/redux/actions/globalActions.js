import axios from "axios";

import { getAllTypes, removePokemon, addNewPokemon } from "../features/globalSlice";

export const getTypes = () => (dispatch) => {
  (async () => {
    const response = await axios
      .get("https://pi-api-s3xh.onrender.com/types")
      .then(({ data }) => data);

    return await dispatch(dispatch(getAllTypes(response)));
  })();
};

export const remove = (id) => (dispatch) => {
  (async () => {
    const response = await axios
      .delete(`https://pi-api-s3xh.onrender.com/pokemon/${id}`)
      .then(( data ) => data);

    response.ok && window.location.reload();

    return dispatch(removePokemon(id));
  })();
};

export const createPokemon = (pokemon) =>(dispatch)=>{
  (async ()=>{
    const response = await axios.post('https://pi-api-s3xh.onrender.com/pokemon/create',pokemon).then(({data})=> data)
    console.log(response)
    return dispatch(addNewPokemon(response))
    })()
}

// const endPoint = ''
//   return async (dispatch)=>{
//     await {
//       return dispatch({
//         type:CREATE_POKEMON,
//         payload:data
//       })
//     })
//   }
