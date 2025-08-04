import React from "react";
import { ClerkProvider, RedirectToSignIn } from "@clerk/clerk-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Chat from "../Pages/Chat";
import ChatContent from "../Pages/Chat/ChatContent/ChatContent";
import Filter from "../Pages/Chat/Filter/Filter";
import Likes from "../Pages/Chat/Likes/Likes";
import Short from "../Pages/Chat/Short/Short";
import UserChat from "../Pages/Chat/User/UserChat";
import LandingPage from "../Pages/LandingPage";
import Login from "../Pages/Login/Login";
import Onboarding from "../Pages/Onboarding/Index";
import Profile from "../Pages/Profile";
import Bumble from "../Pages/Profile/BumbleBoost/Index";
import Premium from "../Pages/Profile/Premium/Index";
import Edit from "../Pages/Profile/ProfileEdit/Edit";
import Referral from "../Pages/Profile/Referral/Referral";
import SelfBoostIndex from "../Pages/Profile/SelfBoost";
import SelfBoost from "../Pages/Profile/SelfBoost/SelfBoost";
import SignUp from "../Pages/SignUp";
import ProtectedRoute from "../Components/ProtectedRoute";
import "./App.css";

const PUBLISHABLE_KEY =
  "pk_test_Ym9sZC1nb2JibGVyLTc1LmNsZXJrLmFjY291bnRzLmRldiQ";

function App() {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/onboard" element={<Onboarding />} />

            {/* Protected Routes */}
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/edit"
              element={
                <ProtectedRoute>
                  <Edit />
                </ProtectedRoute>
              }
            />
            <Route
              path="/selfboost"
              element={
                <ProtectedRoute>
                  <SelfBoostIndex />
                </ProtectedRoute>
              }
            />
            <Route
              path="/prenium"
              element={
                <ProtectedRoute>
                  <Premium />
                </ProtectedRoute>
              }
            />
            <Route
              path="/referral"
              element={
                <ProtectedRoute>
                  <Referral />
                </ProtectedRoute>
              }
            />
            <Route
              path="/bumble"
              element={
                <ProtectedRoute>
                  <Bumble />
                </ProtectedRoute>
              }
            />

            {/* Nested Chat Routes */}
            <Route
              path="/chat"
              element={
                <ProtectedRoute>
                  <Chat />
                </ProtectedRoute>
              }
            >
              <Route index element={<Likes />} />
              <Route path="filter" element={<Filter />} />
              <Route path=":chatId" element={<ChatContent />} />
              <Route path="short" element={<Short />} />
            </Route>

            <Route
              path="/chats"
              element={
                <ProtectedRoute>
                  <UserChat />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>

    </ClerkProvider>

  );
}

export default App;