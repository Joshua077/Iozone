import React from 'react'
import Navbar from './Navbar/Navbar'
import './chat.css'
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
export default function Chat() {

const navigate = useNavigate()
    const data = [
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
    return (
        <div className='chat_container'>
            <div className='chat_container_nav'>
                <Navbar />
            </div>

            <div className='chat_content'>
                <div className='chat_content_left'>
                    <div className='chat_reels'>
                        <p>Likes and matches</p>
                        <div className='chat_reels_content'>
                            {data?.map((image, index) => (
                                <div>
                                    <img src={image?.src} />
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className='chat_lits'>

                        <p>Messages</p>

                        {data1?.map((item, index) => (
                            <div className='chat_lits_content'
                            onClick={() => navigate(`/chat/${item.id}`)}
                            
                            >
                                <div className='chat_lits_content_image'>
                                    <img src={item?.src} alt='Imageeee'/>
                                </div>
                                <div className='chat_lits_content_text'>
                                    <div className='chat_lits_content_text1'>
                                        <h3>{item.name}</h3>{item.verrified && <CheckCircleOutlineIcon style={{color:'blue',fontSize:'13px'}} />}
                                    </div>

                                    <span>{item.lastMessage}</span>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
                <div className='chat_content_right'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
