import React from 'react'
import { useNavigate } from 'react-router-dom';

type BoostModalProps = {
  closeModal: () => void;
};


const Premium: React.FC<BoostModalProps> = ({ closeModal }) => {

  const navigate = useNavigate();

  const handleGetPremium = () => {
    navigate('/profile/Prenium');
    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-icon">
          <div className="circle">
            <span className="stars">✨</span>
          </div>
        </div>
        <h2>Unlock Premium Features!</h2>
        <p>Unlock premium features like <br /> unlimited likes, ad-free experience, and advanced filters.</p>

        <p>You have <strong>2 Affections left</strong></p>

        <button className="btn-primary" onClick={handleGetPremium}>
          Get Affections
        </button>
        <button className="btn-secondary" onClick={closeModal}>
          Maybe later
        </button>
      </div>
    </div>

  )
}

export default Premium;