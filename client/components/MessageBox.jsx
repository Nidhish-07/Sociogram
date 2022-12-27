import React from 'react'
import { BsCardImage, BsEmojiSmile } from 'react-icons/bs'
import { RiFileGifLine, RiBarChartHorizontalFill } from 'react-icons/ri'
import { IoMdCalendar } from 'react-icons/io'
import { MdOutlineLocationOn } from 'react-icons/md'

const MessageBox = () => {
    const [message, setMessage] = React.useState("")

    const postMessage = (event) => {
        event.preventDefault();

    }
    return (
        <div className='px-4 flex flex-row border-b-2 pb-4'>
            <div className='mr-4'>
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" alt="" className='h-12 w-12 rounded-full mt-2' />
            </div>
            <div className='flex-1'>
                <form >
                    <textarea placeholder='Write Something' value={message} onChange={(event) => setMessage(event.target.value)} className="w-full h-full outline-none bg-transparent text-lg"></textarea>
                    <div className='flex'>
                        <div className='text-[#d8f352] flex flex-1 items-center'>
                            <BsCardImage className="mr-2" color='#000' />
                            <RiFileGifLine className="mr-2" color='#000' />
                            <RiBarChartHorizontalFill className="mr-2" color='#000' />
                            <BsEmojiSmile className="mr-2" color='#000' />
                            <IoMdCalendar className="mr-2" color='#000' />
                            <MdOutlineLocationOn className="mr-2" color='#000' />
                        </div>
                        <button type='submit' className={`px-6 py-2 rounded-3xl font-bold ${message ? 'bg-[#ffff00] text-black' : 'bg-[#ffffaa] text-black'}`} disabled={!message} onClick={(event) => (postMessage(event))}>Send</button>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default MessageBox