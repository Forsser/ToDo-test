import React from "react";
import Switch from '@mui/material/Switch';
import {P,} from '../styles/toDo.styled'
import { PText} from '../styles/toDoList.styled'
import FormControlLabel from '@mui/material/FormControlLabel';
import {IOSSwitch} from '../styles/toDoList.styled'
import {SVGComponent} from './svgComponents'


const Checked = ({item}) =>{

    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
      };

      let color = 'rgb(61, 181, 99)'
    switch (item.complexity) { 
      case 'low':
        color = 'rgb(23, 210, 132)';
        break;
      case 'medium':
        color = 'rgb(250, 255, 106)';
        break;
      case 'high':
        color = 'rgb(255, 67, 67)';
        break; 
    }

    return(
        
            <>
                <SVGComponent color={color}/>
                <P color={color}>
                    {item.title}
                    </P>
                    <PText>{item.text}</PText>
                <FormControlLabel
                    control={<IOSSwitch sx={{ m: 1 }} 
                    checked={checked}
                    onChange={handleChange}/>}
                />
            </>
    )
}

export default Checked;