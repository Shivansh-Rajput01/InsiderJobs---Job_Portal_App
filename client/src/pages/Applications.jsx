import React, { useState } from 'react'
import NavBar from '../components/Navbar';
import { assets, jobsApplied } from '../assets/assets';
import moment  from 'moment';
import Footer from '../components/Footer';

const Applications = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [resume, setResume] = useState(null);

  return (
    <>
    <NavBar />
    <div className='container px-4 min-h-[69vh] 2xl:px-20 mx-auto my-10'>
      <h2 className='text-xl font-semibold'>Your Resume</h2>
      <div className='flex gap-2 mb-6 mt-3'>
        { isEdit ? 
          <>
            <label className='flex items-center' htmlFor="resumeUpload">
              <p className='bg-blue-200 text-blue-600 px-4 py-2 rounded-lg mr-2'>Select Resume</p>
              <input id='resumeUpload' onChange={e => setResume(e.target.files[0])} accept='application/pdf' type="file" />
              <img src={assets.profile_upload_icon} alt="" />
            </label>
            <button onClick={e => setIsEdit(false)} className='bg-green-100 border border-green-600 px-4 py-2 rounded-lg'>Save</button>
          </>
        :
          <div className='flex gap-2'>
            <a className='bg-blue-200 text-blue-600 px-4 py-2 rounded-lg' href="">Resume</a>
            <button onClick={() => setIsEdit(true)} className='bg-gray-200 text-gray-900 border border-gray-500 px-4 py-2 rounded-lg'>Edit</button>
          </div>
        }
      </div>
      <div><h2 className='text-2xl font-semibold mb-4'>Job Applied</h2></div>
      <table className='min-w-full bg-white border rounded-lg'>
        <thead>
          <tr>
            <th className='py-3 px-4 border-b text-left'>Company</th>
            <th className='py-3 px-4 border-b text-left'>Job title</th>
            <th className='py-3 px-4 border-b text-left max-sm:hidden'>Location</th>
            <th className='py-3 px-4 border-b text-left max-sm:hidden'>Date</th>
            <th className='py-3 px-4 border-b text-left'>Status</th>
          </tr>
        </thead>
        <tbody>
          {jobsApplied.map((job, index) => true ? (
            <tr>
              <td className='py-3 px-4 flex items-center gap-2 border-b'>
                <img className='w-8 h-8' src={job.logo} alt="" />
                {job.company}
              </td>
              <td className='py-3 px-4 border-b text-left'>{job.title}</td>
              <td className='py-3 px-4 border-b text-left max-sm:hidden'>{job.location}</td>
              <td className='py-3 px-4 border-b text-left max-sm:hidden'>{moment(job.date).format("ll")}</td>
              <td className='py-3 px-4 border-b text-left'>
                <span className={`${job.status === 'Accepted' ? 'bg-green-200' : job.status === 'Rejected' ? 'bg-red-200' : 'bg-yellow-200'} px-4 py-1.5 rounded`}>
                  {job.status}
                </span>
              </td>
            </tr>
          ) : (null))}
        </tbody>
      </table>
    </div>
    <Footer />
    </>
  )
}

export default Applications