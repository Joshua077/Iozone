import React from 'react'
import IosShareIcon from '@mui/icons-material/IosShare';
import './Referral.css'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Grp from '../../../Assets/Grp.png'
export default function Referral() {
    return (
        <div
            className='referral_container'
        >
            <div style={{textAlign:'center'}}>
                <div 
                style={{
                    width:'100%'
                }
            
            }>
                <img 
                style={{
                    width:'80%',
                    marginBottom:'30px'
                }}
            
            
                src={Grp} alt='referrasl'/>
                </div>
               
            <h1 style={{ color: 'black', fontSize: '24px' }}>Share Love!</h1>
            <p style={{ marginTop: "12px", fontSize: '14px' }}>Refer a friend to get 5% of their <br />monthly subscriptions</p>
            <button> <IosShareIcon style={{marginBottom:'-4px'}}/> Share referral link</button>
            </div>
            
            <div className='referral_code_container' >
                <div className='referral_code_content'>
                    <div style={{paddingBottom:'21px',
                    borderBottom:'0.5px solid #E6E0E9',width:'100%'}}>
                       
                        <h5>Your unique referral code</h5>
                        <div style={{display:'flex',justifyContent:'flex-end'}}>
                        <ContentCopyIcon/> 
                        </div>
                       <p>TEMITAYO-6ZV</p>
                    </div>

                    <div style={{paddingBottom:'21px',marginTop:"32px"}}>
                        <h5>Your referral</h5>
                        <p>Congratulations! You referred 2 friends, View more</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
