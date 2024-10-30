import React from 'react'
// import proj1 from '../assets/images/proj1.png'
// import proj2 from '../assets/images/proj2.png'
// import proj3 from '../assets/images/proj3.png'
// import proj4 from '../assets/images/proj4.png'
// import proj5 from '../assets/images/proj5.png'
// import proj6 from '../assets/images/proj6.png'
import konserve from '../assets/images/konserve.png'
import schoolwebsite from '../assets/images/schoolwebsite.png'
import portfolio from '../assets/images/Portfolio.png'

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

// import React from 'react'
// import konserve from '../assets/images/konserve.png'
// import schoolwebsite from '../assets/images/schoolwebsite.png'

// const Projects = () => {
//     const projects = [
//         {
//           id: 1,
//           src: konserve,
//         },
//         {
//           id: 2,
//           src: schoolwebsite,
//         },
//       //   {
//       //     id: 3,
//       //     src: konserve,
//       //   },
//       //   {
//       //     id: 4,
//       //     src: schoolwebsite,
//       //   },
//       //   {
//       //     id: 5,
//       //     src: konserve,
//       //   },
//       //   {
//       //     id: 6,
//       //     src: schoolwebsite,
//       //   },
//       // ];
    
//   return (
//     <div name="projects" className='max-w-[1200px] p-5' id='project'>
//       <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
//         <div className='pb-8'>
//             <p className='text-4xl mb-3 font-bold primary-color'>
//                 Projects
//             </p>
//             <p className='text-gray-400'>Check out few of my projects</p>
//         </div>
//         <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12  sm:px-0'>
//         {projects.map(({ id, src }) => (
//             <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
//                 <img src={src} alt="" className='rounded-md duration-200 h-[200px]' />
//                 <div className='flex items-center justify-center text-white'>
//                     <a href=""><button className='w-1/2 px-6 primary-color py-3 m-4 duration-200 hover:scale-105'>Live</button></a>
//                     <button className='w-1/2 px-6 primary-color py-3 m-4 duration-200 hover:scale-105'>Code</button>
//                 </div>
//             </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Projects

