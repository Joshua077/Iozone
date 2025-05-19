import React, { useState } from 'react';
import './Likes.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TuneIcon from '@mui/icons-material/Tune';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import { useNavigate} from "react-router-dom";

export default function Likes() {

    const navigate = useNavigate();

    const [isPremiumUser, setIsPremiumUser] = useState(false);

    const data = [
        {
            src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
            title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
            channel: 'Don Diablo',
            views: '396k views',
            createdAt: 'a week ago',
        },
        {
            src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
            title: 'Queen - Greatest Hits',
            channel: 'Queen Official',
            views: '40M views',
            createdAt: '3 years ago',
        },
        {
            src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
            title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
            channel: 'Calvin Harris',
            views: '130M views',
            createdAt: '10 months ago',
        },
        {
            src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
            title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
            channel: 'Don Diablo',
            views: '396k views',
            createdAt: 'a week ago',
        },
        {
            src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
            title: 'Queen - Greatest Hits',
            channel: 'Queen Official',
            views: '40M views',
            createdAt: '3 years ago',
        },
        {
            src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
            title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
            channel: 'Calvin Harris',
            views: '130M views',
            createdAt: '10 months ago',
        },
        {
            src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
            title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
            channel: 'Don Diablo',
            views: '396k views',
            createdAt: 'a week ago',
        },
        {
            src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
            title: 'Queen - Greatest Hits',
            channel: 'Queen Official',
            views: '40M views',
            createdAt: '3 years ago',
        },
        {
            src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
            title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
            channel: 'Don Diablo',
            views: '396k views',
            createdAt: 'a week ago',
        },
        {
            src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
            title: 'Queen - Greatest Hits',
            channel: 'Queen Official',
            views: '40M views',
            createdAt: '3 years ago',
        },

    ];

    return (
        <div className='likes_container'>

            <div className='logo'>
                <div style={{background:"#4A4A4A", padding:'6px 8px', borderRadius:'50%', cursor:'pointer'}}
                                onClick={() => navigate('/chat/filter')}
                >
                    <TuneIcon  style={{color:"white", fontSize:'15px'}}/>
                </div>

                <div style={{background:"#4A4A4A", padding:'6px 8px', borderRadius:'50%', cursor:'pointer'}}>
                    <YoutubeSearchedForIcon style={{color:"white",fontSize:'15px'}}/>
                </div>

                <div style={{background:"#BC72FB", padding:'6px 8px', borderRadius:'50%', cursor:'pointer'}}
                onClick={() => navigate('/chat')}
                >
                    <AutoAwesomeIcon  style={{color:"white",fontSize:'15px'}}/>
                </div>
            </div>
            <div className='header'>
                <div className='arrow' 
                style={{
                    background: '#D0BCFF',
                    width: '25px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '25px',
                    // paddingLeft: '3px',
                    borderRadius: '49%'
                }}
                >
                    <KeyboardArrowLeftIcon />
                </div>
                <div className='likes_amount'>
                    <h2> 66 Likes</h2>
                </div>
            </div>
            <div className='content'>
                <p>Upgrade to Gold see people who already</p>
                <div className='button'>
                    <button>
                        See Who Likes You
                    </button>
                </div>
                <div>

                    <div className="photo-gallery">
                        {data?.map((photo, index) => (
                            <div key={photo?.channel} className="photo-container">
                                <img
                                    src={photo?.src}
                                    alt={photo.title}
                                    className={!isPremiumUser ? 'blurred' : ''}
                                />
                                {index === 0 && <span className="new-tag"> .New</span>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
