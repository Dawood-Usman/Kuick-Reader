import React, {useState, useEffect} from 'react'
import Logo from './../../images/logo.png'

function Header() {

  const [isScaled, setIsScaled] = useState(false);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIsScaled((prevIsScaled) => !prevIsScaled);
      }, 500);
  
      return () => {
        clearInterval(interval);
      };
    }, []);


  return (
    <>
    <div className='flex flex-wrap justify-between content-center w-full h-auto px-10 py-2'>
        <div className='cursor-pointer'>
        <img className='w-16 h-fit' src={Logo} alt="Kuick Reader Logo" />
        <h1 className=' text-lg -ml-2'>kuickReader</h1>
        </div>
        <ul className='flex flex-row flex-wrap cursor-pointer'>
            <li className='uppercase self-center px-5 hover:text-green-500 text-lg border-green-600'>Home</li>
            <li className='uppercase self-center px-5 hover:text-green-500 text-lg border-green-600'>Categories</li>
            <li className='uppercase self-center px-5 hover:text-green-500 text-lg border-green-600'>About</li>
            <li className='uppercase self-center px-5 hover:text-green-500 text-lg border-green-600'>Contact</li>
        </ul>
        <button
        className={`text-lg bg-green-400 self-center h-fit px-5 py-0.5 border-2 rounded-2xl duration-500 ease-in-out   ${isScaled ? 'scale-110' : ''}`}
      >Login</button>
    </div>
    </>
  )
}

export default Header
