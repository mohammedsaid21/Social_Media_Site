import React from 'react'
import { BrowserRouter, Navigate, Routes, Route, useLocation } from "react-router-dom";
import HomePage from 'scenes/homePage';
import LoginPage from 'scenes/loginPage';
import ProfilePage from 'scenes/profilePage';
import { useSelector } from "react-redux";
import { AnimatePresence } from 'framer-motion'

const Routers = () => {
  const isAuth = Boolean(useSelector((state) => state.token));

  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/login"
          element={isAuth ? <HomePage /> : <LoginPage />}
        />
        <Route path="/"
          element={isAuth ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/home"
          element={isAuth ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile/:userId"
          element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
        />
      </Routes>
    </AnimatePresence>
  )
}

export default Routers