import React from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Content from './components/Content/Content'
import ProfileHeader from './components/ProfileHeader/ProfileHeader'
import './App.css'
import RightSidebar from './components/RightSidebar/RightSidebar'

const App = () => {
  return (
    <div className='cipher__app'>
      <Header />
      <Sidebar />
      <RightSidebar />
      <ProfileHeader />
      <Content />
    </div>
  )
}

export default App