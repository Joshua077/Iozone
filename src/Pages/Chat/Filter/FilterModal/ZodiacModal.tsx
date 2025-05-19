import React from 'react'
import './FilterModal.css'
import Radio from '@mui/material/Radio';
import { Link, useLocation } from "react-router-dom";
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


export default function ZodiacModal() {

    const personality = [
        {
            name: 'Aries',
            value: 'I want Children',
        },
        {
            name: 'Taurus',
            value: 'Dont want Children',
        },
        {
            name: 'Gemini',
            value: 'I have Children',
        },
        {
            name: 'Cancer',
            value: 'Not sure, I want',
        },
        {
            name: 'Leo',
            value: 'I have Children',
        },
        {
            name: 'Virgo',
            value: 'Not sure, I want',
        },
        {
            name: 'Libra',
            value: 'Dont want Children',
        },
        {
            name: 'Scorpio',
            value: 'I have Children',
        },
        {
            name: 'Sagittarius',
            value: 'Not sure, I want',
        },
        {
            name: 'Capricon',
            value: 'I have Children',
        },
        {
            name: 'Id rather not say',
            value: 'Not sure, I want',
        }
               
        
    ]
  return (
    <div
    className='filter_modal_container'
>
    <div className='modal_content_wrapper1'>
        <div className='modal_content'>
            <h2>Zodiac Sign</h2>
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
