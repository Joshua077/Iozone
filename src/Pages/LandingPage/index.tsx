import React from 'react'
import Navbar from './Navbar'
import Hero from '../../Assets/Hero3.png'
import Frame1 from '../../Assets/Frame1.png'
import Students from '../../Assets/Students.png'
import Lady from '../../Assets/Lady.png'
import Together from '../../Assets/Together.png'
import Grid from '@mui/material/Grid';
import './LandingPage.css'
import Footer from '../../Components/Footer/Footer'
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from 'react-router-dom'

export default function LandingPage() {

    const navigate = useNavigate()

    const handleSignup = () =>{
        navigate('/signup')
    }
    return (
        <div>
            <Navbar />
            <div className='landingPage_Hero'>
                <img src={Hero} alt="Her0" />
                <div className='landingPage_Hero_Text'>
                    <h1>Find your Spark! <br /> Ignite Romance.</h1>
                    <p>Sparks Fly Here: Where Every Swipe Sets the Heart Ablaze!</p>
                    <p> Discover Passion, Connection, and Love on LOZONE</p>
                    <div className='landingPage_Hero_Store'>
                        <div className='google'>
                        <GoogleIcon/>
                        <p>Continue with Google</p>
                        </div>
                        <div className='apple'>
                        <AppleIcon/>
                        <p>Continue with Apple</p>
                        </div>
                    </div>
                    <span>Sign up with email or phone number</span>

                </div>
            </div>
            <div className='landingPage_Frame1'>
                <Grid container spacing={2} >
                    <Grid item xs={12} md={7}>
                        <img src={Frame1} alt="Chat" />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <h1>Why Lozone ?</h1>
                        <p>Join a vibrant community where meaningful connections blossom effortlessly. Let Lozone be your ultimate cupid,
                            guiding you to the romance you deserve.</p>
                        <button onClick={handleSignup}>Sign Up Free</button>
                    </Grid>
                </Grid>
            </div>
            <div className='landingPage_Frame2'>
                <div className='landingPage_Frame2_content'>
                    <Grid container spacing={2} >
                        <Grid item xs={12} md={7} className='landingPage_Frame2_img'>
                            <img src={Students} alt="Students" />
                        </Grid>
                        <Grid item xs={12} md={5} className='landingPage_Frame2_text'>
                            <h1>Unlock  Your <br /> Social Potential</h1>
                            <p>Connect, Chat and Create Memories! Find Your Perfect Match on Lozone.</p>
                            <button onClick={handleSignup}>Sign Up Free</button>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className='landingPage_Frame3'>
                <Grid container spacing={6} >
                    <Grid item xs={12} md={7} className='landingPage_Frame2_text'>
                        <h1 style={{ color: '#181A87' }}>Embrace your individuality and </h1>
                        <h1 style={{ color: '#181A87' }}>express your unique qualities.</h1>
                        <p>We understand—you're more than just a charming photo.
                            Our platform assists you in highlighting your distinct personality, allowing you to distinguish yourself.
                            It's an excellent method for attracting matches who are highly compatible with you.
                        </p>
                    </Grid>
                    <Grid item xs={12} md={5} className='landingPage_Frame3_img'>
                        <img src={Lady} alt="Chat" />
                    </Grid>
                </Grid>
            </div>
            <div className='landingPage_Frame4'>
                <div className='landingPage_Frame4_content'>
                    <Grid container spacing={2} >
                        <Grid item xs={12} md={7} className='landingPage_Frame4_img'>
                            <img src={Together} alt="Students" />
                        </Grid>
                        <Grid item xs={12} md={5} className='landingPage_Frame4_text'>
                            <h1>Prepared to discover <br /> your perfect match?</h1>
                            <p>Come aboard our quest to create enduring love connections. Register or download
                                the Lozone app to embark on your journey towards true love.</p>
                            <button onClick={handleSignup}>Sign Up Free</button>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <Footer />
        </div>
    )
}
