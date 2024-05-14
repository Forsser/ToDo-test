import React, { useState } from "react";
import {ToodoList} from './todoList'
import {Form, LabelE,LabelN,LabelH, Continer, DateContiner, FormInput, ModalOverlay, TitleContiner} from '../styles/toDo.styled';
import {addToDo} from '../../redux/toDoActions'
import {useSelector, useDispatch} from 'react-redux'
import { Box, TextField, styled} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { DatePicker } from 'rsuite';



const InputField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#fff',
      },
      '&:hover fieldset': {
        borderColor: '#1978d2',
      },
    },
    '& .MuiInputBase-root': {
        color: '#fff', // Колір тексту за замовчуванням
      },
    '& .MuiInputLabel-root':{
        color: 'rgba(255, 252, 252, 0.75)',
        '&.Mui-focused': { 
            color: '#1978d2', 
          },

    }
  });

  const CustomTextField = styled(TextField)({
    '& .MuiInputBase-input': {
      height: '60px',
      width: '255px', // Змініть розмір за потребою
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#fff',
      },
      '&:hover fieldset': {
        borderColor: '#1978d2',
      },
    },
    '& .MuiInputBase-root': {
        color: '#fff', // Колір тексту за замовчуванням
      },
    '& .MuiInputLabel-root':{
        color: 'rgba(255, 252, 252, 0.75)',
        '&.Mui-focused': { 
            color: '#1978d2', 
          },

    },
    
  });
  


export const ToDo = ()=>{
const dispatch = useDispatch();
const {open} = useSelector((state => state.isOpen))


const [selectedOption, setSelectedOption] = useState('');
const  [startDate ,  selectedDate ]  =  useState ( new  Date ( ) ) ;


    const hendleChange = (date) =>{
selectedDate(date.toLocaleDateString())

}
const hendleSubmitDate = (evt) =>{
    evt.preventDefault()
    selectedDate(evt.target.elements[0].value);
    }
    const hendleSubmit =(evt)=> {
         evt.preventDefault()
        const toDoTitle = evt.target.task.value;
        const toDoText = evt.target.text.value;
        const task = {title:toDoTitle, text:toDoText, complexity:selectedOption, date: startDate};
        dispatch(addToDo(task))
    }

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    }
    return(
      <ModalOverlay className={open ? 'open' : ''}>
        <Continer className={open ? 'open' : ''}>
        <h1>To Do</h1>
        <FormInput action="submit" onSubmit={hendleSubmit}>
            
            <TitleContiner>
            {<Box
                component="div"
                sx={{
                '& > :not(style)': { m:1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            ></Box>}
             <InputField id="task" label="Title" />
            <Fab aria-label="add" type="submit">
                <AddIcon />
            </Fab>
            </TitleContiner>    
            <CustomTextField
          id="text"
          label="Description"
          multiline
          rows={4}
          variant="filled"
        />        
        </FormInput>
       <Form>
            <LabelE  htmlFor="1">
            <p>Low</p>
         <input type="radio" name="check" id="Low" title="Low" value="low" onChange={handleOptionChange}/>
         </LabelE    >
            <LabelN   htmlFor="2">
            <p>Medium</p>
            <input type="radio" name="check" id="Medium" title="Medium"  value="medium" onChange={handleOptionChange}/>
            </LabelN >
           <LabelH    htmlFor="3">
           <p>High</p>
           <input type="radio" name="check" id="High"  title="Hard"  value="high" onChange={handleOptionChange}/>
           </LabelH  >
            </Form>
                <form  action="submit" onSubmit={hendleSubmitDate}>
                <DateContiner>
                <DatePicker id="date" onChange={hendleChange} placement="rightStart" />
            </DateContiner>
                </form>
        </Continer>
        </ModalOverlay>
    )
}
