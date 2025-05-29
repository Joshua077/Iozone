import React from 'react'
import Logo from '../../../Assets/Logo.png'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import profileImg from '../../../Assets/Img.png'

export default function Navbar() {

  const navigate = useNavigate()

  const handleSignup = () =>{
      navigate('/signup')
  }

  return (
    <div className='chat_navbar'>
        <div className='chat_navbar_content'>
            <div className='chat_navbar_logo'>
                <img src={Logo} alt="Logo" />
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
            }}>
                <img src={profileImg} alt="" />
                <p>Temi Bankole</p>
            </div>
        </div>
    
    
    </div>
  )
}