import React from 'react';
import { useNavigate } from 'react-router-dom';

type BoostModalProps = {
  closeModal: () => void;
};

const BoostModal: React.FC<BoostModalProps> = ({ closeModal }) => {
  const navigate = useNavigate();

  const handleGetAffections = () => {
    navigate('/profile/selfboost');
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
        <h2>Boost your profile</h2>
        <p>Increase your visibility to reach a larger audience.</p>
        <p>You have <strong>0 Self Boost</strong></p>

        <button className="btn-primary" onClick={handleGetAffections}>
          Get Affections
        </button>
        <button className="btn-secondary" onClick={closeModal}>
          Maybe later
        </button>
      </div>
    </div>
  );
};

export default BoostModal;
