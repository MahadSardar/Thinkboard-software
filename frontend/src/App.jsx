import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import MainPage from './pages/MainPage'
import toast from "react-hot-toast";
import ProtectedRoute from './Components/protectedRoute'

const App = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24"/>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/register' element={<RegisterPage/>} />

        <Route path='/homepage' element={
          <ProtectedRoute><HomePage/></ProtectedRoute>
        } />
        <Route path='/create' element={
          <ProtectedRoute><CreatePage/></ProtectedRoute>
        } />
        <Route path='/note/:id' element={
          <ProtectedRoute><NoteDetailPage/></ProtectedRoute>
        } />
      </Routes>
    </div>
  )
}

export default App

