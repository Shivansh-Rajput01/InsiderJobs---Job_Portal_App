import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className='container px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-20'>
        <img onClick={() => navigate("/")} className='cursor-pointer' width={160} src={assets.logo} alt="" />
        <p className='flex-1 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @InsiderJobs.com.com | All right reserved.</p>
        <div className='flex gap-2.5'>
          <a href="https://github.com/Shivansh-Rajput01">
            <img width={38} src={assets.facebook_icon} alt="github-icon" />
          </a>
          <a href="https://www.instagram.com/_shhivanshh/">
            <img width={38} src={assets.instagram_icon} alt="insta-icon" />
          </a>
          <a href="https://x.com/_shhivanshh">
            <img width={38} src={assets.twitter_icon} alt="x-icon" />
          </a>
        </div>
    </div>
  )
}

export default Footer