
import {  createReducer, combineReducers } from '@reduxjs/toolkit';
import {addToDo,modalHandleChange} from './toDoActions'


const toDo = createReducer([], (builder) =>{

   builder.addCase(addToDo, (state, action) => {
    return [...state, action.payload]
 }) 
}); 
const modal = createReducer([], (builder) =>{

   builder.addCase(modalHandleChange, (state, action) => {
      return state = action.payload
   }) 
}); 

/* const toDoByDate = createReducer([], (builder) =>{

   builder.addCase(toDoListByDate, (state, action) => {
    return [...state, action.payload]
 }) 
});  */

export {toDo,modal};