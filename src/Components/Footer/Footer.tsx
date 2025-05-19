import React from 'react';
import Grid from '@mui/material/Grid';
import './Footer.css';
import Store from '../../Assets/Store.png'
import Store1 from '../../Assets/Store2.png'
export default function Footer() {
    return (
        <div className='footer_Container'>
            <Grid container spacing={9} >
                <Grid item xs={12} md={8}>
                    <div className='footer_Details'>
                    <p>Download now!</p>
                    <h1>Seamless Connection With <br />Everyone</h1>
                    <p className='text'>Find Love , Friendship and Excitement. Download Now <br />
                        and Dive  into Vibrant Connections.</p>
                        <div className='footer_Store' style={{display:"flex", columnGap:'15px',marginTop:'43px'}}>
                            <img src={Store} alt="Store"/>
                            <img src={Store1} alt="Store"/>
                        </div>
                        <div style={{display:"flex", columnGap:'32px',marginTop:'43px'}}>
                            <span>Security</span>
                            <span>Privacy</span>
                            <span>Terms</span>
                            <span>Cookie Policy</span>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div className='footer_Links'>
                        <p>Features</p>
                        <p>Pricing</p>
                        <p>About Us</p>
                        <p>Community Guidelines </p>
                        <p>Trust & Safety</p>
                        <p>Help Center</p>
                        <p>Dating Tips</p>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
