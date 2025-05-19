import React from 'react'
import './FilterModal.css'
import Radio from '@mui/material/Radio';
import { Link, useLocation } from "react-router-dom";
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

interface componentProps {
    selectOption?: () => void;
}

const DrinkingModal : React.FC<componentProps> = ({selectOption}) => {
    const personality = [
        {
            name: 'Never',
            value: 'I want Children',
        },
        {
            name: 'Social',
            value: 'Dont want Children',
        },
        {
            name: 'Every Weekend',
            value: 'I have Children',
        }, 
        {
            name: 'Sober',
            value: 'I have Children',
        },       
        
    ]
    
  return (
    <div
    className='filter_modal_container'
>
    <div className='modal_content_wrapper'>
        <div className='modal_content'>
            <h2>Drinking</h2>
            <div className='filter_modal_option_contanier'>
            {personality?.map((item, index) => (
                <div className='filter_modal_option'>
                    <p>{item.name}</p>
                    <div>

                        <FormControl>
                            <RadioGroup
                                // aria-labelledby="demo-radio-buttons-group-label"
                                // defaultValue={selectedStatus}
                                name="radio-buttons-group"
                            // value={selectedStatus}
                            // onChange={(event) => handleChange(event, item)}
                            >
                                <FormControlLabel value={item.name} control={<Radio />} label='' />

                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
            ))}
            </div>


        </div>
    </div>

</div>
  )
}

export default DrinkingModal