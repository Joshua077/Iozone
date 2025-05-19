import React from 'react'
import './Interest.css';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

interface InterestProps {
    onNext?: () => void;
}


const currencies = [
    {
        value: 'Man',
        label: 'Man',
    },
    {
        value: 'EUR',
        label: 'Woman',
    },
    {
        value: 'Others',
        label: 'Others',
    },
];


const Interest: React.FC<InterestProps> = ({ onNext }) => {
    return (
        <div
            className='interest_content'
        >
            <h2>Tell Us About Yourself</h2>
            <p>Just a few steps and you will be ready to connect with potential matches.
                Please enter correct information</p>
            <div className='interest_content_field'>
                <TextField
                     select
                    label='I am a'
                    fullWidth
                    style={{ marginTop: '31px', borderRadius: '5px' }}
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    label="I am Looking for"
                    select
                    placeholder='I am a'
                    fullWidth
                    style={{ marginTop: '31px', borderRadius: '5px' }}
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <button onClick={onNext}>Continue</button>
        </div>
    )
}

export default Interest;