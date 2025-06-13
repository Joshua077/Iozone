import React, { useState } from 'react'
import './Profile.css'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import BoostModal from '../../Components/Modal/Profile';
import Affection from '../../Components/Modal/Affection';
import Premium from '../../Components/Modal/Premium';

export default function Profile() {

    console.log(useLocation()?.pathname)

    const navigate = useNavigate()



    const handleReferral = () => {
        navigate('/profile/referral')
    }

    const handleEdit = () => {
        navigate('/profile')
    }

    const [showModal, setShowModal] = useState(false);
    const [showAffectionModal, setShowAffectionModal] = useState(false);
    const [showPremiumModal, setShowPremiumModal] = useState(false);

    const handleBoostClick = () => {
        setShowModal(true);
    };

    const handleAffections = () => {
        setShowAffectionModal(true);
    }

    const handlePremium = () => {
        setShowPremiumModal(true);
    }


    return (
        <div
            className='profile_container'
        >
            <div className='profile_container_sideBar'>
                <div className='sideBar_image'>
                    <KeyboardArrowLeftIcon style={{
                        color: '#6750A4',
                        backgroundColor: '#D0BCFF', borderRadius: "50%",
                        fontSize: '11px',
                        width: "30px", height: '30px'
                    }} />
                </div>
                <div className='self_boost'
                    onClick={handleBoostClick}
                    style={{ cursor: 'pointer' }}
                >
                    <p>
                        Self Boost
                    </p>
                </div>
                {showModal && <BoostModal closeModal={() => setShowModal(false)} />}
                {showAffectionModal && <Affection closeModal={() => setShowAffectionModal(false)} />}
                {showPremiumModal && <Premium closeModal={() => setShowPremiumModal(false)} />}
                <div className='bumble_boost'
                    style={{ cursor: 'pointer' }}
                    onClick={handleAffections}
                >
                    <p>
                        Upgrade to Bumble Boost
                    </p>
                </div>
                <div className='lozone_prenium'
                    style={{ cursor: 'pointer' }}
                    onClick={handlePremium}
                >
                    <p>
                        Upgrade to Lozone Prenium
                    </p>
                </div>

                <div
                    className='profile_card'
                    style={{ cursor: 'pointer' }}
                    onClick={handleReferral}
                >
                    <h2>Invite friends</h2>
                    <p>Share love, invite your friend and get 5 affections</p>
                </div>
                <div
                    style={{ fontSize: "15px", fontWeight: '700', marginTop: '16px', cursor: 'pointer' }}
                    onClick={handleEdit}

                >
                    <p>Edit Profile</p>
                </div>
                <div>



                </div>
                <div
                    style={{ fontSize: "15px", fontWeight: '700', marginTop: '36px', color: '#767676' }}
                >
                    <p>Settings</p>
                </div>
                <div
                    style={{ fontSize: "15px", fontWeight: '700', marginTop: '36px', color: '#767676' }}
                >
                    <p>Contact and FAQs</p>
                </div>
                <div
                    style={{ fontSize: "15px", fontWeight: '700', marginTop: '36px', color: '#E74475' }}
                >
                    <p>Log Out</p>
                </div>
            </div>
            <div className='profile_container_content'>
                <div className='profile_navbar_container'
                    onClick={() => console.log('fffffvvvvvff')}
                >
                    <p style={{ textAlign: 'center' }}>Edit profile</p>
                </div>
                <div className='Profile_outlet'

                >
                    <Outlet />
                </div>

            </div>
        </div>
    )
}


// #6750A4