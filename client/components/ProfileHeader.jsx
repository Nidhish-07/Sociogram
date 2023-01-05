import React from 'react'
import { useRouter } from "next/router"
import { BiArrowBack } from "react-icons/bi"

const ProfileHeader = () => {

  const router = useRouter()

  const isProfileImageNFT = false
  const account = "0x41321241646461246548s6a4dcas"

  return (
    <div className='border-gray-600 border-b'>
      <div className='py-1 px-3 mt-2 flex items-center'>
        <div onClick={() => { router.push("/") }} className="text-3xl cursor-pointer mr-2 rounded-full hover:bg-gray-500">
          <BiArrowBack></BiArrowBack>
        </div>
        <div className='px-3'>
          <div className='bg-transparent outline-none font-bold'>John Doe</div>
          <div className='text-black text-xs'>4 messages</div>
        </div>
      </div>
      <div className=''>
        <img src="https://source.unsplash.com/random/1500x500/?person" alt="person" className='object-cover h-full w-full' />
      </div>
      <div className='w-full h-24 rounded-full -mt-12 mb-2   items-center px-3 flex justify-between'>
        <div className={`${isProfileImageNFT ? 'hex' : 'w-full h-24 rounded-full -mt-12 mb-2   items-center px-3 flex justify-between'}`}>
          <img src="https://source.unsplash.com/random/400x400/?person" alt="pic" className={`${isProfileImageNFT ? 'object-cover h-full' : 'object-cover h-full rounded-full'}`} />
        </div>
      </div>
      <div className='px-3'>
        <div className=''>
          <div className='bg-transparent outline-none font-bold'>John Doe</div>
        </div>
        <div className='text-black text-xs'>
          {account && <div>@{account.slice(0, 6)}...{account.slice(-5)}</div>}
        </div>
      </div>
      <div className='flex justify-center mt-4 mb-2 text-xs font-semibold text-black'>
        <div className=' text-gray-500'>Messages</div>
        <div>Replies</div>
        <div>Likes</div>
        <div>Media</div>
      </div>
    </div>
  )
}

const style = {
  wrapper: `border-[#38444d] border-b`,
  header: `py-1 px-3 mt-2 flex items-center`,
  primary: `bg-transparent outline-none font-bold`,
  secondary: `text-[#8899a6] text-xs`,
  backButton: `text-3xl cursor-pointer mr-2 rounded-full hover:bg-[#313b44] p-1`,
  coverPhotoContainer: `flex items-center justify-center h-[15vh] overflow-hidden`,
  coverPhoto: `object-cover h-full w-full`,
  profileImageContainer: `w-full h-[6rem] rounded-full mt-[-3rem] mb-2 flex justify-start items-center px-3 flex justify-between`,
  profileImage: `object-cover rounded-full h-full`,
  profileImageNft: `object-cover h-full`,
  profileImageMint: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
  details: `px-3`,
  nav: `flex justify-around mt-4 mb-2 text-xs font-semibold text-[#8899a6]`,
  activeNav: `text-white`,
}

export default ProfileHeader