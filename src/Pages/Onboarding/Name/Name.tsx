import React from 'react'
import "./Name.css"
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';

interface NameProps {
    onNext?: () => void;
}

const Name: React.FC<NameProps> = ({ onNext }) => {

    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: '#4A4A4A',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#4A4A4A',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#4A4A4A',
                borderRadius: '12px'
            },
            '&:hover fieldset': {
                borderColor: '#4A4A4A',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#4A4A4A',
            },
        },
    });

    return (
        <div
            className='name_content'
        >
            <h2>Tell Us About Yourself</h2>
            <p>Just a few steps and you will be ready to connect with potential matches. Please enter correct information</p>
            <div
                className='name_content_form'
            >
                <form>
                    <div>
                    <CssTextField placeholder="First Name" fullWidth  className='field'/>
                    </div>
                    <CssTextField placeholder="Last Name" fullWidth  className='field'/>
                </form>
            </div>
            <button onClick={onNext}>Continue</button>
        </div>
    )
}

export default Name;


