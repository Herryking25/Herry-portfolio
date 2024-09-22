import React from 'react'
import heroImage from '../assets/images/profile.png'
import { TypeAnimation } from 'react-type-animation'
import DownloadCV from './DownloadCv'


const Hero = () => {
  return (
    <div name="home" className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'>
      <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
            <img src={heroImage} alt="hero" className='w-60 sm:ml-20 rounded-full' />
      </div>
      <div className='col-span-2 px-5 my-auto'>
            <h1 className='text-white text-4xl sm:text-5xl lg:text-7xl font-extrabold'>
                <span className='primary-color'>
                    I'm a
                </span> <br />
                <TypeAnimation
                    sequence={[
                        "Frontend Dev",
                        1000,
                        "UI/UX Designer",
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                /> 
            </h1>
            <p className='text-white sm:text-lg my-6 lg:text-xl'>
                    My name is Bolatito Heritage, experienced web developer
            </p>
            <div className='my-8'>
                {/* <a href="#contact" className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-600
                text-white'>
                    Download CV
                // </a> */}
                <a href="#contact" className='px-6 py-3 w-full rounded-xl border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-600
                text-white hover:border-none'>
                    Contact
                </a>
            </div>
      </div>
    </div>
  )
}

export default Hero
