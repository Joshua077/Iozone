import React, { useState } from 'react';
import IosShareIcon from '@mui/icons-material/IosShare';
import './Referral.css';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Grp from '../../../Assets/Grp.png';
import ReferralImg from '../../../Assets/congrats-on-receiving-healthies-and-nairas-DZfnqCZcGx.png';

export default function Referral() {
    const [showReferrals, setShowReferrals] = useState(false);
    const [showAccountForm, setShowAccountForm] = useState(false);

    const handleShowReferrals = () => {
        setShowReferrals(true);
    };

    if (showAccountForm) {
        return (
            <div className="referral_container" style={{ padding: '1.5rem', backgroundColor: '#F5F6F8' }}>
                <div style={{ padding: '1.5rem', backgroundColor: '#fff', minHeight: '100vh' }}>
                    <h2 style={{ color: '#5B2E98', fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
                        Account Details
                    </h2>
                    <p style={{ fontSize: '14px', color: '#4F4F4F', marginBottom: '1.5rem' }}>
                        Please enter your correct bank account information, and make sure to use one with your name.
                    </p>

                    {/* BVN Input */}
                    <input
                        type="text"
                        placeholder="BVN"
                        style={{
                            width: '100%',
                            padding: '12px',
                            marginBottom: '1rem',
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            backgroundColor: '#FAFAFA',
                            fontSize: '14px'
                        }}
                    />

                    {/* Bank Name Dropdown */}
                    <select
                        style={{
                            width: '100%',
                            padding: '12px',
                            marginBottom: '1rem',
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            backgroundColor: '#FAFAFA',
                            fontSize: '14px'
                        }}
                    >
                        <option value="">Bank Name</option>
                        <option value="gtb">GTBank</option>
                        <option value="access">Access Bank</option>
                        <option value="uba">UBA</option>
                        {/* Add more banks as needed */}
                    </select>

                    {/* Account Number */}
                    <input
                        type="text"
                        placeholder="Account Number"
                        style={{
                            width: '100%',
                            padding: '12px',
                            marginBottom: '2rem',
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            backgroundColor: '#FAFAFA',
                            fontSize: '14px'
                        }}
                    />

                    {/* Submit Button */}
                    <button
                        style={{
                            width: '100%',
                            backgroundColor: '#1E0A86',
                            color: '#fff',
                            padding: '1rem',
                            border: 'none',
                            borderRadius: '12px',
                            fontWeight: 'bold',
                            fontSize: '16px'
                        }}
                    >
                        Submit
                    </button>
                </div>
            </div>
        );
    }

    if (showReferrals) {

        return (
            <div className="referral_container" style={{ padding: '1.5rem', backgroundColor: '#F5F6F8', minHeight: '100vh' }}>
                {/* Top Card */}
                <div style={{
                    backgroundColor: '#fff',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    boxShadow: '0px 2px 8px rgba(0,0,0,0.05)',
                    marginBottom: '1.5rem'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <div>
                            <p style={{ fontSize: '14px', marginBottom: '4px', color: '#6B6B6B' }}>Total Earn</p>
                            <h2 style={{ margin: 0 }}>₦12,000</h2>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <p style={{ fontSize: '14px', marginBottom: '4px', color: '#6B6B6B' }}>Invitees</p>
                            <h2 style={{ margin: 0 }}>12</h2>
                        </div>
                    </div>
                    <div style={{ height: '6px', backgroundColor: '#000', borderRadius: '3px', margin: '0.5rem 0' }}>
                        <div style={{ width: '30%', height: '100%', backgroundColor: '#6200EE', borderRadius: '3px' }} />
                    </div>
                    <p style={{ fontSize: '12px', color: '#6B6B6B' }}>Beginner</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                        <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <p
                                style={{ fontSize: '10px', }}>You’re currently on beginner</p>
                            <span style={{ fontSize: '14px', fontWeight: '700', color: '#6750A4' }}>Refer to earn more</span>
                        </div>

                        <button style={{
                            backgroundColor: '#6750A4',
                            width: '120px',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '14px',
                            fontSize: '12px',
                            padding: '8px 12px',
                            cursor: 'pointer'
                        }}
                            onClick={() => {
                                setShowAccountForm(true);
                            }}>Redeem earnings</button>
                    </div>
                </div>


                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    marginBottom: '1.5rem',
                    boxShadow: '0px 2px 8px rgba(0,0,0,0.05)'
                }}>

                    <div style={{

                        fontSize: '16px',
                        color: '#000000',
                    }}>
                        <p style={{ fontWeight: 700, fontSize: '18px', color: '#1C1B1F', marginBottom: '0.5rem' }}>
                            Your unique referral code
                        </p>
                        <span>TEMITAYO-6ZV</span>
                    </div>
                    <ContentCopyIcon style={{ cursor: 'pointer' }} />
                </div>

                {/* Share Button */}
                <button style={{
                    width: '100%',
                    backgroundColor: '#1E0A86',
                    color: '#fff',
                    padding: '1rem',
                    border: 'none',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                    fontWeight: 500,
                    marginBottom: '2rem',
                    cursor: 'pointer'
                }}>
                    <IosShareIcon style={{ marginRight: '8px' }} /> Share referral link
                </button>

                {/* Gift Box and Message */}
                <div style={{ textAlign: 'center' }}>
                    <img
                        src={ReferralImg}
                        alt="gift"
                        style={{ width: '120px', marginBottom: '1rem' }}
                    />
                    <h2 style={{ fontSize: '30px', fontWeight: '600', color: '#000000', }}>Congratulations!</h2>
                    <p style={{ fontSize: '16px', fontWeight: '500', color: '#000000' }}>
                        Thank You for Referring Friends. <br /> You’ve referred 12 friends.
                    </p>
                    <button
                        onClick={() => setShowReferrals(false)}
                        style={{
                            marginTop: '2rem',
                            padding: '0.75rem 1.5rem',
                            backgroundColor: '#E0E0E0',
                            border: 'none',
                            borderRadius: '8px',
                            fontWeight: '500',
                            cursor: 'pointer'
                        }}
                    >
                        Go back
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="referral_container">
            <div style={{ textAlign: 'center' }}>
                <div style={{ width: '100%' }}>
                    <img
                        style={{ width: '80%', marginBottom: '30px' }}
                        src={Grp}
                        alt="referral"
                    />
                </div>

                <h1 style={{ color: 'black', fontSize: '24px' }}>Share Love!</h1>
                <p style={{ marginTop: '12px', fontSize: '14px' }}>
                    Refer a friend to get 5% of their <br />
                    monthly subscriptions
                </p>
                <button>
                    <IosShareIcon style={{ marginBottom: '-4px' }} /> Share referral link
                </button>
            </div>

            <div className="referral_code_container">
                <div className="referral_code_content">
                    <div
                        style={{
                            paddingBottom: '21px',
                            borderBottom: '0.5px solid #E6E0E9',
                            width: '100%',
                        }}
                    >
                        <h5>Your unique referral code</h5>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <ContentCopyIcon />
                        </div>
                        <p>TEMITAYO-6ZV</p>
                    </div>

                    {/* 👇 This section triggers content replacement on click */}
                    <div
                        style={{ paddingBottom: '21px', marginTop: '32px', cursor: 'pointer' }}
                        onClick={handleShowReferrals}
                    >
                        <h5>Your referral</h5>
                        <p>Congratulations! You referred 2 friends, View more</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
