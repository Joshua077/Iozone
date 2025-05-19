import React from 'react'
import OTP from './Otp';
import "./Verification.css"

interface VerificationProps {
    onNext: () => void;
}

const Verification: React.FC<VerificationProps> = ({ onNext }) => {
    const [otp, setOtp] = React.useState('');
    return (
        <div
            className='verification_content'
        >
            <h2>Enter Verification Code</h2>
            <p>We have sent a code to your number (234) 999-9999-999, enter your six (6) to verify your mobile. Change number</p>
            <div className='otp_folder'>
                <OTP value={otp} onChange={setOtp} length={6} />
                <div>
                <span>Resend OTP</span>
            </div>

            <button onClick={onNext}>Submit</button>
            </div>
            
        
        </div>
    )
}

export default Verification;

