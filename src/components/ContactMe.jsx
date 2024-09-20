import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaPhoneSquareAlt } from "react-icons/fa";
import DownloadCV from './DownloadCv';

const ContactMe = () => {
  return (
    <div>
      <div className='text-white flex flex-col justify-center items-start mt-4 ml-24'>
        <div className='flex justify-center items-center gap-4 text-block mb-4'>
            <FaGithub size={30} />
            <h1><a href="https://github.com/Herryking25">Herryking</a></h1>
        </div>
        <div className='flex justify-center items-center gap-4 text-block mb-4'>
            <SiGmail size={30} />
            <h1><a href="bolatitoheritage25@gmail.com">bolatitoheritage25@gmail.com</a></h1>
        </div>
        <div className='flex justify-center items-center gap-4 text-block mb-4'>
        <FaPhoneSquareAlt size={30}/>
        <h1>
            +2349132747510
        </h1>
        </div>
      </div>
      <DownloadCV />
    </div>
  )
}

export default ContactMe
