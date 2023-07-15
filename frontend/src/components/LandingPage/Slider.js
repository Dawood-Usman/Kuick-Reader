import React, {useState} from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
import Book1 from './../../assets/images/book-1.jpg'
import Book2 from './../../assets/images/book-2.jpg'
import Book3 from './../../assets/images/book-3.jpg'
import Book4 from './../../assets/images/book-4.jpg'
import Book5 from './../../assets/images/book-5.jpg'

function Slider() {

    const slides = [
        {url: Book1},
        {url: Book2},
        {url: Book3},
        {url: Book4},
        {url: Book5},
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };


    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };


    const gotoSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };



  return (
    <div className='max-w-[1400px] h-[550px] w-full m-auto py-10 px-4 relative group'>
      <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-cover bg-center duration-500'></div>

      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30}/>
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30}/>
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
            <div key={slideIndex} onClick={() => gotoSlide(slideIndex)} className='text-2xl cursor-pointer'>
                <RxDotFilled/>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Slider
