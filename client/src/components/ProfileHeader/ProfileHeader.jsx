import React from 'react'
import './profileHeader.css'
import pf from '../../assets/pf.jpeg'

const ProfileHeader = () => {
  return (
    <div className='cipher__profileheader'>
      <div className='cipher__profileheader-left'>
        <div className='cipher__profileheader_imagecontent'>
          <img className='cipher__profileheader_imagecontent-image' src={pf} alt='ProfilePic' />
          <i className='bi bi-wrench-adjustable-circle-fill cipher__profileheader_imagecontent-icon' />
        </div>
        <div className='cipher__profileheader_namecontent'>
          <div className='cipher__profileheader_namecontent-subheading'>Hello,</div>
          <div className='cipher__profileheader_namecontent-heading'>Bhavya Tewari</div>
          <div className='cipher__profileheader_namecontent-email'>bhavyatewari.13.5@gmail.com</div>
        </div>
      </div>
      <div className='cipher__profileheader-right'>
        <div className='cipher__profileheader_followers'>
          0 Followers
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader