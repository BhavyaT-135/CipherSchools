import React, { useContext } from 'react'
import './profileHeader.css'
import pf from '../../assets/pf.jpeg'
import { UserContext } from '../../Context/UserContext'

const ProfileHeader = () => {

  const { user } = useContext(UserContext)
  let followersLength = ""
  if (user.followers) {
    followersLength = user.followers.length
  }

  return (
    <div className='cipher__profileheader'>
      <div className='cipher__profileheader-left'>
        <div className='cipher__profileheader_imagecontent'>
          <img className='cipher__profileheader_imagecontent-image' src={pf} alt='ProfilePic' />
          <i className='bi bi-wrench-adjustable-circle-fill cipher__profileheader_imagecontent-icon' />
        </div>
        <div className='cipher__profileheader_namecontent'>
          <div className='cipher__profileheader_namecontent-subheading'>Hello,</div>
          <div className='cipher__profileheader_namecontent-heading'>{user.username}</div>
          <div className='cipher__profileheader_namecontent-email'>{user.email}</div>
        </div>
      </div>
      <div className='cipher__profileheader-right'>
        <div className='cipher__profileheader_followers'>
          {followersLength} Followers
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader