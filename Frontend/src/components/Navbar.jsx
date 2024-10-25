import React from 'react'
import logo from "/public/link.png"

const Navbar = () => {
    return (
        <nav className='bg-black text-white '>
            <div className="flex justify-between items-center px-4 py-5 h-14">
                <div className="flex gap-2 items-center font-bold text-white text-2xl">
                    <img src={logo} alt="link" className='h-10' />
                    <span className='text-blue-500'> </span>
                    <span>Link</span><span className='text-blue-500'>Saver</span>
                    </div>
            
            </div>
        </nav>
    )
}

export default Navbar