import React, { useEffect, useState } from 'react';
import DoctorsDetails from './DoctorsDetails';

const DoctorsData = [
    {
        id: '1',
        name: 'Dr. Sergel',
        phone: '+1234567890'
    },
    {
        id: '2',
        name: 'Dr. Tamim',
        phone: '+1234567890'
    },{
        id: '3',
        name: 'Dr. Jim',
        phone: '+1234567890'
    },
]


const Doctors = () => {
    const [doctor , setDoctor] = useState([]);
useEffect(()=>{
    fetch('https://obscure-crag-50787.herokuapp.com/doctors')
    .then(response => response.json())
    .then(doctor => {
        console.log(doctor);
        setDoctor(doctor);
    })
},[])
    return (
       <section style={{marginTop: '100px'}}>
           <div className="container">
           <h5 className="text-center text-uppercase primary-color">
               Our doctors
           </h5>
           <div className="row mt-5">
               {
                   doctor.map((data => <DoctorsDetails data={data} key={data._id}></DoctorsDetails>))
               }
           </div>
           </div>
       </section>
    );
};

export default Doctors;