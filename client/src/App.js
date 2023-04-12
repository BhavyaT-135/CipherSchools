import React from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Content from './components/Content/Content'
import ProfileHeader from './components/ProfileHeader/ProfileHeader'
import './App.css'

const App = () => {
  return (
    <div className='cipher__app'>
      <Header />
      <ProfileHeader />
      <div className='cipher__app-content'>
        <Sidebar />
        <Content />
      </div>
    </div>
  )
}

export default App