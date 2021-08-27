import React from 'react'
import "./section.css"
import logo  from './Shape.png'
import {AiFillPlayCircle} from 'react-icons/ai'
function Section() {
    return (
        <div  className="section">
         <div className="text">        
          <h1>Eat Clean  <br />
          Eat Organic</h1>
          <p>Donec placerat, metus sed consectetu viverra, dolor nisl egestas ligula, ac gravida turpis <br />
          orci eget quam. Aliquam nulla nisi, accumsan id sapien varius </p>
         <div className="x">    <button className="btn"></button>      <h2><AiFillPlayCircle/></h2><h3>Watch video</h3></div>
         <div className="ha">
         <div className="naturall">
              <img className="logo1"   src={logo} alt="" />
              <h4>Natruall Food  
                  <br />
                  Nam porta neque vel <br />
                  lectus dictum
              </h4>
            </div> 
            <div className="bio">
            <img className="logog"   src={logo} alt="" />

            <h4> Biologically Safe <br />
            Suspendisse vitade fsgj <br />
             posuere lorem </h4>
            </div>
            <div className="tu">
            <img className="logog"   src={logo} alt="" />
               <h4>Improve Health <br />
               Aliquam nulla nisi, <br />
               accumsani id sapien </h4>
            </div>
            </div>
          </div>
          <div className="img">
               <h1>Organio</h1>
          </div>
        
   

        </div>
                
        )
}

export default Section

