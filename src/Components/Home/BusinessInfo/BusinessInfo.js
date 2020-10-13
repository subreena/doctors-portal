import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import {faClock , faMapMarker , faPhone} from '@fortawesome/free-solid-svg-icons'

const infoData = [
    {
        id: '1',
        title: 'Opening hours',
        description: 'We are open 24/7',
        icon: faClock,
        background: 'primary'
    },
    {
        id: '2',
        title: 'Visit our location',
        description: 'Brooklyn, NY 1003, USA',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        id: '3',
        title: 'Call Us Now',
        description: '+1234500223',
        icon: faPhone,
        background: 'primary'
    },
]

const BusinessInfo = () => {
    return (
       <section className="d-flex  justify-content-center">
           <div className=" w-75 d-flex">
           {
               infoData.map(info => <InfoCard info={info} key={info.id}></InfoCard>)
           }
           </div>
       </section>
    );
};

export default BusinessInfo;