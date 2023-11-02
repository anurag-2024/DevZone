// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {BsThreeDotsVertical} from "react-icons/bs";
import Card from './Card';
import image1 from '/image1.png'
import image2 from '/image2.png'
import image3 from '/image3.png'
import image4 from '/image4.png'
import image5 from '/image5.png'
function App() {
  
  return (
    <>
      <h1 className='mx-20 mt-10 font-bold text-2xl'>Tech Blog</h1>
      <div className='container1'>
      <div className='head   text-3xl' >
      How to Start a Blog in 2022: The Ultimate Guide
      </div>
      <div className='image'>
        <img src='/image1.png'></img>
      </div>
      </div>
      <div className='search'>
        Type to Search
      </div>
      <div className='container2'>
      <div className='card'>
        <div>
          <img src="/image5.png"></img>
          <div className='img_content font-light text-sm'><span className='card_text'>December 30,2021</span>
          <BsThreeDotsVertical className='font-bold text-xl' /></div>
        </div>
        <div className='content'>
        How to Build a Website From Scratch in 10 Simple Steps a day ago
        </div>
      </div>

      <div className='card'>
        <div>
          <img src="/image1.png" className='image2'></img>
          <div className='img_content font-light text-sm'><span className='card_text'>December 30,2021</span>
          <BsThreeDotsVertical className='font-bold text-xl' /></div>
        </div>
        <div className='content'>
        How to Build a Website From Scratch in 10 Simple Steps a day ago
        </div>
      </div>

      <div className='card'>
        <div>
          <img src="/image3.png"></img>
          <div className='img_content font-light text-sm'><span className='card_text'>December 30,2021</span>
          <BsThreeDotsVertical className='font-bold text-xl' /></div>
        </div>
        <div className='content'>
        How to Build a Website From Scratch in 10 Simple Steps a day ago
        </div>
      </div>

      <div className='card'>
        <div>
          <img src="/image4.png"></img>
          <div className='img_content font-light text-sm'><span className='card_text'>December 30,2021</span>
          <BsThreeDotsVertical className='font-bold text-xl' /></div>
        </div>
        <div className='content'>
        How to Build a Website From Scratch in 10 Simple Steps a day ago
        </div>
      </div>

      <div className='card'>
        <div>
          <img src="/image2.png"></img>
          <div className='img_content font-light text-sm'><span className='card_text'>December 30,2021</span>
          <BsThreeDotsVertical className='font-bold text-xl' /></div>
        </div>
        <div className='content'>
        How to Build a Website From Scratch in 10 Simple Steps a day ago
        </div>
      </div>

      <div className='card'>
        <div>
          <img src="/image5.png"></img>
          <div className='img_content font-light text-sm'><span className='card_text'>December 30,2021</span>
          <BsThreeDotsVertical className='font-bold text-xl' /></div>
        </div>
        <div className='content'>
        How to Build a Website From Scratch in 10 Simple Steps a day ago
        </div>
      </div>

      <div className='card'>
        <div>
          <img src="/image5.png"></img>
          <div className='img_content font-light text-sm'><span className='card_text'>December 30,2021</span>
          <BsThreeDotsVertical className='font-bold text-xl' /></div>
        </div>
        <div className='content'>
        How to Build a Website From Scratch in 10 Simple Steps a day ago
        </div>
      </div>

      <div className='card'>
        <div>
          <img src="/image5.png"></img>
          <div className='img_content font-light text-sm'><span className='card_text'>December 30,2021</span>
          <BsThreeDotsVertical className='font-bold text-xl' /></div>
        </div>
        <div className='content'>
        How to Build a Website From Scratch in 10 Simple Steps a day ago
        </div>
      </div>

      <div className='card'>
        <div>
          <img src="/image5.png"></img>
          <div className='img_content font-light text-sm'><span className='card_text'>December 30,2021</span>
          <BsThreeDotsVertical className='font-bold text-xl' /></div>
        </div>
        <div className='content'>
        How to Build a Website From Scratch in 10 Simple Steps a day ago
        </div>
      </div>
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
