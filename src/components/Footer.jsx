import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png'
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-primary text-white shadow dark:bg-gray-900 mt-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex items-start justify-between">
        <div>
          <Link to='/' className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-14" alt="Flowbite Logo" />
          </Link>
          <div className=' text-sm sm:text-md font-medium font-poppins my-2'>
             <p className='mb-2'>Mr.Janaka Herath</p>
             <p>No 83/3, Egodawatta Rd.</p>
             <p>Thalathuoya,</p>
             <p>Kandy, Srilanka</p>
             <p className='flex items-center gap-1 mt-2 hover:underline'><FaWhatsapp /> <a href="">+94 77 636 5885</a></p>
          </div>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">About</a>
            </li>

            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block font-thin text-sm text-gray-500 text-center dark:text-gray-400">© 2024 <a href="" className="hover:underline">Villa Nugaliyadda™</a>. All Rights Reserved.</span>
        <span className="block font-thin text-sm text-gray-500 text-center dark:text-gray-400">🎨 Designed & Developed By <a href="https://www.linkedin.com/in/kavishka-nimsara-0a393026b" className="underline">Kavishka Nimsara</a></span>
      </div>
    </footer>
  );
};

export default Footer;
