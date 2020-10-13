import React from 'react';
import './Testimonial.css';
import testimonail1 from '../../../images/client (1).png';
import testimonail2 from '../../../images/client (2).png';
import testimonail3 from '../../../images/client (3).png';
import TestimonialDetails from './TestimonialDetails';


const TestimonialData = [
    {
        id: "1",
        name: "Eliza Smith",
        img: testimonail1,
        place: "California"
    },
    {
        id: "2",
        name: "Wilson Bay",
        img: testimonail2,
        place: "Miami"
    },  {
        id: "3",
        name:"Mary Jane",
        img: testimonail3,
        place: "Florida"
    },
]
const Testimonial = () => {
    return (
      <section style={{marginTop: '100px'}}>
          <div className="container">
          <div className="d-flex justify-content-between">
          
              <div className="mb-3">
                  <h5 className="primary-color text-uppercase">
                      Testimonial
                  </h5>
                  <h1 className="dark-color">
                      What Our Patients
                      <br/>
                      Say
                  </h1>
              </div>
              <div className="mb-3">
                  <img src={require('../../../images/Mask Group 7.png')} style={{height: "150px"}} alt=""/>
              </div>
              
          </div>
         
             <div className="row">
           {
               TestimonialData.map(data => <TestimonialDetails data={data} key={data.id}></TestimonialDetails>)
           }
             </div>
         </div>

      </section>
    );
};

export default Testimonial;