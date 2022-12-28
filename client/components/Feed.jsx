import React from 'react'
import { BsStars } from "react-icons/bs"
import MessageBox from "./MessageBox"
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
const Feed = () => {
    return (
        <div className={`flex-[2] border-r-4 border-l-4`}>
            <div className='sticky top-0 bg-gray-400 z-10 p-4 flex justify-between items-center'>
                <div className='text-xl font-bold'>Home</div>
                <BsStars />
            </div>
            <MessageBox></MessageBox>
            {DUMMY_DATA.map((data, index) => (<Post key={index} {...data}></Post>))}
        </div>
    )
}

export default Feed