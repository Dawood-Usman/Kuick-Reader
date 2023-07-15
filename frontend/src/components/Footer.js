import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between">

          <p className="text-xl mb-4 md:mb-0">kuickReader.com</p>

          <div className="flex flex-wrap mb-4 md:mb-0">
            <a href="/" className="mr-4 text-gray-300 hover:text-white">Home</a>
            <a href="/about" className="mr-4 text-gray-300 hover:text-white">About</a>
            <a href="/categories" className="mr-4 text-gray-300 hover:text-white">Categories</a>
            <a href="/contact" className="mr-4 text-gray-300 hover:text-white">Contact</a>
          </div>

          <div className="flex">
            <a
              href="https://facebook.com/"
              className="mr-3 text-2xl text-gray-300 hover:scale-125 duration-200 ease-in-out hover:text-white"
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://twitter.com/"
              className="mr-3 text-2xl text-gray-300 hover:scale-125 duration-200 ease-in-out hover:text-white"
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://instagram.com/"
              className="mr-3 text-2xl text-gray-300 hover:scale-125 duration-200 ease-in-out hover:text-white"
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        {/* Copyright Content */}
        <div className="text-center mt-4 text-gray-400">
          &copy; {new Date().getFullYear()} kuickReader. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
