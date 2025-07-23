// ✅ StreamChat Integration using Outlet (Updated)

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import './chat.css';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { getShortsData } from './Short/Short';
import { StreamChat } from 'stream-chat';
// import { Chat, Channel, Window, ChannelHeader, MessageList, MessageInput, Thread, LoadingIndicator } from 'steam-chat-react'
import { useUser, useAuth } from '@clerk/clerk-react';
import axios from 'axios';
 

const client = StreamChat.getInstance(process.env.VITE_STREAM_API_KEY!);

export default function Chat() {
  const navigate = useNavigate();
  const location = useLocation();
  const isChatOpen = /^\/chat\/[\d]+$/.test(location.pathname);
  const [showForm, setShowForm] = useState(false);
  const [conversations, setConversations] = useState<any[]>([]);
  const { user } = useUser();
  const { getToken } = useAuth();

  useEffect(() => {
    const initChat = async () => {
      if (!user) return;

      const token = await getToken();

      const res = await axios.get(
        'https://staging.zanzino.com/api/v1/stream-chat/token/',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const streamToken = res.data.token;

      await client.connectUser(
        {
          id: user.id,
          name: user.fullName || 'Anonymous',
          image: user.imageUrl,
        },
        streamToken
      );

      const channelList = await client.queryChannels({
        members: { $in: [user.id] },
      });

      setConversations(channelList);
    };

    initChat();

    return () => {
      client.disconnectUser();
    };
  }, [user]);

  const profileImage = user?.imageUrl || '';

  return (
    <div className='chat_container'>
      <div className='chat_container_nav'>
        <Navbar />
      </div>
      <div className='chat_content'>
        <div className='chat_content_left'>
          {location.pathname === '/chat/short' ? (
            <div className='shorts-sidebar'>
              <div className='reels_container'>
                <div className='chat_reels'>
                  <p>Explore</p>
                  <div className='chat_reels_container'>
                    <div className='reel-item' onClick={() => setShowForm(true)}>
                      <div className='reel-avatar add-mood'>
                        <img src={profileImage} alt='Your Mood' />
                        <span className='add-icon'>+</span>
                      </div>
                      <div>
                        <p>Your Mood</p>
                      </div>
                    </div>
                    <div className='chat_reels_content'>
                      {conversations.map((channel, index) => (
                        <div
                          key={index}
                          className='chat_reels_content_image'
                          onClick={() => navigate(`/chat/${channel.id}`)}
                        >
                          <img
                            src={channel.data.image || profileImage}
                            alt='profile'
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {getShortsData().map((short) => (
                  <div key={short.id} className='short-card'>
                    <div className='short-header'>
                      <img
                        src={short.thumbnail}
                        alt={short.name}
                        className='short-profile-image'
                      />
                      <p className='short-name'>{short.name}</p>
                    </div>
                    <img
                      src={short.thumbnail}
                      alt={short.name}
                      className='short-image'
                    />
                    <div className='short-actions'>
                      <button className='like'>💜</button>
                      <button className='dislike'>❌</button>
                      <button className='replay'>🔄</button>
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
                  {conversations.map((channel, index) => (
                    <div
                      key={index}
                      className='chat_reels_content_image'
                      onClick={() => navigate(`/chat/${channel.id}`)}
                    >
                      <img
                        src={channel.data.image || profileImage}
                        alt='profile'
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className='chat_lits'>
                <p>Messages</p>
                {conversations.map((channel, index) => (
                  <div
                    key={index}
                    className='chat_lits_content'
                    onClick={() => navigate(`/chat/${channel.id}`)}
                  >
                    <div className='chat_lits_content_image'>
                      <img src={channel.data.image || profileImage} alt='Profile' />
                    </div>
                    <div className='chat_lits_content_text'>
                      <div className='chat_lits_content_text1'>
                        <h3>{channel.data.name || 'Unknown'}</h3>
                        <CheckCircleOutlineIcon
                          style={{ color: 'blue', fontSize: '13px' }}
                        />
                      </div>
                      <span>
                        {channel.state.messages?.[channel.state.messages.length - 1]?.text ||
                          'No messages'}
                      </span>
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
  );
}
