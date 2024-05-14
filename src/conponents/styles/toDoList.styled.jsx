import styled from '@emotion/styled'
import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';




const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: '#65C466',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color: '#7a7777',
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: '#39393D',
      opacity: 1,
      transition: (['background-color'], {
        duration: 500,
      }),
    },
  }));










const Ul = styled.ul`
    display: flex;
    max-width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
`

const Li = styled.li`
position: relative;
display: flex;
flex-direction: column;
max-width: 1400px;
min-width: 1400px;
padding: 0px 30px;
font-size: 18px;
border-radius: 20px;
    box-shadow: 0 5px 22px 0 rgba( 55, 53, 53, 0.37 );
`

const ToDoListContiner = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;

`

const ToDoList = styled.ul`

        display: flex;
        flex-direction: row;
        overflow: hidden;
        flex-wrap: wrap;
        gap: 50px;
        padding-bottom: 20px;
        padding-left: 0px;
        min-width: 100%;
        max-height: 100%;
        transition: top 0.3s ease-in-out, height 0.3s ease-in-out, transform 0.3s ease-in-out;
  top: ${({ isOpen }) => (isOpen ? '0' : 'auto')};
  height: ${({ isOpen }) => (isOpen ? 'auto' : '0')};
  transform: translateY(${({ isOpen }) => (isOpen ? '0' : '-100%')});

  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
`

const ListContiner = styled.li`
  position: relative;
  min-width: 300px;
  max-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    border: inset 5px  solid #ff0000;
    background: #dcd8d8;
    box-shadow: 0 3px 5px 0 #575757;

`

const Div = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 50px;
    gap: 10px;
    margin-top: 10px;
`
const PopUpOn = styled.div`
        display: flex;
        align-items: center;
        padding: 5px;
        margin-bottom: 10px;
        margin-left: 50%;
        transform: translateX(-50%);
        border: 1px solid #ffffff7c;
        border-radius: 20px;
      color: #ffffff;
`
const PText = styled.p`
display: flex;
flex: 1 1 auto;
 max-width: 350px;
 overflow-x: hidden; 
  word-wrap: break-word; 
  padding: 10px;
  border-bottom: 1px solid #ffffff93;
  border-radius:10px;
`


const ExpandButton = styled.button`
margin-bottom: 15px;
background: transparent;
`;

const Arrow = styled.svg`
  width:30px;
  height: 30px;
  transform: rotate( ${({ isOpen }) => (isOpen ? '180deg' : '0deg')});
  transition: transform 0.2s ease-in-out;
`


export {Ul, Li, ListContiner, Div, IOSSwitch, PopUpOn, ToDoList, PText, ExpandButton, ToDoListContiner,Arrow} 