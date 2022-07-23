import React from 'react'
import "./About.css"
import Gif from "../img/Gif.gif"
import Html from "../img/Html.png"
import Node from "../img/Node.png"
import Reacti from "../img/Reacti.png"
import Django from "../img/Django.png"

const About = () => {
  return (
    <div className='a'>
      <div class="a-left">
        <div class="a-card bg"></div>
        <div class="a-card">
        <img src={Gif} alt="3" className="a-img" />
        </div>
      </div>
      <div class="a-right">
        <h1 className='a-title'>My Skills</h1>
        <p className='a-sub'>I like to take responsibility to craft aesthetic Websites using modern frontend architecture and engineering.</p>
       
        <div className='a-web'>
        <img className='a-img1' src={Html} alt="" />
      
        <img className='a-img1' src={Node} alt=""/>
        <img className='a-img1' src={Reacti} alt=""/>
        <img className='a-img1' src={Django} alt=""/>
        
        </div>
        

      </div>
    </div>
  )
}

export default About