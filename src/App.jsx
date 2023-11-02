// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {CiSearch} from "react-icons/ci";
import {AiOutlineRight} from "react-icons/ai";
import Card from './Card';
import image1 from '/image1.png'
import image2 from '/image2.png'
import image3 from '/image3.png'
import image4 from '/image4.png'
import image5 from '/image5.png'
function App() {
  
  return (
    <>
      <h1 className='mx-40 mt-10 font-bold text-2xl'>Tech Blog</h1>
      <div className='container1'>
      <div className='head text-3xl' >
      How to Start a Blog in 2022: The Ultimate Guide
      </div>
      <div className='image'>
        <img src='/image1.png'></img>
      </div>
      </div>
      <div className='readmore'>
        <span className='readmore_text'>Read More</span>
        <AiOutlineRight className='readmore_icon'/>
      </div>
      <div className='search'>
       <CiSearch className='search-icon'/> <span>Type to Search</span>
      </div>
      <div className='container2'>

     <Card image={image5} />
     <Card image={image1} />
     <Card image={image3} />
     <Card image={image4} />
     <Card image={image2} />
     <Card image={image5} />
     <Card image={image5} />
     <Card image={image5} />
     <Card image={image5} />
      
      </div>

      <div className='footer'>
         <div>
          <img src='/image6.png' />
         </div>
         Made with ♥ by Akshat Mittal
      </div>
    </>
  )
}

export default App
