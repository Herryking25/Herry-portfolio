import React from 'react'
import konserve from '../assets/images/konserve.png'
import schoolwebsite from '../assets/images/schoolwebsite.png'
import portfolio from '../assets/images/Portfolio.png'
import arete from '../assets/images/arete.png'
import shoppingsite from '../assets/images/Shoppingsite.png'

const Projects = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5' id='project'>
        <div className='pb-8'>
            <p className='text-4xl mb-3 font-bold primary-color'>Projects</p>
            <p className='text-gray-400'>Check out few of my projects</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                h-[200px] bg-cover relative'>
                <img src={konserve} alt="" className=''/>
                <div className='opacity-0 group-hover:opacity-90 bg-gray/70 absolute inset-0 flex flex-col 
                    justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>Project</span>
                    <div className='pt-8 text-center'>
                        <a href="https://konserve-app.vercel.app/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold 
                            text-lg'>
                                Live
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                h-[200px] bg-cover relative'>
                <img src={schoolwebsite} alt="" />
                <div className='opacity-0 group-hover:opacity-90 bg-gray/70 absolute inset-0 flex flex-col 
                    justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>Project</span>
                    <div className='pt-8 text-center'>
                        <a href="https://schoolweb-six.vercel.app/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold 
                            text-lg'>
                                Live
                            </button>
                        </a>
                    </div>
                </div>

            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                h-[200px] bg-cover relative'>
                <img src={portfolio} alt="" />
                <div className='opacity-0 group-hover:opacity-90 bg-gray/70 absolute inset-0 flex flex-col 
                    justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>Project</span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold 
                            text-lg'>
                                Live
                            </button>
                        </a>
                    </div>
                </div>

            </div>


            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                h-[200px] bg-cover relative'>
                <img src={arete} alt="" />
                <div className='opacity-0 group-hover:opacity-90 bg-gray/70 absolute inset-0 flex flex-col 
                    justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>Project</span>
                    <div className='pt-8 text-center'>
                        <a href="https://arete-omega.vercel.app/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold 
                            text-lg'>
                                Live
                            </button>
                        </a>
                    </div>
                </div>

            </div>


            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                h-[200px] bg-cover relative'>
                <img src={shoppingsite} alt="" />
                <div className='opacity-0 group-hover:opacity-90 bg-gray/70 absolute inset-0 flex flex-col 
                    justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>Project</span>
                    <div className='pt-8 text-center'>
                        <a href="https://king-shop-murex.vercel.app/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold 
                            text-lg'>
                                Live
                            </button>
                        </a>
                    </div>
                </div>

            </div>

            {/* <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                h-[200px] bg-cover relative'>
                <img src={schoolwebsite} alt="" />
                <div className='opacity-0 group-hover:opacity-90 bg-gray/70 absolute inset-0 flex flex-col 
                    justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>Project</span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold 
                            text-lg'>
                                Live
                            </button>
                        </a>
                    </div>
                </div>

            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                h-[200px] bg-cover relative'>
                <img src={konserve} alt="" />
                <div className='opacity-0 group-hover:opacity-90 bg-gray/70 absolute inset-0 flex flex-col 
                    justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>Project</span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold 
                            text-lg'>
                                Live
                            </button>
                        </a>
                    </div>
                </div>

            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                h-[200px] bg-cover relative'>
                <img src={schoolwebsite} alt="" />
                <div className='opacity-0 group-hover:opacity-90 bg-gray/70 absolute inset-0 flex flex-col 
                    justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'>Project</span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold 
                            text-lg'>
                                Live
                            </button>
                        </a>
                    </div>
                </div>

            </div> */}
        </div>
      
    </div>
  )
}

export default Projects

