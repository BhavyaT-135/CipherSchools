import React from 'react'
import './content.css'

const Content = () => {
  return (
    <div className='cipher__content'>
      <div className='cipher__content_about'>
        <div className='cipher__content_about__heading'>
          <div className='cipher__content_about__heading-title'>
            ABOUT ME
          </div>
          <button className='cipher__content_about__heading-button'>
            Edit
          </button>
        </div>
        <input className='cipher__content_about-input' placeholder='Add something about you.'></input>
      </div>
      <div className='cipher__content-divider'></div>
    </div>
  )
}

export default Content