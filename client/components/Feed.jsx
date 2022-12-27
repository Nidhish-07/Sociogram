import React from 'react'
import { BsStars } from "react-icons/bs"
import MessageBox from "./MessageBox"

const Feed = () => {
    return (
        <div className={`flex-[2] border-r-4 border-l-4`}>
            <div className='sticky top-0 bg-gray-400 z-10 p-4 flex justify-between items-center'>
                <div className='text-xl font-bold'>Home</div>
                <BsStars />
            </div>
            <MessageBox></MessageBox>
        </div>
    )
}

export default Feed