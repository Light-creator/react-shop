import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className='flex justify-between h-24 items-center'>
      <Link to='/'>
        <div className='flex ml-5 items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="#a855f7">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
          </svg>
          <h1 className="text-2xl font-bold">Payme</h1>
        </div>
      </Link>
        <div className="md:flex sm:hidden">
          <Link to='/' className='mr-2 ml-2 transition duration-150 border-b-2 border-transparent hover:border-purple-500'>Catalog</Link>
          <Link to='/' className='mr-2 ml-2 transition duration-150 border-b-2 border-transparent hover:border-purple-500'>About Us</Link>
          <Link to='/' className='mr-2 ml-2 transition duration-150 border-b-2 border-transparent hover:border-purple-500'>Testimonials</Link>
        </div>
        <div className="flex mr-5">
          <Link to='/'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-1 ml-1 hover:text-purple-500 ease-in duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </Link>
          <Link to='/'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-1 ml-1 hover:text-purple-500 ease-in duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
          </Link>
        </div>
    </nav>
  );
}
