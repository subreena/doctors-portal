import React from 'react';
import BookAppointmentDetails from './BookAppointmentDetails';
const BookData = [
    {
        id: 1 ,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: '10'
    },
    {
        id: 2 ,
        subject: 'Cosmetic Dentistry',
        visitingHour: '10:30 AM - 11:30 AM',
        totalSpace: '10'
    },
    {
        id: 3 ,
        subject: 'Cavity Protection',
        visitingHour: '7:00 AM - 8:30 AM',
        totalSpace: '10'
    },
    {
        id: 4 ,
        subject: 'Teeth Filling',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: '10'
    },
    {
        id: 5,
        subject: 'Root Canal',
        visitingHour: '8:00 AM - 9:00 PM',
        totalSpace: '10'
    },
    {
        id: 6 ,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: '10'
    }

]

const BookAppointment = ({date}) => {
    return (
       <section style={{marginTop: '30px'}}>
           <h2 className="text-center primary-color">Available Appointments on {date.toDateString()}</h2>
       <div className="container " style={{marginTop: '50px'}}>
           <div className="row">
               {
                   BookData.map(data => <BookAppointmentDetails date={date} data={data} key={data.id} date={date} ></BookAppointmentDetails>)
               }
           </div>
       </div>
       </section>
    );
};

export default BookAppointment;