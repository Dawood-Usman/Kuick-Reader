import React from 'react'
import {arr} from '../../Data/FeaturedProductsData'

function FeaturedProducts() {


  return (
<div className=' m-8'>
  <h1 className='text-3xl font-700 text-center'>Featured Books</h1>
  <div className="px-10 my-10 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-stretch content-center">
    {arr.map((obj, index) => (
      <div className='flex flex-col justify-evenly items-center flex-wrap border-2 border-gray-100 py-5 px-8 shadow-md h-96 hover:border-black group duration-200 ease-in-out' key={index}>
        <img className='w-32 h-40' src={obj.thumbnailUrl} alt="" />
        <div className="self-start">
          <p className='text-red-400 text-xl'>{obj.title}</p>
          <p className='text-gray-400'>{obj.authors}</p>
          <p className='text-xl font-bold'>{obj.categories}</p>
        </div>
        <button className='border-2 text-lg px-7 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-900 shadow-md opacity-0 group-hover:opacity-100 ease-in-out duration-200'>Read Now</button>
      </div>
    ))}
  </div>
</div>

  )
}

export default FeaturedProducts
