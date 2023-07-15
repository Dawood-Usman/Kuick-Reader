import React from 'react'
import '../LandingPage/custom.css'
import HorrorIcon from './../../assets/images/horror.png'
import RomanceIcon from './../../assets/images/romance.png'
import CrimeIcon from './../../assets/images/crime.png'
import FictionIcon from './../../assets/images/fiction.png'

function Categories() {

    const Categories = [
        {
            img:HorrorIcon,
            title:'Horror'
        },
        {
            img:CrimeIcon,
            title:'Crime'
        },{
            img:RomanceIcon,
            title:'Romance'
        },{
            img:FictionIcon,
            title:'Science Fiction'
        }
    ];

  return (
    <div className='flex flex-col my-10'>
      <h1 className='text-center text-sky-700 text-2xl'>Top Categories</h1>
    <div className='flex flex-row gap-5 flex-wrap my-8 justify-center'>
      {Categories.map((obj) => (
        <div className='categoryCardBg rounded-md shadow-lg w-72 h-auto p-6 cursor-pointer'>
            <img className='w-16' src={obj.img} alt="" />
            <h1 className='text-xl bold text-700'>{obj.title}</h1>
            <button className='mt-3 border-2 text-lg px-7 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-900 shadow-md ease-in-out duration-200'>Explore</button>
        </div>
      ))}
      </div>

    </div>
  )
}

export default Categories
