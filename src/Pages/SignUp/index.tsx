import React from 'react'
import './Signup.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import AppleIcon from '@mui/icons-material/Apple';
import { useNavigate } from 'react-router-dom';


export default function SignUp() {
    const navigate = useNavigate();

    const handleBoarding = () => {
        navigate('/onboard')
    }
    return (
        <div
            className='signUp_container'
        >

            <div
                className='signUp_content'
            >
                <div style={{ display: 'flex', columnGap: '11px', color: "#BC72FB", alignItems: 'center' }}>
                    <FavoriteIcon />
                    <h2 style={{
                        fontWeight: '900',
                        fontSize: '30px'
                    }}>IOZONE</h2>
                </div>
                <div style={{ marginTop: '100px' }}>
                    <h2
                        style={{
                            fontWeight: '900',
                            fontSize: '24px'
                        }}
                    >Welcome! Create Your Account</h2>
                    <p style={{ marginTop: '18px' }}>Already have an account? <a>Log in</a></p>
                </div>
                <div style={{ marginTop: '90px' }}>
                    <div
                        style={{
                            display: 'flex', columnGap: '11px', alignItems: 'center', justifyContent: 'center',
                            border: '0.4px solid #938F96', width: '335px', height: '45px', borderRadius: '8px', marginTop: '20px',
                            cursor:'pointer'
                        }}

                        onClick={handleBoarding}
                    >
                        <p
                            style={{
                                fontWeight: '700',
                                fontSize: '14px'
                            }}
                        >Continue with Google</p>
                    </div>
                    <div 
                    style={{
                        display: 'flex', columnGap: '11px', alignItems: 'center', justifyContent: 'center',
                        border: '0.4px solid #938F96', width: '335px', height: '45px', borderRadius: '8px', marginTop: '20px',
                        cursor:'pointer'
                    }}
                    onClick={handleBoarding}
                   >
                        <AppleIcon />
                        <p
                            style={{
                                fontWeight: '700',
                                fontSize: '14px'
                            }}>Continue with Apple</p>
                    </div>
                </div>
                <div style={{ marginTop: '30%' }}>
                    <p>By Signing up, you agree to our <span style={{ color: "#BC72FB" }}>Terms </span>, see how we use your data in our <span style={{ color: "#BC72FB" }}>privacy policy.</span></p>
                </div>
            </div>

        </div>
    )
}
