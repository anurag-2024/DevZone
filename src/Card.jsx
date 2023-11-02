import React from 'react'
import {BsThreeDotsVertical} from "react-icons/bs";

const Card = (props) => {
  return (
      <div className='card'>
        <div>
          <img src={props.image}></img>
          <div className='img_content font-light text-sm'><span className='card_text'>December 30,2021</span>
          <BsThreeDotsVertical className='font-bold text-xl' /></div>
        </div>
        <div className='content'>
        How to Build a Website From Scratch in 10 Simple Steps a day ago
        </div>
      </div>
      
  )
}

export default Card
