import React from 'react';
import flouride from '../../../images/flouride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
      id: '1',
      name: "Flouride Treatment",
      img: flouride
    },
    {
        id: '2',
        name: "Cavity filling",
        img: cavity
      },
      {
        id: '3',
        name: "Teeth Whitening",
        img: whitening
      },
]

const Services = () => {
    return (
        <section className="services-container mt-3">
           <div className="text-center">
           <h5 className="primary-color">Our Services</h5>
            <h2 className="dark-color mb-3">Services We Provide</h2>
           </div>
           <div className="d-flex justify-content-center">
           <div className="d-flex w-75 mt-5 pt-3 mb-5 pb-5">
               {
                   serviceData.map(service => <ServiceDetail service={service} key={service.id}></ServiceDetail>)
               }
           </div>
           </div>
        </section>
    );
};

export default Services;