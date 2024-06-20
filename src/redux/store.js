import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./features/globalSlice"


export const store = configureStore({
  reducer:{
    global:globalReducer
  }
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