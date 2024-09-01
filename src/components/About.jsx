import React from 'react'
import aboutImg from '../assets/images/aboutimg.jpg'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
      <div className='md:grid md:grid-cols-2 sm:py-16'>
        <div className='mt-4 md:mt-0 text-left flex'>
            <div className='my-auto mx-6'>
                <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                <p className='text-base lg:text-lg'>I'm a Front-end developer and I excel in crafting seamless user experience and have expertise in modern web technologies which allow me to bring innovatie ideas to life,ensuring that every project not only meets but exceeds client expectations. Dedicated to continuous learning and staying updated with the latest industry trends,
                     i'm committed to delivering top-notch solutions that stand out in the digital landscape
                </p>

            </div>
        </div>
            <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutImg} alt="" width={300} height={300} />
      </div>
    </div>
  )
}

export default About
