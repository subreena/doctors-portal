import React from 'react';
import dentalCare from '../../../images/DentalCare.png';
const FeatureService = () => {
    return (
       <div className="feature container mb-5">
           <div className="row">
               <div className="img col-md-5">
              <img src={dentalCare} alt="" style={{}} className="img-fluid"/>
               </div>
               <div className="feature-content col-md-6 d-flex align-items-center">
                   <div className="">
                   <h1 className="dark-color" style={{marginTop: "25px"}}>
                       Exceptional Dental
                       <br/>
                       Care, On your Terms
                   </h1>
                   <p className="text-secondary mt-3" style={{lineHeight: "1.75"}}>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque cum id, illum harum doloremque perferendis quibusdam rem fugiat quos adipisci distinctio architecto. Accusantium et, nam labore facilis, optio provident recusandae cum quasi quod dicta officiis quia, dolore quidem non ipsum rem dolores maxime ut repellat.
                   <br/>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas qui hic eum labore quis amet id debitis! Enim provident eaque molestias alias commodi.
                   </p>
                   <button className="btn primary text-light" style={{marginTop: "60px"}}>Learn More</button>
               
                   </div>
                   </div>
           </div>
       </div>
    );
};

export default FeatureService;