import React, { useState } from 'react'
import './../css/Textbox.css'

export default function Textbox(props) {

    const {textboxState,setTextboxState} = props;

    const [values,setValues] = useState({
    });

    const handleChange = (event) => {
        event.persist();

        if(event.target.id==="textBox"){
            setTextboxState((oldValues) => ({
              ...oldValues,
              [event.target.id]: event.target.innerHTML
            }));
        }
        else{
            setTextboxState((oldValues) => ({
            ...oldValues,
            [event.target.name]: event.target.value
            }));
        }
      };

  return (
    <div contentEditable="true" className='editable-div' onInput={handleChange} id = "textBox" value = {values.textBox} />
  )
}
