import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/home'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-slate-500'>Sherry</span>
        <span className='text-slate-700'>Estates</span>
        </h1></Link>
        <form className='bg-slate-100 p-2 rounded-2xl flex items-center'>
        <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className='text-slate-600'/>
        </form>

        <ul className='flex gap-4'>
        <Link to='/home'>
            <li className='hidden sm:inline text-slate-700 hover:font-bold cursor-pointer'>Home</li>
        </Link>
        <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:font-bold cursor-pointer'>About</li>
        </Link>
        <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className=' text-slate-700 hover:underline'> Sign in</li>
            )}
          </Link>
        <li>
          
        </li>
        </ul>
        </div>
    </header>
  )
}

export default Header