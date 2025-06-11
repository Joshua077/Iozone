import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from '../Pages/Chat';
import ChatContent from '../Pages/Chat/ChatContent/ChatContent';
import Filter from '../Pages/Chat/Filter/Filter';
import Likes from '../Pages/Chat/Likes/Likes';
import Short from '../Pages/Chat/Short/Short';
import UserChat from '../Pages/Chat/User/UserChat';
import LandingPage from '../Pages/LandingPage';
import Login from '../Pages/Login/Login';
import Onboarding from '../Pages/Onboarding/Index';
import Profile from '../Pages/Profile';
import Bumble from '../Pages/Profile/BumbleBoost/Index';
import Premium from '../Pages/Profile/Premium/Index';
import Edit from '../Pages/Profile/ProfileEdit/Edit';
import Referral from '../Pages/Profile/Referral/Referral';
import SelfBoostIndex from '../Pages/Profile/SelfBoost';
import SelfBoost from '../Pages/Profile/SelfBoost/SelfBoost';
import SignUp from '../Pages/SignUp';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/onboard' element={<Onboarding />} />
          <Route path="profile" element={<Profile />} >
            <Route index element={<Edit />} />
            <Route path="selfboost" element={<SelfBoostIndex />} />
            <Route path="prenium" element={<Premium />} />
            <Route path="referral" element={<Referral />} />
            <Route path="bumble" element={<Bumble />} />
          </Route>
          
          <Route path="chat" element={<Chat />}>
            <Route index element={<Likes />} />
            <Route path="filter" element={<Filter />} />
            <Route  path=":chatId" element={<ChatContent />} />
            <Route  path="short" element={<Short />} />
          </Route>

          <Route path="chats" element={<UserChat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
