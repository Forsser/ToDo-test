import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import {P} from '../styles/toDo.styled'
import {ListContiner} from '../styles/toDoList.styled'
import Checked from './toDoChecked'
import { nanoid } from 'nanoid'


const label = { inputProps: { 'aria-label': 'Switch demo' } };

export const ToodoItem = ({date, task})=>{


  const items = task[date];





    return(
        <>
        {items.map((item)=>{
        return <ListContiner key={nanoid()}>
                  <Checked item ={item}/>
                </ListContiner>
        })}
        </>
    )
}