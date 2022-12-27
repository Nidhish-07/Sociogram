import React, { useState } from "react";
import { FiMoreHorizontal, FiMessageSquare } from "react-icons/fi";
import { MdDashboard, MdExplore, MdOutlineExplore } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { FaFonticonsFi, FaFonticons } from "react-icons/fa";
import { SiIconfinder, SiGooglemessages } from "react-icons/si";
import { AiFillHome, AiOutlineHome, AiFillNotification, AiOutlineNotification } from "react-icons/ai";
import { BsBookmarkStarFill, BsBookmarkStar, BsGrid1X2Fill, BsGrid1X2, BsCircle, BsCircleFill } from 'react-icons/bs'
import { RiProfileFill, RiProfileLine } from 'react-icons/ri'

import ResponsiveSideBarOption from './ResponsiveSideBarOption'

const SideBar = ({ initialSelectedIcon = 'Home' }) => {

  const [selected, setSelected] = useState(initialSelectedIcon);

  return (
    <div className={'flex-[0.7] px-8 flex flex-col '}>
      <div className="text-3xl  m-4">
        <SiIconfinder></SiIconfinder>
      </div>
      <div className="flex-1">
        <ResponsiveSideBarOption Icon={selected === 'Home' ? AiFillHome : AiOutlineHome} text="Home" isActive={Boolean(selected === 'Home')}
          setSelected={setSelected}
          redirect={'/'}
        ></ResponsiveSideBarOption>
        <ResponsiveSideBarOption Icon={selected === "Explore" ? MdExplore : MdOutlineExplore} text="Explore" isActive={Boolean(selected === "Explore")} setSelected={setSelected} redirect={"/explore"}>Explore</ResponsiveSideBarOption>
        <ResponsiveSideBarOption Icon={selected === "Notifications" ? AiFillNotification : AiOutlineNotification} text="Notifications" setSelected={setSelected} isActive={Boolean(selected === "Notifications")} redirect={"/notifications"}>Notifications</ResponsiveSideBarOption>
        <ResponsiveSideBarOption Icon={selected === "Messages" ? SiGooglemessages : FiMessageSquare} text="Messages" setSelected={setSelected} isActive={Boolean(selected === "Messages")} redirect={"/message"}>Messages</ResponsiveSideBarOption>
        <ResponsiveSideBarOption Icon={selected === "Bookmarks" ? BsBookmarkStarFill : BsBookmarkStar} text="Bookmarks" setSelected={setSelected} isActive={Boolean(selected === "Bookmarks")} redirect={"/bookmarks"}>Bookmarks</ResponsiveSideBarOption>
        <ResponsiveSideBarOption Icon={selected === "Lists" ? BsGrid1X2Fill : BsGrid1X2} text="Lists" setSelected={setSelected} isActive={Boolean(selected === "Lists")} redirect={"/lists"}>Lists</ResponsiveSideBarOption>
        <ResponsiveSideBarOption Icon={selected === "Profile" ? RiProfileFill : RiProfileLine} text="Profile" setSelected={setSelected} isActive={Boolean(selected === "Profile")} redirect={"/profile"}>Profile</ResponsiveSideBarOption>
        <ResponsiveSideBarOption Icon={selected === "More" ? BsCircleFill : BsCircle} text="More" setSelected={setSelected} isActive={Boolean(selected === "More")} redirect={"/more"}>More</ResponsiveSideBarOption>
        <div className="bg-[#ffff00] hover:bg-[#ffff00] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer ">Mint</div>
      </div>


      {/* const style = {
        profileImage: `height-12 w-12 rounded-full`,
}; */}
      <div className="flex items-center mb-6 cursor-pointer hover:bg-[#333c45] rounded-[100px] p-2">
        <div className="flex item-center justify-center mr-4"></div>
        <div className="flex-1 flex">
          <div className="flex-1">
            <div className="text-lg">
              Lorem.
            </div>
            <div className="text-[#8899a6]">0x41321241</div>
            <div className="flex items-center mr-2">
              <FiMoreHorizontal></FiMoreHorizontal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
