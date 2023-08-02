import React from 'react'
import { useNavigate } from 'react-router-dom'

function NoMatch() {
    
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

  return (
    <div className='h-screen w-screen bg-zinc-200 flex flex-col justify-center items-center'>
      <div className="m-5 w-[90%] md:w-[40%] bg-white px-3 py-10 flex flex-col flex-wrap justify-center items-center shadow-xl">
        <div className="flex flex-row">
            <p className='text-9xl font-semibold'>4<span className='text-sky-500'>0</span>4</p>
        </div>
        <p className='uppercase font-semibold m-4 text-center'>The Page you requested Could not found</p>
        <button className='text-xl px-5 py-2 border-2 my-5 border-slate-400 duration-300 ease-linear hover:bg-gray-500 hover:text-white' onClick={goBack}>Go Back</button>
      </div>
    </div>
  )
}

export default NoMatch
