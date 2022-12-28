import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { FaRegComment, FaRegShareSquare } from 'react-icons/fa'
import { format } from 'timeago.js'




const Post = (props) => {

  const formattedUsername = props.userName.slice(0, 4) + '...' + props.userName.slice(-4)
  return (
    <div className='flex p-3 border-b-2'>
      <div>
        <img src={props.avatar} alt={props.userName} className={`${props.isProfileImageNFT ? 'rounded-full h-10 w-10 object-cover smallHex' : 'rounded-full h-10 w-10 object-cover'}`} />
      </div>
      <div className='flex-1 px-4'>
        <div>
          <span className='flex items-center'>
            <span className='font-bold mr-1'>{props.displayName}</span>
            {props.isProfileImageNFT && <span><BsFillPatchCheckFill></BsFillPatchCheckFill></span>}
            <span>
              @{formattedUsername} . {format(new Date(props.timestamp).getTime())}
            </span>
          </span>
          <div className='my-2'></div>
        </div>
        <div className='flex justify-start mr-28 mt-4 text-black'>
          <div className={`rounded-full text-lg p-2 hover:text-[#ffff00] hover:bg-gray-500`}>
            <FaRegComment></FaRegComment>
          </div>
          <div className={`rounded-full text-lg p-2 hover:text-[#ffff00] hover:bg-gray-500`}>
            <FaRegShareSquare></FaRegShareSquare>
          </div>
          <div className={`rounded-full text-lg p-2 hover:text-[#ffff00] hover:bg-gray-500`}>

            <FaRegComment></FaRegComment>
          </div>
          <div className={`rounded-full text-lg p-2 hover:text-[#ffff00] hover:bg-gray-500`}>
            <FaRegShareSquare></FaRegShareSquare>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post