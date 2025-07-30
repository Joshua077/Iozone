import React from 'react'
import './Login.css'
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import API, { setAuthToken } from "../../api/api";
import { useNavigate } from "react-router-dom";




export default function Login() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/signup");
    };


    const { getToken } = useAuth();
    return (
        <div
            className='login_container'
        >
            <div
                className='login_content'
            >
                <div>
                    <h1 >Login</h1>
                </div>
                <div>
                    <span>Don't have an account? </span> <span className='signupBtn' onClick={handleClick}>Sign Up</span>
                </div>
                <div>
                    <h2>Log in with your email or phone number</h2>
                </div>
                <div className='login_form'>
                    <form>
                        <input
                            type='text'
                            className='field'
                        />
                        <button>Login</button>
                    </form>
                </div>
                <div>
                    <span>Or</span>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <div
                        style={{
                            display: 'flex', columnGap: '11px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1.4px solid black',
                            width: '90%',
                            height: '50px',
                            borderRadius: '24px',
                            marginTop: '20px'
                        }}
                    >
                        <GoogleIcon />
                        <p
                            style={{
                                fontWeight: '700',
                                fontSize: '13px'
                            }}
                        >
                            Continue with Google</p>
                    </div>
                    <div
                        style={{
                            display: 'flex', columnGap: '11px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1.4px solid black',
                            width: '90%',
                            height: '50px',
                            borderRadius: '24px',
                            marginTop: '20px'
                        }}
                    >
                        <FacebookIcon />
                        <p
                            style={{
                                fontWeight: '700',
                                fontSize: '13px'
                            }}
                        >Continue with Facebook</p>
                    </div>
                    <div style={{
                        display: 'flex', columnGap: '11px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1.4px solid black',
                        width: '90%',
                        height: '50px',
                        borderRadius: '24px',
                        marginTop: '20px'
                    }}>
                        <AppleIcon />
                        <p
                            style={{
                                fontWeight: '700',
                                fontSize: '13px'
                            }}>Continue with Apple</p>
                    </div>
                </div>
                <div
                    style={{
                        marginTop: '12px',
                        width: '90%'
                    }}
                >
                    <h3 >By signing up, you agree to our Terms & Conditions.</h3>
                    <h3  >Learn how we use your data in our Privacy Policy.</h3>
                </div>
            </div>

        </div>
    )
}
