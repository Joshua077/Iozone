import React, { useState } from 'react'
import PaymentCard from '../PaymentCard/PaymentCard'
import './Bumble.css'
export default function BumbleCard() {



    return (
        <div className='bumble_boost_container1'>

            <div className='bumble_boost_content'>
                <div className='bumble_boost_text_container'>
                    <h2>Get Affections</h2>
                   <div className='self_boost_text'>
                     <ul>
                        <li><span className="heart-icon">💜</span> Send targeted likes for a memorable first impression and genuine affection.</li>
                        <li><span className="super-icon">🖤</span> Affections are super likes</li>
                    </ul>
                    <p className="footer-note">
                        <span className="billing-icon">☰</span> You will be charged ₦6,000.00 every 6 months. Cancel anytime
                    </p>
                   </div>
                    <div></div>
                    <div>

                    </div>
                </div>
                <div className='bumble_boost_card_container' >
                    <div className='card'>
                        <div className='flex'>
                            <div>
                                <h2>1 Boost</h2>
                                <hr style={{ borderBottom: '1px solid #BC72FB', width: '70px', margin: "5px 0px" }} />
                                <p>₦1,500.00/each</p>
                            </div>
                            <div >
                                <h2>₦1,500.00</h2>
                            </div>
                        </div>
                    </div>
                    <div className='card1'>
                        <div
                            style={{
                                display: 'flex', justifyContent: 'flex-end',
                                color: 'white', width: 'auto',
                                borderRadius: '2px',

                            }} >
                            <p
                                style={{
                                    background: '#BC72FB', color: "white",
                                    padding: '4px 9px',
                                    borderRadius: '8px',
                                    fontSize: '12px'
                                }}
                            >POPULAR</p>
                        </div>
                        <div className='flex'>
                            <div>
                                <h2>1 Boost</h2>
                                <hr style={{ borderBottom: '1px solid #BC72FB', width: '70px', margin: "5px 0px" }} />
                                <p>₦1,500.00/each</p>
                            </div>
                            <div>
                                <h2>₦1,500.00</h2>
                            </div>
                        </div>
                    </div>
                    <div className='card2'>
                        <div style={{
                            display: 'flex', justifyContent: 'flex-end',
                            color: 'white', width: 'auto',
                            borderRadius: '2px',

                        }}>
                            <p style={{
                                background: '#48464C', color: "white",
                                padding: '4px 9px',
                                borderRadius: '8px',
                                fontSize: '12px'
                            }}
                            >BEST VALUE</p>
                        </div>
                        <div className='flex'>
                            <div>
                                <h2>1 Boost</h2>
                                <hr style={{ borderBottom: '1px solid #BC72FB', width: '70px', margin: "5px 0px" }} />
                                <p>₦1,500.00/each</p>
                            </div>
                            <div>
                                <h2>₦1,500.00</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PaymentCard/>
        </div>
    )
}
