import { useState } from "react"
import React  from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-scroll"
import DownloadCV from "./DownloadCv";

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    
    <div className="bg-black text-gray-400 h-[60px] w-full mx-auto flex justify-between items-center fixed z-50">
        <h1 className="text-3xl font-bold primary-color ml-4">B.Herry</h1>
        <ul className="hidden md:flex">
            <li className="p-5 cursor-pointer"><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li className="p-5 cursor-pointer"><Link to="about" smooth={true} duration={500}>About</Link></li>
            <li className="p-5 cursor-pointer"><Link to="project" smooth={true} duration={500}>Project</Link></li>
            <li className="p-5 cursor-pointer"><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
            <div className="hidden md:block">
                <DownloadCV />
            </div>
            <div onClick={handleNav} className="block md:hidden mr-6">
                {nav ? <AiOutlineCloseCircle size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in duration-500'
                : 'fixed left-[-100%] z-50'}>
                <h1 className="text-3xl primary-color m-4">
                    B.Herry
                </h1>
                <ul className="p-8 text-2xl">
                <li className="p-5"><Link to="home" smooth={true} duration={500} onClick={() => setNav(!nav)}>Home</Link></li>
                <li className="p-5"><Link to="about" smooth={true} duration={500} onClick={() => setNav(!nav)}>About</Link></li>
                <li className="p-5"><Link to="project" smooth={true} duration={500} onClick={() => setNav(!nav)}>Project</Link></li>
                <li className="p-5"><Link to="experience" smooth={true} duration={500} onClick={() => setNav(!nav)}>Experience</Link></li>
                <li className="p-5"><Link to="contact" smooth={true} duration={500} onClick={() => setNav(!nav)}>Contact</Link></li>
                </ul>
                <div className="mr-16">
                    <DownloadCV />
                </div>
            </div>

    </div>
  )
}

export default Navbar
