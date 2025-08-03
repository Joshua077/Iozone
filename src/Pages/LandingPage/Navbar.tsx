import React from 'react'
import './LandingPage.css'
import Logo from '../../Assets/Logo.png'
import { useNavigate } from 'react-router-dom'
export default function Navbar() {

  const navigate = useNavigate()

  const handleSignup = () =>{
      navigate('/signup')
  }

  const handleLogin = () =>{
    navigate('/login')
}
  
  return (
    <div className='landingPage_navbar'>
        <div className='landingPage_navbar_content'>
            <div className='landingPage_navbar_logo'>
                <img src={Logo} alt="Logo" />
            </div>
            <div>
                <button className='landingPage_navbar_signIn' onClick={handleLogin}>Sign In</button>
                <button className='landingPage_navbar_signUp' onClick={handleSignup}>Sign Up</button>   
            </div>
        </div>
    
    
    </div>
  )
}
