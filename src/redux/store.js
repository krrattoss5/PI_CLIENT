import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import globalReducer from "./features/globalSlice"


export const store = configureStore({
  reducer:{
    global:globalReducer
  }
=======


export const store = configureStore({
  reducer:
>>>>>>> f57d034bca69e3bd1c23cdeab4764a1d99b04e0f
})







// import {createStore,applyMiddleware}from 'redux';
// import rootReducer from './reducer.js';
// import thunk from 'redux-thunk';
// import {composeWithDevTools} from 'redux-devtools-extension';

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;