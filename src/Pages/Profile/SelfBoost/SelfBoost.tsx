import React,{useState} from 'react'
import Registration from '../../../Components/Modal/Registration'
import PaymentCard from '../PaymentCard/PaymentCard'
import './SelfBoost.css'

export default function SelfBoost() {
 

    return (
        <div className='self_boost_container1'>
            <div className='self_boost_content'>
                <div className='self_boost_text_container'>
                    <div>
                        <h2 style={{fontSize:"13px", marginBottom:"12px"}}>Get Affection</h2>
                    </div>

                    <div>
                        <p>You will be charged ₦6,000.00 every 6
                            months. Cancel anytime</p>
                    </div>
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
