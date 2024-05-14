import React, { useState } from "react";
import {ToodoItem} from './todoItem'
import {TooDoItems} from './toDoItems'
import {useSelector, useDispatch} from 'react-redux'
import {Ul, Li, Div, PopUpOn,ToDoList, ExpandButton, ToDoListContiner} from '../styles/toDoList.styled'
import {Warapper} from '../styles/wrapper'



export const ToodoList = ()=>{

const toDo = useSelector(state => state.toDos)

const sortedTodos = [...toDo].sort((a, b) => new Date(a.date) - new Date(b.date));


// Об'являємо об'єкт, де кожен ключ - це дата, а значення - масив об'єктів toDo для цієї дати

// Проходимо по відсортованому масиві і групуємо об'єкти за датами
const todosByDate = sortedTodos.reduce((acc, todo) => {
  const dateKey = todo.date; // Якщо дата у відповідному форматі

  if (!acc[dateKey]) {
    acc[dateKey] = [];
  }

  acc[dateKey].push(todo);
  return acc;
}, {});


const obj1 = Object.keys(todosByDate)

//                <ToodoItem item={i}/>
    return(
        <>
        <Ul>
            {obj1.map((date)=>(
              <Li key={date}>
                  <Div>
                  <PopUpOn> 
                  <p>{date}</p>                 
                  </PopUpOn>
                  </Div>
                  <TooDoItems date={date} todosByDate={todosByDate}/>
              </Li>  
            ))}
        </Ul>
        
        </>
    )
}