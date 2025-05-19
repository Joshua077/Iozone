import React, { useState } from 'react';
import './Onboarding.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Verification from './Verification/Verification';
import Name from './Name/Name';
import Interest from './Interest/Interest';
import MoreInfo from './User';
import Hubby from './Hubby/Hubby';
import Photos from './Photos/Photos';

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  return (
    <div className='onboarding_container'>
      <div className='onboarding_login'>
        <div className='onboarding_login_logo'>
          <p>IOZONE</p>
        </div>
        <div className='onboarding_action'>
          <div className='back_bottom' onClick={handlePrevious}>
            <p><ArrowBackIosIcon style={{ fontSize: '13px', fontWeight: '800' }} /></p>
          </div>
          <div className="stepper-container">
            {Array.from({ length: totalSteps }, (_, index) => (
              <React.Fragment key={index + 1}>
                <div
                  className={`circle ${currentStep >= index + 1 ? 'completed' : ''
                    } ${currentStep === index + 1 ? 'active' : ''}`}
                >
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {currentStep === 1 &&
          <div className='veriication_container'>
            <Verification onNext={handleNext} />
            {/* <Photos/> */}
          </div>

        }
        {currentStep === 2 &&
          <div className='veriication_container'>
            <Name onNext={handleNext} />
          </div>
        }
        {currentStep === 3 &&
          <div className='veriication_container'>
            <Interest onNext={handleNext} />
          </div>
        }
        {currentStep === 4 &&
          <div className='veriication_container'>
            <MoreInfo onNext={handleNext} />
          </div>
        }
        {currentStep === 5 &&
          <div className='hubby_container'>
     <Hubby onNext={handleNext} />
          </div>
        }
        {currentStep === 6 &&
          <div className='veriication_container'>
      <Photos/>
          </div>
        }
      </div>
    </div>
  )
}
