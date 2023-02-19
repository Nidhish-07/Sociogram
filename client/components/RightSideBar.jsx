import React from 'react'
import { news, follow } from '../utils/static_data'
import { BiSearch } from "react-icons/bi"

const style = {

  searchBar: `flex items-center bg-[#243340] p-2 rounded-3xl`,
  searchIcon: `text-[#8899a6] mr-2`,
  inputBox: `bg-transparent outline-none`,
  section: `bg-[#192734] my-6 rounded-xl overflow-hidden`,
  title: `p-2 font-bold text-lg`,
  showMore: `p-2 text-[#1d9bf0] text-sm cursor-pointer hover:bg-[#22303c]`,
  item: `flex items-center p-3 my-2 hover:bg-[#22303c] cursor-pointer`,
  newsItemLeft: `flex-1`,
  newsItemCategory: `text-[#8899a6] text-xs font-semibold`,
  newsItemTitle: `text-sm font-bold`,
  newsItemRight: `w-1/5 ml-3`,
  newsItemImage: `rounded-xl h-14 w-14 object-cover`,
  followAvatarContainer: `w-1/6`,
  followAvatar: `rounded-full h-[40px] w-[40px]`,
  profileDetails: `flex-1`,
  name: `font-bold`,
  handle: `text-[#8899a6]`,
  followButton: `bg-white text-black px-3 py-1 rounded-full text-xs font-bold`,
}

const RightSideBar = () => {
  return (
    <div className='flex-1 p-4'>
      <div className='flex items-center bg-[#34363a] p-2 rounded-full'>
        <BiSearch className='text-white mr-2'></BiSearch>
        <input type={"text"} placeholder="Search" className='bg-transparent outline-none text-white font-light'  ></input>
      </div>
      <div className='bg-[#192734] my-5 rounded-xl overflow-hidden'>
        <div className='p-2 font-bold text-lg'>Latest News</div>
        {news.map((n, i) => {
          <div key={i} className="flex items-center p-3 my-2 hover:bg-[#22303c] cursor-pointer">
            <div className='flex-1'>
              <div className='text-white text-xs font-semibold'>{n.category}</div>
              <div className='text-sm font-bold'>{n.title}</div>

            </div>
            <div className='w-1/5 ml-3'>
              <img src={n.image} alt={n.image} className="rounded-xl h-10 w-10" />
            </div>
          </div>
        })}
        <div className='p-2 text-white text-sm cursor-pointer hover:bg-[#22303c] '>More..</div>
      </div>
      <div className='bg-[#192734] my-5 rounded-xl overflow-hidden'>
        <div className='p-2 font-bold text-lg '>Follow</div>
        {follow.map((f, i) => {
          return (<div key={Math.random()} className="flex items-center my-2 p-3 hover:bg-[#22303c] cursor-pointer">
            <div className='w-1/6'>
              <img src={f.avatar} alt={f.avatar} className="rounded-full h-10 w-10" />
            </div>
            <div className='flex-1'>
              <div className='font-bold'>{f.name}</div>
              <div className='text-white'>{f.handle}</div>
            </div>
            <div className='bg-white text-black py-1 px-3 rounded-full text-xs font-bold'>Follow</div>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default RightSideBar