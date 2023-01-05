import React from 'react'
import Post from "./Post"

const DUMMY_DATA = [
  {
    displayName: "Nidhsih",
    userName: "Nidhish07",
    avatar: '',
    text: 'Good morning',
    isProfileImageNFT: false,
    timestamp: '2020-7-17T12:00:00.000Z'


  },
  {
    displayName: "Nidhsih",
    userName: "Nidhish07",
    avatar: '',
    text: 'Good morning',
    isProfileImageNFT: false,
    timestamp: '2020-7-17T12:00:00.000Z'


  },
  {
    displayName: "Nidhsih",
    userName: "Nidhish07",
    avatar: '',
    text: 'Good morning',
    isProfileImageNFT: false,
    timestamp: '2020-7-17T12:00:00.000Z'


  },
  {
    displayName: "Nidhsih",
    userName: "Nidhish07",
    avatar: '',
    text: 'Good morning',
    isProfileImageNFT: false,
    timestamp: '2020-7-17T12:00:00.000Z'


  },
  {
    displayName: "Nidhsih",
    userName: "1FfmbHfnpaZjKFvyi1okTjJJusN455paPH",
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
    text: 'Good morning',
    isProfileImageNFT: true,
    timestamp: '2020-7-17T12:00:00.000Z'


  },
]
const ProfileMessages = () => {
  return (
    <div className='no-srollbar'>
      {DUMMY_DATA?.map((data, index) => (<Post key={index} {...data}></Post>))}
    </div>
  )
}
const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

export default ProfileMessages