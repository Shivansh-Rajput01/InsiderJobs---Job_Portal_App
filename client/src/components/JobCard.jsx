import React from 'react'
import { assets } from '../assets/assets'
import {useNavigate} from 'react-router-dom'

const JobCard = ({job}) => {
  const navigate = useNavigate();

  return (
    <div className='p-6 shadow-lg rounded-md'>
        <div className='flex justify-between items-center'>
        <img className='h-8' src={assets.company_icon} alt="" />
        </div>
        <h3 className='font-medium text-xl mt-2'>{job.title}</h3>
        <div className='flex items-center mt-2 text-sm gap-3'>
            <span className='bg-blue-50 border border-blue-300 rounded px-4 py-1.5'>{job.location}</span>
            <span className='bg-red-50 border border-red-300 rounded px-4 py-1.5'>{job.level}</span>
        </div>
        <p className='text-gray-500 text-sm mt-4' dangerouslySetInnerHTML={{__html:job.description.slice(0,150)}}></p>
        <div className='mt-4 flex gap-4 text-sm'>
            <button onClick={() => {navigate(`/apply-job/${job._id}`); scrollTo(0,0)}} className='bg-blue-600 text-white rounded px-4 py-2 cursor-pointer hover:bg-blue-500'>Apply Now</button>
            <button onClick={() => {navigate(`/apply-job/${job._id}`); scrollTo(0,0)}} className='text-gray-600 rounded px-4 py-2 border cursor-pointer hover:bg-orange-200'>Learn More</button>
        </div>
    </div>
  )
}

export default JobCard