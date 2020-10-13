import React from 'react';
import Chair from '../../../images/Chair.png';
const HeaderMain = () => {
    return (
       <main className="d-flex align-items-center" style={{height: "600px"}}>
           <div className="col-md-4 offset-md-1">
       <div>
       <h1 style={{color: "#3A4256"}}>You New Smile 
                <br/>
                Starts here
                </h1>
                    <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur inventore, laudantium assumenda nobis dolore tenetur?</p>
           <button className="btn primary text-light">Get Apointment</button>
       </div>
           </div>
           <div className="col-md-6">
               <img src={Chair} alt="" className="img-fluid"/>
           </div>
       </main>
    );
};

export default HeaderMain;