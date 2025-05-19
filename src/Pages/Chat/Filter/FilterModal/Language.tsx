import React from 'react'
import './FilterModal.css'
import Radio from '@mui/material/Radio';
import { Link, useLocation } from "react-router-dom";
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


export default function Language() {
  
    const personality = [
        {
            name: 'English',
            value: 'I want Children',
        },
        {
            name: 'French',
            value: 'Dont want Children',
        },
        {
            name: 'German',
            value: 'I have Children',
        },
        {
            name: 'Spanish',
            value: 'Not sure, I want',
        },
        {
            name: 'Italian',
            value: 'I have Children',
        },
        {
            name: 'Others',
            value: 'Not sure, I want',
        }
               
        
    ]
    
    return (
        <div
        className='filter_modal_container'
    >
        <div className='modal_content_wrapper'>
            <div className='modal_content'>
                <h2>Languge</h2>
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
