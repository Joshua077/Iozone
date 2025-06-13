import React, { useState } from 'react'
import Navbar from './Navbar/Navbar'
import './chat.css'
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { getShortsData } from './Short/Short';




export default function Chat() {

    const navigate = useNavigate()
    const profileImage = 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ';
    const data = [
        {
            src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
            lastMessage: 'How are U',
            id: '1',
            name: 'Funmi',
            verrified: true
        },
        {
            src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
            lastMessage: 'How are U',
            id: '1',
            name: 'Funmi',
            verrified: true
        },
        {
            src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
            lastMessage: 'How are U',
            id: '1',
            name: 'Funmi',
            verrified: true
        },
        {
            src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
            lastMessage: 'How are U',
            id: '2',
            name: 'Victoria',
            verrified: true
        },
        {
            src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
            lastMessage: 'How are U',
            id: '3',
            name: 'Ade',
            verrified: false
        },
        {
            src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
            lastMessage: 'How are U',
            id: '3',
            name: 'Ade',
            verrified: false
        },
        {
            src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
            lastMessage: 'How are U',
            id: '3',
            name: 'Ade',
            verrified: false
        },
        {
            src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
            lastMessage: 'How are U',
            id: '3',
            name: 'Ade',
            verrified: false
        },


    ];



    const data1 = [
        {
            src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
            lastMessage: 'How are U',
            id: '1',
            name: 'Funmi',
            verrified: true
        },
        {
            src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
            lastMessage: 'Church ....',
            id: '2',
            name: 'Victoria',
            verrified: true
        },
        {
            src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
            lastMessage: 'Speak to u later man ',
            id: '3',
            name: 'Ade',
            verrified: false
        },

        {
            src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
            lastMessage: 'A lit Bit',
            id: '4',
            name: 'Josh',
            verrified: true
        },
        {
            src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
            lastMessage: 'Not Arround Bro',
            id: '5',
            name: 'Tammy',
            verrified: true
        },
        {
            src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
            lastMessage: 'Coming ?',
            id: '6',
            name: 'Tayo',
            verrified: false
        },


    ];

    const location = useLocation();
    const isChatOpen = /^\/chat\/\d+$/.test(location.pathname);
    const [showForm, setShowForm] = useState(false);


    return (
        <div className='chat_container'>
            <div className='chat_container_nav'>
                <Navbar />
            </div>

            <div className='chat_content'>
                <div className='chat_content_left'>
                    {location.pathname === '/chat/short' ? (
                        <div className="shorts-sidebar">
                            <div className='reels_container'>
                                <div className='chat_reels'>
                                    <p>Explore</p>
                                    <div className='chat_reels_container'>
                                        <div className="reel-item" onClick={() => setShowForm(true)}>
                                            <div className="reel-avatar add-mood">
                                                <img src={profileImage} alt="Your Mood" />
                                                <span className="add-icon">+</span>
                                            </div>
                                            <div><p>Your Mood</p></div>
                                        </div>
                                        <div className='chat_reels_content'>
                                            {data.map((image, index) => (
                                                <div key={index} className='chat_reels_content_image'>
                                                    <img src={image.src} alt="profile" style={{ objectFit: 'cover' }} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                </div>

                                {getShortsData().map((short) => (

                                    <div key={short.id} className="short-card">
                                        <div className="short-header">
                                            <img src={short.thumbnail} alt={short.name} className="short-profile-image" />
                                            <p className="short-name">{short.name}</p>
                                        </div>

                                        <img src={short.thumbnail} alt={short.name} className="short-image" />

                                        <div className="short-actions">
                                            <button className="like">💜</button>
                                            <button className="dislike">❌</button>
                                            <button className="replay">🔄</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className='chat_reels'>
                                <p>Likes and matches</p>
                                <div className='chat_reels_content'>
                                    {data.map((image, index) => (
                                        <div key={index} className='chat_reels_content_image'>
                                            <img src={image.src} alt='profile' style={{ objectFit: 'cover' }} />
                                        </div>
                                    ))}
                                </div>
                                
                            </div>

                            <div className='chat_lits'>
                                <p>Messages</p>
                                {data1.map((item, index) => (
                                    <div
                                        key={index}
                                        className='chat_lits_content'
                                        onClick={() => navigate(`/chat/${item.id}`)}
                                    >
                                        <div className='chat_lits_content_image'>
                                            <img src={item.src} alt='Profile' />
                                        </div>
                                        <div className='chat_lits_content_text'>
                                            <div className='chat_lits_content_text1'>
                                                <h3>{item.name}</h3>
                                                {item.verrified && <CheckCircleOutlineIcon style={{ color: 'blue', fontSize: '13px' }} />}
                                            </div>
                                            <span>{item.lastMessage}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
                <div className='chat_content_right'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
