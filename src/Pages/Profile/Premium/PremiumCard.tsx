import React,{useState} from 'react'
import Registration from '../../../Components/Modal/Registration'
import PaymentCard from '../PaymentCard/PaymentCard'
import './Premium.css'

export default function PreniumCard() {
   

    return (
        <div className='self_boost_container1'>
               
            <div className='self_boost_content'>
                <div className='self_boost_text_container'>
                    <h2>Upgrade to premium</h2>
                   <div className='self_boost_text'>
                     <ul>
                        <li><span className="super-icon">🖤</span> Match and Chat</li>
                        <li><span className="super-icon">🖤</span> 1 Free Self Boost & Affections</li>
                        <li><span className="super-icon">🖤</span> Get matches all over the world</li>
                        <li><span className="super-icon">🖤</span> Read Receipt</li>
                        <li><span className="super-icon">🖤</span> See who like you</li>
                        <li><span className="super-icon">🖤</span> Rewind</li>
                        <li><span className="super-icon">🖤</span> Privacy</li>
                        <li><span className="super-icon">🖤</span> Ad-Free Experience</li>
                    </ul>
                    <p className="footer-note">
                        <span className="billing-icon">☰</span> You will be charged ₦6,000.00 every 6 months. Cancel anytime
                    </p>
                   </div>
                    <div></div>
                    <div>

                    </div>
                </div>
                <div className='self_boost_card_container' >
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
