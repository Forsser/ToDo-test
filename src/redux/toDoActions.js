
import { nanoid } from 'nanoid'
import { createAction } from "@reduxjs/toolkit";


const addToDo = createAction ("tasks/addTask", ({title, text, complexity, date}) =>{
    return {
        payload: {
          id: nanoid(),
          completed: false,
          title: title,
          text: text,
          complexity: complexity,
          date: date,
        },
      };
    })
    const modalHandleChange = createAction ("modal/handleChange", (open = false) =>{
      return {
          payload: {
            open: open,
          },
        };
      })

/*     const toDoListByDate = createAction ("tasks/taskListByDate", ({task}) =>{
      return {
          payload: {
            id: nanoid(),
            task
          },
        };
      }) */

export {addToDo, modalHandleChange}