import React from 'react'
import "./Moreinfo.css"
import TextField from '@mui/material/TextField';

interface MoreInfoProps {
    onNext?: () => void;
}

const MoreInfo: React.FC<MoreInfoProps> = ({ onNext }) => {
    return (
        <div
            className='userinfo_content'
        >
            <h2>Tell Us About Yourself</h2>
            <p>Say something cool about yourself</p>
            <div className='userinfo_field'>
                <TextField
                    id="outlined-multiline-static"
                  placeholder='About Me;'
                    multiline
                    fullWidth
                    rows={3}
                />
            </div>
            <button onClick={onNext}>Continue</button>
        </div>
    )
}

export default MoreInfo;