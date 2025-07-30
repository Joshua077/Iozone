import React from 'react';
import { useNavigate } from 'react-router-dom';

type BoostModalProps = {
  closeModal: () => void;
};

const Affection: React.FC<BoostModalProps> = ({ closeModal }) => {


  const navigate = useNavigate();

  const handleGetAffections = () => {
    navigate('/profile/bumble');
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
        <h2>Affections are super likes</h2>
        <p>Send targeted likes for a memorable<br /> first impression and genuine affection.</p>

        <p>You have <strong>12 Affections left</strong></p>

        <button className="btn-primary" onClick={handleGetAffections}>
          Get Affections
        </button>
        <button className="btn-secondary" onClick={closeModal}>
          Maybe later
        </button>
      </div>
    </div>


  )
}
export default Affection;