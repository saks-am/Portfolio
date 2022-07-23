import React from 'react'
import "./intro.css"
import Image from "../img/Image.png"


const intro = () => {

 
  return (
    <div className='i'>
      <div className='i-left'>
      <div className="i-left-wrapper">
          <h2 className="i-intro">Hello👋, My name is</h2>
          <h1 className="i-name">Saksham Sahu</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Engineer</div>
              <div className="i-title-item">Photographer</div>
              <div className="i-title-item">Creative</div>
              <div className="i-title-item">Team Player</div>
            </div>
            </div>
            <div className='i-desc'>
              <p>I am a Passionet Engineer who is really into developing beautiful and asthetic Websites like this one.
                i combine my knowledge of Engineer and design to accomplish such tasks.
              </p>
            </div>
            </div>

            
        
        
      </div>
      <div className='i-right'>
        <div className='i-bg'></div>
        <img src={Image} alt='' className='i-image'></img>
      </div>
     
    </div>
  )
}

export default intro;
