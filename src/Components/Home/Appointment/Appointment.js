import React from 'react';
import './Appointment.css';
const Appointment = () => {
    return (
        <section className="appointment">
            <div className="container">
                <div className="row">
           <div className="col-md-5 d-none d-md-block">
             
              <img src={require('../../../images/doctor.png')} alt=""/>
             
           </div>
           <div className="col-md-7 py-5">
               <div>
                   <h5 className="primary-color text-uppercase">
                       Appointment
                   </h5>
                   <h1 className="text-light my-4">
                       Make an appointment 
                       <br/>
                       Today</h1>
                   <p className="text-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel cupiditate temporibus, reprehenderit quidem velit dicta.</p>
                   <button className="btn primary text-light" style={{marginTop: "40px"}}>Learn More</button>
               </div>
           </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;