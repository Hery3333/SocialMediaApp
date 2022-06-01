import React from 'react'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'
import './ProfileCard.css'
const ProfileCard = () => {


  const ProfilePage = true;

  return (
    <div className="ProfileCard">
        <div className="ProfileImages">
            <img src={Cover} alt='cover-image'/>
            <img src={Profile} alt='profile-image'/>
        </div>
        <div className="ProfileName">
          <span>Hery</span>
          <span>Senior UI/UX Designer</span>
        </div>
        <div className="followStatus">
          <hr/>
          <div>
            <div className="follow">
              <span>6,666</span>
              <span>Followers</span>
            </div>
            
            <div className="follow">
              <span>33</span>
              <span>Following</span>
            </div>
            {ProfilePage && (
              <>
                <div className="follow">
                  <span>3</span>
                  <span>Posts</span>
                </div>
              </>
            )}
          </div>
          <hr/>
        </div>
        {ProfilePage ? '' : <span>
          My Profile
        </span>
        }
        
    </div>
  )
}

export default ProfileCard