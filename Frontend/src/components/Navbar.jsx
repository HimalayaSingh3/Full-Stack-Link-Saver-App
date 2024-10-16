import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white '>
            <div className="flex justify-between items-center px-4 py-5 h-14">
                <div className="logo font-bold text-white text-2xl">
                    <span className='text-blue-500'> &lt;</span>
                    <span>Link</span><span className='text-blue-500'>Saver/&gt;</span>
                    </div>
            
            </div>
        </nav>
    )
}

export default Navbar