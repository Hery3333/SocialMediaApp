import React from 'react'
import './profileSide.css'
import LogoSearch from '../logoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import FollowersCard from '../followersCard/FollowersCard'
const ProfileSide = () => {
  return (
    <div>
        <div className="ProfileSide">
            <LogoSearch />
            <ProfileCard />
            <FollowersCard/>
        </div>
    </div>
  )
}

export default ProfileSide