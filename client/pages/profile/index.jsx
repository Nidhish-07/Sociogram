import React from 'react'
import Sidebar from "../../components/SideBar"
import RightSideBar from "../../components/RightSideBar"
import ProfileHeader from '../../components/ProfileHeader'
import ProfileMessages from '../../components/ProfileMessages'

const Profile = () => {
  return (
    <div className='flex justify-center h-screen w-screen select-none bg-white text-black'>
      <div className='max-w-[1400px] w-2/3 flex justify-between'>

        <Sidebar></Sidebar>
        <div className='flex-[2] border-x border-r border-gray-500 overflow-y-scroll'>
          <ProfileHeader></ProfileHeader>
          <ProfileMessages></ProfileMessages>
        </div>
        <RightSideBar></RightSideBar>
      </div>
    </div>
  )
}

export default Profile;