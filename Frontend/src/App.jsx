import { useState } from 'react' 
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LinkSaver from './components/LinkSaver'

function App() { 

  return (
    <>
        <Navbar /> 
        <div className="bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">

       <LinkSaver/> 
        </div>
       <Footer/>
    </>
  )
}

export default App