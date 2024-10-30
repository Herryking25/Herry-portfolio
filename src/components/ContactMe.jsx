import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaPhoneSquareAlt } from "react-icons/fa";
import DownloadCV from './DownloadCv';

const ContactMe = () => {
  return (
    <div className='max-w-[1200px] mx-auto bg-black sm:py-20 p-5' id='contact'>
        <div className='text-center'>
            <h2 className='text-4xl font-bold leading-tight primary-color'>
                Contact
            </h2>
      </div>
      <div className='text-white text-[20px] flex flex-col justify-start sm:justify-center sm:ml-24 items-start mt-4'>
        <div className='flex justify-center items-center gap-4 text-block mb-4'>
            <FaGithub size={30} />
            <h1 className='primary-color'><a href="https://github.com/Herryking25">Herryking</a></h1>
        </div>
        <div className='flex justify-center items-center gap-4 text-block mb-4'>
            <SiGmail size={30} />
            <h1 className='primary-color'><a href="bolatitoheritage25@gmail.com">bolatitoheritage25@gmail.com</a></h1>
        </div>
        <div className='flex justify-center items-center gap-4 text-block mb-4'>
        <FaPhoneSquareAlt size={30}/>
        <h1 className='primary-color'>
            +2349132747510
        </h1>
        </div>
      </div>
      <DownloadCV />
    </div>
  )
}

export default ContactMe
