import { redirect } from 'next/dist/server/api-utils'
import { useRouter } from 'next/router'
import React from 'react'


const ResponsiveSideBarOption = (props) => {
  const router = useRouter()
  return (
    <div className="w-min flex items-center rounded-[100px] p-4 cursor-pointer hover:bg-[#2e2d2d] transition-all hover:duration-200 hover:ease-in-out" onClick={() => { props.setSelected(props.text); router.push(props.redirect) }}>


      <div className="text-xl mr-4">
        <props.Icon />
      </div>
      <div className={`${props.isActive ? "font-medium" : "font-bold"}`}>{props.text}</div>

    </div>
  )
}

export default ResponsiveSideBarOption