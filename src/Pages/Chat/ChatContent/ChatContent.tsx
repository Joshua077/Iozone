import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './ChatContent.css';

export default function ChatContent() {
    const [userDetails, setUserDetails] = useState({
        src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
        id: '1',
        age: '32',
        name: 'Funmi',
        verrified: true,
        height: '145cm',
        lifeStyle: ['Non-smoker', 'Dog ', 'Men'],
        Basic: ['Leo', 'BaChelors', 'I want Children', 'Paator'],
        unmatch: 'I dont liar',
        Summary: 'Just trying to be cool',
        location: 'Ibadan'
    })
    const [userP, setUserP] = useState('1')
    const { chatId } = useParams();

    const data = [
        {
            src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
            id: '1',
            age: '32',
            name: 'Funmi',
            verrified: true,
            height: '145cm',
            lifeStyle: ['Non-smoker', 'Dog ', 'Men'],
            Basic: ['Leo', 'BaChelors', 'I want Children', 'Paator'],
            unmatch: 'I dont liar',
            Summary: 'Just trying to be cool',
            location: 'Ibadan'


        },
        {
            src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
            id: '2',
            age: '32',
            name: 'Victoria',
            verrified: true,
            height: '145cm',
            lifeStyle: ['Non-smoker', 'Dog ', 'Men'],
            Basic: ['Leo', 'BaChelors', 'I want Children', 'Paator'],
            unmatch: 'I dont liar',
            Summary: 'Just trying to be cool',
            location: 'Ibadan'

        },
        {
            src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
            id: '3',
            age: '32',
            name: 'Ade',
            verrified: true,
            height: '145cm',
            lifeStyle: ['Non-smoker', 'Dog ', 'Men'],
            Basic: ['Leo', 'BaChelors', 'I want Children', 'Paator'],
            unmatch: 'I dont liar',
            Summary: 'Just trying to be cool',
            location: 'Ibadan'

        },

        {
            src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
            id: '4',
            age: '32',
            name: 'Josh',
            verrified: true,
            height: '145cm',
            lifeStyle: ['Non-smoker', 'Dog ', 'Men'],
            Basic: ['Leo', 'BaChelors', 'I want Children', 'Paator'],
            unmatch: 'I dont liar',
            Summary: 'Just trying to be cool',
            location: 'Ibadan'
        },
        {
            src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
            id: '5',
            age: '32',
            name: 'Tammy',
            verrified: true,
            height: '145cm',
            lifeStyle: ['Non-smoker', 'Dog ', 'Men'],
            Basic: ['Leo', 'BaChelors', 'I want Children', 'Paator'],
            unmatch: 'I dont liar',
            Summary: 'Just trying to be cool',
            location: 'Ibadan'
        },
        {
            src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
            id: '6',
            age: '32',
            name: 'Tayo',
            verrified: true,
            height: '145cm',
            lifeStyle: ['Non-smoker', 'Dog ', 'Men'],
            Basic: ['Leo', 'BaChelors', 'I want Children', 'Paator'],
            unmatch: 'I dont liar',
            Summary: 'Just trying to be cool',
            location: 'Ibadan'
        },
    ]
    useEffect(() => {
        if (chatId === '1') {
            setUserDetails(data[0])
        } else if (chatId === '2') {
            setUserDetails(data[1])
        } else if (chatId === '3') {
            setUserDetails(data[2])
        } else if (chatId === '4') {
            setUserDetails(data[3])
        } else if (chatId === '5') {
            setUserDetails(data[4])
        } else if (chatId === '6') {
            setUserDetails(data[5])
        }
    }, [chatId])


    return (
        <div className='chatContent_container'>
            <div className='chatContent_userChat'>
                <div className='chatContent_userChat_top'>
                <div className='chatContent_userChat_top_image_container'>
                    <img src={userDetails.src} alt='UserImage' />
                </div>
                <p >
                    
                    You matched with {userDetails.name}</p>
                </div>
                <div className='chatContent_userChat_center'>
         
                </div>
                <div className='chatContent_userChat_bottom'>
                    <input placeholder='Type a message' />
                </div>
            </div>
            <div className='chatContent_userDetails'>
                <div className='image_container'>
                    <img src={userDetails.src} alt='UserImage' />
                </div>
                <div className='qw'>
                    <h3>{userDetails.name} {userDetails.age}</h3>
                    <div>
                        <span>{userDetails.height}</span>
                    </div>
                    <div>
                        <span>{userDetails.location}</span>
                    </div>
                </div>
                <div className='er'>
                    <p>{userDetails.Summary}</p>
                    <h3>LifeStyle</h3>
                    <div className='ty'>
                        {userDetails?.lifeStyle.map((item, index) => (
                            <div>
                                <p>{item}</p></div>
                        ))}
                    </div>
                </div>
                <div className='BASIC'>
                    <h3>Basic</h3>
                    <div className='ty'>
                        {userDetails?.Basic.map((item, index) => (
                            <div>
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='UNMATCH'>
                    <h3>Unmatch</h3>
                    <span>{userDetails?.unmatch}</span>
                </div>
                <div className='SUMMARY'>
                    <h3>Summary </h3>
                    <span>{userDetails?.Summary}</span>
                </div>
            </div>
        </div>
    )
}
