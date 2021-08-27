import React from 'react'
import './Section4.css'
import rasmm from './bar1.png'
import ss from './2.png'
function Section4() {
    return (
        <div className="section4">
            <div className="ras">
            </div>
            <div className="ani">
                <p>Why Choose Us</p>
                <h2>Special Support & <br />
              Caring Farm Agency</h2>
              <br />
              <p>Cras non mi odio. Aliquam rhoncus libero urna, sed tincidunt tellus iaculis at. Donec risus <br />
               ipsum, tincidunt in dictum sed, vulputate sit amet purus.</p>
               <img className="an"   src={rasmm} alt="" />
               <img className="an"   src={rasmm} alt="" />
               <img className="an"   src={rasmm} alt="" />
            </div>
         
        </div>
    )
}

export default Section4

