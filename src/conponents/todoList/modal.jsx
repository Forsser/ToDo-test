import React, { useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import {AddTask, CloseModal} from '../styles/modal'
import {modalHandleChange} from '../../redux/toDoActions'



const Modal = () =>{
const dispatch = useDispatch()
/* const state = useSelector({toDos} => ) */
   const [open, setOpen] = useState(true)
    const modalOpen = (e)=>{
        e.preventDefault();
        setOpen(!open)
        dispatch(modalHandleChange(open))
        
    }

    return(
        <>
        {
            !open ? <CloseModal onClick={modalOpen}><strong>X</strong></CloseModal> : <AddTask onClick={modalOpen}>+ Add Task</AddTask>
        }
        </>
    )
}

export default Modal