import  React from "react";
import {useState} from "react";
import {useSelector, useDispatch} from 'react-redux'
import {ToodoItem} from './todoItem'
import {P} from '../styles/toDo.styled'
import {Ul, Li, Div, PopUpOn,ToDoList, ExpandButton, ToDoListContiner,ListContiner} from '../styles/toDoList.styled'
import Checked from './toDoChecked'
import { nanoid } from 'nanoid'
import {SvgArrow} from './svgComponents'



const label = { inputProps: { 'aria-label': 'Switch demo' } };

export const TooDoItems = ({date,todosByDate})=>{


    const [isOpen, setOpen] = useState(true);

    const toggleExpand = () => {
      setOpen(!isOpen);
    };




    return(
        <>
                <ExpandButton onClick={toggleExpand}>
                    <SvgArrow isOpen={isOpen}/>
                </ExpandButton>
                <ToDoListContiner>
                    <ToDoList isOpen={isOpen}> 
                      <ToodoItem date={date} task={todosByDate}/>
                    </ToDoList>
                  </ToDoListContiner>
        </>
    )
}
