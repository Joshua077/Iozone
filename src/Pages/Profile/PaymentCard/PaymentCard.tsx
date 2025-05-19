import React from 'react'
import './PaymentCard.css'
export default function PaymentCard() {
    return (
        <div className='payment_card_container'>
            <div>
                <p>Enter your card details</p>
            </div>
            <div className='payment_card_container_cardDetails'>
                <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{width:'50%'}} >
                        <p>Card Number</p>

                        <input style={{width:'85%',padding:'5px'}}
                         placeholder='0000 0000 0000 0000'/>
                    </div>

                    <div style={{width:'50%'}}>
                        <p>Card Name</p>

                        <input  style={{width:'90%',padding:'5px'}}
                         placeholder='NAME OF THE CARD'/>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{width:'50%'}} >
                        <p>Card Number</p>

                        <input style={{width:'85%',padding:'5px'}}
                         placeholder='0000 0000 0000 0000'/>
                    </div>

                    <div style={{width:'50%'}}>
                        <p>Cvv</p>

                        <input  style={{width:'30%',padding:'5px'}}
                        />
                    </div>
                </div>

            </div>
            <div className='payment_card_container_button'>
                <button>
                    Pay by Card
                </button>
            </div>
        </div>
    )
}
