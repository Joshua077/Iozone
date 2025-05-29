import React, { useEffect, useRef } from 'react'
import './Modal.css'
import successImg from '../../Assets/successful-Fdwlqxsah0.png'

interface ModalProps {
  onClose?: () => void
}
const Registration: React.FC<ModalProps> = ({ onClose }) => {

  return (
    <div
      className='modal_container'
    >
      <div
        className='registration_modal_container'
      >
        <div className='registration_modal_content'>
          <img src={successImg} alt="" style={{height:'80%'}} />
          <h2>Registration Successful</h2>
          <p>Get ready to meet and connect with your perfect match with Lozone</p>
          <button onClick={onClose}>
            Continue
          </button>
        </div>

      </div>

    </div>
  )
}

export default Registration;