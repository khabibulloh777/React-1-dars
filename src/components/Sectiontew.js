import React from 'react'
import './Sectiontew.css'
import rasm  from'./bg.png'
import { GiConfirmed } from "react-icons/gi";
function Sectiontew() {
    return (
        <div className="sectiontew">
            <div className="text1">
                <p>Who We Are</p>
                <h1>Few Words</h1>
                <h1>About Farmino</h1>
            </div>
         <div className="katta">
         <div className="malu">
           <h4>Special Support &  Caring Organic</h4>
           <h4>Farmino Agency</h4>
           <p>Suspendisse faucibus neque in ante dignissim interdum sit amet tellus. <br />
           Proin aliquam mi eget posuere porta. Nam porta neque vel levtus dictum <br />
           confimentum
           </p>
           <div className="bir">
               <h1><GiConfirmed/></h1>
               <h4>Natural Process <br />
              <p>Liquam nulla nisi, accumsan id sapien varius, egestas vehicula <br />
                diam. Suspendisse faucibus neque </p> </h4>
           </div>
           <div className="bir">
               <h1 className="heh"><GiConfirmed/></h1>
               <h4> 100% organic Products <br />
              <p>Liquam nulla nisi, accumsan id sapien varius, egestas vehicula <br />
                diam. Suspendisse faucibus neque </p> </h4>
           </div>
           <div className="bir">
               <h1  className="ee"><GiConfirmed/></h1>
               <h4>Homegrown Goodness <br />
              <p>Liquam nulla nisi, accumsan id sapien varius, egestas vehicula <br />
                diam. Suspendisse faucibus neque </p> </h4>
           </div>
         </div>

          <div className="block">
          <img className="xec"   src={rasm} alt="" />
          <img className="xecm"   src={rasm} alt="" />
         
          </div>
         </div>


        </div>
    )
}

export default Sectiontew
