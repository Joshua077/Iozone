import React, { useState } from 'react'
import './Short.css';
import { useNavigate } from "react-router-dom"
import TuneIcon from '@mui/icons-material/Tune';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';



// shortsData.js

export const getShortsData = () => {
  return [
    {
      id: 1,
      name: "Noemi Slater",
      thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 2,
      name: "Yu Jian",
      thumbnail: "https://images.unsplash.com/photo-1600346011337-e9cfac9a6e0b",
      video: "https://www.w3schools.com/html/movie.mp4",
    },
    {
      id: 3,
      name: "Airport Arrival",
      thumbnail: "https://images.unsplash.com/photo-1600346011337-e9cfac9a6e0b",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
    }
  ];
};




const Short = () => {
  const navigate = useNavigate();
  const shortsData = getShortsData();

  const [activeShort, setActiveShort] = useState(shortsData[0]);

  const [showForm, setShowForm] = useState(false);


  return (
    <div>
      <div className='filter_header1'>
        <div className='filter_header_content1'>
          <div className='logo'>
            <div style={{ background: "#BC72FB", padding: '6px 8px', borderRadius: '50%', cursor: 'pointer' }}
              onClick={() => navigate('/chat/filter')}
            >
              <TuneIcon style={{ color: "white", fontSize: '15px' }} />
            </div>

            <div style={{ background: "#4A4A4A", padding: '6px 8px', borderRadius: '50%', cursor: 'pointer' }}
              onClick={() => navigate('/chat/short')}>
              <YoutubeSearchedForIcon style={{ color: "white", fontSize: '15px' }} />

            </div>

            <div style={{ background: "#4A4A4A", padding: '6px 8px', borderRadius: '50%', cursor: 'pointer' }}
              onClick={() => navigate('/chat')}
            >
              <AutoAwesomeIcon style={{ color: "white", fontSize: '15px' }} />
            </div>
          </div>
        </div>
      </div>
      <div className='filter_header'>
        <div className='filter_header_content'>
          <div >
            <div style={{
              background: '#D0BCFF',
              width: '30px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '30px',
              paddingLeft: '3px',
              borderRadius: '49%'
            }}>
              < ArrowBackIosIcon
                style={{ fontSize: '15px', color: '#6750A4' }}
              />
            </div >

          </div>
          <div>
            <p>Short</p>
          </div>
        </div>
      </div>
      <div className="shorts-container">
        {/* Sidebar Panel */}
        {/* <div className="shorts-sidebar">
        {shortsData.map((short, index) => (
          <div
            key={index}
            className={`short-card ${activeShort.id === short.id ? 'active' : ''}`}
            onClick={() => setActiveShort(short)}
          >
            <img src={short.thumbnail} alt={short.name} className="short-image" />
            <p className="short-name">{short.name}</p>
          </div>
        ))}
      </div> */}

        {/* Main Video Section */}
        <div className="shorts-main">
          {showForm ? (
            <div className="upload-form">
              <h3>Upload New Mood Story</h3>
              <p>Add a photo or short video, show your prospective matches your recent activity, this will last for 24 hours</p>
              <form>
                <input type="file" accept="image/*,video/*" />
                
                <button type="submit">Upload</button>
              </form>
              <button onClick={() => setShowForm(false)}>Cancel</button>
            </div>
          ) : (
            <>
              <video
                key={activeShort.id}
                src={activeShort.video}
                className="short-video"
                controls
                autoPlay
              />
              <div className="short-actions">
                <button className="like">💜</button>
                <button className="dislike">❌</button>
                <button className="replay">🔄</button>
              </div>
            </>
          )}
        </div>

      </div>
    </div>
  )
}

export default Short
