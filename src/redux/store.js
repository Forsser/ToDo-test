import { configureStore, } from '@reduxjs/toolkit'
import {toDo, modal} from './toDoReducers'




export const store = configureStore({
    reducer: {
        toDos: toDo,
        isOpen: modal,

    }
})